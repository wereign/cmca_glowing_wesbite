import React from "react";
import AllProjects from "./components/all_projects/allProjects";
import ShortLog from "./components/short_term_log/shortLog.js"
import AddLogForm from "./components/add_long_log/AddLogForm.js"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>

    <AllProjects />
    <ShortLog />
    <AddLogForm />
    </div>
    
  );
}

export default App;
