// import './newProject.css';
import { Table, Form, Row, Card, Button, Col, Container, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap'
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import './components.css';

export default function NewProject() {
    return (
        <Container>

            <Row>

                <Card className="mb-3" style={
                    { color: '#000' , backgroundColor: '#232320'}
                }>

                    <Card.Img className="image-fluid" alt="CMCA LOGO HERE" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg" />
                    <Card.Body>
                        <Card.Title className='label-dark'>
                            PROJECT DETAILS
                        </Card.Title>
                        <Button variant="btn btn-danger" className='red-button, help-button-dark' >help</Button>
                    </Card.Body>
                </Card>
            </Row>

            <Form style={{ padding: "3%" }}>
                {/*  Title */}
                <Row>
                    <InputGroup className="mb-3">
                        <Col style={{ padding: "0 2% 0 0" }}>
                            <InputGroup.Text id="inputGroup-sizing-default" className="form-config-dark">Name</InputGroup.Text>
                        </Col>

                        <Col sm={9} style={{ padding: "0 0 0 2%" }}>
                            <Form.Control className="form-input-dark" type="text" />
                        </Col>

                    </InputGroup>
                </Row>

                {/* Category */}

                <Row>
                    <InputGroup className="mb-3">
                        <Col style={{ padding: "0 2% 0 0" }}>
                            <InputGroup.Text id="inputGroup-sizing-default" className="form-config-dark">Theme</InputGroup.Text>
                        </Col>

                        <Col sm={9} style={{ padding: "0 0 0 2%" }}>
                            <Dropdown>
                                <DropdownToggle variant="dark" className='main-page-dropdown, main-page-dropdown-dark'>Choose category</DropdownToggle>
                                <DropdownMenu className='main-page-dropdown-menu-dark'>
                                    <Dropdown.Item className='main-page-dropdown-item-dark'>Seminar/Talk</Dropdown.Item>
                                    <Dropdown.Item className='main-page-dropdown-item-dark'>Awareness Campaign</Dropdown.Item>
                                    <Dropdown.Item className='main-page-dropdown-item-dark'>Cleanliness Drive</Dropdown.Item>
                                    <Dropdown.Item className='main-page-dropdown-item-dark'>Tree Plantation Drive</Dropdown.Item>
                                </DropdownMenu>
                            </Dropdown>
                        </Col>

                    </InputGroup>
                </Row>

                {/* Team Members */}
                <Row>

                    <InputGroup className="mb-3">
                        <Col style={{ padding: "0 2% 0 0" }}>
                            <InputGroup.Text id="inputGroup-sizing-default" className="form-config-dark">Team Members</InputGroup.Text>
                        </Col>

                        <Col sm={9} style={{ padding: "0 0 0 2%" }}>
                            <Form.Control className="form-input-dark" type="text" />
                        </Col>

                    </InputGroup>
                </Row>

                <Row style={{ padding: "2% 0" }}>
                    <Col>

                        <Form.Group>
                            <Form.Label className='label-dark'>Work Done</Form.Label>
                            <Form.Control className="form-input-dark" type="text" as="textarea" style={{ height: '200px' }} />
                        </Form.Group>
                    </Col>
                </Row>
                <Col>
                    {/* <Row> */}
                        <Button style={{marginLeft:'33em'}} variant = "btn btn-outline-warning" className='complete-button, complete-button-dark' href = "/project-logs">Create Project</Button>
                    {/* </Row> */}
                </Col>

            </Form>

        </Container>
    );
}
