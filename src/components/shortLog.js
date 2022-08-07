import React from "react"
import { Form, InputGroup, Row, Col, Button, Badge, Dropdown, DropdownButton } from 'react-bootstrap'
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import { Link } from "react-router-dom"
import './components.css';

export default function ShortLog() {
    return (

        <Form style={{ padding: "3%" }}>
            {/*  Title */}
            <Row>
                <InputGroup className="mb-3">
                    <Col style={{ padding: "0 2% 0 0" }}>
                        <InputGroup.Text id="inputGroup-sizing-default" className="form-config-dark">Name</InputGroup.Text>
                    </Col>

                    <Col sm={9} style={{ padding: "0 0 0 2%" }}>
                        <Form.Control type="text" className='form-input-dark' />
                    </Col>

                </InputGroup>
            </Row>

            {/* Category */}
            
            <Row>
                <InputGroup className="mb-3">
                    <Col style={{ padding: "0 2% 0 0" }}>
                        <InputGroup.Text id="inputGroup-sizing-default" className='form-config-dark'>Theme</InputGroup.Text>
                    </Col>

                    <Col sm={9} style={{ padding: "0 0 0 2%" }}>
                        <Dropdown>
                            <DropdownToggle variant='dark' className='main-page-dropdown, main-page-dropdown-dark'>Choose category</DropdownToggle>
                            
                            <DropdownMenu className="main-page-dropdown-menu-dark">
                                <Dropdown.Item className="main-page-dropdown-item-dark">Seminar/Talk</Dropdown.Item>
                                <Dropdown.Item className='main-page-dropdown-item-dark'>Awareness Campaign</Dropdown.Item>
                                <Dropdown.Item className='main-page-dropdown-item-dark'>Cleanliness Drive</Dropdown.Item>
                                <Dropdown.Item className='main-page-dropdown-item-dark'>Tree Plantation Drive</Dropdown.Item>
                            </DropdownMenu>
                            
                        </Dropdown>
                    </Col>

                </InputGroup>

            </Row>

            {/* Dates */}
            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default" className="form-config-dark">
                            Start Date
                        </InputGroup.Text>
                        <Form.Control
                            className="form-input-dark"
                            type='date'
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default" />
                    </InputGroup>
                </Col>

                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default" className="form-config-dark">
                            End Date
                        </InputGroup.Text>
                        <Form.Control
                            className="form-input-dark"
                            type='date'
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default" />
                    </InputGroup>
                </Col>
            </Row>


            {/* Description of Event */}
            <Row className='label-dark' style={{ padding: "2% 0" }}>
                <Col>

                    <Form.Group>
                        <Form.Label>Work Done</Form.Label>
                        <Form.Control className="form-input-dark" type="text" as="textarea" style={{ height: '200px' }} />
                    </Form.Group>
                </Col>
            </Row>
            
            <Row style={{ padding: "2% 0" }}>
                <Col sm={3}>
                    <h5>
                        <Badge className="badge-property, badge-property-dark">Images Uploaded</Badge>
                    </h5>
                </Col>

                <Col sm={9}>
                    <h5>
                        <Badge variant="success" className="badge-property, badge-property-dark">
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
                            <Button className="upload-button-dark" variant="btn btn-outline-danger" style={{ margin: "2%" }}>Upload Images</Button>

                            <Button className="complete-button-dark" variant="btn btn-outline-warning" style={{ margin: "2%" }} href='/'>Complete</Button>
                        </Col>

                    </Row>


                </Col>

            </Row>





        </Form>




    )
}
