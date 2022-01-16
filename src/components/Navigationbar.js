import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
import { useState, useEffect } from 'react'
// import {BrowserRouter as Router,Route} from 'react-router-dom'
// import {Link} from 'react-router-dom'
import { Link } from "@reach/router"

const Navigationbar = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar style={{backgroundColor: "blue"}} expand="md">
                <NavbarBrand href="/"><Link to="/dashboard"  style={{color: "white", textDecoration: "none"}}>HOSPITAL WEB APP</Link></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar> 
                        <NavItem>
                            <NavLink href="/components/" style={{color: "white"}}><Link to="/dashboard"  style={{color: "white", textDecoration: "none"}}>Dashboard</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/" style={{color: "white"}}><Link to="/dashboard"  style={{color: "white", textDecoration: "none"}}>Appointment</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/" style={{color: "white"}}><Link to="/dashboard"  style={{color: "white", textDecoration: "none"}}>Sign out</Link></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Navigationbar
