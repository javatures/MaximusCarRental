import React, { FC, useState, useCallback } from 'react';
import { Nav, NavDropdown, NavItem, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = (): JSX.Element => {

    return (
        <Nav defaultActiveKey="/index" as="ul" data-testid="navbar">
            <Nav.Item>Maximus</Nav.Item>
            <NavDropdown title={
                    <div className="pull-right">
                        <img className="profile-image" src={"/images/profilePic.png"}/>
                    </div>
                }
                id="profile-dropdown">
                <Dropdown.Item eventKey={"profile"} href="/profile">Profile</Dropdown.Item>
                <Dropdown.Item eventKey ={"logout"} href="/loginPage">Logout</Dropdown.Item>
                
            </NavDropdown>
        </Nav>
    );
}

export default NavBar;