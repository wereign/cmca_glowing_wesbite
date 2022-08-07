import "./projects.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"

const Projects = () => {
    return(
        <div className="projects">
            <Sidebar/>
            <div className="project-container">
                <Navbar/>
                <div className="lol">
                    <Datatable className="table"/>
                </div>
            </div>
        </div>
    )
}

export default Projects
