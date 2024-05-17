import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../jobs/core.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        ReactiveFormsModule,
        CoreModule,
        SharedModule,
        RouterModule.forChild([{ path: '', component: AuthComponent }])
    ],


})

export class AuthModule {}