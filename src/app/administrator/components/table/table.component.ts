import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteRegisterComponent } from '../../dialogs/delete-register/delete-register.component';

@Component({
    selector: 'administrator-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})

export class TableComponent {
    @Input() headers = [{ name: '', class: '', field: '' }];
    @Input() objects: any[] = [];

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private modalService: NgbModal,
    ) { }


    view(object: any) {
        const keys = Object.keys(object);
        const firstField = keys[0];
        const id: string = object[firstField];
        const currentRoute = this.activatedRoute.snapshot.url[0].path;
        if (currentRoute === 'career') {
            this.router.navigate(['administrator/career/view/', id]);
            return '';
        } else if (currentRoute === 'projects') {
            this.router.navigate(['administrator/projects/view/', id]);
            return '';
        } else if (currentRoute === 'programs') {
            this.router.navigate(['administrator/programs/view/', id]);
            return '';
        } else if (currentRoute === 'specialities') {
            this.router.navigate(['administrator/specialities/view/', id]);
            return '';
        } else if (currentRoute === 'opportunities') {
            this.router.navigate(['administrator/opportunities/view/', id]);
            return '';
        } else if (currentRoute === 'project-members') {
            this.router.navigate(['administrator/project-members/view/', id]);
            return '';
        } else if (currentRoute === 'academy') {
            this.router.navigate(['administrator/academy/view/', id]);
            return '';
        } else if (currentRoute === 'entities') {
            this.router.navigate(['administrator/entities/view/', id]);
            return '';
        } else if (currentRoute === 'stays') {
            this.router.navigate(['administrator/stays/view/', id]);
            return '';
        } else if (currentRoute === 'categories') {
            this.router.navigate(['administrator/categories/view/', id]);
            return '';
        } else if (currentRoute === 'carousels') {
            this.router.navigate(['administrator/carousels/view/', id]);
            return '';
        } else if (currentRoute === 'carousels-login') {
            this.router.navigate(['administrator/carousels-login/view/', id]);
            return '';
        } else {
            console.error('No se pudo determinar la ruta del formulario para esta página.');
            return '';
        }
    }

    edit(object: any) {
        const keys = Object.keys(object);
        const firstField = keys[0];
        const id: string = object[firstField];
        const currentRoute = this.activatedRoute.snapshot.url[0].path;
        if (currentRoute === 'career') {
            this.router.navigate(['administrator/career/', id]);
            return '';
        } else if (currentRoute === 'projects') {
            this.router.navigate(['administrator/projects/', id]);
            return '';
        } else if (currentRoute === 'programs') {
            this.router.navigate(['administrator/programs/', id]);
            return '';
        } else if (currentRoute === 'specialities') {
            this.router.navigate(['administrator/specialities/', id]);
            return '';
        } else if (currentRoute === 'opportunities') {
            this.router.navigate(['administrator/opportunities/', id]);
            return '';
        } else if (currentRoute === 'project-members') {
            this.router.navigate(['administrator/project-members/', id]);
            return '';
        } else if (currentRoute === 'academy') {
            this.router.navigate(['administrator/academy/', id]);
            return '';
        } else if (currentRoute === 'entities') {
            this.router.navigate(['administrator/entities/', id]);
            return '';
        } else if (currentRoute === 'stays') {
            this.router.navigate(['administrator/stays/', id]);
            return '';
        } else if (currentRoute === 'categories') {
            this.router.navigate(['administrator/categories/', id]);
            return '';
        } else if (currentRoute === 'carousels') {
            this.router.navigate(['administrator/carousels/', id]);
            return '';
        } else if (currentRoute === 'carousels-login') {
            this.router.navigate(['administrator/carousels-login/', id]);
            return '';
        } else {
            console.error('No se pudo determinar la ruta del formulario para esta página.');
            return '';
        }
    }

    delete(object: any) {
        const modalRef = this.modalService.open(DeleteRegisterComponent, {
            backdrop: 'static',
            centered: true,
            windowClass: 'deleteRegisterComponent',
            size: 'lg'
        });
        modalRef.componentInstance.object = object;
        modalRef.closed.subscribe(result => {
            if (result) {
                //pendiente
            }
        });
    }
    

}