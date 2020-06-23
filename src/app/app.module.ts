import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MatCardModule } from '@angular/material/card';
import { DashboardNavigatorComponent } from './components/dashboard-navigator/dashboard-navigator.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { AdministratorComponent } from './pages/administrator/administrator.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { GithubModule } from './github/github.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavService } from './services/sidenav/sidenav.service';
import { AuthService } from './services/auth.service';
import { GithubService } from './services/Github/github.service';
import { CreateEventDialogComponent } from './components/dialogs/create-event-dialog/create-event-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateEventFormComponent } from './components/forms/create-event-form/create-event-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { EventsModule } from './events/events.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';

const config: SocketIoConfig = { url: environment.ws, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LandingPageComponent,
    DashboardComponent,
    UserProfileComponent,
    DashboardNavigatorComponent,
    StatisticsComponent,
    AdministratorComponent,
    SidenavComponent,
    CreateEventDialogComponent,
    CreateEventFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GithubModule,
    EventsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatTableModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatSnackBarModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [
    AuthGuard,
    SidenavService,
    AuthService,
    GithubService,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
