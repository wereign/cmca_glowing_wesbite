import React from 'react'
import { Navbar, NavDropdown ,Dropdown} from "react-bootstrap";
import ProjectOps from './projectOps';
import './components.css';

function TopBar() {
  return (
    <Navbar className='topbar, dark_topbar'>

        <Navbar.Brand className='topbar-logo'href="/">CMCA</Navbar.Brand>
        <ProjectOps />
        <Dropdown>
          <Dropdown.Toggle className='account-button' variant='default'>
            <img width="50px" src = {require("./imgbin_despicable-me-minion-rush-computer-icons-minions-png.png")} /> 
            <Dropdown.Menu className='account-button-menu, account-button-menu-dark'>
              <NavDropdown.Item className='account-button-item, account-button-item-dark'>Personal Details</NavDropdown.Item>
              <NavDropdown.Item className='account-button-item, account-button-item-dark'>Log Out</NavDropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Toggle>
        </Dropdown>
    </Navbar>
  );
}
export default TopBar;
