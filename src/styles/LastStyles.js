import styled from "styled-components";

export const LastEntries = styled.div`
  .card {
    box-shadow: 0px 6px 6px #00000029;
    border-radius: 15px;
    border: none;
  }

  small {
    color: var(--orange);
  }

  img {
    margin-top: -25px;
  }
`;

export const Category = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  color: #fff;
  font-size: 10px;
  width: 80px;
  padding: 5px;
  text-align: center;
  background-color: #ff5100;
  border-radius: 10px;
  z-index: 2;
  font: 14px/25px Roboto;
  user-select: none;
`;
