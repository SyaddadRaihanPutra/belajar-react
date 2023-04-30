import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Navigation() {
  const location = useLocation();
  return (
    <Navbar style={{ backgroundColor: "#111827" }} variant="dark" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src="https://flowbite.com/docs/images/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          SIOTICS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-md-auto gap-3 text-uppercase fw-light text-center mb-4 mb-lg-0">
            <Nav.Link as={Link} to="/" active={location.pathname === "/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" active={location.pathname === "/about"}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/course" active={location.pathname === "/course"}>
              Courses
            </Nav.Link>
            <Nav.Link as={Link} to="/link" active={location.pathname === "/link"}>
              Link
            </Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/action/3.1">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/action/3.3">
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto mb-3 mb-lg-0">
            <Button variant="primary" size="sm" className="rounded-3 px-3" as={Link} to="/login">
              Login
            </Button> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
