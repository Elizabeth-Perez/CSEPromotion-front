import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Academy, Career, Carousel, CarouselLogin, Category, Entity, Opportunity, Participant, Program, ProgramType, Project, ProjectMember, Speciality, Stay } from "../interfaces/administrator.interface";

@Injectable()
export class AdministratorService {
    private endpoint: string = 'http://localhost:8080/administrator';

    constructor(
        private http: HttpClient,
    ){}

    getCareers(): Observable<Career[]> {
        return this.http.get<Career[]>(`${this.endpoint}/careers/all`)
    }

    createCareer(career: Career): Observable<Career> {
        return this.http.post<Career>(`${this.endpoint}/careers/create`, career)
    }
    
    updateCareer(career: Career): Observable<Career> {
        return this.http.put<Career>(`${this.endpoint}/careers/update/${career.studyProgram}`, career)
    }

    deleteCareer(id: string): Observable<Career> {
        return this.http.delete<Career>(`${this.endpoint}/careers/${id}`)
    }

    findCareer(id: string): Observable<Career> {
        return this.http.get<Career>(`${this.endpoint}/careers/${id}`)
    }

    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(`${this.endpoint}/projects/all`)
    }

    createProject(project: Project): Observable<Project> {
        return this.http.post<Project>(`${this.endpoint}/projects/create`, project)
    }

    updateProject(project: Project): Observable<Project> {
        return this.http.put<Project>(`${this.endpoint}/projects/update/${project.idProject}`, project)
    }

    deleteProject(id: string): Observable<Project> {
        return this.http.delete<Project>(`${this.endpoint}/projects/${id}`)
    }

    findProject(id: string): Observable<Project> {
        return this.http.get<Project>(`${this.endpoint}/projects/${id}`)
    }

    getAcademy(): Observable<Academy[]> {
        return this.http.get<Academy[]>(`${this.endpoint}/academy/all`)
    }

    createAcademy(academy: Academy): Observable<Academy> {
        return this.http.post<Academy>(`${this.endpoint}/academy/create`, academy)
    }

    updateAcademy(academy: Academy): Observable<Academy> {
        return this.http.put<Academy>(`${this.endpoint}/academy/update/${academy.teacherEnrollment}`, academy)
    }

    deleteAcademy(id: string): Observable<Academy> {
        return this.http.delete<Academy>(`${this.endpoint}/academy/${id}`)
    }

    findAcademy(id: string): Observable<Academy> {
        return this.http.get<Academy>(`${this.endpoint}/academy/${id}`)
    }

    getProjectMembers(): Observable<ProjectMember[]> {
        return this.http.get<ProjectMember[]>(`${this.endpoint}/project-members/all`)
    }

    createProjectMembers(projectMember: ProjectMember): Observable<ProjectMember> {
        return this.http.post<ProjectMember>(`${this.endpoint}/project-members/create`, projectMember)
    }

    updateProjectMembers(projectMember: ProjectMember): Observable<ProjectMember> {
        return this.http.put<ProjectMember>(`${this.endpoint}/project-members/update/${projectMember.controlNumber}`, projectMember)
    }

    deleteProjectMembers(id: string): Observable<ProjectMember> {
        return this.http.delete<ProjectMember>(`${this.endpoint}/project-members/${id}`)
    }

    findProjectMembers(id: string): Observable<ProjectMember> {
        return this.http.get<ProjectMember>(`${this.endpoint}/project-members/${id}`)
    }

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(`${this.endpoint}/categories/all`)
    }

    createCategory(category: Category): Observable<Category> {
        return this.http.post<Category>(`${this.endpoint}/categories/create`, category)
    }

    updateCategory(category: Category): Observable<Category> {
        return this.http.put<Category>(`${this.endpoint}/categories/update/${category.idCategory}`, category)
    }

    deleteCategory(id: string): Observable<Category> {
        return this.http.delete<Category>(`${this.endpoint}/categories/${id}`)
    }

    findCategory(id: string): Observable<Category> {
        return this.http.get<Category>(`${this.endpoint}/categories/${id}`)
    }

    getPrograms(): Observable<Program[]> {
        return this.http.get<Program[]>(`${this.endpoint}/programs/all`)
    }

    createProgram(program: Program): Observable<Program> {
        return this.http.post<Program>(`${this.endpoint}/programs/create`, program)
    }

    updateProgram(program: Program): Observable<Program> {
        return this.http.put<Program>(`${this.endpoint}/programs/update/${program.idProgram}`, program)
    }

    deleteProgram(id: string): Observable<Program> {
        return this.http.delete<Program>(`${this.endpoint}/programs/${id}`)
    }

    findProgram(id: string): Observable<Program> {
        return this.http.get<Program>(`${this.endpoint}/programs/${id}`)
    }

    getProgramType(): Observable<ProgramType[]> {
        return this.http.get<ProgramType[]>(`${this.endpoint}/program-type/all`)
    }

    getSpecialities(): Observable<Speciality[]> {
        return this.http.get<Speciality[]>(`${this.endpoint}/specialities/all`)
    }

    createSpeciality(speciality: Speciality): Observable<Speciality> {
        return this.http.post<Speciality>(`${this.endpoint}/specialities/create`, speciality)
    }

    updateSpeciality(speciality: Speciality): Observable<Speciality> {
        return this.http.put<Speciality>(`${this.endpoint}/specialities/update/${speciality.keySpeciality}`, speciality)
    }

    deleteSpeciality(id: string): Observable<Speciality> {
        return this.http.delete<Speciality>(`${this.endpoint}/specialities/${id}`)
    }

    findSpeciality(id: string): Observable<Speciality> {
        return this.http.get<Speciality>(`${this.endpoint}/specialities/${id}`)
    }

    getOpportunities(): Observable<Opportunity[]> {
        return this.http.get<Opportunity[]>(`${this.endpoint}/opportunities/all`)
    }

    createOpportunity(opportunity: Opportunity): Observable<Opportunity> {
        return this.http.post<Opportunity>(`${this.endpoint}/opportunities/create`, opportunity)
    }

    updateOpportunity(opportunity: Opportunity): Observable<Opportunity> {
        return this.http.put<Opportunity>(`${this.endpoint}/opportunities/update/${opportunity.idOpportunity}`, opportunity)
    }

    deleteOpportunity(id: string): Observable<Opportunity> {
        return this.http.delete<Opportunity>(`${this.endpoint}/opportunities/${id}`)
    }

    findOpportunity(id: string): Observable<Opportunity> {
        return this.http.get<Opportunity>(`${this.endpoint}/opportunities/${id}`)
    }

    getEntities(): Observable<Entity[]> {
        return this.http.get<Entity[]>(`${this.endpoint}/entities/all`)
    }

    createEntity(entity: Entity): Observable<Entity> {
        return this.http.post<Entity>(`${this.endpoint}/entities/create`, entity)
    }

    updateEntity(entity: Entity): Observable<Entity> {
        return this.http.put<Entity>(`${this.endpoint}/entities/update/${entity.idEntity}`, entity)
    }

    deleteEntity(id: string): Observable<Entity> {
        return this.http.delete<Entity>(`${this.endpoint}/entities/${id}`)
    }

    findEntity(id: string): Observable<Entity> {
        return this.http.get<Entity>(`${this.endpoint}/entities/${id}`)
    }

    getStays(): Observable<Stay[]> {
        return this.http.get<Stay[]>(`${this.endpoint}/stays/all`)
    }

    createStay(stay: Stay): Observable<Stay> {
        return this.http.post<Stay>(`${this.endpoint}/stays/create`, stay)
    }

    updateStay(stay: Stay): Observable<Stay> {
        return this.http.put<Stay>(`${this.endpoint}/stays/update/${stay.idStay}`, stay)
    }

    deleteStay(id: string): Observable<Stay> {
        return this.http.delete<Stay>(`${this.endpoint}/stays/${id}`)
    }

    findStay(id: string): Observable<Stay> {
        return this.http.get<Stay>(`${this.endpoint}/stays/${id}`)
    }

    getParticipants(): Observable<Participant[]> {
        return this.http.get<Participant[]>(`${this.endpoint}/participants/all`)
    }

    getCarousels(): Observable<Carousel[]> {
        return this.http.get<Carousel[]>(`${this.endpoint}/carousels/all`)
    }

    createCarousel(carousel: Carousel): Observable<Carousel> {
        return this.http.post<Carousel>(`${this.endpoint}/carousels/create`, carousel)
    }

    updateCarousel(carousel: Carousel): Observable<Carousel> {
        return this.http.put<Carousel>(`${this.endpoint}/carousels/update/${carousel.idCarousel}`, carousel)
    }

    deleteCarousel(id: string): Observable<Carousel> {
        return this.http.delete<Carousel>(`${this.endpoint}/carousels/${id}`)
    }

    findCarousel(id: string): Observable<Carousel> {
        return this.http.get<Carousel>(`${this.endpoint}/carousels/${id}`)
    }

    getCarouselsLogin(): Observable<CarouselLogin[]> {
        return this.http.get<CarouselLogin[]>(`${this.endpoint}/carousels-login/all`)
    }

    createCarouselLogin(carouselLogin: CarouselLogin): Observable<CarouselLogin> {
        return this.http.post<CarouselLogin>(`${this.endpoint}/carousels-login/create`, carouselLogin)
    }

    updateCarouselLogin(carouselLogin: CarouselLogin): Observable<CarouselLogin> {
        return this.http.put<CarouselLogin>(`${this.endpoint}/carousels-login/update/${carouselLogin.idCarouselLogin}`, carouselLogin)
    }

    deleteCarouselLogin(id: string): Observable<CarouselLogin> {
        return this.http.delete<CarouselLogin>(`${this.endpoint}/carousels-login/${id}`)
    }

    findCarouselLogin(id: string): Observable<CarouselLogin> {
        return this.http.get<CarouselLogin>(`${this.endpoint}/carousels-login/${id}`)
    }
}