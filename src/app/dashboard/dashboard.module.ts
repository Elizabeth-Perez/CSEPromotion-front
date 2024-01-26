import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

//Components
import { HeaderComponent } from "./components/header/header.component";
import { ProjectsSummaryComponent } from "./components/projects-summary/projects-summary.component";
import { ProgramsSummaryComponent } from "./components/programs-summary/programs-summary.component";
import { SpecialitiesSummaryComponent } from "./components/specialities-summary/specialities-summary.component";
import { OpportunitiesSummaryComponent } from "./components/opportunities-summary/opportunities-summary.component";

//Dialogs

//Sevices
import { DashboardService } from "./services/dashboard.service";

//Pages
import { MainDashboard } from "./pages/main-dashboard/main-dashboard.component";

@NgModule({
    declarations: [
        MainDashboard,
        HeaderComponent,
        ProjectsSummaryComponent,
        ProgramsSummaryComponent,
        SpecialitiesSummaryComponent,
        OpportunitiesSummaryComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    exports: [],
    providers: [
        DashboardService,
    ],
})
export class DashboardModule {

}