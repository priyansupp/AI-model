import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Header() {
  // const navigator = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();
    axios.get('/auth/logout')
    .then(() => {
      console.log(`Logged out`);
    })
    .catch(e => {
      console.log(`Error in logging out: ${e}`);
    });
    // removeCookie('userid');
    // removeCookie('token');
    setIsAuthenticated(false);
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">AI Model Explorer</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link href="/models">Models</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <DropdownButton title="Profile" as={ButtonGroup}>
            <Dropdown.Item href='/newModel' eventKey="2">+ New Model</Dropdown.Item>
            <Dropdown.Item href='/newBlog' eventKey="3">
              + New Blog
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout} eventKey="4">Logout</Dropdown.Item>
        </DropdownButton>
      </Container>
    </Navbar>
  );
}

export default Header;
