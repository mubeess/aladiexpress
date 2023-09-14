import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import Input from "../../components/Input/Input";

export default function Checkout() {
  return (
    <StyledChckoutContainer>
      <h1>Checkout</h1>
      <div className="register-section">
        <Button>New customer? Click to register</Button>
        <Button type="text">Returning customer? Click to login</Button>
      </div>
      <div className="checkout-breackdown">
        <div className="billing-details">
          <div className="main-billing">
            <div className="checkout-header">
              <span>Billing Details</span>
            </div>

            <Input outlined label="First Name" />
          </div>
        </div>

        <div className="order">
          <div className="checkout-header">
            <span>Your Order</span>
          </div>
        </div>
      </div>
    </StyledChckoutContainer>
  );
}
const StyledChckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-height: 80vh;
  .register-section {
    display: flex;
    justify-content: space-between;
    width: 40%;
    align-items: center;
    margin: 20px 10px;
  }
  .checkout-header {
    width: 100%;
    height: 40px;
    background-color: #e5e5e5;
    display: flex;
    align-items: center;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    padding: 0px 10px;
  }
  .checkout-breackdown {
    flex: 1;
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 20px;
    .billing-details {
      grid-column: 1/4;

      display: flex;
      flex-direction: column;
      .main-billing {
        width: 100%;
        overflow: hidden;
        border: 1px solid var(--border);
        min-height: 20vh;
        border-radius: 10px;
      }
    }
    .order {
      grid-column: 4/6;
      border-radius: 10px;
      border: 1px solid var(--border);
    }
  }
`;
