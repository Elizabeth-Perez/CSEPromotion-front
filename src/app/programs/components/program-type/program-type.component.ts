import { Component, Input, OnInit } from '@angular/core';
import { Program } from '../../interfaces/program.interface';

@Component({
    selector: 'programs-program-type',
    templateUrl: './program-type.component.html',
    styleUrls: ['./program-type.component.scss']
})

export class ProgramTypeComponent implements OnInit {
    @Input() leftPosition: boolean = false;
    @Input() data = {
        title: '',
        subtitle: '',
        sectionsTitle: { title1: '', title2: '', title3: '' },
        sectionsText: { text1: '', text2: '', text3: '' }
    }
    @Input() programs: Program[] = [];
    @Input() color: string = '';
    showMore: boolean = false;
    currentIndex: number = 0;

    ngOnInit() {
        this.currentIndex = Math.floor(Math.random() * this.programs.length);
        setInterval(() => {
            this.changeImage();
        }, 3000);
    }

    toggleShowMore() {
        this.showMore = !this.showMore;
    }

    changeImage() {
        const carouselElement = document.querySelector('.rect-img') as HTMLElement;
        if (carouselElement) {
            this.currentIndex = (this.currentIndex + 1) % this.programs.length;
        }
    }
}