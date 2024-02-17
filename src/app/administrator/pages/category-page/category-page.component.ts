import { Component, OnInit } from '@angular/core';
import { Category, ProjectMember } from '../../interfaces/administrator.interface';
import { AdministratorService } from '../../services/administrator.service';

@Component({
    selector: 'administrator-category-page',
    templateUrl: './category-page.component.html',
    styleUrls: ['./category-page.component.scss']
})

export class CategoryPageComponent implements OnInit {
    currentRoute: string = 'categories';
    title: string = 'Categorias';
    subTitle: string = 'Gestiona las categorias que ofrece el sitio web.';
    headers = [
        { name: 'ID', class: 'id-category', field: 'idCategory' },
        { name: 'Nombre', class: 'name', field: 'name' },
        { name: 'Acciones', class: 'actions', field: ''},
    ];    
    categories: Category[] = [];
    
    constructor(
        private administratorService: AdministratorService,
    ) { }

    ngOnInit(): void {
        this.administratorService.getCategories().subscribe(res => {
            this.categories = res;
        });
    }
}