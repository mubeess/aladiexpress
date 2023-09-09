import React from "react";
import styled from "styled-components";
export default function ItemCard() {
  const StyledCard = styled.div`
    width: 100%;
    height: 100%;
    background-color: red;
    padding-left: 10px;
    background-image: url("2.jpg");
    background-size: cover;
    border: 1px solid var(--border);
    h3 {
      width: 80%;
    }

    @media screen and (max-width: 1120px) {
      min-width: 350px;
      margin: 10px 0px;
      padding: 10px;
      height: 40vh;
    }
  `;
  return (
    <StyledCard>
      <h3>New Laptop, Max. CPU clock rate 3.49 GHz</h3>
      <span>Big sale 30% off</span>
    </StyledCard>
  );
}
