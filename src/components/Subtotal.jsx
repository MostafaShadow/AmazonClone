import React from "react";
import styled from "styled-components";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { sumTotalPrice } from "../reducer";
import { useNavigate } from "react-router-dom";
export const Subtotal = () => {
  const [{ cart }, dispatch] = useStateValue();
  const navigate = useNavigate();
  return (
    <SubtotalContainerC>
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
      <button
        disabled={cart.length === 0 ? true : false}
        style={
          cart.length === 0
            ? { background: "#74abff" }
            : { background: "var(--BtnColor)" }
        }
        onClick={(e) => navigate("/payment")}
      >
        Proceed to Checkout
      </button>
    </SubtotalContainerC>
  );
};

const SubtotalContainerC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  @media (max-width: 700px) {
    margin: 10px auto;
    width: 100vw;
  }

  span {
    display: flex;
    align-items: center;
    margin-top: 2px;
    font-size: 11px;

    > input {
      margin-right: 2px;
    }
  }

  button {
    background-color: var(--BtnColor);
    border-radius: 10px;
    width: 100%;
    padding: 10px;
    border: 1px solid transparent;
    margin-top: 10px;
    color: var(--MainColor);
    cursor: pointer;
  }
`;
