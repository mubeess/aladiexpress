import React from "react";
import styled from "styled-components";
import IconButton from "../IconButton/IconButton";
import { DownOutlined, ShoppingCartOutlined } from "@ant-design/icons";

export default function CartHolder() {
  const StyledCartHolder = styled.div`
    width: 100px;
    background-color: var(--red);
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    overflow: hidden;
    color: #fff;
    span {
      font-weight: bold;
      font-size: 12px;
    }
    .label {
      position: absolute;
      height: 25px;
      width: 25px;
      background-color: var(--yellow);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translate(-20px, -25px);
      color: #000;
    }
    .divider {
      width: 1px;
      height: 70%;
      background-color: var(--light);
      opacity: 0.5;
    }
  `;
  return (
    <StyledCartHolder>
      <div className="label">
        <span>0</span>
      </div>

      <ShoppingCartOutlined style={{ fontSize: 25 }} />
      <div className="divider" />
      <span>N500,000</span>
      <DownOutlined />
    </StyledCartHolder>
  );
}
