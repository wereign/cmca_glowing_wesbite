import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import AllProjects from './components/all_projects/allProjects';
import AllLogs from './components/all_logs/allLogs';
import AddLogForm from './components/AddLogForm';
import ShortLog from './components/shortLog';
import TopBar from './components/TopBar';
import NewProject from "./components/newProject";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
        
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
                <Route path = "/home" element={<AllProjects />} />
                <Route path = "/project-logs" element = {<AllLogs />} />
                <Route path="/add-long-log" element={<AddLogForm />} />
                <Route path="/short-log" element={<ShortLog />} />
                <Route path="/new-long-project" element = {<NewProject />} />
            </Route >
        </Routes>
    </BrowserRouter>
);

