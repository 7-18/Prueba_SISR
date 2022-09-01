import { Card, Container } from "react-bootstrap"
import { ButtonStyled } from "../../styles/CarouselStyles"
import { Category, LastEntries } from "../../styles/LastStyles"
import { SectionTitle } from "../../styles/ProductsStyles"

export const Last = ({ language }) => {
  return (
    <section>
      <LastEntries className="mb-4 pb-4">
        <SectionTitle className="p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-2 fs-2 fw-bold mt-5">
            {language === "ES" ? "Últimas entradas" : "Last entries"}
          </h1>
        </SectionTitle>
        <Container className="card-group text-start">
          <Card className="pt-4 me-3 mt-3 mt-lg-0">
            <div>
              <Category>
                {language === "ES" ? "Categoría" : "Category"}
              </Category>
              <img
                src="/assets/images/309883-P85E04-647.png"
                className="card-img-top w-100"
                alt="earth"
              />
            </div>
            <Card.Body className="card-body pt-4 ps-4">
              <small>04-12-2020</small>
              <h1 className="fs-4 fw-bold">
                Lorem ipsum dolor sit amet consectetur, adipiscing
              </h1>
              <Card.Text className="fs-6 text-muted pt-3">
                Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis est
                aliquam, praesent tortor conubia habitant dis eleifend fringilla
                non.
              </Card.Text>
              <Card.Text className="pt-3 text-center text-lg-start">
                <ButtonStyled className="btn-2 py-2 px-5">
                  {language === "ES" ? "Ver más" : "See more"}
                </ButtonStyled>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="pt-4 me-3 mt-3 mt-lg-0">
            <div>
              <img
                src="/assets/images/17239.png"
                className="card-img-top"
                alt="old-man"
              />
            </div>
            <Category>
              {language === "ES" ? "Categoría" : "Category"}
            </Category>
            <Card.Body className="pt-4 ps-4">
              <small>04-12-2020</small>
              <h1 className="fs-4 fw-bold">
                Lorem ipsum dolor sit amet consectetur, adipiscing
              </h1>
              <Card.Text className="fs-6 text-muted pt-3">
                Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis est
                aliquam, praesent tortor conubia habitant dis eleifend fringilla
                non.
              </Card.Text>
              <Card.Text className="pt-3 text-center text-lg-start">
                <ButtonStyled className="btn-2 py-2 px-5">
                  {language === "ES" ? "Ver más" : "See more"}
                </ButtonStyled>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="pt-4 me-3 mt-3 mt-lg-0">
            <div>
              <Category>
                {language === "ES" ? "Categoría" : "Category"}
              </Category>
              <img
                src="/assets/images/552644-PK35XI-923.png"
                className="card-img-top w-100"
                alt="earth-plant"
              />
            </div>
            <Card.Body className="pt-4 ps-4 mb-3">
              <small>04-12-2020</small>
              <h1 className="fs-4 fw-bold">
                Lorem ipsum dolor sit amet consectetur, adipiscing
              </h1>
              <Card.Text className="fs-6 text-muted pt-3">
                Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis est
                aliquam, praesent tortor conubia habitant dis eleifend fringilla
                non.
              </Card.Text>
              <Card.Text className="pt-3 text-center text-lg-start">
                <ButtonStyled className="btn-2 py-2 px-5">
                  {language === "ES" ? "Ver más" : "See more"}
                </ButtonStyled>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </LastEntries>
    </section>
  )
}