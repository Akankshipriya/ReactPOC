import axios from "axios";
import { ErrorMessage, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { baseUrl, createUrl } from "./common";
import { formErrors } from "./StudentType";

export default function AddStudent() {
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
                .post(createUrl, {Name:values.stdname,ContactNo:values.contactno,Email:values.email,Std:values.std})
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
                <label className="form-label float-start">Student Name : </label>
                <input type='text' name='stdname' className="form-control" onChange={formik.handleChange} value={formik.values.stdname} />
                {formik.errors.stdname ? <div className="alert alert-danger">{formik.errors.stdname}</div> : null}
            </div>

            <div>

                <label className="form-label float-start">Contact No : </label>
                <input type='text' name='contactno' onChange={formik.handleChange} className="form-control" value={formik.values.contactno} />
                {formik.errors.contactno ? <div className="alert alert-danger">{formik.errors.contactno}</div> : null}
            </div>

            <div>

                <label className="form-label float-start">Email : </label>
                <input type='text' name='email' className="form-control" onChange={formik.handleChange} value={formik.values.email} />

            </div>

            <div>

                <label className="form-label float-start">Std: </label>
                <input type='text' name='std' className="form-control" onChange={formik.handleChange} value={formik.values.std} />
            </div>
            <div className="mx-auto">
                <button className="btn btn-success mx-3 my-3" type="submit">Add Student</button>
                <button className="btn btn-primary mx-3 my-3" onClick={() => navigate('/')} type="submit">Go Back</button>
            </div>
        </form>
    </div>
}

