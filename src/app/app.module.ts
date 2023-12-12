import { NgModule } from '@angular/core';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { AboutCSEModule } from './about-cse/about-cse.module';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { OpportunitiesModule } from './opportinities/opportunities.module';
import { ProgramsModule } from './programs/programs.module';
import { ProjectsModule } from './projects/projects.module';
import { SpecialitiesModule } from './specialities/specialities.module';

//Components
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    AboutCSEModule,
    BrowserModule,
    DashboardModule,
    LoginModule,
    OpportunitiesModule,
    ProgramsModule,
    ProjectsModule,
    SpecialitiesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
