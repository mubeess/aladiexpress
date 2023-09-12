import { RightOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
export default function FeaturedCard() {
  const StyledContainer = styled.div`
    height: 240px;
    background-color: #ffd6d6;
    padding: 10px;
    border-radius: 10px;
    position: relative;
    color: #a30000;
    h4 {
      text-align: right;
    }
    img {
      height: 180px;
      width: 80%;
    }
    .arrowRight {
      position: absolute;
      bottom: 0;
      right: 0;
      margin-right: 30px;
      margin-bottom: 20px;
    }
    @media screen and (max-width: 1120px) {
      min-width: 350px;
      margin: 10px 0px;
      padding: 10px;
      height: 40vh;
    }
  `;
  return (
    <StyledContainer>
      <h4>Solar panel</h4>
      <img src="nobg.png" />
      <div className="arrowRight">
        <RightOutlined />
      </div>
    </StyledContainer>
  );
}
