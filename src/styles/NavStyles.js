import { Navbar } from "react-bootstrap";
import styled from "styled-components";

export const NavStyled = styled(Navbar)`
  font-size: 16px;
  background-color: var(--black);

  .nav-item > a,
  a {
    color: #fff;
  }

  .nav-item {
    &:nth-child(9) {
      & > .nav-link:hover,
      & > .nav-link:focus {
        color: #fff;
      }
    }

    &:nth-child(-n + 7) {
      padding: 5px;
      padding-top: 10px;

      & > .nav-link {
        padding: 0;
        &:hover {
          color: var(--orange);
        }
      }
    }
  }

  .actived {
    border-bottom: 3px solid var(--orange);
    color: var(--orange) !important;
    padding-bottom: 10px !important;
  }

  button {
    background-color: var(--orange);
    border-radius: 5px;
    border-color: transparent;
    padding: 0px 15px;

    &:hover {
      background-color: #ff661f;
    }

    & > a:hover {
      color: #fff;
    }
  }

  .dropdown-menu {
    background-color: var(--black);

    & > a {
      background-color: var(--black);
      &:hover {
        color: #fff;
      }
    }
  }

  .navbar-toggler:focus,
  .navbar-toggler:active {
    box-shadow: none;
  }
`;
