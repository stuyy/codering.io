import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { AdministratorComponent } from './pages/administrator/administrator.component';
import { AdminGuard } from './guards/admin/admin.guard';
import { PullRequestComponent } from './pages/pull-request/pull-request.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'administrator', component: AdministratorComponent, canActivate: [ AuthGuard, AdminGuard ]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuard ]},
  { path: 'pullrequest', component: PullRequestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
