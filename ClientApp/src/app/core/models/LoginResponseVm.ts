export interface LoginResponseVm {
    isAuthSuccessful: boolean;
    errorMessage: string;
    token: string;
}