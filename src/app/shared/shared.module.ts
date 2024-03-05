import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

//Components
import { MainNavigationComponent } from "./components/main-navigation/main-navigation.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CommonModule } from "@angular/common";

//Dialogs

//Sevices

@NgModule({
    declarations: [
        MainNavigationComponent,
        FooterComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
    ],
    exports: [
        MainNavigationComponent,
        FooterComponent,
    ], 
})
export class SharedModule {

}