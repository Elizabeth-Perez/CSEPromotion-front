import { NgModule } from "@angular/core";

//Components

//Dialogs

//Sevices

//Pages
import { MainPrograms } from "./pages/main-programs/main-programs.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        MainPrograms,
    ],
    imports: [
        SharedModule
    ],
    exports: [], 
})
export class ProgramsModule {

}