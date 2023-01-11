export interface IStudent {
    studentId: number;
    name: string;
    contactNo: string;
    email: string;
    std: string;
};

export interface formErrors {
    stdname?: string;
    contactno?: string;
    email?: string;
    std?: string
}
