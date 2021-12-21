import React from "react";
import styled from "styled-components";
import { useStateValue } from "./StateProvider";

export const Footer = () => {
  const [{ cart }, dispatch] = useStateValue();

  let footerStyle =
    cart.length === 0
      ? { position: "fixed", bottom: 0 }
      : { position: "relative" };

  console.log(cart.length);

  return (
    <FooterC style={footerStyle}>
      <div>
        <h2>
          BY <span>&#10084;</span> :
          <a href="https://www.mostafamohamed.ml" target="_blanck">
            Mostafa Mohamed
          </a>
        </h2>
        <h4>&copy; All Right By Mostafa 2021</h4>
      </div>
    </FooterC>
  );
};

const FooterC = styled.footer`
  padding: 30px;
  height: 115px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px !important;
  h2 {
    font-size: 20px;
    margin-top: 80px;
  }
  span {
    color: var(--BtnColor);
    font-size: 16px;
  }
  a {
    font-size: 18px;
    color: var(--BtnColor);
  }
  h4 {
    text-align: center;
    margin-bottom: 42px;
  }
`;
