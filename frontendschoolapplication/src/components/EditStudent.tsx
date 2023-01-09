import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, useFormik } from "formik";
import { formErrors } from "./StudentType";
import { EditUrl } from "./common";



// const defaultPosts: IPost[] = [];

export default function EditStudent() {
    //databeforeUpdation


    // const [posts, setPost]: [IPost[], (posts: IPost[]) => void] = useState(defaultPosts);
    // const [post, setPosts]: [IPost[], (posts: IPost[]) => void] = useState(defaultPosts);




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
    // const [name1, setname1] = useState("");
    // const [contact1, setcontact1] = useState("");
    // const [email1, setemail1] = useState("");
    // const [std1, setstd1] = useState("");
    // const [id1, setid1] = useState("")
    // const getStudentDetail = (id: any) => {

    //     console.log(id)
    //     axios.get(`https://localhost:44318/api/Student/GetStudentDetail?id=${id}`)
    //         .then((response) => {
    //             setname1(response.data.name)
    //             setcontact1(response.data.contactNo)
    //             setemail1(response.data.email)
    //             setstd1(response.data.std)
    //             setid1(response.data.studentId)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }

    // getStudentDetail(localStorage.getItem('StudentID'))

    // const navigate = useNavigate()
    // const [name, setname] = useState(name1);
    // const [contactno, setcontactno] = useState(name1);
    // const [email, setEmail] = useState(name1);
    // const [std, setstd] = useState(name1);


    // const onSubmitBtnClickHnd = (e: any) => {

    //     const data = {
    //         Name: name,
    //         ContactNo: contactno,
    //         Email: email,
    //         Std: std,
    //     };
    //     console.log(name1, contact1, email1);
    //     axios
    //         .put(`https://localhost:44318/api/Student/UpdateStudent?id=${localStorage.getItem('StudentID')}`, data)
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    //     console.log();

    // };

    const [name, setname] = useState("");
    const [contact, setcontact] = useState("");
    const [email, setemail] = useState("");
    const [std, setstd] = useState("");
    const [id, setid] = useState("")

    const getStudentDetail = (id: number) => {
        axios.get(`https://localhost:44318/api/Student/GetStudentDetail?id=${id}`)
            .then((response) => {
                console.log(response.data)
                setname(response.data.name)
                setcontact(response.data.contactNo)
                setemail(response.data.email)
                setstd(response.data.std)
                setid(response.data.studentId)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getStudentDetail(Number(localStorage.getItem('StudentID')))
    }, []);

    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            stdname: "",
            contactno: "",
            email: "",
            std: "",
        },

        onSubmit: values => {
            
            axios
                .put(EditUrl+"?id="+localStorage.getItem('StudentID'), { Name: values.stdname, ContactNo: values.contactno, Email: values.email, Std: values.std })
                .then((res) => {
                    window.alert("Record Updated Successfully")
                    navigate('/')
                })
                .catch((err) => {
                    console.log(err);
                });

        },

        validate: values => {

            let errors: formErrors = {};
            if (values.stdname == "") {
                errors.stdname = "Required..!"
            }


            if ((values.contactno).length >= 10) {
                errors.contactno = "Contact No can not be more than 9 char"
            }

            if (values.email == "") {
                errors.email = "Required..!"
            }
            return errors
        }
    });


    return <div className="mt-5 mx-5">
        <form onSubmit={formik.handleSubmit}>

            <div className="mx">
                <label className="form-label float-start">Student Id : </label>
                <input type='text' name='stdname' className="form-control" defaultValue={id} disabled  />
            </div>

            <div className="mx">
                <label className="form-label float-start">Student Name : </label>
                <input type='text' name='stdname' className="form-control" defaultValue={name} onChange={formik.handleChange} />
                {formik.errors.stdname ? <div className="alert alert-danger">{formik.errors.stdname}</div> : null}
            </div>

            <div>
                <label className="form-label float-start">Contact No : </label>
                <input type='text' name='contactno' defaultValue={contact} onChange={formik.handleChange} className="form-control" />
                {formik.errors.contactno ? <div className="alert alert-danger">{formik.errors.contactno}</div> : null}
            </div>

            <div>
                <label className="form-label float-start">Email : </label>
                <input type='text' name='email' className="form-control" onChange={formik.handleChange} defaultValue={email}/>
            </div>

            <div>
                <label className="form-label float-start">Std: </label>
                <input type='text' name='std' className="form-control" onChange={formik.handleChange} defaultValue={std} />
            </div>
            <div className="mx-auto">
                <button className="btn btn-success mx-3 my-3" type="submit">Update Student</button>
                <button className="btn btn-primary mx-3 my-3" onClick={() => navigate('/')} type="submit">Go Back</button>
            </div>
        </form>
    </div>

}