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
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { AppComponent } from './app.component';


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
    SharedModule,
    ToastrModule.forRoot({
        positionClass: 'toast-bottom-right',
        closeButton: true,
        progressBar: true,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
