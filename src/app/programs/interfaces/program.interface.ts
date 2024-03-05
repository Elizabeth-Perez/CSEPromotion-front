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
