import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Academy, Career, Category, Project, ProjectMember } from '../../interfaces/administrator.interface';
import { AdministratorService } from '../../services/administrator.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'administrator-project-form',
    templateUrl: './project-form.component.html',
    styleUrls: ['./project-form.component.scss']
})

export class ProjectFormComponent implements OnInit {   
    currentRoute: string = 'projects';
    title: string = 'Administrador de proyectos';
    subTitle: string = 'Complete todos los campos obligatorios para realizar alguna de las acciones.';
    
    addBan: boolean = false;
    editBan: boolean = false;
    viewBan: boolean = false;
    career: Career = {
        studyProgram: 'ISIC-2010-224',
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
        status: ''
    };

    category: Category[] = []
    academy: Academy[] = []
    projectMember: ProjectMember[] = []

    project: Project = {
        idProject: 0,
        carrer: this.career,
        academy: this.academy,
        projectMember: this.projectMember,
        category: this.category,
        name: '',
        description: '',
        imageUrl: '',
        academyMap: '',
        projectMemberMap: '',
    };
    academySelected: Academy | undefined;
    projectMemberSelected: ProjectMember | undefined;
    categorySelected: Category | undefined;

    identificationForm: FormGroup = new FormGroup({});
    academyForm: FormGroup = new FormGroup({});
    projectMemberForm: FormGroup = new FormGroup({});
    categoryForm: FormGroup = new FormGroup({});

    constructor(
        private administratorService: AdministratorService,
        private toastr: ToastrService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
    ) { }

    ngOnInit() {
        this.initForms();
        this.activatedRoute.url.subscribe(urlSegments => {
            const currentUrl = urlSegments.join('/');
            if (currentUrl === 'projects/new') {
                this.addBan = true;
            } else if (currentUrl.startsWith('projects/view/')) {
                this.viewBan = true;
            } else if (currentUrl.startsWith('projects/')) {
                this.editBan = true;
            }
        });
        this.getAcademy();
        this.getProjectMembers();
        this.getCategories();
        this.data();
    }

    initForms(){
        this.identificationForm = this.fb.group({
            name: ['', [Validators.required, Validators.maxLength(255)]],
            description: ['', [Validators.required, Validators.maxLength(255)]],
            imageUrl: ['', [Validators.required, Validators.maxLength(255)]],
        });
        this.academyForm = this.fb.group({
            academy: ['', Validators.required],
        });
        this.projectMemberForm = this.fb.group({
            projectMember: ['', Validators.required],
        });
        this.categoryForm = this.fb.group({
            category: ['', Validators.required],
        });
    }

    validateControl(form: FormGroup, field: string, error: string): boolean {
        const control = form.controls[field];
        if (!control) {
          return false;
        }
        return control.hasError(error) && (control.touched || control.dirty);
      }

    add() {
        if (this.identificationForm.valid && this.academyForm.valid && this.projectMemberForm.valid && this.categoryForm.valid) {
            const project: Project = {
                idProject: 0,
                name: this.identificationForm.get('name')?.value || '',
                description: this.identificationForm.get('description')?.value || '',
                imageUrl: this.identificationForm.get('imageUrl')?.value || '',
                academy: this.academySelected ? [this.academySelected] : [],
                projectMember: this.projectMemberSelected ? [this.projectMemberSelected] : [],
                category: this.categorySelected ? [this.categorySelected] : [],
                carrer: this.career,
                academyMap: '',
                projectMemberMap: '',
            };
            this.administratorService.createProject(project).subscribe(res => {
                if(res) {
                    this.toastr.success('Proyecto creado exitosamente', 'Éxito');
                    this.router.navigate(['/administrator/projects'])
                } else {
                    this.toastr.error('Error al crear el nuevo proyecto', 'Error');
                }
            });
        } else {
            this.toastr.warning('Campos vacios o erroneos', 'Advertencia');
            this.identificationForm.markAllAsTouched();
            this.academyForm.markAllAsTouched();
            this.projectMemberForm.markAllAsTouched();
            this.categoryForm.markAllAsTouched();
        }
    }

    edit(){
        if (this.identificationForm.valid && this.academyForm.valid && this.projectMemberForm.valid && this.categoryForm.valid) {
            const project: Project = {
                idProject: Number(this.activatedRoute.snapshot.paramMap.get('id') ?? ''),
                name: this.identificationForm.get('name')?.value || '',
                description: this.identificationForm.get('description')?.value || '',
                imageUrl: this.identificationForm.get('imageUrl')?.value || '',
                academy: this.academySelected ? [this.academySelected] : [],
                projectMember: this.projectMemberSelected ? [this.projectMemberSelected] : [],
                category: this.categorySelected ? [this.categorySelected] : [],
                carrer: this.career,
                academyMap: '',
                projectMemberMap: '',
            };
            this.administratorService.updateProject(project).subscribe(res => {
                if(res) {
                    this.toastr.success('Proyecto actualizado exitosamente', 'Éxito');
                    this.router.navigate(['/administrator/projects'])
                } else {
                    this.toastr.error('Error al actualizar el nuevo proyecto', 'Error');
                }
            });
        } else {
            this.toastr.warning('Campos vacios o erroneos', 'Advertencia');
            this.identificationForm.markAllAsTouched();
            this.academyForm.markAllAsTouched();
            this.projectMemberForm.markAllAsTouched();
            this.categoryForm.markAllAsTouched();
        }
    }

    data(){
        if(this.editBan || this.viewBan) {
            const idObject = this.activatedRoute.snapshot.paramMap.get('id') ?? '';
            this.administratorService.findProject(idObject).subscribe(res => {
                this.project = res;
                this.identificationForm.patchValue({
                    idProject: this.project.idProject,
                    name: this.project.name,
                    description: this.project.description,
                    imageUrl: this.project.imageUrl
                });
                this.academyForm.patchValue({
                    academy: this.project.academy,
                });
                this.projectMemberForm.patchValue({
                    projectMember: this.project.projectMember
                });
                this.categoryForm.patchValue({
                    category: this.project.category,
                });
            });
        }
    }

    getAcademy() {
        this.administratorService.getAcademy().subscribe(res => {
            this.academy = res;
        });
    }

    getProjectMembers() {
        this.administratorService.getProjectMembers().subscribe(res => {
            this.projectMember = res;
        });
    }

    getCategories() {
        this.administratorService.getCategories().subscribe(res => {
            this.category = res;
        });
    }

    selectAcademy(): void {
        const academyId = this.academyForm.get('academy')?.value;
        this.academySelected = this.academy?.find(a => a.teacherEnrollment === academyId);
    }

    selectProjectMember(): void {
        const projectMemberId = this.projectMemberForm.get('projectMember')?.value;
        this.projectMemberSelected = this.projectMember?.find(pm => pm.controlNumber === projectMemberId);
    }

    selectCategory(): void {
        const categoryId = this.categoryForm.get('category')?.value;
        this.categorySelected = this.category?.find(c => c.idCategory === Number(categoryId));
    }
}