import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubRoutingModule } from './github-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PullRequestComponent } from './pages/pull-request/pull-request.component';
import { GithubComponent } from './pages/github/github.component';
import { PullRequestItemComponent } from './components/pull-request-item/pull-request-item.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [PullRequestComponent, GithubComponent, PullRequestItemComponent],
  imports: [
    CommonModule,
    GithubRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule
  ],
  exports: [PullRequestComponent]
})
export class GithubModule { }
