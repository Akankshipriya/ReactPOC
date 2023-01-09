import { Route, Routes } from "react-router-dom";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";

export default function routing() {
    return (
        <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path='/AddStudent' element={<AddStudent />} />
        </Routes>
   
    )
}