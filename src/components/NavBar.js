import React from 'react';
import { NavLink } from 'react-router-dom'
import '../App.css';
import { Nav, NavDropdown, Button, Navbar, Form, FormControl } from 'react-bootstrap'
import { MDBBtn } from "mdbreact";


class NavBar extends React.Component {

  
  render() {
    
    return(
       <div>
       <nav class="fixed-nav-bar">
<Navbar bg="light" expand="lg"  variant="dark">
{/* <img className="icon" src="https://www.pngfind.com/pngs/m/5-56904_white-graduation-cap-png-transparent-png.png" height="40" className="d-inline-block align-top"
      alt="mdb logo"></img> */}
  <Navbar.Brand  href="/"><i class="fas fa-user-graduate"></i>  MasterClass</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto text-white">
      <NavDropdown title="My Class" id="basic-nav-dropdown">
        <NavDropdown.Item href="/standardslist">Teach a Standard</NavDropdown.Item>
        <NavDropdown.Item href="/data">Data</NavDropdown.Item>
        <NavDropdown.Item href="/myclass">Class Summary</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/addstudent">Add a Student</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Resources" id="basic-nav-dropdown">
      <NavDropdown.Item href="/standardslist">Common Core Standards</NavDropdown.Item>
        <NavDropdown.Item href="/learningobjectives">Curriculum Guides</NavDropdown.Item>
        <NavDropdown.Item href="/videos">Video Tutorials</NavDropdown.Item>
        <NavDropdown.Item href="/resources">Outside Resources</NavDropdown.Item>
        <NavDropdown.Item href="/questionstems">Question Stems</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Lessons" id="basic-nav-dropdown">
        <NavDropdown.Item href="/lessonplan">Create a Lesson Plan</NavDropdown.Item>
        <NavDropdown.Item href="/lessonplanlist">View Lesson Plans</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="User" id="basic-nav-dropdown">
        <NavDropdown.Item href="/userprofile">Profile</NavDropdown.Item>
        <NavDropdown.Item href="/Logout">Log Out</NavDropdown.Item>
        <NavDropdown.Item href="/login">Login/SignUp</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
      {/* <MDBBtn color="dark">Search</MDBBtn> */}
      {/* <NavLink to="/login" className="btn">Search</NavLink> */}
     
      {/* <Button className="btn"  color="black">Search</Button> */}
      <NavLink to="/login" className="btn">Login/Sign Up</NavLink>
    </Form>
  </Navbar.Collapse>
</Navbar>
</nav>
</div>
      
    )
}}

export default NavBar;


