import React, { FC } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './gStyle.css';


const NavbarComp: FC<{ isAdmin: boolean, isLoggedIn: boolean }> = (props): JSX.Element => {

  return (
    <Navbar data-testid="navbarcomp" className="dStyle">
      <Navbar.Brand as={Link} to="/" className="navColor">MaximusCarRental</Navbar.Brand>
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <NavItem>
            <Nav.Link as={Link} to="/login" className="navColor">Login</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link as={Link} to="/makeReservation" className="navColor">Reserve a Car</Nav.Link>
          </NavItem>
          {(props.isLoggedIn && !props.isAdmin) &&
            <NavItem>
              <Nav.Link as={Link} to="/renterDashboard" className="navColor">Renter Dashboard</Nav.Link>
            </NavItem>
          }
          {props.isAdmin &&
            <NavItem>
              <Nav.Link as={Link} to="/adminDashboard" className="navColor">Admin Dashboard</Nav.Link>
            </NavItem>
          }
          <NavItem>
            <Nav.Link as={Link} to="/logout" className="navColor">Logout</Nav.Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComp;