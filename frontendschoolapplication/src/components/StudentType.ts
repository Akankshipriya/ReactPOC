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
// export class Studentdata implements IPost {
//     studentId: number;
//     name: string;
//     contactNo: string;
//     email: string;
//     std: string;

//     constructor(studentId: number, name: string, contactNo: string, email: string, std: string ) {
//         this.studentId = studentId;
//         this.name = name;
//         this.contactNo = contactNo;
//         this.email=email;
//         this.std=std;
//     }
// }

//export const Studentdata1:IPost = new Studentdata(0,values.stdname,values.contactno, values.email,values.std);


//const developer = new Developer("Gapur", "Frontend Developer");