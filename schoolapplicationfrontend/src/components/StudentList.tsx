import "./StudentList.css"
const StudentList = () => {
    return (
        <div>
            <table id="customers">
                <tr>
                    <th>Student</th>
                    <th>Contact</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>
                        <div id="actions">
                        <input type="button" value="View"/>
                        <input type="button" value="Edit"/>
                        <input type="button" value="Delete"/>
                  
                        </div>
                    </td>
                </tr>
            </table>


        </div>
    )
}

export default StudentList