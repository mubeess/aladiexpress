import React from 'react';
import Input from '../../components/Input/Input';
import styled from 'styled-components';
import { Select } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import Lottie from 'react-lottie-player';

import * as animationData from '../../assets/animation_lmj6hhzp.json';
export default function Reset() {
  return (
    <Cont>
      <FormCont>
        <div className="back">
          <ArrowLeftOutlined />
        </div>
        <div className="header">
          <h3 className="header">Forgot Password</h3>
          <p className="info">Enter your email address to continue</p>
        </div>
        <div className="main ">
          <Input
            label={'Email address'}
            type="text"
            placeholder={'Enter email address'}
            outlined
          />

          <div className="btnCont">
            <button className="signup">Send reset link</button>
          </div>
        </div>
      </FormCont>

      <Card>
        <div style={{ width: '150px' }}>
          <Lottie
            loop
            animationData={animationData}
            play
            style={{ width: 150, height: 150 }}
          />
        </div>
        <div className="msg">
          <h3>Password resent link sent!</h3>
          <p>
            You will recieve an email containing instruction on how to reset
            your password
          </p>
        </div>
        <div className="btnCont">
          <button className="goto">Go to login</button>
        </div>
      </Card>

      <div className="imageCont">
        <img src="1.jpg" width={'90%'} height={'100%'} />
      </div>
    </Cont>
  );
}

const FormCont = styled.div`
  padding: 70px 20px;
  @media screen and (min-width: 768px) {
    width: 50%;
    margin: auto;
  }
  .header {
    font-size: larger;
    line-height: 10px;
    padding-bottom: 30px;
    padding-top: 5px;
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
    text-transform: 'uppercase';
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

const Cont = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    width: 100%;
  }
  /* align-items: center; */

  @media screen and (max-width: 768px) {
    .imageCont {
      display: none;
    }
  }
`;

export const Card = styled.div`
  background: #ffffff;
  border: 1px solid var(--border);
  border-radius: 5px;
  padding: 10px;
  max-width: 391px;
  height: 326px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .msg {
    text-align: center;
  }
  .msg p {
    color: var(--secondary);
    font-size: small;
  }
  .btnCont {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
  .btnCont button {
    padding: 10px;
    border: 1px solid var(--border);
    width: 100%;
    border-radius: 5px;
    background: none;
  }
  .goto {
    background: var(--yellow) !important;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;
