import Home from "./pages/home/Home"
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Projects from "./pages/projects/Projects";
import CompleteProjects from "./pages/projects/complete/CompleteProjects";
import InProgressProjects from "./pages/projects/inprogress/Projects";
import Announcements from "./pages/Announcements/Announcements";
import Analysis from "./pages/Analysis/Analysis";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/> }></Route>
            <Route path="users">
              <Route index element={<List/>}></Route>
            </Route>
            <Route path="single" element={<Single/>}></Route>
            <Route path="new" element={<New/>}></Route>
            <Route path="projects" element = {<Projects />} />
            <Route path="completed" element={<CompleteProjects />}/>
            <Route path="inprogress" element={<InProgressProjects />} />
            <Route path="announcements" element={<Announcements/>}></Route>
            <Route path="analysis" element={<Analysis/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
