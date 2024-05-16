import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { JobsComponent } from './jobs/jobs.component';
import { JobsPostComponent } from './jobs/jobs-post/jobs-post.component';
import { JobDetailsComponent } from './jobs/job-details/job-details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { JobsEditComponent } from './jobs/jobs-edit/jobs-edit.component';
import { JobsResolverService } from './jobs/jobs-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full'},
    { path: 'welcome', component: WelcomeComponent},
    { path: 'jobs', component: JobsComponent, resolve: [JobsResolverService], children: [
        { path: ':id', component: JobDetailsComponent, resolve: [JobsResolverService] },
        { path: ':id/edit', component: JobsEditComponent, resolve: [JobsResolverService] }

    ]},
    { path: 'post', component: JobsPostComponent, canActivate: [AuthGuard] },
    { path: 'auth/:status', component: AuthComponent }

] 

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule {}
