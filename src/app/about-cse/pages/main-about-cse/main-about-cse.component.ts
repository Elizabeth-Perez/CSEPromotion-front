import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";

@Component({
    selector: 'about-cse-main',
    templateUrl: './main-about-cse.component.html',
    styleUrls: ['./main-about-cse.component.scss']
})
export class MainAboutCSE implements OnInit {
    currentRoute: string = 'about-cse';
    showCard: boolean = false;

    constructor(
        private router: Router,
    ){}

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.showCard = this.router.url.startsWith('/about-cse/');
            }
        });
    }
}