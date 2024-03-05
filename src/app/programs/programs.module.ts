import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//Components
import { HeaderComponent } from "./components/header/header.component";
import { ProgramTypeComponent } from "./components/program-type/program-type.component";

//Dialogs

//Sevices
import { ProgramService } from "./services/program.service";

//Pages
import { MainPrograms } from "./pages/main-programs/main-programs.component";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        MainPrograms,
        HeaderComponent,
        ProgramTypeComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
    ],
    exports: [],
    providers: [
        ProgramService
    ]
})
export class ProgramsModule {

}