import styled from "styled-components";

export const FooterStyled = styled.footer`
  color: #fff;
  background-color: var(--black);

  a {
    text-decoration: none;
    color: #fff;
  }

  li {
    list-style: none;
    & > a:hover {
      color: var(--orange);
    }
  }

  .img-fluid {
    width: 15%;
    padding-bottom: 15px;
  }
`;

export const SocialMedia = styled.div`
  button {
    color: #fff;
    background-color: var(--orange);
    border: 1px solid var(--orange);
    border-radius: 5px;

    &:hover {
      border-radius: 50% var(--orange);
    }

    &:active {
      border-radius: none;
    }

    & > img {
      width: 35px;
      height: 35px;
    }
  }
`;
