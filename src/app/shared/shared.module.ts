import { NgModule } from "@angular/core";
import { ClickOutsideDirective } from "./click-outside.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ClickOutsideDirective,
        LoadingSpinnerComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        ClickOutsideDirective,
        LoadingSpinnerComponent
    ]
})
export class SharedModule {}