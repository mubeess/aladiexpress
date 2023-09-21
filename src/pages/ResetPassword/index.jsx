import React from 'react';
import Input from '../../components/Input/Input';
import styled from 'styled-components';
import { Select } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import SuccessCard from '../../components/SuccessCard';

function ResetPassword() {
  return (
    <>
      {/* <FormCont>
        <div className="back">
          <ArrowLeftOutlined />
        </div>
        <div className="header">
          <h3 className="header">Forgot Password</h3>
          <p className="info">Enter your email address to continue</p>
        </div>
        <div className="main ">
          <Input
            label={"Email address"}
            type="text"
            placeholder={"Enter email address"}
            outlined
          />

          <div className="btnCont">
            <button className="signup">Send reset link</button>
          </div>
        </div>
      </FormCont> */}
      <SuccessCard />
    </>
  );
}

export default ResetPassword;

const FormCont = styled.div`
  padding: 70px 20px;
  @media screen and (min-width: 768px) {
    width: 50%;
    margin: auto;
  }
  .back {
    margin: 40px 0px;
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

  .btnCont {
    margin: 20px auto;
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
