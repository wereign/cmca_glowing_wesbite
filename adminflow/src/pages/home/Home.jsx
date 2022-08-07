import Analytics from "../../components/analytics/Analytics"
import Announcement from "../../components/announcement/Announcement"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Widget from "../../components/widget/Widget"
import "./home.scss"

const Home = () => {
    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Widget type="all-projects"/>
                    <Widget type="in-progress"/>
                    <Widget type="completed"/>
                    <Widget type="users"/>
                    <Widget type="employees"/>
                </div>
                <div className="cards">
                    <Announcement/>
                    <Analytics aspect={2/1}/>
                </div>
            </div>
        </div>
    )
}

export default Home