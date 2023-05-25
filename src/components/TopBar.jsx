import instcartLogo from "../embedded/logo.svg";
import { Navbar, Button, Nav } from "react-bootstrap";

export default function TopBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand
        style={{
          margin: ".2rem 0 0 1rem",
        }}
        href="#home"
      >
        <img src={instcartLogo} alt="Instacart Logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto pe-3">
          <Nav.Link href="#LogIn">Log In</Nav.Link>
          <Button variant="success">Sign Up</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
