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

  export interface ProjectMember {
    controlNumber: string;
    firstName: string;
    lastName: string;
  }

  export interface Category {
    idCategory: number;
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
    status: string;
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

  export interface Carousel {
    idCarousel: number;
    carrer: Carrer;
    imageUrl: string;
    owner: string;
  }