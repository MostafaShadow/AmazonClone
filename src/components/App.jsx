import { Route, Routes } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ClipLoader from "react-spinners/ClipLoader";
import Checkout from "./Checkout";
import { Home } from "./Home";
import { Header } from "./Header";
import { Login } from "./Login";
import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useStateValue } from "./StateProvider";
import { Payment } from "./Payment";
import { Footer } from "./Footer";
import { NotFound } from "./NotFound";
import styled from "styled-components";

function App() {
  const [{ cart }, dispatch] = useStateValue();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: "SET_USER",
          user,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<PaymentStripe />} />
      </Routes>
      <Footer />
    </div>
  );
}

const override = styled.div`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
export default App;

const PaymentStripe = () => {
  const stripe = loadStripe(
    "pk_test_51K83pJFJ0dBDFuxROs03M81i9TIHJvRx3qpEuDst02zmfDYtfHj4FGfEDx1S7BNZlDzc4BXn3MGVMXbZur51vpg3004e3r6YZm"
  );
  return (
    <React.Fragment>
      <Elements stripe={stripe}>
        <Payment />
      </Elements>
    </React.Fragment>
  );
};
