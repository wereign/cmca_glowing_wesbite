import React from 'react'
// import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap';
import '../components.css';

export default function ProjectRow({ name, duration, complete }) {
    return (
        <>


            <td>
                {name}
            </td>

            <td>
                {displayStatus(complete)}
            </td>

            <td>
                {duration}
            </td>


            <td>
                <Container>
                    <Row>
                        <Col>
                            <Button className='view-log, view-log-dark' variant="btn btn-outline-success" href="/project-logs">View Logs</Button>

                        </Col>
                        <Col>
                            {displayAddLog(complete)}
                        </Col>
                    </Row>
                </Container>

            </td>

        </>
    )
}

function displayStatus(complete) {

    if (complete) {
        return "COMPLETE"
    }

    else {
        return "IN-PROGRESS"
    }

}

function displayAddLog(complete) {

    if (complete) {
        return <Button className='red-button, red-button-dark' variant="btn btn-outline-danger" disabled>Add Logs</Button>
    }
    
    else {
        return <Button className='red-button, red-button-dark' variant='btn btn-outline-danger' href="/add-long-log">Add Logs</Button>
    }

}
