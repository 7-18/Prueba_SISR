import styled from "styled-components";
import { CarouselStyled } from "./CarouselStyles";

export const SectionTitle = styled.div`
  h1::after {
    content: "";
    border-bottom: 10px solid var(--orange);
    border-radius: 10%;
    height: 3px;
    display: block;
    margin: auto;
    margin-top: 20px;
    width: 100px;
  }
`;

export const ProductsCarousel = styled(CarouselStyled)`
  .carousel-control-prev,
  .carousel-control-next {
    display: none;
  }

  .carousel-indicators {
    margin-left: 10px;
    bottom: 5%;

    & > button {
      border-color: transparent;
      &.active {
        background-color: var(--orange);
        max-width: 15px;
        height: 10px;
      }
    }
  }

  .card {
    box-shadow: 0px 6px 6px #00000029;
    border-radius: 15px;
    border: none;
  }
`;
