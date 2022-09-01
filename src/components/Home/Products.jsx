import { Card, Carousel, Col, Container, Row } from "react-bootstrap"
import { ButtonStyled } from "../../styles/CarouselStyles"
import { ProductsCarousel, SectionTitle } from "../../styles/ProductsStyles"

export const Products = () => {
  return (
    <section>
      <div className="mt-5">
        <SectionTitle className="p-3 pb-md-4 mx-auto text-center">
          <h1 className="fs-2 fw-bold">Productos</h1>
          <p className="fs-5 text-muted pt-3">
            Lorem ipsum dolor sit amet consectetur adipiscing elit erat rutrum
            vehicula, <br />
            semper ultricies quam platea nunc iaculis luctus est mattis porta nulla
          </p>
        </SectionTitle>
        <Container className="d-flex justify-content-center px-5">
          <Row className="px-5">
            <Col sm={12} className="px-5">
              <ProductsCarousel
                fade
              >
                <Carousel.Item className="pb-5">
                  <Card className="mb-3">
                    <Row className="g-0">
                      <Col md={4}>
                        <img
                          src="/assets/images/_DSC1065.png"
                          className="img-fluid h-100"
                          alt="sugar-product1"
                        />
                      </Col>
                      <Col md={8} className="ps-3">
                        <Card.Body>
                          <div className="fs-2 fw-bold pb-3 pt-4">
                            Lorem ipsum 1
                          </div>
                          <div className="text-muted pe-3">
                            Vivamus accumsan potenti facilisis phasellus convallis
                            pretium nisl ultricies eu habitasse urna risus per,
                            blandit diam aenean luctus ut quis sollicitudin nisi
                            molestie viverra tempus ligula.
                          </div>
                          <div className="pt-3">
                            <ButtonStyled className="btn-2 pt-2 pb-2 ps-5 pe-5">
                              Ver producto
                            </ButtonStyled>
                          </div>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Carousel.Item>
                <Carousel.Item className="pb-5">
                  <Card className="mb-3">
                    <Row className="g-0">
                      <Col md={4}>
                        <img
                          src="/assets/images/E11068C0-2EFF-4322-B75B-76C767508F63_4_5005_c.png"
                          className="img-fluid h-100"
                          alt="sugar-product1"
                        />
                      </Col>
                      <Col md={8} className="ps-3">
                        <Card.Body>
                          <div className="fs-2 fw-bold pb-3 pt-4">
                            Lorem ipsum 2
                          </div>
                          <div className="text-muted pe-3">
                            Vivamus accumsan potenti facilisis phasellus convallis
                            pretium nisl ultricies eu habitasse urna risus per,
                            blandit diam aenean luctus ut quis sollicitudin nisi
                            molestie viverra tempus ligula.
                          </div>
                          <div className="pt-3">
                            <ButtonStyled className="btn-2 pt-2 pb-2 ps-5 pe-5">
                              Ver producto
                            </ButtonStyled>
                          </div>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Carousel.Item>
                <Carousel.Item className="pb-5">
                  <Card className="mb-3  text-center text-lg-start">
                    <Row className="g-0">
                      <Col lg={4}>
                        <img
                          src="/assets/images/865A6065-3F88-4D59-A0F0-5F305999BB04_4_5005_c.png"
                          className="img-fluid h-100"
                          alt="sugar-product1"
                        />
                      </Col>
                      <Col lg={8} className="ps-3">
                        <Card.Body>
                          <div className="fs-2 fw-bold pb-3 pt-4">
                            Lorem ipsum 3
                          </div>
                          <div className="text-muted pe-3">
                            Vivamus accumsan potenti facilisis phasellus convallis
                            pretium nisl ultricies eu habitasse urna risus per,
                            blandit diam aenean luctus ut quis sollicitudin nisi
                            molestie viverra tempus ligula.
                          </div>
                          <div className="pt-3">
                            <ButtonStyled className="btn-2 py-2 px-5">
                              Ver producto
                            </ButtonStyled>
                          </div>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Carousel.Item>
              </ProductsCarousel>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}