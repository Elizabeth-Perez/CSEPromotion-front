import { NgModule } from "@angular/core";

//Components

//Dialogs

//Sevices

//Pages
import { MainProjects } from "./pages/main-projects/main-projects.component";
import { Innovation } from "./pages/innovation/innovation.component";
import { Titulation } from "./pages/titulation/titulation.component";

@NgModule({
    declarations: [
        MainProjects,
        Innovation,
        Titulation
    ],
    imports: [],
    exports: [], 
})
export class ProjectsModule {

}