export const baseUrl: string = "https://localhost:44318/api/Student/"

export const createUrl: string = baseUrl + "AddStudent"

export const StudentListUrl: string = baseUrl + "GetAllStudentDetails"

export const EditUrl: string= baseUrl +"UpdateStudent"

export function saveIdInlocal(Id: number) {
    localStorage.setItem('StudentID', Id.toString())
}
