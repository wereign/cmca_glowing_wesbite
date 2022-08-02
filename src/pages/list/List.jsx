import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

const List = () => {
    return(
        <div className="list">
            <Sidebar/>
            <div className="list-container">
                <Navbar/>
                data table
            </div>
        </div>
    )
}

export default List