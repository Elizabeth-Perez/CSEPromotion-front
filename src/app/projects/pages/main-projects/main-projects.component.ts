import { Component } from "@angular/core";

@Component({
    selector: 'projects-main',
    templateUrl: '/main-projects.component.html',
    styleUrls: ['/main-projects.component.scss']
})
export class MainProjects {
    currentRoute: string = 'projects';
}