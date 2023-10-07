import { Button } from "antd";
import React from "react";
import styled from "styled-components";
function DetailsCard({ data, iseven }) {
  return (
    <StyledContainer style={{ flexDirection: iseven ? "row-reverse" : "row" }}>
      <div className="main-content">
        <h1>{data.title}</h1>
        <p>{data.content}</p>
        <Button id="shoping-button">Learn More</Button>
      </div>
      <div className="image-details">
        <img src={data.src} />
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  height: 70vh;
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  #shoping-button {
    width: 150px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: var(--yellow);
    font-weight: bold;
    height: 41px;
    border-radius: 10px;
    margin-right: auto;
  }
  .main-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 45%;
    p {
      text-align: justify;
    }
  }
  .image-details {
    /* width: 100%; */
    width: 45%;

    img {
      width: 100%;
      height: 70vh;
    }
  }
  @media screen and (max-width: 994px) {
    height: auto;
    display: grid;
    grid-template-columns: 1fr;

    width: 100%;
    .main-content {
      width: 100%;
      p {
        text-align: justify;
      }
    }
    .image-details {
      /* width: 100%; */
      width: 100%;

      img {
        width: 100%;
        height: 70vh;
      }
    }
  }
  @media screen and (max-width: 580px) {
    .image-details {
      img {
        width: 100%;
        height: 50vh;
      }
    }
  }
`;
export default DetailsCard;
