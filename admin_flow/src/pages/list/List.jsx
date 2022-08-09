import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import UserList from "../../components/user-list/UserList"

const List = () => {
    return(
        <div className="list">
            <Sidebar/>
            <div className="list-container">
                {/* <Navbar/> */}
                <div className="lol">
                    <UserList className="table"/>
                </div>
            </div>
        </div>
    )
}

export default List