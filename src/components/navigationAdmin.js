import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { auth } from "../config/firebase";

const NavigationAdmin = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogOut = () => {
    auth.signOut().then(() => {
      navigate("/login");
    });
  };

  return (
    <Navbar
      style={{ backgroundColor: "#111827" }}
      variant="dark"
      expand="lg"
      className="sticky-top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src="/assets/img/siotics-logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          SIOTICS
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ color: "white" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-md-auto gap-3 text-uppercase fw-light text-center mb-4 mb-lg-0">
            <Nav.Link as={Link} to="/" active={location.pathname === "/"}>
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/newblog"
              active={location.pathname === "/newblog"}
            >
              New Blog
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/course"
              active={location.pathname === "/course"}
            >
              New Courses
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/link"
              active={location.pathname === "/link"}
            >
              New Members
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
            {location.pathname === "/login" ? (
              <Button
                variant="primary"
                size="sm"
                className="rounded-3 px-3"
                as={Link}
                to="/signup"
              >
                Sign Up
              </Button>
            ) : location.pathname === "/dashboard" ? (
              <Button
                variant="primary"
                size="sm"
                className="rounded-3 px-3"
                onClick={handleLogOut}
              >
                Logout
              </Button>
            ) : (
              <Button
                variant="primary"
                size="sm"
                className="rounded-3 px-3"
                as={Link}
                to="/login"
              >
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationAdmin;
