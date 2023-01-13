import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { courseUrl } from "./common";
import { ICourse } from "./StudentType";

const defaultCourses: ICourse[] = [];
export default function CourseList() {
    const navigate = useNavigate()
    const [courses, setCourses]: [ICourse[], (students: ICourse[]) => void] = useState(defaultCourses);

    const getCourseDetails = () => {
        axios.get(courseUrl + "GetAllCoursesName")
            .then((response) => {
                setCourses(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getCourseDetails()
    }, []);

    return <div className="my-4 mx-5">
        <div className='float-end mr-4'>
            <button className='btn btn-primary' onClick={() => navigate('AddCourse')}>Add Course</button>
        </div>
        <table className="table table-bordered">
            <thead className="table-secondary">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Course Name</th>
                    <th scope="col">Teacher Name</th>
                </tr>
            </thead>
            <tbody>
                {courses.map(course =>
                    <tr key={course.courseId}>
                        <td>{course.courseId}</td>
                        <td>{course.courseName}</td>
                        <td>{course.teacherName}</td>
                    </tr>
                )
                }</tbody>
        </table>
    </div>

}