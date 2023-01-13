import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { formErrors, ICourse, IStudent } from "./StudentType";
import { baseUrl, courseUrl } from "./common";

const defaultCourses: ICourse[] = [];

export default function EditStudent() {

    const [student, setStudent] = useState<IStudent>();

    const getStudentDetail = (id: number) => {
        axios.get(baseUrl + "GetStudentDetail?id=" + id)
            .then((response) => {
                setStudent(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getCourseDetails()
        getStudentDetail(Number(localStorage.getItem('StudentID')))
    }, []);


    const navigate = useNavigate()
    const initialValues = {
        stdname: student?.name,
        contactno: student?.contactNo,
        email: student?.email,
        std: student?.std,
        coursename: student?.courseName
    };

    const formik = useFormik({
        initialValues,

        onSubmit: values => {
            axios
                .put(baseUrl + "UpdateStudent?id=" + localStorage.getItem('StudentID'), data)
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
            if (data.Name == null || data.Name=="") {
                errors.stdname = "Name is required"
            }
            else if (data.Name.length <= 2) {
                errors.stdname = "Name should have more than 2 char! Please enter valid name"
            }

            if (data.ContactNo == null || data.ContactNo=="") {
                errors.contactno = "Contact No is required"
            }
            else if (!/^[7-9]\d{9}$/.test(data.ContactNo)) {
                errors.contactno = "Your contact no should be 10 digits starting with 7 or 8 or 9"
            }

            if (data.Email == null || data.Email=="") {
                errors.email = "Email is required"
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.Email)) {
                errors.email = 'Invalid ! Please enter a valid email address';
            }

            if (data.Std == null || data.Std=="") {
                errors.std = "Std No is required"
            }
            else if ((Number(data.Std) < 1) || (Number(data.Std) > 12)) {
                errors.std = "Std should we in between 1 and 12"
            }
            else if (!/^[0-9]+$/.test(data.Std)) {
                errors.std = "Std can only be numeric! Please enter a valid std"
            }
            return errors
        }
    });

    const data = {
        Name: formik.values.stdname != null ? formik.values.stdname : student?.name,
        ContactNo: formik.values.contactno != null ? formik.values.contactno : student?.contactNo,
        Email: formik.values.email != null ? formik.values.email : student?.email,
        Std: formik.values.std != null ? formik.values.std : student?.std,
        CourseName: formik.values.coursename != null ? formik.values.coursename : student?.courseName,
        course: null
    }

    const [courses, setcourse]: [ICourse[], (students: ICourse[]) => void] = useState(defaultCourses);

    const getCourseDetails = () => {
        axios.get(courseUrl + "GetAllCoursesName")
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
                <label className="form-label float-start">Student Id : </label>
                <input type='text' name='stdname' className="form-control" defaultValue={student?.studentId} disabled />
            </div>

            <div className="mx">
                <label className="form-label float-start">Student Name : </label>
                <input type='text' name='stdname' className="form-control" defaultValue={student?.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.stdname && formik.touched.stdname ? <div className="alert alert-danger">{formik.errors.stdname}</div> : null}
            </div>

            <div>
                <label className="form-label float-start">Contact No : </label>
                <input type='text' name='contactno' defaultValue={student?.contactNo} onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" />
                {formik.errors.contactno && formik.touched.contactno ? <div className="alert alert-danger">{formik.errors.contactno}</div> : null}
            </div>

            <div>
                <label className="form-label float-start">Email : </label>
                <input type='text' name='email' className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={student?.email} />
                {formik.touched.email && formik.errors.email ? <div className="alert alert-danger">{formik.errors.email}</div> : null}
            </div>

            <div>
                <label className="form-label float-start">Std: </label>
                <input type='text' name='std' className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} defaultValue={student?.std} />
                {formik.errors.std && formik.touched.std ? <div className="alert alert-danger">{formik.errors.std}</div> : null}
            </div>

            <div>
                <label className="form-label float-start">Course Name </label>
                <select className="form-select" aria-label="Default select example" name='coursename' onChange={formik.handleChange}>
                    <option selected>{student?.courseName}</option>
                    {courses.map((course) => (
                        <option value={course.courseName} label={course.courseName} />
                    ))}
                </select>
            </div>

            <div className="mx-auto">
                <button className="btn btn-success mx-3 my-3" type="submit">Update Student</button>
                <button className="btn btn-primary mx-3 my-3" onClick={() => navigate('/')} type="submit">Go Back</button>
            </div>
        </form>
    </div>

}