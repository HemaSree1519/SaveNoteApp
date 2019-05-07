import React, { Component } from 'react';
import './style.css';
import {Collapse, Label, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
import Routes from "../Routes";
import {LinkContainer} from "react-router-bootstrap";

class App extends Component {
  render() {
      return (
          <div className="App container">
              <Navbar className="navbar">
                  <NavbarBrand>
                      <Label className="link">Save Note App</Label>
                  </NavbarBrand>
                  <NavbarToggler/>
                  <Collapse isOpen={true}>
                  <Nav>
                      <LinkContainer to="/signup">
                      <NavItem>
                          <NavLink href="/signup" className="link">Signup</NavLink>
                      </NavItem>
                      </LinkContainer>
                      <LinkContainer to="/login">
                      <NavItem>
                          <NavLink href="/login" className="link">Login</NavLink>
                      </NavItem>
                      </LinkContainer>
                  </Nav>
                  </Collapse>
              </Navbar>
              <Routes/>
          </div>
      );
  }
}

export default App;
