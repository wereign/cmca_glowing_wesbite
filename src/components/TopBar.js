import React from 'react'
import { Navbar, NavDropdown ,Dropdown} from "react-bootstrap";
import ProjectOps from './projectOps';
import './components.css';

function TopBar() {
  return (
    <Navbar className='topbar'>

        <Navbar.Brand className='topbar-logo'href="/">CMCA</Navbar.Brand>
        <ProjectOps />
        <NavDropdown className='account-button' title= {<img width="50px" src = {require("./imgbin_despicable-me-minion-rush-computer-icons-minions-png.png")} />} >
            <NavDropdown.Item className='account-button-item'>Personal Details</NavDropdown.Item>
            <NavDropdown.Item className='account-button-item'>Log Out</NavDropdown.Item>
        </NavDropdown>
    </Navbar>
  );
}
export default TopBar;
