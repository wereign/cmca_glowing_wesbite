import React from 'react'
import { Button, Container, Table, Row, Col } from 'react-bootstrap';
import ProjectRow from './LogRow';

export default function AllLogs() {
    return (
        <Container>
            <Row>
                <div style={{ padding: "2%" }}>

                    <Table className='allProjects' responsive style={{ padding: "2%" }}>
                        <thead>
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
                            <Button variant="btn btn-outline-primary" href="/add-long-log">Add Log</Button>
                        </Col>
                        <Col>
                            <Button variant="btn btn-outline-danger">Delete Log</Button>
                        </Col>
                        <Col>
                            <Button variant="btn btn-outline-success" href="/home">Complete Project</Button>
                        </Col>

                    </Row>

                </Col>

            </Row>
        </Container>



    );
}

