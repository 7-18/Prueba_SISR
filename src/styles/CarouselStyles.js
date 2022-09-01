import { Carousel } from "react-bootstrap";
import styled from "styled-components";

export const CarouselStyled = styled(Carousel)`
  .carousel-caption {
    position: absolute;
    top: 20%;

    & > h1 {
      font-weight: bold;
      color: #fff;
      width: 70%;
    }

    & > p {
      font-weight: 100;
      font-size: 18px;
      color: #ffffffda;
      width: 70%;
    }

    @media (max-width: 1300px) {
      top: 15%;
    }

    @media (max-width: 1200px) {
      top: 10%;
    }

    @media (max-width: 1100px) {
      top: 0%;
    }
  }

  .carousel-item > img {
    width: 100%;
    height: 100%;
  }

  h5 {
    letter-spacing: 2px;
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 5%;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-color: var(--black);
    background-size: 50%;
    height: 3rem;
    width: 3rem;
  }

  .carousel-indicators {
    margin-left: 10px;
    margin: 0;
    height: 1rem;
    width: 100px;
    bottom: 10%;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
    padding-top: 5px;

    & > button {
      border: 4px solid #fff;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      margin-left: 10px;
      background-color: var(--black);
      margin-bottom: 30px;

      &:last-child {
        margin-right: 10px;
      }

      &.active {
        background-color: var(--orange);
        max-width: 10px;
        height: 10px;
      }
    }
  }
`;

export const ButtonStyled = styled.button`
  border-radius: 5px;
  border-color: transparent;
  outline: none !important;
  color: #fff;
  transition: 0.3s all;

  &.btn-1 {
    background-color: transparent;
    border-color: #fff;
    border: 3px solid #fff;

    &:hover {
      background-color: #fff;
      color: var(--orange);
    }
  }

  &.btn-2 {
    background-color: var(--orange);

    &:hover {
      background-color: #ff661f;
    }
  }

  &:focus {
    outline: none !important;
  }
`;
