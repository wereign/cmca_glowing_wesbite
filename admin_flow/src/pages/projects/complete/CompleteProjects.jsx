import "./projects.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
import CompleteDatatable from "./CompleteDatatable"
const CompleteProjects = () => {
    return(
        <div className="projects">
            <Sidebar/>
            <div className="project-container">
                {/* <Navbar/> */}
                <div className="lol">
                    <CompleteDatatable className="table"/>
                </div>
            </div>
        </div>
    )
}

export default CompleteProjects
