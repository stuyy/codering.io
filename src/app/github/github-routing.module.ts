import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PullRequestComponent } from '../pages/pull-request/pull-request.component';
import { GithubComponent } from '../pages/github/github.component';

const routes: Routes = [
  { path: '', component: GithubComponent },
  { path: 'pullrequest', component: PullRequestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubRoutingModule { }
