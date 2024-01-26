import { Component } from "@angular/core";
import { DataImages } from "src/app/login/interfaces/login.interface";
import { DashboardService } from "../../services/dashboard.service";
import { Carousel } from "../../interfaces/dashboard.interface";
import { Router } from "@angular/router";

@Component({
    selector: 'dashboar-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    images: Carousel[] = [];
    currentIndex: number = 0;

    constructor(
        private dashboardService: DashboardService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.dashboardService.getCarousels().subscribe(res => {
            this.images = res.filter(item => item.owner === 'Dashboard');
            this.currentIndex = Math.floor(Math.random() * this.images.length);
            setInterval(() => {
                this.changeImage();
            }, 10000);
        });
    }

    changeImage() {
        const carouselElement = document.querySelector('.carousel') as HTMLElement;
        if (carouselElement) {
            carouselElement.style.opacity = '0.8';
            setTimeout(() => {
                this.currentIndex = (this.currentIndex + 1) % this.images.length;
                carouselElement.style.opacity = '1';
            }, 1000);
        }
    }

    goToViewMore(): void {
        this.router.navigate(['/about-cse']);
    }   
}