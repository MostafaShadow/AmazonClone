import React, { useState } from "react";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductCheckout } from "./ProductCheckout";

import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { sumTotalPrice } from "../reducer";

export const Payment = () => {
  const [{ cart, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disapled, setDisapled] = useState(true);
  const [processing, SetProcessing] = useState("");
  const [done, setDone] = useState();

  const handleSubmitPayment = async (e) => {
    e.preventDefault();
    SetProcessing(true);
  };

  const handleChangePayment = (e) => {
    setDisapled(e.empty);
    setError(e.erorr ? e.erorr.message : "");
  };
  return (
    <PaymentC>
      <PaymentContainerC>
        <PaymentHeaderC>
          <h1>
            Checkout:{" "}
            <Link to="/checkout">
              <span style={{ color: " var(--BtnColor)" }}>
                ({cart?.length} Items){" "}
              </span>
            </Link>
          </h1>
        </PaymentHeaderC>

        <PaymentSectionC>
          {!user ? (
            <Notregistered>
              <h2>You're not registered !</h2>
              <Link to="/login">
                <button>Registere Now</button>
              </Link>
            </Notregistered>
          ) : null}
          <PaymentProductC>
            {cart?.map(({ id, title, price, rating, imgProduct }) => (
              <ProductCheckout
                id={id}
                title={title}
                price={price}
                rating={rating}
                imgProduct={imgProduct}
              />
            ))}
          </PaymentProductC>
          <PaymentTitleC>
            <form onSubmit={handleSubmitPayment}>
              <PricePaymentContainerC>
                <CurrencyFormat
                  renderText={(value) => (
                    <React.Fragment>
                      <p>
                        Subtotal ({cart.length} items): <strong>{value}</strong>
                      </p>
                      <span className="subtotal__gift">
                        <input type="checkbox" />
                        This is order contains a gift
                      </span>
                    </React.Fragment>
                  )}
                  decimalScale={2}
                  value={sumTotalPrice(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </PricePaymentContainerC>
              <CardElement onChange={handleChangePayment} className="card" />
              <button disabled={true}>Buy Now</button>
            </form>
          </PaymentTitleC>
        </PaymentSectionC>
      </PaymentContainerC>
    </PaymentC>
  );
};

const PaymentC = styled.div`
  background-color: var(--MainColor);
`;
const PaymentContainerC = styled.div``;
const PaymentHeaderC = styled.div`
  border: 1px solid lightgray;
  > h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    > a {
      text-decoration: none;
    }
  }
`;

const PaymentSectionC = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  padding: 20px;
`;

const PaymentTitleC = styled.div`
  margin-bottom: 10px;
  border: 1px solid lightgray;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: fit-content;
  margin: 20px auto;

  form {
    div {
    }
    .card {
      margin-top: 20px;
    }
    button {
      padding: 6px;
      margin: 13px auto;
      width: 100%;
      background: #74abff;
      color: #fff;
      border-radius: 5px;
      border: none;
      outline: none;
      cursor: no-drop;
    }
  }
`;

const PaymentProductC = styled.div`
  flex: 0.8;
`;

const PricePaymentContainerC = styled.div`
  .subtotal__gift {
    display: block;
    margin-top: 6px;
    > input {
      margin-right: 4px;
    }
  }
`;

const Notregistered = styled.div`
  display: flex;
  flex-direction: column;
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
