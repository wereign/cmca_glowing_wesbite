import React from 'react'
import { Link } from 'react-router-dom';
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
                            <Button className='log-view' variant="btn btn-primary" href="/project-logs">View Logs</Button>

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
        return <Button className='log-add' variant="primary" disabled>Add Logs</Button>
    }
    
    else {
        return <Button className='log-add' variant="primary" href="add-long-log">Add Logs</Button>
    }

}
