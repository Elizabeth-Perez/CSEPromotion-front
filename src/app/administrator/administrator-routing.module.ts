import { NgModule } from '@angular/core';

import {RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectePageComponent } from './pages/project-page/project-page.component';
import { ProgramPageComponent } from './pages/program-page/program-page.component';
import { SpecialityPageComponent } from './pages/speciality-page/speciality-page.component';
import { OpportunityPageComponent } from './pages/opportunity-page/opportunity-page.component';
import { CareerPageComponent } from './pages/career-page/career-page.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'career',
        component: CareerPageComponent
    },
    {
        path: 'projects',
        component: ProjectePageComponent
    },
    {
        path: 'programs',
        component: ProgramPageComponent
    },
    {
        path: 'specialities',
        component: SpecialityPageComponent
    },
    {
        path: 'opportunities',
        component: OpportunityPageComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    },
];


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
    providers: [],
})
export class AdministratorRoutingModule { }
