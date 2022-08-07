import React from 'react'
import { Button, Container, Table, Row, Col } from 'react-bootstrap';
import ProjectRow from './LogRow';

export default function AllLogs() {
    return (
        <Container>
            <Row>
                <div style={{ padding: "2%" }}>

                    <Table className='allProjects, all-projects-dark' responsive style={{ padding: "2%" }}>
                        <thead className='all-projects-head-dark'>
                            <tr>
                                <th className='primary'>
                                    Log
                                </th>
                                <th>
                                    Duration
                                </th>
                                <th>
                                    Operation
                                </th>
                            </tr>

                        </thead>

                        <tbody>
                            <tr>
                                <ProjectRow name="Week 1" duration="Dates Here"></ProjectRow>
                            </tr>

                            <tr>
                                <ProjectRow name="Week 2" duration="Set of Dates Here"></ProjectRow>
                            </tr>

                            <tr>
                                <ProjectRow name="Week 3" complete={false} duration="Dates Here"></ProjectRow>
                            </tr>



                        </tbody>


                    </Table>

                </div >

            </Row>

            <Row>
                <Col></Col>
                <Col>
                    <Row>
                        <Col>
                            <Button variant="btn btn-outline-primary" className='add-log-ap-dark' href="/add-long-log">Add Log</Button>
                        </Col>
                        <Col>
                            <Button variant="btn btn-outline-danger" className='red-button, red-button-dark'>Delete Log</Button>
                        </Col>
                        <Col>
                            <Button variant="btn btn-outline-success" className='complete-button, complete-button-dark' href="/">Complete Project</Button>
                        </Col>

                    </Row>

                </Col>

            </Row>
        </Container>



    );
}

