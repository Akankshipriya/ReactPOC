export interface IStudent {
    studentId: number;
    name: string;
    contactNo: string;
    email: string;
    std: string;
    courseName: string
};

export interface formErrors {
    stdname?: string;
    contactno?: string;
    email?: string;
    std?: string;
    coursename?:string
}

export interface ICourse {
    courseId:number;
    courseName: string;
    teacherName:string;
};
