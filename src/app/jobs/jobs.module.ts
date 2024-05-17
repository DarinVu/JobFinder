import { NgModule } from "@angular/core";
import { JobsComponent } from "./jobs.component";
import { JobsListComponent } from "./jobs-list/jobs-list.component";
import { JobDetailsComponent } from "./job-details/job-details.component";
import { JobsItemComponent } from "./jobs-list/jobs-item/jobs-item.component";
import { JobsEditComponent } from "./jobs-edit/jobs-edit.component";
import { ReactiveFormsModule } from "@angular/forms";
import { JobsRoutingModule } from "./jobs-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { CoreModule } from "./core.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        JobsComponent,
        JobsListComponent,
        JobDetailsComponent,
        JobsItemComponent,
        JobsEditComponent
    ],
    imports: [
        ReactiveFormsModule,
        JobsRoutingModule,
        HttpClientModule,
        SharedModule,
        CoreModule
    ]
})
export class JobsModule{}