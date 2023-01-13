import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand mx-4" href="/">School Application</a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="/">Student List</a>
                        <a className="nav-item nav-link" href="/CourseList">Course List</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}