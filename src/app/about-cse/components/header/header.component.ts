import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AboutCSEService } from "../../services/about-cse.service";
import { Carousel } from "../../interfaces/about-cse.interface";

@Component({
    selector: 'about-cse-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    images: Carousel[] = [];
    currentIndex: number = 0;

    constructor(
        private aboutCSEService: AboutCSEService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.aboutCSEService.getCarousels().subscribe(res => {
            this.images = res.filter(item => item.owner === 'Acerca');
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

    goToSpecialities(): void {
        this.router.navigate(['/specialities']);
    }  

    goToOpportunities(): void {
        this.router.navigate(['/opportunities']);
    } 
}