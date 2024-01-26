import { Component, Input } from '@angular/core';

@Component({
    selector: 'administrator-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
    @Input() currentRoute: string = 'home';
}