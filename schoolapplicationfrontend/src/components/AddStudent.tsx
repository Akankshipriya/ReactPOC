import "./AddStudent.css"
type Editprop={
    lol:{
    studentname:string
    contactno:string
    std:string
    }

}
const EditStudent = (props:Editprop) => {
    return <>
        <form id="add">
            <div>
                <label>Student Name : </label>
                <input type="text" defaultValue={props.lol.studentname}/>
            </div>

            <div>
                <label>DOB : </label>
                <input type="text" />
            </div>

            <div>

                <label>Contact No : </label>
                <input type="text" />
            </div>

            <div>

                <label>Email : </label>
                <input type="text" />
            </div>

            <div>

                <label>Std: </label>
                <input type="text" />
            </div>


        </form>

    </>
};

export default EditStudent;