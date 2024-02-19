import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//Components
import { HeaderComponent } from "./components/header/header.component";
import { MenuTabsComponent } from "./components/menu-tabs/menu-tabs.component";
import { SliderTabsComponent } from "./components/slider-tabs/slider-tabs.component";
import { ContentIdentityComponent } from "./components/content-identity/content-identity.component";
import { ContentProfilesComponent } from "./components/content-profiles/content-profiles.component";
import { ContentAcademyComponent } from "./components/content-academy/content-academy.component";

//Dialogs

//Sevices
import { AboutCSEService } from "./services/about-cse.service";

//Pages
import { MainAboutCSE } from "./pages/main-about-cse/main-about-cse.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";


@NgModule({
    declarations: [
        MainAboutCSE,
        HeaderComponent,
        MenuTabsComponent,
        SliderTabsComponent,
        ContentIdentityComponent,
        ContentProfilesComponent,
        ContentAcademyComponent,
    ],
    imports: [
        SharedModule,
        CommonModule,
        RouterModule,
    ],
    exports: [],
    providers: [
        AboutCSEService
    ]
})
export class AboutCSEModule {

}