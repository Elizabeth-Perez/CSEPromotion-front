import { NgModule } from "@angular/core";

//Components

//Dialogs

//Sevices

//Pages
import { MainAboutCSE } from "./pages/main-about-cse/main-about-cse.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        MainAboutCSE
    ],
    imports: [
        SharedModule
    ],
    exports: [], 
})
export class AboutCSEModule {

}