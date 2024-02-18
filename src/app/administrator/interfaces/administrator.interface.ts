export interface Career {
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
    status: string;
}

export interface Academy {
  teacherEnrollment: string;
  carrer: Career;
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
  carrer: Career;
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
  carrer: Career;
  entity: Entity;
  stay: Stay[];
  participant: Participant[];
  imageURL: string;
  hyperlink: string;
  entityMap: string;
  participantMap: string; 
  stayMap: string;
}

export interface Project {
  idProject: number;
  carrer: Career;
  academy: Academy[];
  projectMember: ProjectMember[];
  category: Category[];
  name: string;
  description: string;
  imageUrl: string;
  academyMap: string;
  projectMemberMap: string;
}

export interface Program {
  idProgram: number;
  carrer: Career;
  programType: ProgramType;
  name: string;
  description: string;
  imageUrl: string;
  hyperlink: string;
  programMap: string;
}

export interface ProgramType {
  idProgramType: number;
  name: string;
}

export interface Carousel {
  idCarousel: number;
  carrer: Career;
  imageUrl: string;
  owner: string;
}

export interface CarouselLogin {
  idCarouselLogin: number;
  carousel: Carousel;
  title: string;
  description: string;
}