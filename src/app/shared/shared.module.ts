import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

//Components
import { MainNavigationComponent } from "./components/main-navigation/main-navigation.component";

//Dialogs

//Sevices

@NgModule({
    declarations: [
        MainNavigationComponent,
    ],
    imports: [
        RouterModule,
    ],
    exports: [
        MainNavigationComponent,
    ], 
})
export class SharedModule {

}