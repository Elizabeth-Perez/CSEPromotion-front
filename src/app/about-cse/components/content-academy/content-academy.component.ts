import { Component, OnInit } from '@angular/core';
import { AboutCSEService } from '../../services/about-cse.service';
import { Career } from 'src/app/administrator/interfaces/administrator.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'about-cse-content-academy',
    templateUrl: 'content-academy.component.html',
    styleUrls: ['content-academy.component.scss']
})

export class ContentAcademyComponent implements OnInit {
    tabs = [
        { name: 'Organigrama', icon: '', method: 'studyGridUrl' },
        { name: 'Reticula', icon: '', method: 'chartUrl' },
    ]
    career: Career = {
        studyProgram: '',
        extension: '',
        phone: '',
        email: '',
        studyGridUrl: '',
        chartUrl: '',
        mission: '',
        vision: '',
        programPurpose: '',
        actionField: '',
        admissionProfile: '',
        graduationProfile: '',
        snFacebook: '',
        snYoutube: '',
        snLinkedin: '',
        status: '',
    };

    constructor(
        private aboutCSEService: AboutCSEService,
        private toastr: ToastrService,
    ) { }

    ngOnInit() { 
        this.getData();
    }

    getData() {
        this.aboutCSEService.getCareers().subscribe(res => {
            const activeCareer = res.find(c => c.status === 'Activo');
            if (activeCareer) {
                this.career = activeCareer;
                this.tabs[0].method = this.career.studyGridUrl
                this.tabs[1].method = this.career.chartUrl
            } else {
                this.toastr.error('No se encontró ninguna carrera activa', 'Error');
            }
        });
    }
}