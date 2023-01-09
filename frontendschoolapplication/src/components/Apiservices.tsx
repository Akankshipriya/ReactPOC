import axios from "axios"
import { useState } from "react"

export default function Apiservices(){
    const url="https://localhost:44318/api/Student/"
    console.log(url)

    const getStudentDetails=()=> {
        axios.get(url+"GetAllStudentDetails")
        .then((response)=>{
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const AddStudentDetails=()=>{
        axios.post(url+"AddStudent",{Name:'David',ContactNo:'987654',Email:"David@gmail.com",Std:"5"})
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)

        })
    }

    const UpddateStudentDetails=()=>{
        axios.put(url+"UpdateStudent?id=39",{Name:'Davi',ContactNo:'987654',Email:"David@gmail.com",Std:"5"})
        .then((response)=>{
            console.log("updated")
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const DeleteStudentDetails=()=>{
        axios.put(url+"UpdateStudent?id=39",{Name:'Davi',ContactNo:'987654',Email:"David@gmail.com",Std:"5"})
        .then((response)=>{
            console.log("updated")
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    const [name, setname] = useState("");

    

    const getStudentDetail=(id:any)=>{
        
        console.log(id)
        axios.get(`https://localhost:44318/api/Student/GetStudentDetail?id=${id}`)
        .then((response)=>{
            setname(response.data.name)
            


        })
        .catch((error)=>{
            console.log(error)
        })
    }

    getStudentDetail(70)
    return (
        <div>
            <input type="text" defaultValue={name}></input>
        </div>
        
    )
}