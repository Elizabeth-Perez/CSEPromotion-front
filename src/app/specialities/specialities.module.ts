import { NgModule } from "@angular/core";

//Components

//Dialogs

//Sevices

//Pages
import { MainSpecialities } from "./pages/main-specialities/main-specialities.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        MainSpecialities
    ],
    imports: [
        SharedModule
    ],
    exports: [], 
})
export class SpecialitiesModule {

}