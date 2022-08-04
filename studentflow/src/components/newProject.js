// import './newProject.css';
import { Table, Form, Row, Card, Button, Col, Container, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap'

export default function NewProject() {
    return (
        <Container>

            <Row>

                <Card className="mb-3" style={
                    { color: '#000' }
                }>

                    <Card.Img className="image-fluid" alt="CMCA LOGO HERE" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg" />
                    <Card.Body>
                        <Card.Title>
                            PROJECT DETAILS
                        </Card.Title>
                        <Button variant="secondary" >help</Button>
                    </Card.Body>
                </Card>
            </Row>

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

                {/* Team Members */}
                <Row>

                    <InputGroup className="mb-3">
                        <Col style={{ padding: "0 2% 0 0" }}>
                            <InputGroup.Text id="inputGroup-sizing-default">Team Members</InputGroup.Text>
                        </Col>

                        <Col sm={9} style={{ padding: "0 0 0 2%" }}>
                            <Form.Control type="text" />
                        </Col>

                    </InputGroup>
                </Row>

                <Row style={{ padding: "2% 0" }}>
                    <Col>

                        <Form.Group>
                            <Form.Label>Work Done</Form.Label>
                            <Form.Control type="text" as="textarea" style={{ height: '200px' }} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Button variant = "btn btn-success" href = "/project-logs">Create Project</Button>
                </Row>


            </Form>

        </Container>
    );
}
