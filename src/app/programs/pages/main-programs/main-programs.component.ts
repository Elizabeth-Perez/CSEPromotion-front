import { Component } from "@angular/core";
import { Carousel, Program } from "../../interfaces/program.interface";
import { Router } from "@angular/router";
import { ProgramService } from "../../services/program.service";

@Component({
    selector: 'programs-main',
    templateUrl: './main-programs.component.html',
    styleUrls: ['./main-programs.component.scss']
})
export class MainPrograms {
    currentRoute: string = 'programs';
    contentLearning = {
        title: 'Aprendizaje', 
        subtitle: 'Programas académicos y de formación que ofrecen una base sólida en la teoría y la práctica de la ingeniería de sistemas computacionales.', 
        sectionsTitle: {
            title1: 'Enfoque en la teoría y práctica', 
            title2: 'Desarrollo de habilidades', 
            title3: 'Actualización constante'
        },
        sectionsText: {
            text1: 'Los cursos académicos pueden abarcar tanto la base teórica como la aplicación práctica de conceptos de ingeniería en sistemas.', 
            text2: 'Se centran en el desarrollo de habilidades técnicas, como programación, administración de sistemas, diseño de software y gestión de proyectos.', 
            text3: 'Dado que la tecnología evoluciona rápidamente, los programas de aprendizaje suelen actualizarse para reflejar las últimas tendencias y avances tecnológicos.'
        }
    }
    contentCompetition = {
        title: 'Certamenes', 
        subtitle: 'Aquí se resaltan las competencias y desafíos técnicos que brindan a los estudiantes y profesionales la oportunidad de aplicar sus habilidades en situaciones reales. Estos desafíos fomentan la resolución creativa de problemas y promueven la innovación en la carrera.', 
        sectionsTitle: {
            title1: 'Desafíos prácticos', 
            title2: 'Fomento de la resolución de problemas', 
            title3: 'Reconocimiento y premios'
        },
        sectionsText: {
            text1: 'Estas competencias ofrecen escenarios prácticos en los que los participantes pueden aplicar su conocimiento técnico para resolver problemas reales.', 
            text2: 'Los desafíos técnicos promueven la resolución creativa de problemas y el pensamiento crítico, lo que es esencial en la ingeniería de sistemas.', 
            text3: 'Los participantes a menudo concursan por premios o reconocimientos, lo que puede motivar y recompensar su habilidad y creatividad.'
        }
    }
    contentConferences = {
        title: 'Conferencias', 
        subtitle: 'Los simposios y eventos especializados que reúnen a expertos, académicos y profesionales del campo. Participar en estas conferencias ofrece la posibilidad de aprender sobre los avances más recientes, establecer contactos valiosos y compartir ideas con colegas apasionados por este ámbito.', 
        sectionsTitle: {
            title1: 'Compartir conocimiento', 
            title2: 'Establecimiento de redes', 
            title3: 'Inspiración e innovación'
        },
        sectionsText: {
            text1: 'Las conferencias reúnen a expertos y profesionales para compartir conocimiento, investigaciones y avances en la ingeniería en sistemas.', 
            text2: 'Estos eventos ofrecen la oportunidad de establecer contactos valiosos con personas influyentes y colegas que comparten intereses en común.', 
            text3: 'Las conferencias son a menudo un ambiente propicio para el surgimiento de nuevas ideas, colaboraciones y proyectos innovadores en el campo.'
        }
    }
    images: Carousel[] = [];
    currentIndex: number = 0;
    programsLearning: Program[] = [];
    programsCompetition: Program[] = [];
    programsConferences: Program[] = [];
    aqua1: string = 'aqua1';
    violet3: string = 'violet3';
    aqua3: string = 'aqua3';

    constructor(
        private programservice: ProgramService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.programservice.getPrograms().subscribe(res => {
            this.programsLearning = res.filter(r => r.programType.name === 'Aprendizaje');
            this.programsCompetition = res.filter(r => r.programType.name === 'Cértamenes');
            this.programsConferences = res.filter(r => r.programType.name === 'Conferencias');
        });
        this.programservice.getCarousels().subscribe(res => {
            this.images = res.filter(item => item.owner === 'Programas');
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