export const baseUrl: string = "https://localhost:44318/api/Student/"
export const courseUrl: string= "https://localhost:44318/api/Course/"

export function IDsentforedit(Id: number) {
    localStorage.setItem('StudentID', Id.toString())
}
