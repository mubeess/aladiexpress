import { Button } from "antd";
import React from "react";
import styled from "styled-components";
export default function CarouselCard() {
  const StyledCard = styled.div`
    height: 60vh;
    width: 100%;
    background-color: #fff;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("solar6.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
    h1,
    .lorem {
      color: #fff;
    }
    h1 {
      font-size: 31px;
      font-weight: 400;
    }
    span {
      font-size: 16px;
      font-weight: 500;
    }
    .carousel-content {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    #shoping-button {
      width: 150px;
      margin-top: 20px;
      margin-bottom: 20px;
      background-color: var(--yellow);
      font-weight: bold;
      height: 41px;
      border-radius: 10px;
    }
    @media screen and (max-width: 842px) {
      .carousel-content {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  `;
  return (
    <StyledCard>
      <div className="carousel-content">
        <h1 className="label">Things i can do at SolarPrimex</h1>

        <span className="lorem">
          Lorem ipsum dolor sit amet consectetur. Id quisque hac turpis laoreet.
          Id commodo aenean lectus eget tortor sagittis tristique nisi. Elit
          arcu suspendisse semper lorem. Dapibus non aliquet dolor euismod dis
          in id adipiscing. Eget eu nunc consectetur risus nibh nibh.
        </span>
        <Button id="shoping-button">SHOPPING NOW</Button>
      </div>
    </StyledCard>
  );
}
