import { useNavigate } from "react-router-dom";
import "./Home.css";
import StudentList from "./StudentList";

const Home=() => {
    const navigate=useNavigate()
    return (
    <div>
        <div id="nav">
        <h1>School Application</h1>
        </div>
        <div id="Studenttable">
        <button onClick={()=>navigate('AddStudent')} >Add Student</button>
        <StudentList/>
        </div>
        
    </div>
    );
};

export default Home;