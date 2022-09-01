import { Card, Col, Container, Row } from "react-bootstrap"
import { ButtonStyled } from "../../styles/CarouselStyles"
import { SustainDiv } from "../../styles/SustainStyles"

export const Sustain = () => {
  return (
    <section>
      <Container fluid
        className="d-inline-flex justify-content-center align-items-end text-center"
      >
        <SustainDiv className="pb-5 pt-5">
          <Card className="mb-3">
            <Row className="g-0">
              <Col sm={4}>
                <img
                  src="/assets/images/740 2@2x.png"
                  className="img-card img-fluid"
                  alt="sugar-product1"
                />
              </Col>
              <Col sm={8} className="px-3">
                <Card.Body className="pb-5">
                  <Card.Title className="display-3 fs-2 pb-3 pt-5">
                    Sostenibilidad
                  </Card.Title>
                  <Card.Text className="fs-5">
                    Vivamus accumsan potenti facilisis phasellus convallis pretium
                    nisl ultricies eu habitasse urna risus per,<br />
                    blandit diam aenean luctus ut quis sollicitudin nisi <br />
                    molestie viverra tempus ligula.
                  </Card.Text>
                  <Card.Text className="pt-3">
                    <ButtonStyled className="btn-2 py-2 px-5">Ver más</ButtonStyled>
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