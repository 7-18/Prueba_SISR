import styled from "styled-components";

export const SectionSub = styled.section`
  color: #fff;
  background-color: var(--dark-blue);

  input {
    outline: none;
    border: none;
    border-radius: 5px;

    &:focus {
      outline: none;
      box-shadow: none !important;
    }
  }

  label {
    font-size: 14px;
  }

  input.form-control-one {
    width: 30vw;
    padding-left: 10px;
    height: 6.2vh;
    margin-top: 2px;
  }

  @media (max-width: 600px) {
    .img-subscribe {
      width: 75%;
    }

    input.form-control-one {
      width: 12rem;
    }
  }
`;

export const SubTitle = styled.h1`
&::after {
  content: "";
  border-bottom: 10px solid #ff5100;
  border-radius: 10%;
  height: 3px;
  display: block;
  margin: auto;
  margin-left: 0;
  margin-top: 20px;
  width: 100px;
`;
