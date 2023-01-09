import {useFormik} from 'formik'

interface formErrors {
    name?: string;
    email?: string;
    channel?: string;
  }

export default function FormikDemo(){
    const formik=useFormik({
        initialValues: {
            name:'',
            email:'',
            channel:''
        },
        onSubmit: values=>{
            console.log('Form data', values)
        },

        validate: values => {
            
            let errors: formErrors = {};
            if (values.name=="") {
                errors.name = "Required..!"
            }

            if (values.email=="") {
                errors.email = "Required..!"
            }

            if (values.channel=="") {
                errors.email = "Required..!"
            }
            return errors
        
        }
        
    })

    console.log('data',formik.values)
    console.log('error',formik.errors)
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label>Name</label>
                <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name}/>
                {formik.errors.name?<div>{formik.errors.name}</div>:null}

                <label>E-Mail</label>
                <input type='text' id='email' name='email' onChange={formik.handleChange} value={formik.values.email}/>
                {formik.errors.email?<div>{formik.errors.email}</div>:null}

                <label>Channel</label>
                <input type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel}/>
                {formik.errors.channel?<div>{formik.errors.channel}</div>:null}

                <button type='submit'>Submit</button>


            </form>
        </div>
    )
}