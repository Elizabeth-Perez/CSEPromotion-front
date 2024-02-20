import { NgModule } from "@angular/core";

//Components
import { HeaderComponent } from "./components/header/header.component";

//Dialogs

//Sevices
import { ProjectService } from "./services/projects.service";

//Pages
import { MainProjects } from "./pages/main-projects/main-projects.component";
import { Innovation } from "./pages/innovation/innovation.component";
import { Titulation } from "./pages/titulation/titulation.component";
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        MainProjects,
        Innovation,
        Titulation,
        HeaderComponent,
    ],
    imports: [
        SharedModule
    ],
    exports: [
        
    ], 
    providers: [
        ProjectService,
    ]
})
export class ProjectsModule {

}