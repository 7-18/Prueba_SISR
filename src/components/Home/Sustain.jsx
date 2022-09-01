import { Card, Col, Container, Row } from "react-bootstrap"
import { ButtonStyled } from "../../styles/CarouselStyles"
import { SustainDiv } from "../../styles/SustainStyles"

export const Sustain = () => {
  return (
    <section>
      <Container fluid
        class="d-inline-flex justify-content-center align-items-end text-center"
      >
        <SustainDiv class="pb-5 pt-5">
          <Card class="mb-3">
            <Row class="g-0">
              <Col sm={4}>
                <img
                  src="/assets/images/740 2@2x.png"
                  class="img-card img-fluid"
                  alt="sugar-product1"
                />
              </Col>
              <Col sm={8} class="px-3">
                <Card.Body class="pb-5">
                  <Card.Title class="display-3 fs-2 pb-3 pt-5">
                    Sostenibilidad
                  </Card.Title>
                  <Card.Text class="fs-5">
                    Vivamus accumsan potenti facilisis phasellus convallis pretium
                    nisl ultricies eu habitasse urna risus per,<br />
                    blandit diam aenean luctus ut quis sollicitudin nisi <br />
                    molestie viverra tempus ligula.
                  </Card.Text>
                  <Card.Text class="pt-3">
                    <ButtonStyled class="btn-2 py-2 px-5">Ver más</ButtonStyled>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </SustainDiv>
      </Container>
    </section>
  )
}