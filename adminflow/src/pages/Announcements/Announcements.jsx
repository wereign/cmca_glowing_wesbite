import AlertList from "../../components/alert-list/AlertList"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./announcements.scss"

const Announcements = () => {
  return (
    <div className="announcements">
        <Sidebar/>
        <div className="announcements-container">
            <Navbar/>
            <div className="lol">
                <AlertList className="table"/>
            </div>
        </div>
    </div>
  )
}

export default Announcements
