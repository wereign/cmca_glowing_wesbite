import "./widget.scss"
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import PendingIcon from '@mui/icons-material/Pending';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonIcon from '@mui/icons-material/Person';
import BadgeIcon from '@mui/icons-material/Badge';

const Widget = ({type}) => {
  let data;

  switch(type){
    case "all-projects":
      data={
        title:"All Projects",
        icon: (
          <FolderOpenIcon className="icon"/>
        )
      };
      break;
    
    case "in-progress":
      data={
        title:"In Progress",
        icon: (
          <PendingIcon className="icon"/>
        )
      };
      break;

    case "completed":
      data={
        title:"Completed Projects",
        icon: (
          <CheckCircleIcon className="icon"/>
        )
      };
      break;

    case "users":
      data={
        title:"All Users",
        icon: (
          <PersonIcon className="icon"/>
        )
      };
      break;

    case "employees":
      data={
        title:"Employees",
        icon: (
          <BadgeIcon className="icon"/>
        )
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            {data.icon}
            <span className="counter">18,023</span>
        </div>
    </div>
  )
}

export default Widget
