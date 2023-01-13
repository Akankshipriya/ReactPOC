import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { courseUrl } from "./common";
import * as Yup from 'yup'

export default function AddCourse() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            coursename: "",
            teachername: ""
        },

        validationSchema: Yup.object({
            coursename: Yup.string().min(3).required('Course Name is required and should be at least 3 char'),
            teachername: Yup.string().min(3).required('Teacher Name is required and should be at least 3 char')
        }),

        onSubmit: values => {
            axios
                .post(courseUrl + "AddCourse", data)
                .then((res) => {
                    window.alert("New Record Inserted")
                    navigate('/')
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    });

    const data = {
        CourseName: formik.values.coursename,
        TeacherName: formik.values.teachername,
    }
    return <div className="mt-5 mx-5">
        <form onSubmit={formik.handleSubmit}>
            <div className="mx">
                <label className="form-label float-start">Course Name : </label>
                <input type='text' name='coursename' className="form-control" placeholder="Enter Course Name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.coursename} />
                {formik.errors.coursename && formik.touched.coursename ? <div className="alert alert-danger">{formik.errors.coursename}</div> : null}
            </div>

            <div className="mx">
                <label className="form-label float-start">Teacher Name : </label>
                <input type='text' name='teachername' className="form-control" placeholder="Enter Teacher Name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.teachername} />
                {formik.errors.teachername && formik.touched.teachername ? <div className="alert alert-danger">{formik.errors.teachername}</div> : null}
            </div>

            <div className="mx-auto">
                <button className="btn btn-success mx-3 my-3" type="submit">Add Course</button>
                <button className="btn btn-primary mx-3 my-3" onClick={() => navigate('/CourseList')} type="submit">Go Back</button>
            </div>
        </form>
    </div>
}
