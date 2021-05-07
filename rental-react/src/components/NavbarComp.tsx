import React, { FC } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComp: FC<{ isAdmin: boolean, isLoggedIn: boolean }> = (props): JSX.Element => {

  return (
    <Navbar data-testid="navbarcomp">
      <Navbar.Brand as={Link} to="/">MaximusCarRental</Navbar.Brand>
      <Navbar.Collapse>
        <Nav className="mr-auto">
          {!props.isLoggedIn &&
            <NavItem>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </NavItem>
          }
          {(props.isLoggedIn && !props.isAdmin) &&
            <NavItem>
              <Nav.Link as={Link} to="/makeReservation">Reserve a Car</Nav.Link>
            </NavItem>
          }
          {(props.isLoggedIn && !props.isAdmin) &&
            <NavItem>
              <Nav.Link as={Link} to="/renterDashboard">Renter Dashboard</Nav.Link>
            </NavItem>
          }
          {props.isAdmin &&
            <NavItem>
              <Nav.Link as={Link} to="/adminDashboard">Admin Dashboard</Nav.Link>
            </NavItem>
          }
          {props.isLoggedIn &&
            <NavItem>
              <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
            </NavItem>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComp;