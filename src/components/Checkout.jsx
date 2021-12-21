import React from "react";
import styled from "styled-components";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Subtotal } from "./Subtotal";
import { ProductCheckout } from "./ProductCheckout";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <CheckoutContainerC>
      <CheckoutLeftC>
        <h1>Shopping Cart</h1>
        <hr />
        {!user ? (
          <Notregistered>
            <h2>You're not registered !</h2>
            <Link to="/login">
              <button>Registere Now</button>
            </Link>
          </Notregistered>
        ) : null}
        {cart.length ? (
          cart.map(({ id, title, price, rating, imgProduct }) => (
            <React.Fragment key={Math.floor(Math.random() * 100)}>
              <ProductCheckout
                id={id}
                title={title}
                price={price}
                rating={rating}
                imgProduct={imgProduct}
              />
              <hr />
            </React.Fragment>
          ))
        ) : (
          <EmptyC>
            <h3>
              Your Cart Is Empty
              <span>
                <ShoppingBasketIcon
                  style={{
                    verticalAlign: "middle",
                    margin: "0px 4px",
                    color: "#ac7307",
                  }}
                />
              </span>
            </h3>
          </EmptyC>
        )}
      </CheckoutLeftC>
      <CheckoutRightC>
        <Subtotal />
      </CheckoutRightC>
    </CheckoutContainerC>
  );
};

export default Checkout;
const CheckoutContainerC = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  flex-wrap: wrap;

  > div {
    margin: 5px;
    padding: 5px;
    border-radius: 6px;
    background-color: var(--MainColor);
  }
`;
const CheckoutLeftC = styled.div`
  flex: 1;
  > h1 {
    width: 100%;
    margin-bottom: 2vh;
    display: flex;
    flex: 1;
    font-size: 24px;
  }
  > hr {
    background-color: #ddd;
    opacity: 0.4;
  }
`;
const CheckoutRightC = styled.div``;

const EmptyC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;

  h3 {
    margin-top: 10px;
    color: #ac7307;
  }
`;

const Notregistered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: auto;
  border: 1px solid #dcdcdc;
  padding: 40px;
  margin-top: 35px;
  border-radius: 6px;

  h2 {
    color: var(--BtnColor);
  }
  button {
    padding: 10px;
    background-color: var(--BtnColor);
    border: none;
    outline: none;
    border-radius: 9px;
    cursor: pointer;
    width: 140px;
    margin-top: 10px;
    color: var(--MainColor);
    transition: 0.3s linear;
    &:hover {
      background-color: #0065ff;
    }
  }
`;
