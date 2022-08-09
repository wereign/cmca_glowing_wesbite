import "./projects.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import AllDatatable from "../../components/datatable/AllDatatable"

const Projects = () => {
    return(
        <div className="projects">
            <Sidebar/>
            <div className="project-container">
                {/* <Navbar/> */}
                <div className="lol">
                    <AllDatatable className="table"/>
                </div>
            </div>
        </div>
    )
}

export default Projects
