import { Button } from "antd";
import React from "react";
import styled from "styled-components";
export default function CarouselCard() {
  const StyledCard = styled.div`
    height: 50vh;
    width: 100%;
    background-color: #fff;
    background-image: url("1.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    padding-left: 20px;
    flex-direction: column;
    #label {
      font-size: 20px;
    }
    .tag {
      color: var(--red);
    }
    #shoping-button {
      width: 150px;
      margin-top: 20px;
      margin-bottom: 20px;
      background-color: var(--yellow);
      font-weight: bold;
    }
  `;
  return (
    <StyledCard>
      <span id="label">
        Sales offer <span className="tag">-20% off</span> this week
      </span>
      <h1>Cham Cham Galaxy S9|S9+</h1>
      <span id="label">
        Starting at <span className="tag">N200,000</span>
      </span>
      <Button id="shoping-button">SHOPPING NOW</Button>
    </StyledCard>
  );
}
