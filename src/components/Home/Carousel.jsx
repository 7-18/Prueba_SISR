import { useState } from "react";
import { Carousel } from "react-bootstrap"
import { ButtonStyled, CarouselStyled } from "../../styles/CarouselStyles";

export const CarouselHome = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <section>
      <CarouselStyled activeIndex={index}
        onSelect={handleSelect}>
        <Carousel.Item>
          <img
            src="/assets/images/slide 1.png"
            className="img-fluid d-block w-100"
            alt="slide1"
          />
          <Carousel.Caption className="d-none d-lg-block text-start">
            <h1>
              Aptent imperdiet nascetur mauris erat potenti suscipit ornare,
              quisque a lacus mus accumsan mollis
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis est
              aliquam, praesent tortor conubia habitant dis eleifend fringilla
              non.
            </p>
            <div className="d-inline-flex p-0 mt-3">
              <ButtonStyled className="btn-1 pt-2 pb-2 ps-5 pe-5">Conoce producto</ButtonStyled>
              <ButtonStyled className="btn-2 pt-2 pb-2 ps-5 pe-5 ms-3">
                ¡Cotizar ahora!
              </ButtonStyled>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/assets/images/slide 2.png"
            className="img-fluid d-block w-100"
            alt="slide1"
          />
          <Carousel.Caption className="d-none d-lg-block text-start">
            <h1>
              Aptent imperdiet nascetur mauris erat potenti suscipit ornare,
              quisque a lacus mus accumsan mollis
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis est
              aliquam, praesent tortor conubia habitant dis eleifend fringilla
              non.
            </p>
            <div className="d-inline-flex p-0 mt-3">
              <ButtonStyled className="btn-1 pt-2 pb-2 ps-5 pe-5">Conoce producto</ButtonStyled>
              <ButtonStyled className="btn-2 pt-2 pb-2 ps-5 pe-5 ms-3">
                ¡Cotizar ahora!
              </ButtonStyled>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/assets/images/slide 3.png"
            className="img-fluid d-block w-100"
            alt="slide1"
          />
          <Carousel.Caption className="d-none d-lg-block text-start">
            <h1>
              Aptent imperdiet nascetur mauris erat potenti suscipit ornare,
              quisque a lacus mus accumsan mollis
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis est
              aliquam, praesent tortor conubia habitant dis eleifend fringilla
              non.
            </p>
            <div className="d-inline-flex p-0 mt-3">
              <ButtonStyled className="btn-1 pt-2 pb-2 ps-5 pe-5">Conoce producto</ButtonStyled>
              <ButtonStyled className="btn-2 pt-2 pb-2 ps-5 pe-5 ms-3">
                ¡Cotizar ahora!
              </ButtonStyled>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </CarouselStyled>
    </section >
  )
}