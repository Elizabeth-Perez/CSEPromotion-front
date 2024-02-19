import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'about-cse-menu-tabs',
    templateUrl: 'menu-tabs.component.html',
    styleUrls: ['menu-tabs.component.scss']
})

export class MenuTabsComponent implements OnInit {

    selectedItemIndex: number | null = null;

    constructor(
        private router: Router,
    ) { }

    ngOnInit() {
        this.selectedItemIndex = null;
    }

    goToIdentity() {
        this.selectedItemIndex = 0;
        this.router.navigate(['/about-cse/identity'])
    }

    goToProfiles() {
        this.selectedItemIndex = 1;
        this.router.navigate(['/about-cse/profiles'])
    }

    goToAcademy() {
        this.selectedItemIndex = 2;
        this.router.navigate(['/about-cse/academy'])
    }

    isItemSelected(index: number): boolean {
        return this.selectedItemIndex === index;
    }
}