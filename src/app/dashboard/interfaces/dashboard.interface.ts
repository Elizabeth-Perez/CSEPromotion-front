export interface Carousel {
    idCarousel: number;
    carrer: Carrer;
    imageUrl: string;
    owner: string;
  }
  
export interface Academy {
  teacherEnrollment: string;
  carrer: Carrer;
  firstName: string;
  lastName: string;
  degree: string;
  rol: string;
  email: string;
}

export interface ProjectMember {
  controlNumber: string;
  firstName: string;
  lastName: string;
}

export interface Category {
  idCategory: number;
  name: string;
}

export interface Speciality {
  keySpeciality: string;
  carrer: Carrer;
  name: string;
  definition: string;
  imageUrl: string;
}

export interface Entity {
  idEntity: number;
  name: string;
}

export interface Stay {
  idStay: number;
  name: string;
}

export interface Participant {
  idParticipant: number;
  type: string;
}

export interface Opportunity {
  idOpportunity: number;
  carrer: Carrer;
  entity: Entity;
  stay: Stay[];
  participant: Participant[];
  imageURL: string;
  hyperlink: string;
}

export interface Project {
  idProject: number;
  carrer: Carrer;
  academy: Academy[];
  projectMember: ProjectMember[];
  category: Category[];
  name: string;
  description: string;
  imageUrl: string;
}

export interface Program {
  carrer: Carrer;
  programType: ProgramType;
  name: string;
  description: string;
  imageUrl: string;
  hyperlink: string;
  idPrograms: number;
}

export interface ProgramType {
  idProgramType: number;
  name: string;
}

export interface Carrer {
  studyProgram: string;
  extension: string;
  phone: string;
  email: string;
  studyGridUrl: string;
  chartUrl: string;
  mission: string;
  vision: string;
  programPurpose: string;
  actionField: string;
  admissionProfile: string;
  graduationProfile: string;
  snFacebook: string;
  snYoutube: string;
  snLinkedin: string;
}