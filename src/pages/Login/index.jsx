import React from "react";
import Input from "../../components/Input/Input";
import styled from "styled-components";
import { Select } from "antd";

function Login() {
  return (
    <FormCont>
      <div className="header">
        <h3 className="header">Login</h3>
        <p className="info">Enter your credential to continue</p>
      </div>
      <div className="main ">
        <Input
          label={"Email address/Phone number"}
          type="text"
          placeholder={"Enter email or phone number"}
          outlined
        />

        <Input
          label={"Password"}
          type="text"
          placeholder={"Enter password"}
          outlined
        />

        <a href="#" className="forgot">
          Forgot Password?
        </a>
        <div className="btnCont">
          <button className="signup">Login up</button>
          <button className="login">Don`t have an account? Register</button>
        </div>
      </div>
    </FormCont>
  );
}

export default Login;

const FormCont = styled.div`
  padding: 70px 20px;
  @media screen and (min-width: 768px) {
    width: 50%;
    margin: auto;
  }
  .header {
    font-size: larger;
    margin: 0;
    padding: 0;
    line-height: 10px;
  }
  .info {
    font-size: 13px;
    margin-bottom: 0;
    color: #989898;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .label {
    font-size: 11px;
    font-weight: 500;
    margin-bottom: 0;
    color: #514f4f;
    text-transform: "uppercase";
    height: 20;
  }
  button {
    border: none;
    padding: 8px;
    width: 100%;
    margin: 10px 0px;
    border-radius: 5px;
  }
  .signup {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background: var(--yellow);
  }
  .login {
    background: none;
    border: 1px solid var(--border);
  }
  .btnCont {
    margin: 50px auto;
    width: 100%;
  }
  .forgot {
    display: block;
    text-align: right;
    margin: 10px 0px;
    color: #000;
    font-size: small;
  }
  @media screen and (max-width: 768px) {
    .btnCont {
      width: 100%;
    }
  }
`;
