import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { AdministratorComponent } from './pages/administrator/administrator.component';
import { AdminGuard } from './guards/admin/admin.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'old', component: LandingPageComponent },
  { path: 'administrator', component: AdministratorComponent, canActivate: [ AuthGuard, AdminGuard ]},
  { path: 'events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule), canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuard ]},
  { path: 'github', loadChildren: () => import('./github/github.module').then(m => m.GithubModule), canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
