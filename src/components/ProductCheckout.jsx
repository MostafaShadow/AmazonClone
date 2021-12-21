import React from "react";
import styled from "styled-components";

import StarRateIcon from "@material-ui/icons/StarRate";
import { useStateValue } from "./StateProvider";

import FlipMove from "react-flip-move";
export const ProductCheckout = ({ id, title, price, rating, imgProduct }) => {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "Remove_ITEM",
      id,
    });
  };
  return (
    <FlipMove enterAnimation="elevator">
      <ProductCheckoutC key={Math.floor(Math.random() * 100)}>
        <img src={imgProduct} alt="img-product" />
        <ProductTitelC>
          <ProductInfoC>
            <p>{title}</p>
          </ProductInfoC>
          <ProductRatingC>
            {Array(rating)
              .fill()
              .map((_, idx) => (
                <StarRateIcon id={idx} className="rate" />
              ))}
          </ProductRatingC>
          <ProductPriceC>
            <span>${price}</span>
          </ProductPriceC>
          <button onClick={removeFromCart}>Remove to Cart</button>
        </ProductTitelC>
      </ProductCheckoutC>
    </FlipMove>
  );
};

const ProductCheckoutC = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  background-color: var(--MainColor);
  z-index: 2;
  border-radius: 6px;
  margin: auto;
  border-bottom: 1px solid lightgray;
  @media (max-width: 700px) {
    flex-direction: column;
  }
  > img {
    height: 150px !important;
    max-height: 150px !important;
    display: block;
    object-fit: contain;
    width: 130px;
    @media (max-width: 700px) {
      width: 160px;
    }
  }
`;
const ProductTitelC = styled.div`
  margin-left: 2vw;
  > button {
    padding: 10px;
    outline: none;
    border: none;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
    background-color: var(--BtnColor);
    font-size: 12px;
    color: var(--MainColor);
    display: block;
    transition: 0.4s linear;
    &:hover {
      background-color: #c95024;
    }
  }
`;
const ProductInfoC = styled.div`
  margin-top: 5px;
  > p {
    font-size: 16px;
  }
`;
const ProductPriceC = styled.div`
  font-weight: 700;
`;
const ProductRatingC = styled.div`
  margin-bottom: 5px;
  > .rate {
    color: orange;
  }
`;
