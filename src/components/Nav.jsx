import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";

export const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand className="pe-5" href="#">
          <img
            src="/logo.png"
            alt="logotipo"
            className="img-fluid w-75"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarNavDropdown"
        />
        <Navbar.Collapse
          className="container justify-content-end"
          id="navbarNavDropdown"
        >
          <Nav>
            <Nav.Item>
              <Nav.Link aria-current="page" href="#">
                Inicio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Button variant="dark">
                <Nav.Link href="#">¡Cotizar ahora!</Nav.Link>
              </Button>
            </Nav.Item>
            <NavDropdown title="ES">
              <NavDropdown.Item href="#">
                En
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
