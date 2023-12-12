import { NgModule } from "@angular/core";

//Components

//Dialogs

//Sevices

//Pages
import { MainDashboard } from "./pages/main-dashboard/main-dashboard.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        MainDashboard,
    ],
    imports: [
        SharedModule,
    ],
    exports: [], 
})
export class DashboardModule {

}