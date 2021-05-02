import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import RenterForm from './components/RenterForm';

function App() {
  return (
    <div>
      <div>
        <Navbar>
          <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Collapse>
              <Nav className="mr-auto">
                <NavItem>
                  <Nav.Link as={Link} to="/newRenterAccount">Create New Account</Nav.Link>
                </NavItem>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div>
        <Switch>
          <Route path="/newRenterAccount">
            <RenterForm />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
