import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPost } from "./StudentType";



const defaultPosts: IPost[] = [];

export default function EditStudent() {
    

    const [posts, setPost]: [IPost[], (posts: IPost[]) => void] = useState(defaultPosts);
    const [post, setPosts]: [IPost[], (posts: IPost[]) => void] = useState(defaultPosts);




    // function UpdateRow(id: any, e: any) {
    //     console.log("delete")
    //     axios.put(`https://localhost:44318/api/Student/UpdateStudent?id=${id}`,)
    //         .then(res => {
    //             //add alert message
    //             //
    //         })

    //         let a=window.confirm("Are you sure you want to delete the row?");
    //         if(a==true)
    //         {
    //             window.location.reload()
    //         }

    // }
    const [name1, setname1] = useState("");
    const [contact1,setcontact1]=useState("");
    const [email1,setemail1]=useState("");
    const [std1,setstd1]=useState("");
    const [id1,setid1]=useState("")
    const getStudentDetail = (id: any) => {

        console.log(id)
        axios.get(`https://localhost:44318/api/Student/GetStudentDetail?id=${id}`)
            .then((response) => {
                setname1(response.data.name)
                setcontact1(response.data.contactNo)
                setemail1(response.data.email)
                setstd1(response.data.std)
                setid1(response.data.studentId)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    
    getStudentDetail(localStorage.getItem('StudentID'))

    const navigate = useNavigate()
    const [name, setname] = useState(name1);
    const [contactno, setcontactno] = useState(name1);
    const [email, setEmail] = useState(name1);
    const [std, setstd] = useState(name1);


    const onSubmitBtnClickHnd = (e: any) => {

        const data = {
            Name: name,
            ContactNo: contactno,
            Email: email,
            Std: std,
        };
        console.log(name1, contact1, email1);
        axios
                .put(`https://localhost:44318/api/Student/UpdateStudent?id=${localStorage.getItem('StudentID')}`, data)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
            console.log();

    };


    return <div className="mt-5 mx-5">
        <form onSubmit={onSubmitBtnClickHnd}>
        <div className="mx">
                <label className="form-label float-start">Student Id : </label>
                <input type="text" name="stdname" className="form-control" defaultValue={id1} disabled
                     />
            </div>

            <div className="mx">
                <label className="form-label float-start">Student Name : </label>
                <input type="text" name="stdname" className="form-control" defaultValue={name1}
                    onChange={(e) => setname(e.target.value)} />
            </div>

            <div>

                <label className="form-label float-start">Contact No : </label>
                <input type="text" name="contactno" className="form-control" defaultValue={contact1} onChange={(e) => setcontactno(e.target.value)} />
            </div>

            <div>

                <label className="form-label float-start">Email : </label>
                <input type="text" name="Email" className="form-control" defaultValue={email1} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>

                <label className="form-label float-start">Std: </label>
                <input type="text" name="std" className="form-control" defaultValue={std1} onChange={(e) => setstd(e.target.value)} />
            </div>
            <div className="mx-auto">
                <button className="btn btn-success mx-3 my-3" type="submit">Update Student Detail</button>
                <button className="btn btn-primary mx-3 my-3" onClick={() => navigate('/')} type="submit">Go Back</button>
            </div>
        </form>
    </div>
}