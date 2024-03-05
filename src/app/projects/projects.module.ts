import { NgModule } from "@angular/core";

//Components
import { HeaderComponent } from "./components/header/header.component";
import { FilterComponent } from "./components/filter/filter.component";

//Dialogs

//Sevices
import { ProjectService } from "./services/projects.service";

//Pages
import { MainProjects } from "./pages/main-projects/main-projects.component";
import { Innovation } from "./pages/innovation/innovation.component";
import { Titulation } from "./pages/titulation/titulation.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";




@NgModule({
    declarations: [
        MainProjects,
        Innovation,
        Titulation,
        HeaderComponent,
        FilterComponent,
    ],
    imports: [
        SharedModule,
        CommonModule,
    ],
    exports: [
        
    ], 
    providers: [
        ProjectService,
    ]
})
export class ProjectsModule {

}