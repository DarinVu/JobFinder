import { NgModule } from "@angular/core";
import { PostComponent } from "./post.component";
import { SharedModule } from "../shared/shared.module";
import { CoreModule } from "../jobs/core.module";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        PostComponent
    ],
    imports: [
        SharedModule,
        CoreModule,
        ReactiveFormsModule,
        RouterModule.forChild([ {path: '', component: PostComponent, canActivate: [AuthGuard]}])
    ]
})

export class PostModule {}