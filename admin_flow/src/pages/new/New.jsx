import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import pic from "../../Final.png"
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { useState } from "react";

const New = () => {
    const [file, setFile] = useState("");
    console.log(file)
    return(
        <div className="new">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>Add new user</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : {pic}} alt=""/>
                    </div>
                    <div className="right">
                        <form>
                        <div className="formInput">
                                <label htmlFor="file">
                                    Image: <CreateNewFolderIcon className="icon"/>
                                </label>
                                <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}/>
                            </div>
                            <div className="formInput">
                                <label>Username</label>
                                <input type="text" placeholder="jhon_doe"/>
                            </div>
                            <div className="formInput">
                                <label>Name</label>
                                <input type="text" placeholder="Jhon Doe"/>
                            </div>
                            <div className="formInput">
                                <label>Email</label>
                                <input type="text" placeholder="jhondoe@gmail.com"/>
                            </div>
                            <div className="formInput">
                                <label>Phone</label>
                                <input type="text" placeholder="9594440004"/>
                            </div>
                            <div className="formInput">
                                <label>Password</label>
                                <input type="password"/>
                            </div>
                            <div className="formInput">
                                <label>Address</label>
                                <input type="text" placeholder="quite, literally a, placeholder"/>
                            </div>
                            <div className="formInput">
                                <label>Country</label>
                                <input type="text" placeholder="IND"/>
                            </div>
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New