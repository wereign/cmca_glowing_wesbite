import React from 'react'
import { Navbar, NavDropdown } from "react-bootstrap";

import ProjectOps from './projectOps';

export default function TopBar() {
  return (
    <Navbar  bg="light">

        <Navbar.Brand href="/home">CMCA</Navbar.Brand>
        <ProjectOps />
        <NavDropdown title= {<img width="50px" src = {require("./imgbin_despicable-me-minion-rush-computer-icons-minions-png.png")} />} >
            <NavDropdown.Item>Personal Details</NavDropdown.Item>
            <NavDropdown.Item>Log Out</NavDropdown.Item>
        </NavDropdown>
    </Navbar>
  )
}
