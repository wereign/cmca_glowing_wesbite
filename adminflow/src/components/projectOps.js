import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import './components.css'

export default function ProjectOps() {
    return (
        <Container>
            <Row>
                <Col>
                    {/* <Link className="btn btn-primary" role="button" to="/all-projects">All Projects </Link> */}
                </Col>

                <Col>
                    <Dropdown>
                        <Dropdown.Toggle className='new-project-toggle' variant="default">
                            New Project
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='new-project-toggle-menu'>
                            <Dropdown.Item className='new-project-toggle-item' href="/short-log">Short</Dropdown.Item>
                            <Dropdown.Item className='new-project-toggle-item' href="/new-long-project">Long</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </Container>
    )
}
