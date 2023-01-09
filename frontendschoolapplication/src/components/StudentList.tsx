import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveIdInlocal, StudentListUrl } from "./common";
import { IStudent } from "./StudentType";

const defaultStudents: IStudent[] = [];

export default function App() {
    const [students, setStudents]: [IStudent[], (students: IStudent[]) => void] = useState(defaultStudents);
    const navigate = useNavigate()

    const getStudentDetails = () => {
        axios.get(StudentListUrl)
            .then((response) => {
                setStudents(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // function saveIdInlocalAndNavigate(Id: number) {
    //     localStorage.setItem('StudentID', Id.toString())
    //     navigate("./EditStudent")
    // }

    // const getStudentDetail=(id:any)=>{
    //     console.log(id)
    //     axios.get(`https://localhost:44318/api/Student/GetStudentDetail?id=${id}`)
    //     .then((response)=>{
    //         console.log(response.data);
    //         localStorage.setItem('StudentID',response.data.studentId)
    //         navigate("./EditStudent")
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     })
    // }
    function editbuttonclick(Id: number){
        saveIdInlocal(Id)
        navigate("./EditStudent")
    }

    useEffect(() => {
        getStudentDetails()
    }, []);


    function deleteButtonClicked(Id: number){
        let a = window.confirm("Are you sure you want to delete the row?");
        if (a==true){
            deleteRow(Id)
        }
        window.location.reload()


    }
    function deleteRow(id: any) {
        console.log("delete")
        axios.delete(`https://localhost:44318/api/Student/DeleteStudent?id=${id}`)
            .then(res => {
                
            })
    }

    // function UpdateRow(id: any, e: any) {
    //     console.log("delete")
    //     axios.delete(`https://localhost:44318/api/Student/UpdateStudent?id=${id}`)
    //         .then(res => {

    //         })

    //         let a=window.confirm("Are you sure you want to delete the row?");
    //         if(a==true)
    //         {
    //             window.location.reload()
    //         }

    // }


    if (!students) return null;

    return (
        <div className="my-4 mx-5">
            <div className='float-end mr-4'>
                <button className='btn btn-primary' onClick={() => navigate('AddStudent')}>Add Student</button>
            </div>
            <table className="table table-bordered">
                <thead className="table-secondary">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Contact No</th>
                        <th scope="col">Email</th>
                        <th scope="col">Std</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {students.map(student =>
                        <tr key={student.studentId}>
                            <td>{student.studentId}</td>
                            <td>{student.name}</td>
                            <td>{student.contactNo}</td>
                            <td>{student.email}</td>
                            <td>{student.std}</td>
                            <td>
                                <button className='btn btn-info btn-sm mx-2' onClick={(e) => editbuttonclick(student.studentId)}>Edit</button>

                                <button className='btn btn-danger btn-sm' onClick={(e) => deleteButtonClicked(student.studentId)}>Delete</button>
                            </td>
                        </tr>
                    )
                    }</tbody>
            </table>
        </div>
    );
}