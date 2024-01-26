import { Component, Input } from "@angular/core";

@Component({
    selector: 'shared-main-navigation',
    templateUrl: './main-navigation.component.html',
    styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent{
    @Input() currentRoute: string = 'dashboard';
}