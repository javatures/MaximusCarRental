import React from 'react';
import { Switch, Route, Link, NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import NewUserForm from './components/NewUserForm';
import CarHomepage from './components/CarHomepage';
import SigninForm from './components/SigninForm';
import ReservationForm from './components/ReservationForm'

function App() {
  return (
    <div>
      <div>
        <Navbar>
          <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Collapse>
              <Nav className="mr-auto">
                <NavItem>
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
                </NavItem>
                <NavItem>
                  <Nav.Link as={Link} to="/newAccount">Create New Account</Nav.Link>
                </NavItem>
                <NavItem>
                  <Nav.Link as={Link} to="/cars">Browse Cars</Nav.Link>
                </NavItem>
                <NavItem>
                  <Nav.Link as={Link} to="/makeReservation">Reserve a Car</Nav.Link>
                </NavItem>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div>
        <Switch>
          <Route path="/login">
            <SigninForm />
          </Route>
          <Route path="/newAccount">
            <NewUserForm />
          </Route>
          <Route path="/cars">
            <CarHomepage />
          </Route>
          <Route path="/makeReservation">
            <ReservationForm />

          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
