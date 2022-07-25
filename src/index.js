import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom/client';
import App from './App';
import AllProjects from './components/all_projects/allProjects';
import AddLogForm from './components/add_long_log/AddLogForm';
const root = ReactDOM.createRoot(document.getElementById('projectlogdiv'));
root.render(

    <Container>
        <App />
        {/* <Row> */}
        {/* </Row> */}
    </Container>
);

