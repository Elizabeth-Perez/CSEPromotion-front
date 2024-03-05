import { Component } from "@angular/core";
import { Carousel, Project } from "../../interfaces/projects.interface";
import { ProjectService } from "../../services/projects.service";
import { Router } from "@angular/router";

@Component({
    selector: 'projects-main',
    templateUrl: './main-projects.component.html',
    styleUrls: ['./main-projects.component.scss']
})
export class MainProjects {
    currentRoute: string = 'projects';

    images: Carousel[] = [];
    currentIndex: number = 0;
    projects: Project[] = [];

    constructor(
        private dashboardService: ProjectService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.dashboardService.getProjects().subscribe(res => {
            this.projects = res;
        });
        this.dashboardService.getCarousels().subscribe(res => {
            this.images = res.filter(item => item.owner === 'Proyectos');
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
}