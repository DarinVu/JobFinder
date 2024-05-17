import { NgModule } from "@angular/core";
import { WelcomeComponent } from "./welcome.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        WelcomeComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([{ path: 'welcome', component: WelcomeComponent}])
    ]
})

export class WelcomeModule {}