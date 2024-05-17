import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { JobsComponent } from "./jobs.component";
import { JobsResolverService } from "./jobs-resolver.service";
import { JobDetailsComponent } from "./job-details/job-details.component";
import { JobsEditComponent } from "./jobs-edit/jobs-edit.component";

const routes: Routes = [
    { path: '', component: JobsComponent, resolve: [JobsResolverService], children: [
        { path: ':id', component: JobDetailsComponent, resolve: [JobsResolverService] },
        { path: ':id/edit', component: JobsEditComponent, resolve: [JobsResolverService] }
    ]},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class JobsRoutingModule{}