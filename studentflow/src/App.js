import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./components/TopBar";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <TopBar />
      {/* <NewProject /> */}
      <Outlet />
    </>    
  );
}

export default App;
