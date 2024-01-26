import { NgModule } from "@angular/core";

//Components

//Dialogs

//Sevices

//Pages
import { MainOpportunities } from "./pages/main-opportinities/main-opportunities.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        MainOpportunities,
    ],
    imports: [
        SharedModule
    ],
    exports: [], 
})
export class OpportunitiesModule {

}