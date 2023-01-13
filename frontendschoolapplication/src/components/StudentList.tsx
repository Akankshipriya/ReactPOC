import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl, IDsentforedit } from "./common";
import { IStudent } from "./StudentType";

const defaultStudents: IStudent[] = [];

export default function App() {
    const [students, setStudents]: [IStudent[], (students: IStudent[]) => void] = useState(defaultStudents);
    const navigate = useNavigate()

    const getStudentDetails = () => {
        axios.get(baseUrl + "GetAllStudentDetails")
            .then((response) => {
                setStudents(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const NavigatingtoEditPage = (Id: number) => {
        IDsentforedit(Id)
        navigate("./EditStudent")
    }

    useEffect(() => {
        getStudentDetails()
    }, []);


    const ConfirmDeleteRow = (Id: number) => {
        let a = window.confirm("Are you sure you want to delete the row?");
        if (a == true) {
            DeleteSelectedRow(Id)
        }
        window.location.reload()


    }
    const DeleteSelectedRow = (id: number) => {
        console.log("delete")
        axios.delete(baseUrl + "DeleteStudent?id=" + id)
            .then(res => {

            })
    }

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
                        <th scope="col">Course Name</th>
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
                            <td>{student.courseName}</td>
                            <td>
                                <button className='btn btn-info btn-sm mx-2' onClick={(e) => NavigatingtoEditPage(student.studentId)}>Edit</button>

                                <button className='btn btn-danger btn-sm' onClick={(e) => ConfirmDeleteRow(student.studentId)}>Delete</button>
                            </td>
                        </tr>
                    )
                    }</tbody>
            </table>
        </div>
    );
}

