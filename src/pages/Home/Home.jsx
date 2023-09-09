import { Carousel } from "antd";
import React from "react";
import styled from "styled-components";
import HomeCarousel from "./components/HomeCarousel";
import ItemCard from "../../components/Cards/ItemCard";
export default function Home() {
  const StyledHomeContainer = styled.div`
    padding: 10px 100px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    .categories {
      width: 100%;
      min-height: 100px;
      background-color: blue;
    }
    .home-carousel {
      grid-column: 2/4;
      width: 100%;
      min-height: 100px;
      background-color: green;
    }
    .home-images {
      width: 100%;
      height: 50vh;
      background-color: #fff;
      display: grid;
      grid-template-rows: 1fr 1fr;
      gap: 10px;
    }
  `;

  return (
    <StyledHomeContainer>
      <div className="categories"></div>
      <div className="home-carousel">
        <HomeCarousel />
      </div>
      <div className="home-images">
        <ItemCard />
        <ItemCard />
      </div>
    </StyledHomeContainer>
  );
}
