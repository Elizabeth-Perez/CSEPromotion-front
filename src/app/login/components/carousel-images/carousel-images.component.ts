import { Component, OnInit } from "@angular/core";
import { DataImages } from "../../interfaces/login.interface";
import { LoginService } from "../../services/login.service";

@Component({
    selector: 'login-carousel-images',
    templateUrl: './carousel-images.component.html',
    styleUrls: ['./carousel-images.component.scss']
})
export class CarouselImagesComponent implements OnInit {

    dataImages: DataImages[] = [];
    currentIndex: number = 0;

    constructor(
        private loginService: LoginService,
    ){}

    ngOnInit(): void {
        this.loginService.getCarousel().subscribe(res => {
            this.dataImages = res;

            this.currentIndex = Math.floor(Math.random() * this.dataImages.length);

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
                this.currentIndex = (this.currentIndex + 1) % this.dataImages.length;
                carouselElement.style.opacity = '1';
            }, 1000);
        }
    }
    
}