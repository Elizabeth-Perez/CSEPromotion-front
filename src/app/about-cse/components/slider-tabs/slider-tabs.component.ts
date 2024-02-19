import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'about-cse-slider-tabs',
    templateUrl: 'slider-tabs.component.html',
    styleUrls: ['slider-tabs.component.scss']
})

export class SliderTabsComponent implements OnInit {
    @Input() tabs = [{name: '', icon: '', method: ''}]

    constructor() { }

    ngOnInit() { }
}