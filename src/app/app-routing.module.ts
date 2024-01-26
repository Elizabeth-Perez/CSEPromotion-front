import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainDashboard } from "./dashboard/pages/main-dashboard/main-dashboard.component";
import { MainLogin } from "./login/pages/main-login/main-login.component";
import { MainAboutCSE } from "./about-cse/pages/main-about-cse/main-about-cse.component";
import { MainProjects } from "./projects/pages/main-projects/main-projects.component";
import { MainPrograms } from "./programs/pages/main-programs/main-programs.component";
import { MainOpportunities } from "./opportinities/pages/main-opportinities/main-opportunities.component";
import { MainSpecialities } from "./specialities/pages/main-specialities/main-specialities.component";

const routes: Routes = [
    {
        path: 'dashboard',
        component: MainDashboard
    },
    {
        path: 'login',
        component: MainLogin
    },
    {
        path: 'about-cse',
        component: MainAboutCSE
    },
    {
        path: 'administrator',
        loadChildren: () =>
          import('./administrator/administrator.module').then(
            (m) => m.AdministratorModule
          ),
      },
    {
        path: 'projects',
        component: MainProjects
    },
    {
        path: 'programs',
        component: MainPrograms
    },
    {
        path: 'opportunities',
        component: MainOpportunities
    },
    {
        path: 'specialities',
        component: MainSpecialities
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    },
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot( routes ),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule {

}