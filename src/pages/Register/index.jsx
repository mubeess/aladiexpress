import React from "react";
import Input from "../../components/Input/Input";
import styled from "styled-components";
import { Select } from "antd";

function Register() {
  return (
    <FormCont>
      <div className="header">
        <h3 className="header">Register</h3>
        <p className="info">Enter your information to continue</p>
      </div>
      <div className="main ">
        <div className="grid">
          <Input
            label={"First Name"}
            placeholder={"Enter First Name"}
            outlined
          />
          <Input
            label={"Last Name"}
            placeholder={"Enter First Lastname"}
            outlined
          />
        </div>
        <div className="grid">
          <Input label={"Gender"} placeholder={"Gender"} outlined />
          <Input label={"Phone Number"} placeholder={"Phone"} outlined />
        </div>
        <div className="grid">
          <Input
            label={"Email"}
            type="email"
            placeholder={"Enter Email"}
            outlined
          />
          <Input
            label={"Password"}
            type="password"
            placeholder={"Enter Password"}
            outlined
          />
        </div>
        <h3>Addtitional Information</h3>
        <Input
          label={"Address"}
          type="text"
          placeholder={"Enter street Address"}
          outlined
        />
        <label className="label">Country</label>
        <CustomeSelect
          defaultValue="lucy"
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
        />

        <div className="grid">
          <Input
            label={"Town/City"}
            type="text"
            placeholder={"Enter town or city"}
            outlined
          />
          <Input
            label={"Town/City"}
            type="text"
            placeholder={"Enter town or city"}
            outlined
          />

          <Input
            label={"Postal Code"}
            type="text"
            placeholder={"Enter postal code"}
            outlined
          />
        </div>
        <div className="btnCont">
          <button className="signup">Sign up</button>
          <button className="login">Already have an account? Login</button>
        </div>
      </div>
    </FormCont>
  );
}

export default Register;

const FormCont = styled.div`
  padding: 70px 20px;
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
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    .btnCont {
      width: 90%;
    }
  }
`;
const CustomeSelect = styled(Select)`
  width: 100%;
  background: #fff;
  border-radius: 15px;
  height: 35;
`;
