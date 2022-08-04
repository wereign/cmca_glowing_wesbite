import React from 'react'
import { Form, InputGroup, Row, Col, Button, Badge } from 'react-bootstrap'

export default function AddLogForm() {
    return (

        <Form style={{padding:"3%"}}>
            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Start Date
                        </InputGroup.Text>
                        <Form.Control
                            type='date'
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default" />
                    </InputGroup>
                </Col>

                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            End Date
                        </InputGroup.Text>
                        <Form.Control
                            type='date'
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default" />
                    </InputGroup>
                </Col>
            </Row>



            <Row style={{ padding: "2% 0" }}>
                <Col>

                    <Form.Group>
                        <Form.Label>Work Done</Form.Label>
                        <Form.Control type="text" as="textarea" style={{ height: '200px' }} />
                    </Form.Group>
                </Col>
            </Row>

            <Row style={{ padding: "2% 0" }}>
                <Col sm={3}>
                    <h5>
                        <Badge>Images Uploaded</Badge>
                    </h5>
                </Col>

                <Col sm={9}>
                    <h5>
                        <Badge variant="success">
                            img1 img2 img4
                        </Badge>

                    </h5>
                </Col>
            </Row>

            <Row>
                <Col></Col>
                <Col>
                    <Row>
                        <Col>
                            <Button variant="info" style={{margin:"2%"}}>Upload Images</Button>

                            <Button variant="success" style={{margin:"2%"}} href="project-logs"> Complete Log</Button>
                        </Col>

                    </Row>
                
                
                </Col>

            </Row>





        </Form>




    )
}
