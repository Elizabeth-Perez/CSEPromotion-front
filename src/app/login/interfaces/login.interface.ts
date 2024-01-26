export interface User {
    userEnrollment: string;
    carrer: Carrer;
    firstName: string;
    lastName: string;
    user: string;
    password: string;
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
  
  
export interface DataImages {
    title: string;
    description: string;
    imageUrl: number;
}

export interface ForgottenPasswordRequest {
    to: string;
    subject: string;
    body: string;
}

export interface ForgottenPasswordResponse {
    send: boolean;
}