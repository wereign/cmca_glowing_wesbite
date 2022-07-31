import React from "react"
import { Form, InputGroup, Row, Col, Button, Badge, Dropdown, DropdownButton } from 'react-bootstrap'
import { Link } from "react-router-dom"
export default function ShortLog() {
    return (

        <Form style={{ padding: "3%" }}>
            {/*  Title */}
            <Row>
                <InputGroup className="mb-3">
                    <Col style={{ padding: "0 2% 0 0" }}>
                        <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
                    </Col>

                    <Col sm={9} style={{ padding: "0 0 0 2%" }}>
                        <Form.Control type="text" />
                    </Col>

                </InputGroup>
            </Row>

            {/* Category */}
            
            <Row>
                <InputGroup className="mb-3">
                    <Col style={{ padding: "0 2% 0 0" }}>
                        <InputGroup.Text id="inputGroup-sizing-default">Theme</InputGroup.Text>
                    </Col>

                    <Col sm={9} style={{ padding: "0 0 0 2%" }}>
                        <DropdownButton variant="dark" title="Choose category">

                            <Dropdown.Item>Option 1</Dropdown.Item>
                            <Dropdown.Item>Option 2</Dropdown.Item>
                            <Dropdown.Item>Option 3</Dropdown.Item>
                            <Dropdown.Item>Option 4</Dropdown.Item>




                        </DropdownButton>
                    </Col>

                </InputGroup>

            </Row>

            {/* Dates */}
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


            {/* Description of Event */}
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
                            <Button variant="info" style={{ margin: "2%" }}>Upload Images</Button>

                            <Link  className="btn btn-success" role="button" to="/home"> Complete </Link>
                        </Col>

                    </Row>


                </Col>

            </Row>





        </Form>




    )
}
