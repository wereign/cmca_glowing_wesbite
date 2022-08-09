import "./widget.scss"
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import PendingIcon from '@mui/icons-material/Pending';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import {Link} from "react-router-dom";

const Widget = ({type}) => {
  let data;

  switch(type){
    case "all-projects":data={
        kink: "projects",
        title:"All Projects",
        icon: (
          <FolderOpenIcon className="folder"/>
        )
      };
      break;
    
    case "in-progress":
      data={
        kink: "inprogress",
        title:"In Progress",
        icon: (
          <PendingIcon className="progress"/>
        )
      };
      break;

    case "completed":
      data={
        kink: "completed",
        title:"Completed Projects",
        icon: (
          <CheckCircleIcon className="completed"/>
        )
      };
      break;

    case "users":
      data={
        kink: "users",
        title:"All Users",
        icon: (
          <PersonIcon className="icon"/>
        )
      };
      break;

    case "employees":
      data={
        kink: "users",
        title:"Alumni",
        icon: (
          <SchoolIcon className="icon"/>
        )
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
        <div className="left">
            <Link to={data.kink}><span className="title">{data.title}</span></Link>
            {data.icon}
            <span className="counter">18,023</span>
        </div>
    </div>
  )
}

export default Widget
