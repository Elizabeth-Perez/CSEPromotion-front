import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

//Components
import { SliderComponent } from "./components/slider/slider.component";
import { HeaderComponent } from "./components/header/header.component";
import { AdministratorRoutingModule } from "./administrator-routing.module";
import { TableComponent } from "./components/table/table.component";
import { CareerFormComponent } from "./components/career-form/career-form.component";
import { ProjectFormComponent } from "./components/project-form/project-form.component";
import { ProgramFormComponent } from "./components/program-form/program-form.component";
import { SpecialityFormComponent } from "./components/speciality-form/speciality-form.component";
import { opportunityFormComponent } from "./components/opportunity-form/opportunity-form.component";

//Dialogs
import { DeleteRegisterComponent } from "./dialogs/delete-register/delete-register.component";

//Sevices
import { AdministratorService } from "./services/administrator.service";

//Pages
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { CareerPageComponent } from "./pages/career-page/career-page.component";
import { ProjectePageComponent } from "./pages/project-page/project-page.component";
import { ProgramPageComponent } from "./pages/program-page/program-page.component";
import { SpecialityPageComponent } from "./pages/speciality-page/speciality-page.component";
import { OpportunityPageComponent } from "./pages/opportunity-page/opportunity-page.component";
import { ProjectMemberPageComponent } from "./pages/project-member-page/project-member-page.component";
import { AcademyPageComponent } from "./pages/academy-page/academy-page.component";
import { EntityPageComponent } from "./pages/entity-page/entity-page.component";
import { StayPageComponent } from "./pages/stay-page/stay-page.component";
import { CategoryPageComponent } from "./pages/category-page/category-page.component";

@NgModule({
    declarations: [
        HomePageComponent,
        CareerPageComponent,
        ProjectePageComponent,
        ProgramPageComponent,
        SpecialityPageComponent,
        OpportunityPageComponent,
        ProjectMemberPageComponent,
        AcademyPageComponent,
        EntityPageComponent,
        StayPageComponent,
        CategoryPageComponent,
        SliderComponent,
        HeaderComponent,
        TableComponent,
        CareerFormComponent,
        ProjectFormComponent,
        ProgramFormComponent,
        SpecialityFormComponent,
        opportunityFormComponent,
        DeleteRegisterComponent,
    ],
    imports: [
        AdministratorRoutingModule,
        CommonModule,
        ReactiveFormsModule,
    ],
    exports: [],
    providers: [
        AdministratorService,
    ]
})
export class AdministratorModule {

}