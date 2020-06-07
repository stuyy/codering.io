import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AdminGuard } from 'src/app/guards/admin/admin.guard';
import { User } from 'src/app/models/User';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { GithubService } from 'src/app/services/Github/github.service';
import { Repository } from 'src/app/models/Repository';
import { Event } from 'src/app/models/Event';
import { EventService } from 'src/app/services/Event/event.service';

@Component({
  selector: 'app-create-event-form',
  templateUrl: './create-event-form.component.html',
  styleUrls: ['./create-event-form.component.css']
})
export class CreateEventFormComponent implements OnInit, OnDestroy {

  public event: FormGroup;
  public minDate: Date = new Date();
  public maxDate: Date = new Date();
  public endMinDate: Date;
  public adminUser: User;
  public destroyed$: Subject<boolean> = new Subject<boolean>();
  public repositories: Repository[] = [];
  public loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private github: GithubService,
    private events: EventService,
    private admin: AdminGuard) {
    this.maxDate.setMonth(this.minDate.getMonth() + 1);
    this.event = this.fb.group({
      eventName: new FormControl('', Validators.required),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      pr: new FormControl(1, [
        Validators.required,
        Validators.min(1),
        Validators.max(10)
      ]),
      issue: new FormControl(1, [
        Validators.required,
        Validators.min(1),
        Validators.max(10)
      ]),
      comment: new FormControl(1, [
        Validators.required,
        Validators.min(1),
        Validators.max(10)
      ]),
      merge: new FormControl(1, [
        Validators.required,
        Validators.min(1),
        Validators.max(10)
      ]),
      selectedRepo: new FormControl('', Validators.required)
    });

  }

  ngOnInit(): void {
    this.admin.authed
      .asObservable()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        (user) => this.adminUser = user,
        (err) => console.log(err),
        () => console.log('Completed.'));
    
    this.searchRepositories();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.unsubscribe();
  }

  searchRepositories(): void {
    this.github.fetchGithubRepositories(this.adminUser.username)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((repositories: Repository[]) => {
        this.repositories = repositories;
      }, (err) => console.log(err));
  }

  submit(): void {
    if (this.event.invalid) {
      throw new Error('Invalid Form Inputs');
    } else {
      const { eventName, startDate, endDate, pr, issue, comment, merge, selectedRepo } = this.event.value;
      console.log(eventName, startDate, endDate, pr, issue, comment, merge, selectedRepo);
      const event: Event = {
        creator: this.adminUser,
        startDate,
        endDate,
        pullRequestPoints: pr,
        issuePoints: issue,
        commentsPoints: comment,
        mergedPullRequestPoints: merge,
      };
      this.event.disable();
      this.loading = true;
      this.events.createEvent(event)
        .pipe(takeUntil(this.destroyed$))
        .subscribe((event: Event) => {
          console.log(event);
          this.loading = false;
          this.event.enable();
        }, (err) => {
          console.log(err);
          this.loading = false;
          this.event.enable();
        },
        () => console.log('Created Event.'));
    }
  }

  getErrorMessage(type: string) {
    switch (type) {
      case 'name':
        return 'You must enter a name';
      case 'start':
        return 'You must enter a start date';
      case 'end':
        return 'You must enter an end date';
      case 'pr':
      case 'issue':
      case 'comment':
      case 'merge':
        return 'Invalid number';
    }
  }
}
