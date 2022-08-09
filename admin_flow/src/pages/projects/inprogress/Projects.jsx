import "./projects.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
import InProgressDatatable from "./InProgressDatatable"
const InProgressProjects = () => {
    return(
        <div className="projects">
            <Sidebar/>
            <div className="project-container">
                {/* <Navbar/> */}
                <div className="lol">
                    <InProgressDatatable className="table"/>
                </div>
            </div>
        </div>
    )
}

export default InProgressProjects
