import "./sidebar.scss"
import HomeIcon from '@mui/icons-material/Home';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import PendingIcon from '@mui/icons-material/Pending';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PersonIcon from '@mui/icons-material/Person';
import BadgeIcon from '@mui/icons-material/Badge';
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
                    <Link to="projects">
                        <FolderOpenIcon className="icon"/>
                        <span>All</span>
                    </Link>
                </li>
                <li>
                    <PendingIcon className="icon"/>
                    <span>In progress</span>
                </li>
                <li>
                    <CheckCircleIcon className="icon"/>
                    <span>Completed</span>
                </li>
                <p className="title">Services</p>
                <li>
                    <Link to="analysis">
                        <SignalCellularAltIcon className="icon"/>
                        <span>Analytics</span>
                    </Link>
                </li>
                <p className="title">Profiles</p>
                <li>
                    <Link to="users">
                        <PersonIcon className="icon"/>
                        <span>Users</span>
                    </Link>
                </li>
                <li>
                    <Link to="users">
                        <BadgeIcon className="icon"/>
                        <span>Employees</span>
                    </Link>
                </li>
                <p className="title">Alerts</p>
                <li>
                    <Link to="announcements">
                        <CampaignIcon className="icon"/>
                        <span>Announcements</span>
                    </Link>
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
        <div className="bottom">
            <div className="color-options"></div>
            <div className="color-options"></div>
        </div>
    </div>
  )
}

export default Sidebar
