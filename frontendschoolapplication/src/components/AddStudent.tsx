import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "./common";
import { formErrors, ICourse } from "./StudentType";

const defaultCourses: ICourse[] = [];

export default function AddStudent() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            stdname: "",
            contactno: "",
            email: "",
            std: "",
            coursename: ""
        },

        onSubmit: values => {
            axios
                .post(baseUrl + "AddStudent", data)
                .then((res) => {
                    window.alert("New Record Inserted")
                    navigate('/')
                })
                .catch((err) => {
                    console.log(err);
                });

        },

        validate: values => {

            let errors: formErrors = {};
            if (values.stdname == "") {
                errors.stdname = "Name is required"
            }
            else if (values.stdname.length <= 2) {
                errors.stdname = "Name should have more than 2 char! Please enter valid name"
            }

            if (values.contactno == "") {
                errors.contactno = "Contact No is required"
            }
            else if (!/^[7-9]\d{9}$/.test(values.contactno)) {
                errors.contactno = "Your contact no should be 10 digits starting with 7 or 8 or 9"
            }

            if (values.email == "") {
                errors.email = "Email is required"
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid ! Please enter a valid email address';
            }

            if (values.std == "") {
                errors.std = "Std No is required"
            }
            else if ((Number(values.std) < 1) || (Number(values.std) > 12)) {
                errors.std = "Std should we in between 1 and 12"
            }
            else if (!/^[0-9]+$/.test(values.std)) {
                errors.std = "Std can only be numeric! Please enter a valid std"
            }
            return errors
        }
    });
    
    useEffect(() => {
        getCourseDetails()
    }, []);

    const data = {
        Name: formik.values.stdname,
        ContactNo: formik.values.contactno,
        Email: formik.values.email,
        Std: formik.values.std,
        CourseName: formik.values.coursename,
        course: null
    }

    const [courses, setcourse]: [ICourse[], (students: ICourse[]) => void] = useState(defaultCourses);

    const getCourseDetails = () => {
        axios.get("https://localhost:44318/api/Course/GetAllCoursesName")
            .then((response) => {
                setcourse(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return <div className="mt-5 mx-5">
        <form onSubmit={formik.handleSubmit}>
            <div className="mx">
                <label className="form-label float-start">Student Name : </label>
                <input type='text' name='stdname' className="form-control" placeholder="Enter Name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.stdname} />
                {formik.errors.stdname && formik.touched.stdname ? <div className="alert alert-danger">{formik.errors.stdname}</div> : null}
            </div>


            <div>
                <label className="form-label float-start">Contact No : </label>
                <input type='text' name='contactno' placeholder="Enter Phone No" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" value={formik.values.contactno} />
                {formik.errors.contactno && formik.touched.contactno ? <div className="alert alert-danger">{formik.errors.contactno}</div> : null}
            </div>

            <div>
                <label className="form-label float-start">Email : </label>
                <input type='text' name='email' placeholder="Enter Email ID" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                {formik.touched.email && formik.errors.email ? <div className="alert alert-danger">{formik.errors.email}</div> : null}
            </div>

            <div>
                <label className="form-label float-start">Std: </label>
                <input type='text' name='std' placeholder="Enter Class" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.std} />
                {formik.errors.std && formik.touched.std ? <div className="alert alert-danger">{formik.errors.std}</div> : null}
            </div>

            <div>
                <label className="form-label float-start">Course Name </label>
                <select className="form-select" aria-label="Default select example" name='coursename' placeholder="Please select your course" value={formik.values.coursename} onChange={formik.handleChange}>
                <option selected>Select a choice</option>
                    {courses.map((course) => (
                        <option value={course.courseName} label={course.courseName} />
                    ))}
                </select>
            </div>

            <div className="mx-auto">
                <button className="btn btn-success mx-3 my-3" type="submit">Add Student</button>
                <button className="btn btn-primary mx-3 my-3" onClick={() => navigate('/')} type="submit">Go Back</button>
            </div>
        </form>
    </div>
}

