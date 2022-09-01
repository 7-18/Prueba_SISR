import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavStyled } from "../styles/NavStyles";

export const NavBar = () => {
  return (
    <NavStyled className="p-3" collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="pe-lg-5 pe-0" href="#">
          <img
            src="/logo.png"
            alt="logotipo"
            className="img-fluid"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarNavDropdown"
        />
        <Navbar.Collapse
          className="justify-content-end container"
          id="navbarNavDropdown"
        >
          <Nav className="gap-2">
            <Nav.Item>
              <Nav.Link className="actived" href="#">
                Inicio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">
                Panela
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">
                Sustentabilidad
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">
                Blog
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">
                FAQs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">
                Sobre nosotros
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">
                Contacto
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <button>
                <Nav.Link href="#">¡Cotizar ahora!</Nav.Link>
              </button>
            </Nav.Item>
            <NavDropdown title="ES">
              <NavDropdown.Item>
                En
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavStyled>
  );
};
