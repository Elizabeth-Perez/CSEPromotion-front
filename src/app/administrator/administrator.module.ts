import { NgModule } from "@angular/core";

//Components
import { SliderComponent } from "./components/slider/slider.component";
import { AdministratorRoutingModule } from "./administrator-routing.module";

//Dialogs

//Sevices

//Pages
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { CareerPageComponent } from "./pages/career-page/career-page.component";
import { ProjectePageComponent } from "./pages/project-page/project-page.component";
import { ProgramPageComponent } from "./pages/program-page/program-page.component";
import { SpecialityPageComponent } from "./pages/speciality-page/speciality-page.component";
import { OpportunityPageComponent } from "./pages/opportunity-page/opportunity-page.component";
import { HeaderComponent } from "./components/header/header.component";



@NgModule({
    declarations: [
        HomePageComponent,
        CareerPageComponent,
        ProjectePageComponent,
        ProgramPageComponent,
        SpecialityPageComponent,
        OpportunityPageComponent,
        SliderComponent,
        HeaderComponent,
    ],
    imports: [
        AdministratorRoutingModule,
    ],
    exports: [],
    providers: []
})
export class AdministratorModule {

}