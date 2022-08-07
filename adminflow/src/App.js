import Home from "./pages/home/Home"
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Projects from "./pages/projects/Projects";
import Announcements from "./pages/Announcements/Announcements";
import Analysis from "./pages/Analysis/Analysis";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/> }></Route>
            <Route path="login" element={<Login/> }></Route>
            <Route path="users">
              <Route index element={<List/>}></Route>
              <Route path=":userId" element={<Single/>}></Route>
              <Route path="new" element={<New/>}></Route>
            </Route>
            <Route path="projects" element={<Projects/>}></Route>
            <Route path="announcements" element={<Announcements/>}></Route>
            <Route path="analysis" element={<Analysis/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
