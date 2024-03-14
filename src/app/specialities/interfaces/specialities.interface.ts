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

  export interface Speciality {
    keySpeciality: string;
    carrer: Carrer;
    name: string;
    definition: string;
    imageUrl: string;
  }

  export interface Functions {
    idFunction: number;
    speciality: Speciality;
    name: string;
    description: string;
  }

  export interface Skill {
    idSkill: number;
    name: string;
    description: string;
    speciality: Speciality;
  }

  export interface ProgrammingLanguages {
    idProgrammingLanguage: number;
    name: string;
    imageUrl: string;
    speciality: Speciality[];
  }

  export interface Ides {
    idIde: number;
    name: string;
    imageUrl: string;
    speciality: Speciality[];
  }

  export interface Frameworks {
    idFrameworks: number;
    name: string;
    imageUrl: string;
    speciality: Speciality[];
  }

  export interface Certification {
    idCertification: number;
    entity: Entity;
    speciality: Speciality;
    name: string;
  }
  
  export interface Entity {
    idEntity: number;
    name: string;
  }
  
  