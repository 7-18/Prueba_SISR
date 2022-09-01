import { Card, CardGroup, Col, Container, Row } from "react-bootstrap"
import { SectionTitle } from "../../styles/ProductsStyles"
import { DivServices } from "../../styles/ServicesStyles"

export const Services = () => {
  return (
    <section>
      <DivServices className="mt-5">
        <SectionTitle className="p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-2 fs-2 fw-bold mt-5">
            Vehicula mi quam odio himenaeos
          </h1>
          <p className="fs-6 text-muted pt-3">
            Lorem ipsum dolor sit amet consectetur adipiscing elit erat rutrum
            vehicula, <br />
            semper ultricies quam platea nunc iaculis luctus est mattis porta nulla
          </p>
        </SectionTitle>
        <Container className="text-center">
          <Row className="gap-3 gap-lg-0 justify-content-center">
            <Col sm={3} md={5} lg={3}>
              <Card className="pt-4">
                <div>
                  <img
                    src="/assets/images/Grupo 1164.svg"
                    className="card-img-top w-25"
                    alt="Harvesting"
                  />
                </div>
                <Card.Body>
                  <h1 className="fs-4 fw-bold">Harvesting</h1>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={3} md={5} lg={3}>
              <Card className="pt-4">
                <div>
                  <img
                    src="/assets/images/Grupo 1255.svg"
                    className="card-img-top w-25"
                    alt="Packing"
                  />
                </div>
                <Card.Body>
                  <h1 className="fs-4 fw-bold">Packing</h1>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={3} md={5} lg={3}>
              <Card className="pt-4">
                <div>
                  <img
                    src="/assets/images/Grupo 1279.svg"
                    className="card-img-top w-25"
                    alt="Shipping"
                  />
                </div>
                <Card.Body>
                  <h1 className="fs-4 fw-bold">Shipping</h1>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={3} md={5} lg={3}>
              <Card className="pt-4">
                <div>
                  <img
                    src="/assets/images/Grupo 1265.svg"
                    className="card-img-top w-25"
                    alt="Delivery"
                  />
                </div>
                <Card.Body>
                  <h1 className="fs-4 fw-bold">Delivery</h1>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </DivServices>
    </section >

  )
}