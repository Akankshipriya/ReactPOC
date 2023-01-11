export const baseUrl: string = "https://localhost:44318/api/Student/"

export function saveIdInlocal(Id: number) {
    localStorage.setItem('StudentID', Id.toString())
}
