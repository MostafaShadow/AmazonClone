import React from "react";
import styled from "styled-components";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useStateValue } from "./StateProvider";
export const Product = ({ id, title, price, imgProduct, rating }) => {
  const [{ cart }, dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        price,
        title,
        imgProduct,
        rating,
      },
    });
  };
  return (
    <ProductContainerC>
      <ProductInfoC>
        <p>{title}</p>
      </ProductInfoC>
      <ProductPriceC>
        <span>${price}</span>
      </ProductPriceC>
      <ProductRatingC>
        {Array(rating)
          .fill()
          .map((_, idx) => (
            <StarRateIcon key={idx} className="rate" />
          ))}
      </ProductRatingC>
      <img src={imgProduct} alt="img-product" />
      <button onClick={addToCart}>Add to Cart</button>
    </ProductContainerC>
  );
};

const ProductContainerC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  max-height: 500px;
  min-width: 100px;
  background-color: var(--MainColor);
  z-index: 2;
  border-radius: 6px;
  margin: auto;
  overflow: hidden;
  > img {
    height: 150px !important;
    max-height: 150px !important;
    display: block;
    width: 150px;
    max-width: 150px !important;
    object-fit: contain;
    margin-bottom: 5px;
  }
  > button {
    padding: 10px;
    background-color: var(--BtnColor);
    border: none;
    outline: none;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
    color: var(--MainColor);
    transition: 0.4s linear;
    &:hover {
      background-color: #1c498d;
    }
  }
`;
const ProductInfoC = styled.div`
  font-weight: 400;
  margin-top: 0px;
  > p {
    font-size: 16px;
    min-height: 100px;
    max-height: 150px;
  }
`;
const ProductPriceC = styled.div`
  margin-top: 15px;
  font-weight: 700;
`;
const ProductRatingC = styled.div`
  margin-bottom: 5px;
  > .rate {
    color: orange;
  }
`;
