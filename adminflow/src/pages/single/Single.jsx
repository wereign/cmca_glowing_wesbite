import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Analytics from "../../components/analytics/Analytics"
import pic from "../../Final.png"

const Single = () => {
    return(
        <div className="single">
            <Sidebar/>
            <div className="singlecontainer">
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <div className="editButton">edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img className="itemimg" src= {pic} alt=""/>
                            <div className="details">
                                <h1 className="itemTitle">Jane Doe</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">janedoe@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">9594440004</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">Her house, her area, Earth</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">IND</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Analytics aspect={3/1}/>
                    </div>
                </div>
                <div className="bottom">

                </div>
            </div>
        </div>
    )
}

export default Single