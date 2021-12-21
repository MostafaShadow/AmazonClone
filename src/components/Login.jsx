import React, { useState } from "react";
import Logo from "../assets/img/logo.png";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erorr, setErorr] = useState("");
  const [sucMessage, setsucMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        setErorr("");
        setsucMessage(
          `Now you have an account click to sign in button , to Login to Your Account`
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        setsucMessage("");
        switch (errorCode) {
          case "auth/invalid-email":
            return setErorr("! Enter your valid email to Register");
          case "auth/weak-password":
            return setErorr("! Password should be at 6 chatacters");
          case "auth/internal-error":
            return setErorr("! Please Type Your Password To Register");

          case "auth/email-already-in-use":
            return setErorr("Email already Use");
          default:
            setErorr("");
        }
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        setErorr("");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        setsucMessage("");
        switch (errorCode) {
          case "auth/wrong-password":
            return setErorr("! Your Password Is wrong");
          case "auth/user-not-found":
            return setErorr(
              "! You don't have an account , Press button  Create Your Amazon Acount to Create Account"
            );
          case "auth/internal-error":
            return setErorr("! Please Type Your Password To Login");
          default:
            setErorr("");
        }
      });
  };

  return (
    <LoginC>
      <Link to="/">
        <LoginLogoC src={Logo} alt="logo" />
      </Link>
      <LoginContainerC>
        <h1>Sign In</h1>
        <h5 style={{ color: "tomato", textAlign: "center", marginTop: "14px" }}>
          {erorr}
        </h5>
        <h5
          style={{ color: "#00bc00", textAlign: "center", marginTop: "14px" }}
        >
          {sucMessage}
        </h5>

        <form>
          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin} className="login__signIn" type="submit">
            Sign In
          </button>
          <p>
            By continuing, you agree to [Amazon's Clone Fake] Conditions of Use
            and Privacy Notice.
          </p>

          <button className="login__register" onClick={handleRegister}>
            Create Your Amazon Account
          </button>
        </form>
      </LoginContainerC>
    </LoginC>
  );
};

const LoginC = styled.div`
  background-color: var(--MainColor);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LoginLogoC = styled.img`
  margin: 30px auto 15px;
  object-fit: contain;
  width: 100px;
  filter: invert(1);
`;
const LoginContainerC = styled.div`
  max-width: 350px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  border: 1px solid lightgray;
  padding: 20px;

  h1 {
    font-size: 24px;
    color: #504949;
  }
  label {
    display: block;
    font-weight: 500;
    margin-bottom: 20px;
  }

  input {
    padding: 7px;
    margin-bottom: 10px;
    background-color: var(--MainColor);
    width: 98%;
    border-radius: 3px;
    border: 1px solid #bbabab;
  }
  p {
    font-size: 12px;
    color: #111;
    opacity: 0.7;
    padding: 5px;
  }

  button {
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
  }
  button.login__signIn {
    color: var(--MainColor);
    background-color: var(--BtnColor);
    font-weight: 600;
  }
  button.login__register {
    margin-top: 10px;
  }
`;
