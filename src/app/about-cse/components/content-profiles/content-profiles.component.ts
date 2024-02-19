import { Component, OnInit } from '@angular/core';
import { AboutCSEService } from '../../services/about-cse.service';
import { Career } from 'src/app/administrator/interfaces/administrator.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'about-cse-content-profiles',
    templateUrl: 'content-profiles.component.html',
    styleUrls: ['content-profiles.component.scss']
})

export class ContentProfilesComponent implements OnInit {
    tabs = [
        { name: 'Perfil de ingreso', icon: '', method: 'admissionProfile' },
        { name: 'Perfil de egreso', icon: '', method: 'graduationProfile' },
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
                this.tabs[0].method = this.career.admissionProfile
                this.tabs[1].method = this.career.graduationProfile
            } else {
                this.toastr.error('No se encontró ninguna carrera activa', 'Error');
            }
        });
    }
}