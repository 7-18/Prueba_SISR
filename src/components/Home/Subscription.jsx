import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ButtonStyled } from "../../styles/CarouselStyles"
import { SectionSub, SubTitle } from "../../styles/SubscriptionStyles"

export const Subscription = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Gracias por suscribirte, ` + email)
  }

  return (
    <SectionSub>
      <Container
        fluid
        className="py-5"
      >
        <Row className="d-flex align-items-center justify-content-center">
          <Col sm={6}>
            <SubTitle className="display-3 fs-2 mt-5 pb-3">
              Suscríbete a nuestro boletín
            </SubTitle>
            <p className="fs-6 pb-3">
              Lorem ipsum dolor sit amet consectetur adipiscing elit erat rutrum
              vehicula, semper ultricies quam platea nunc iaculis luctus est mattis
              porta nulla.
            </p>
            <form className="row row-cols-lg-auto g-3 col-md-auto" onSubmit={handleSubmit}>
              <Col sm={2} className="mb-4">
                <input
                  type="email"
                  id="form1Example1"
                  className="form-control-one"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <ButtonStyled type="submit" className="btn-2 py-lg-2 px-lg-5 px-3 py-1 ms-3 d-inline-flex d-lg-none">
                  Suscribirme
                </ButtonStyled>
              </Col>
              <div>
                <ButtonStyled type="submit" className="btn-2 py-lg-2 px-lg-5 px-3 py-1 d-none d-lg-block">
                  Suscribirme
                </ButtonStyled>
              </div>
            </form>
            <div className="form-check mb-4">
              <input
                className="form-check-input me-2"
                type="checkbox"
                id="flexCheckTerms"
              />
              <label className="form-check-label" for="flexCheckTerms">
                Aceptar <u>términos y condiciones</u> y <u>política de privacidad</u>
              </label>
            </div>
          </Col>
          <Col sm={4}>
            <img
              src="/assets/images/Grupo 1301.svg"
              alt="Subscribe"
              className="img-fluid img-subscribe"
            />
          </Col>
        </Row>
      </Container>
    </SectionSub>
  )
}