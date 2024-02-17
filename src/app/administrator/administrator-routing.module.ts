import { NgModule } from '@angular/core';

import {RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectePageComponent } from './pages/project-page/project-page.component';
import { ProgramPageComponent } from './pages/program-page/program-page.component';
import { SpecialityPageComponent } from './pages/speciality-page/speciality-page.component';
import { OpportunityPageComponent } from './pages/opportunity-page/opportunity-page.component';
import { CareerPageComponent } from './pages/career-page/career-page.component';
import { CareerFormComponent } from './components/career-form/career-form.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProgramFormComponent } from './components/program-form/program-form.component';
import { SpecialityFormComponent } from './components/speciality-form/speciality-form.component';
import { opportunityFormComponent } from './components/opportunity-form/opportunity-form.component';
import { ProjectMemberPageComponent } from './pages/project-member-page/project-member-page.component';
import { AcademyPageComponent } from './pages/academy-page/academy-page.component';
import { EntityPageComponent } from './pages/entity-page/entity-page.component';
import { StayPageComponent } from './pages/stay-page/stay-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';

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
        path: 'career/new',
        component: CareerFormComponent
    },
    {
        path: 'career/:id',
        component: CareerFormComponent
    },
    {
        path: 'career/view/:id',
        component: CareerFormComponent
    },
    {
        path: 'projects',
        component: ProjectePageComponent
    },
    {
        path: 'projects/new',
        component: ProjectFormComponent
    },
    {
        path: 'projects/:id',
        component: ProjectFormComponent
    },
    {
        path: 'projects/view/:id',
        component: ProjectFormComponent
    },
    {
        path: 'programs',
        component: ProgramPageComponent
    },
    {
        path: 'programs/new',
        component: ProgramFormComponent
    },
    {
        path: 'programs/:id',
        component: ProgramFormComponent
    },
    {
        path: 'programs/view/:id',
        component: ProgramFormComponent
    },
    {
        path: 'specialities',
        component: SpecialityPageComponent
    },
    {
        path: 'specialities/new',
        component: SpecialityFormComponent
    },
    {
        path: 'specialities/:id',
        component: SpecialityFormComponent
    },
    {
        path: 'specialities/view/:id',
        component: SpecialityFormComponent
    },
    {
        path: 'opportunities',
        component: OpportunityPageComponent
    },
    {
        path: 'opportunities/new',
        component: opportunityFormComponent
    },
    {
        path: 'opportunities/:id',
        component: opportunityFormComponent
    },
    {
        path: 'opportunities/view/:id',
        component: opportunityFormComponent
    },
    {
        path: 'project-members',
        component: ProjectMemberPageComponent
    },
    {
        path: 'academy',
        component: AcademyPageComponent
    },
    {
        path: 'entities',
        component: EntityPageComponent
    },
    {
        path: 'stays',
        component: StayPageComponent
    },
    {
        path: 'categories',
        component: CategoryPageComponent
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
