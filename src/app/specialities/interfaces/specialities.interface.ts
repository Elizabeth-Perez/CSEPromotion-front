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