import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PullRequestComponent } from '../pages/pull-request/pull-request.component';
import { GithubRoutingModule } from './github-routing.module';
import { GithubComponent } from '../pages/github/github.component';
import { PullRequestItemComponent } from '../components/pull-request-item/pull-request-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [PullRequestComponent, GithubComponent, PullRequestItemComponent],
  imports: [
    CommonModule,
    GithubRoutingModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [PullRequestComponent]
})
export class GithubModule { }
