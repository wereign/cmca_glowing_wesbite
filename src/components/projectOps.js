import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'

export default function ProjectOps() {
    return (
        <Container>
            <Row>
                <Col>
                    {/* <Link className="btn btn-primary" role="button" to="/all-projects">All Projects </Link> */}
                </Col>

                <Col>
                    <Dropdown>
                        <Dropdown.Toggle variant="default">
                            New Project
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/short-log">Short</Dropdown.Item>
                            <Dropdown.Item href="/new-long-project">Long</Dropdown.Item>
                            
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </Container>
    )
}
