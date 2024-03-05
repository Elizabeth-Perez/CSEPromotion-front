import { NgModule } from "@angular/core";

//Components
import { HeaderComponent } from "./components/header/header.component";

//Dialogs

//Sevices
import { SpecialitiesService } from "./services/specialities.service";

//Pages
import { MainSpecialities } from "./pages/main-specialities/main-specialities.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        MainSpecialities,
        HeaderComponent,
    ],
    imports: [
        SharedModule,
        CommonModule,
    ],
    exports: [],
    providers: [
        SpecialitiesService
    ]
})
export class SpecialitiesModule {

}