import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import logo from "../assets/img/logo.png";
import { useStateValue } from "./StateProvider";

export const Header = () => {
  const [{ cart, user }, dispatch] = useStateValue();

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <HeaderContainerC>
      <Link to="/">
        <HeaderLogoC src={logo} alt="logo" />
      </Link>
      <HeaderSearchC>
        <input type="text" />
        <SearchIcon className="search_icon" />
      </HeaderSearchC>
      <HeaderInfoC>
        <Link to={!user && "/login"}>
          <div className="header__option">
            <span className="header__optionLineOne">
              {user ? `Hello ${user.email.split("@")[0]}` : "Hello Guest"}
            </span>
            <span onClick={handleSignOut} className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In "}
            </span>
          </div>
        </Link>
        <div className="header__optionBasket">
          <Link to="/checkout">
            <ShoppingCartIcon style={{ color: "var(--MainColor)" }} />
          </Link>
          <span className="counter">{cart.length}</span>
        </div>
      </HeaderInfoC>
    </HeaderContainerC>
  );
};

const HeaderContainerC = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: var(--Bg);
  position: sticky;
  top: 0;
  z-index: 100;
`;
const HeaderLogoC = styled.img`
  width: 70px;
  object-fit: contain;
  margin: 10px 11px 0px;
  filter: invert(1);
`;
const HeaderSearchC = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  > input {
    width: 100%;
    padding: 5px;
    height: 25px;
  }
  input:active,
  input:hover {
    outline: none;
    border: none;
  }

  > .search_icon {
    padding: 5px;
    height: 25px;
    background-color: var(--BtnColor);
    color: var(--MainColor);
  }
`;
const HeaderInfoC = styled.div`
  display: flex;
  justify-content: space-evenly;

  .header__option {
    display: flex;
    flex-direction: column;
    margin: 0px 10px;
    color: var(--MainColor);
    .header__optionLineOne {
      color: var(--MainColor);
      font-size: 10px;
      text-decoration: none;
    }
    .header__optionLineTwo {
      color: var(--MainColor);

      font-size: 13px;
      font-weight: 800;
    }
  }
  > .header__optionBasket {
    display: flex;
    align-items: center;
    color: var(--MainColor);
    > .counter {
      margin: 0px 10px 0px 5px;
      color: #a7caff;
    }
  }
`;
