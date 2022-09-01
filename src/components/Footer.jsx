import { Container, Row } from "react-bootstrap"
import { FooterStyled, SocialMedia } from "../styles/FooterStyles"
import { Copyright } from "./Copyright"

export const Footer = () => {
  return (
    <FooterStyled>
      <Container className="text-center pt-5">
        <a className="pt-5" href="#"
        ><img
            src="/assets/images/Grupo 1305.svg"
            alt="logotipo"
            className="img-fluid"
          /></a>
        <Row className="justify-content-center pt-3 pb-3">
          <ul>
            <li><a href="#">Contáctanos</a></li>
            <li><a href="#">Trabaja con nosotros</a></li>
            <li><a href="#">Política de privacidad</a></li>
            <li><a href="#"> Política de cookies</a></li>
          </ul>
        </Row>
        <SocialMedia className="border-bottom pb-4 mb-3 d-flex gap-3 justify-content-center">
          <button>
            <img src="/assets/images/red3.svg" />
          </button>

          <button>
            <img src="/assets/images/red1.svg" />
          </button>

          <button>
            <img src="/assets/images/red2.svg" />
          </button>
        </SocialMedia>
      </Container>
      <Copyright />
    </FooterStyled>
  )
}