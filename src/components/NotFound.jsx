import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/img/logo.png";
export const NotFound = () => {
  return (
    <NotFoundC>
      <NotfoundContainer>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <h1>Opps !... This Page Not Found</h1>
      </NotfoundContainer>
    </NotFoundC>
  );
};

const NotFoundC = styled.div`
  background-color: var(--MainColor);
  width: 100%;
  height: 100vh;
`;

const NotfoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    display: block;
    object-fit: contain;
    margin-top: 30vh;
    filter: invert(1);
  }
  h1 {
    font-size: 25px;
    color: #f00;
    margin-top: 30px;
  }
`;
