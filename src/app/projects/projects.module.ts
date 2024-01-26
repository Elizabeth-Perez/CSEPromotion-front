import { NgModule } from "@angular/core";

//Components

//Dialogs

//Sevices

//Pages
import { MainProjects } from "./pages/main-projects/main-projects.component";
import { Innovation } from "./pages/innovation/innovation.component";
import { Titulation } from "./pages/titulation/titulation.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        MainProjects,
        Innovation,
        Titulation
    ],
    imports: [
        SharedModule
    ],
    exports: [], 
})
export class ProjectsModule {

}