import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddStudent from "./AddStudent";
import ModelPopUp from "./modelPopUp";
import { IPost } from "./StudentType";

const url="https://localhost:44318/api/Student/"


const defaultPosts: IPost[] = [];

export default function App() {
    const navigate=useNavigate()
    const [showModal,setshowModal] = useState(false);
    const [message,setMessage] = useState<string>("");
    const [post,setPosts]=useState(null)
    console.log(showModal)

    const getStudentDetails=()=> {
        axios.get(url+"GetAllStudentDetails")
        .then((response)=>{
            setPost(response.data);
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const getStudentDetail=(id:any)=>{
        console.log(id)
        axios.get(`https://localhost:44318/api/Student/GetStudentDetail?id=${id}`)
        .then((response)=>{
            console.log(response.data);
            localStorage.setItem('StudentID',response.data.studentId)
            navigate("./EditStudent")
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(() => {
        getStudentDetails()
    }, []);

    function deleteRow(id: any) {
        console.log("delete")
        axios.delete(`https://localhost:44318/api/Student/DeleteStudent?id=${id}`)
            .then(res => {
                setMessage("")
                //add alert message
                //
            })

            let a=window.confirm("Are you sure you want to delete the row?");
            if(a==true)
            {
                window.location.reload()
            }

    }

    function UpdateRow(id: any, e: any) {
        console.log("delete")
        axios.delete(`https://localhost:44318/api/Student/UpdateStudent?id=${id}`)
            .then(res => {
                
            })

            let a=window.confirm("Are you sure you want to delete the row?");
            if(a==true)
            {
                window.location.reload()
            }

    }
    const [posts, setPost]: [IPost[], (posts: IPost[]) => void] = useState(defaultPosts);


    if (!posts) return null;

    return (
        <div className="my-4 mx-5">
            <div className='float-end mr-4'>
            <button className='btn btn-primary' onClick={()=>navigate('AddStudent')}>Add Student</button>
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

                    {posts.map(post =>
                        <tr key={post.studentId}>
                            <td>{post.studentId}</td>
                            <td>{post.name}</td>
                            <td>{post.contactNo}</td>
                            <td>{post.email}</td>
                            <td>{post.std}</td>
                            <td>
                                <button className='btn btn-info btn-sm mx-2' onClick={(e) => getStudentDetail(post.studentId)}>Edit</button>

                                <button className='btn btn-danger btn-sm' onClick={(e) => deleteRow(post.studentId)}>Delete</button>
                            </td>
                        </tr>
                    )

                    }</tbody>

            </table>
        </div>

    );

}