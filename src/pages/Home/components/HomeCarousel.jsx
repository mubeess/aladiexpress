import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import React, { useRef } from "react";
import styled from "styled-components";
import CarouselCard from "./CarouselCard";

export default function HomeCarousel() {
  const carouselRef = useRef(null);

  const StyledCarousel = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000;
    position: relative;

    .arrow-icon {
      position: absolute;
      z-index: 100;
      bottom: 0;
      top: 0;
      transform: translateY(50%);
    }
    .arrow-icon.right {
      right: 0;
    }
    .arrow-icon .left {
      transform: scale(0);
      opacity: 0;
      transition: all 1s;
    }
    .right-icon {
      transform: scale(0);
      opacity: 0;
      transition: all 1s;
    }
    .main-carousel {
      width: 100%;
      height: 100%;
      .slick-dots li:not(.slick-active) button {
        background-color: var(--gray);
      }
      .slick-dots li.slick-active button {
        background-color: var(--yellow);
      }
    }
    &:hover .right-icon {
      transform: scale(1);
      opacity: 1;
    }
    &:hover .arrow-icon .left {
      transform: scale(1);
      opacity: 1;
    }
    .arrow-icon .left:hover {
      color: var(--yellow);
    }
    .right-icon:hover {
      color: var(--yellow);
    }
    @media screen and (max-width: 580px) {
      .home-carousel {
        height: 40vh;
      }
      .main-carousel {
        height: 40vh;
      }
    }
  `;

  const handleNext = () => {
    carouselRef.current.next();
  };
  const handlePrev = () => {
    carouselRef.current.prev();
  };

  const CarouselData = [1, 2, 3, 4];

  return (
    <StyledCarousel>
      <div className="arrow-icon">
        <LeftOutlined
          onClick={handlePrev}
          className="left"
          style={{ fontSize: 30 }}
        />
      </div>
      <div className="arrow-icon right">
        <RightOutlined
          onClick={handleNext}
          className="right-icon"
          style={{ fontSize: 30 }}
        />
      </div>
      <Carousel
        dots={{ className: "dots" }}
        ref={carouselRef}
        className="main-carousel"
        autoplay
      >
        {CarouselData.map((data, ind) => (
          <CarouselCard key={data} />
        ))}
      </Carousel>
    </StyledCarousel>
  );
}
