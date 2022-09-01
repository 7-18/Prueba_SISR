import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavStyled } from "../styles/NavStyles";

export const NavBar = ({ setLanguage, language }) => {
  const my_language = localStorage.getItem('language')

  const changeLanguage = (lan) => {
    setLanguage(lan)
    return localStorage.setItem('language', language)
  }

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
                {language === "ES" ? "Inicio" : "Home"}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">
                {language === "ES" ? "Panela" : "Raw Cane Sugar"}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">
                {language === "ES" ? "Sostenibilidad" : "Sustainability"}
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
                {language === "ES" ? "Sobre nosotros" : "About Us"}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">
                {language === "ES" ? "Contacto" : "Contact"}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <button>
                <Nav.Link href="#">{language === "ES" ? "¡Cotizar ahora!" : "Quote now!"}</Nav.Link>
              </button>
            </Nav.Item>
            <NavDropdown title={language}>
              {language === "ES"
                ? (<NavDropdown.Item onClick={(e) => changeLanguage(e.target.textContent)}>
                  EN
                </NavDropdown.Item>)
                : (<NavDropdown.Item onClick={(e) => changeLanguage(e.target.textContent)}>
                  ES
                </NavDropdown.Item>)}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavStyled>
  );
};
