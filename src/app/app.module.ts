import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobsListComponent } from './jobs/jobs-list/jobs-list.component';
import { JobDetailsComponent } from './jobs/job-details/job-details.component';
import { JobsItemComponent } from './jobs/jobs-list/jobs-item/jobs-item.component';
import { JobsPostComponent } from './jobs/jobs-post/jobs-post.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { JobsEditComponent } from './jobs/jobs-edit/jobs-edit.component';
import { ClickOutsideDirective } from './shared/click-outside.directive';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JobsComponent,
    JobsListComponent,
    JobDetailsComponent,
    JobsItemComponent,
    JobsPostComponent,
    WelcomeComponent,
    JobsEditComponent,
    ClickOutsideDirective,
    LoadingSpinnerComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
