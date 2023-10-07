import React from "react";
import styled from "styled-components";

import IndexCarousel from "./components/IndexCarousel";
import Logo from "../Home/components/Logo";
import ChannelCard from "./components/ChannelCard";
import DetailsCard from "./components/DetailsCard";
import { DETAILS_DATA } from "./data";
import Footer from "../../components/Footer/Footer";
const CHANNELS = [
  {
    name: "Ecommerce",
    src: "shopping.png",
    route: "/store",
  },
  {
    name: "Installation",
    src: "install.png",
    route: "/store",
  },
  {
    name: "Funding",
    src: "funding.png",
    route: "/store",
  },
  {
    name: "Donation",
    src: "donation.png",
    route: "/store",
  },
  {
    name: "Project",
    src: "donation.png",
    route: "/store",
  },
];

function Index() {
  return (
    <StyledContainer>
      <div className="home-hero">
        <div className="main-home-nav">
          <div className="main-logo">
            <img src="logo2.png" />
          </div>
          <div className="main-nav-list">
            <ul>
              <li>Home</li>
              <li>E-commerce</li>
              <li>Installation</li>
              <li>Funding</li>
              <li>Donation</li>
              <li>Project</li>
              <li>Solar need calculator</li>
            </ul>
          </div>
        </div>
        <div className="home-carousel">
          <IndexCarousel />
        </div>
      </div>

      <div className="channel-list">
        {CHANNELS.map((chanel) => (
          <ChannelCard key={chanel.name} data={chanel} />
        ))}
      </div>

      <div className="home-details">
        {DETAILS_DATA.map((detail, ind) => (
          <DetailsCard
            iseven={ind % 2 !== 0}
            key={detail.title}
            data={detail}
          />
        ))}
      </div>

      <Footer />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  min-height: 30vh;
  overflow: hidden;
  margin: 0px;
  .home-hero {
    height: 60vh;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0px 10px;
    .home-carousel {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: aliceblue;
      z-index: 50;
    }
    .main-home-nav {
      height: 60px;

      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      z-index: 100;
      .main-nav-list {
        ul li {
          display: inline-block;
          color: #fff;
          font-weight: bold;
          margin-right: 20px;
          font-size: 13px;
          cursor: pointer;
        }
      }
    }
  }

  .channel-list {
    display: flex;
    height: 160px;
    padding: 40px 20px;
    background-color: #fff;
    justify-content: center;
    align-items: center;
  }
  .home-details {
    min-height: 70vh;
    padding: 20px 70px;
  }
  @media screen and (max-width: 842px) {
    .home-hero {
      .main-home-nav {
        .main-nav-list {
          display: none;
        }
      }
    }
  }
  @media screen and (max-width: 580px) {
    .channel-list {
      display: flex;
      height: auto;
      padding: 0px 0px;
      background-color: #fff;
      flex-direction: column;
    }
    .home-details {
      padding: 20px;
    }
  }
`;
export default Index;
