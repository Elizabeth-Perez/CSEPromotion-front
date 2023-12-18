export interface DataImages {
    title: string;
    description: string;
    imageUrl: number;
}

export interface UserAccess {
    user: string;
    session: string;
    password: string;
}

export interface ForgottenPasswordRequest {
    to: string;
    subject: string;
    body: string;
}

export interface ForgottenPasswordResponse {
    success: boolean;
    error: string;
}