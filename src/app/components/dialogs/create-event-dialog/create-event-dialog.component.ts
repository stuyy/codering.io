import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventFormDialogService } from 'src/app/services/event-form-dialog/event-form-dialog.service';

@Component({
  selector: 'app-create-event-dialog',
  templateUrl: './create-event-dialog.component.html',
  styleUrls: ['./create-event-dialog.component.css']
})
export class CreateEventDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateEventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private eventFormDialog: EventFormDialogService) { }

  ngOnInit(): void {
    this.eventFormDialog.events
      .asObservable()
      .subscribe((value) => {
        this.close();
      }, (err) => console.log(err));
  }

  close(): void {
    this.dialogRef.close();
  }
}
