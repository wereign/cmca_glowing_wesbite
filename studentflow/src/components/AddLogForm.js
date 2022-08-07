import React from 'react'
import { Form, InputGroup, Row, Col, Button, Badge } from 'react-bootstrap'

export default function AddLogForm() {
    return (

        <Form style={{padding:"3%"}}>
            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default" className='form-config-dark'>
                            Start Date
                        </InputGroup.Text>
                        <Form.Control
                            className='form-input-dark'
                            type='date'
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default" />
                    </InputGroup>
                </Col>

                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default" className='form-config-dark'>
                            End Date
                        </InputGroup.Text>
                        <Form.Control
                            className='form-input-dark'
                            type='date'
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default" />
                    </InputGroup>
                </Col>
            </Row>



            <Row style={{ padding: "2% 0" }}>
                <Col>

                    <Form.Group>
                        <Form.Label className='label-dark'>Work Done</Form.Label>
                        <Form.Control className='form-input-dark' type="text" as="textarea" style={{ height: '200px' }} />
                    </Form.Group>
                </Col>
            </Row>

            <Row style={{ padding: "2% 0" }}>
                <Col sm={3}>
                    <h5>
                        <Badge className='badge-property-dark'>Images Uploaded</Badge>
                    </h5>
                </Col>

                <Col sm={9}>
                    <h5>
                        <Badge variant="success" className='badge-property-dark '>
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
                            <Button className='upload-button-dark' variant="btn btn-outline-danger" style={{margin:"2%"}}>Upload Images</Button>

                            <Button className='complete-button-dark' variant="btn btn-outline-warning" style={{margin:"2%"}} href='/'> Complete Log</Button>
                        </Col>

                    </Row>
                
                
                </Col>

            </Row>





        </Form>




    )
}
