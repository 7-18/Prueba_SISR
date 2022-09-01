import { Container } from "react-bootstrap";
import styled from "styled-components";

export const SustainDiv = styled(Container)`
  min-height: 45vh;
  background-image: url("/assets/images/Grupo 1590.png");
  background-size: cover;
  color: #fff;

  .card {
    border: none;
    background-color: var(--black);
    max-width: 55rem;
    border-radius: 15px;
  }

  div > img {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    height: 100%;
  }
`;
