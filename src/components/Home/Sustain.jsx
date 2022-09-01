import { Card, Col, Row } from "react-bootstrap"
import { ButtonStyled } from "../../styles/CarouselStyles"
import { SustainDiv } from "../../styles/SustainStyles"

export const Sustain = () => {
  return (
    <section>
      <SustainDiv
        fluid
        className="d-inline-flex justify-content-center align-items-end text-center"
      >
        <div className="py-5">
          <Card>
            <Row>
              <Col sm={6}>
                <img
                  src="/assets/images/740 2@2x.png"
                  className="img-fluid"
                  alt="sugar-product1"
                />
              </Col>
              <Col sm={6}>
                <Card.Body className="py-5">
                  <Card.Title className="fs-2 fw-bold pb-2">
                    Sostenibilidad
                  </Card.Title>
                  <Card.Text className="text-center pe-1">
                    Vivamus accumsan potenti facilisis phasellus convallis pretium
                    nisl ultricies eu habitasse urna risus per,
                    blandit diam aenean luctus ut quis sollicitudin nisi
                    molestie viverra tempus ligula.
                  </Card.Text>
                  <Card.Text className="pt-3">
                    <ButtonStyled className="btn-2 py-2 px-5">Ver más</ButtonStyled>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      </SustainDiv>
    </section>
  )
}