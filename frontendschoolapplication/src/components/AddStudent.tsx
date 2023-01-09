import axios from "axios";
import { useEffect, useState } from "react";
import { IPost } from "./StudentType";
import { ErrorMessage, useFormik } from "formik";
import { useNavigate } from "react-router-dom";


export default function App() {
    const formik = useFormik({
        initialValues: {
            stdname: "",
            contactno: "",
            Email: "",
            std: "",

        },
        onSubmit: values => {
        },

        validate: values => {
            
            let error:any = {}

            if (values.stdname=="") {
                error.stdname('Required')
            }
        }

    });
    const navigate = useNavigate()
    const [name, setname] = useState("");
    const [contactno, setcontactno] = useState("");
    const [email, setEmail] = useState("");
    const [std, setstd] = useState("");

    const onSubmitBtnClickHnd = (e: any) => {
        e.preventDefault();
        const data = {
            Name: name,
            ContactNo: contactno,
            Email: email,
            Std: std,
        };
        console.log(data);
        axios
            .post("https://localhost:44318/api/Student/AddStudent", data)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
        console.log(data);
        window.alert("value updated")
    };

    return <div className="mt-5 mx-5">
        <form onSubmit={onSubmitBtnClickHnd}>
            <div className="mx">
                <label className="form-label float-start">Student Name : </label>
                <input type="text" name="stdname" className="form-control" 
                    onChange={(e) => setname(e.target.value)} />
            </div>
            <h1>{formik.errors.stdname}</h1>
            <div>{formik.errors.stdname?<div>{formik.errors.stdname}</div>:null}</div>
            

            <div>

                <label className="form-label float-start">Contact No : </label>
                <input type="text" name="contactno" className="form-control" onChange={(e) => setcontactno(e.target.value)} />
            </div>

            <div>

                <label className="form-label float-start">Email : </label>
                <input type="text" name="Email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>

                <label className="form-label float-start">Std: </label>
                <input type="text" name="std" className="form-control" onChange={(e) => setstd(e.target.value)} />
            </div>
            <div className="mx-auto">
                <button className="btn btn-success mx-3 my-3" type="submit">Add Student</button>
                <button className="btn btn-primary mx-3 my-3" onClick={() => navigate('/')} type="submit">Go Back</button>
            </div>
        </form>
    </div>
}

