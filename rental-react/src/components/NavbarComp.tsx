import React, { FC } from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComp: FC<{isAdmin: boolean}> = (props): JSX.Element => {

    return(
        <Navbar>
          <Navbar.Brand as={Link} to="/">MaximusCarRental</Navbar.Brand>
          <Navbar.Collapse>
              <Nav className="mr-auto">
                <NavItem>
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
                </NavItem>
                <NavItem>
                  <Nav.Link as={Link} to="/makeReservation">Reserve a Car</Nav.Link>
                </NavItem>
                {props.isAdmin && 
                    <NavItem>
                        <Nav.Link as={Link} to="/adminDashboard">Admin Dashboard</Nav.Link>
                    </NavItem>
                }
              </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComp;