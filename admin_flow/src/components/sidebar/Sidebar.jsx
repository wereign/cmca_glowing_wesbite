import "./sidebar.scss"
import HomeIcon from '@mui/icons-material/Home';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import PendingIcon from '@mui/icons-material/Pending';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import CampaignIcon from '@mui/icons-material/Campaign';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">CMCA ADMIN</span>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <li>
                    <Link to="/">
                        <HomeIcon className="icon"/>
                        <span>Home</span>
                    </Link>
                </li>
                <p className="title">Projects</p>
                <li>
                        <a  href="/projects">
                            <FolderOpenIcon className="icon"/>
                            <span>All</span>
                        </a>
                </li>
                <li>
                    <a href="inprogress">
                        <PendingIcon className="icon"/>
                        <span>In progress</span>
                    </a>
                </li>
                <li>
                    <a href="completed">
                        <CheckCircleIcon className="icon"/>
                        <span>Completed</span>
                    </a>
                </li>
                        
                <p className="title">Services</p>
                <li>
                     <a href="analysis">
                        <SignalCellularAltIcon className="icon"/>
                        <span>Analytics</span>
                    </a>
                </li>
                <p className="title">Profiles</p>
                <li>
                    <a href="users">
                        <PersonIcon className="icon"/>
                        <span>Users</span>
                    </a>
                </li>
                <li>
                    <a href="users">
                        <SchoolIcon className="icon"/>
                        <span>Alumni</span>
                    </a>
                </li>
                <p className="title">Alerts</p>
                <li>
                    <a href="announcements">
                        <CampaignIcon className="icon"/>
                        <span>Announcements</span>
                    </a>
                </li>
                <p className="title">Tools</p>
                <li>
                    <SettingsIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <hr className="line" /> 
                <li>
                    <LogoutIcon className="icon-out"/>
                    <span className="out">Log out</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar
