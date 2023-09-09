import React, { useState } from "react";
import styled from "styled-components";
import HomeCarousel from "./components/HomeCarousel";
import ItemCard from "../../components/Cards/ItemCard";
import {
  AppstoreOutlined,
  DownOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Collapse, Menu } from "antd";
import { CategoriesItems, MenuItems } from "../../utils/contant";

export default function Home() {
  const [categoryToggled, setCategoryToggled] = useState(true);

  const toggleCategory = () => {
    setCategoryToggled((prev) => !prev);
  };
  const StyledHomeContainer = styled.div`
    padding: 10px 100px;
    height: auto;
    .hero_section {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 20px;
    }

    .categories {
      width: 100%;
      border: 0.5px solid var(--border);
      height: ${categoryToggled ? "50vh" : "50px"};
      transition: all 1s;
      overflow: hidden;
      overflow-y: scroll;
      .category_button {
        width: 100%;
        height: 50px;
        background-color: var(--yellow);
        display: flex;
        justify-content: space-between;
        align-items: center;

        cursor: pointer;
        .category_label {
          font-weight: bold;
        }
      }
    }
    .home-carousel {
      grid-column: 2/4;
      width: 100%;
      height: 50vh;
      background-color: green;
      overflow: hidden;
    }
    .home-images {
      width: 100%;
      height: 50vh;
      background-color: #fff;
      display: grid;
      grid-template-rows: 1fr 1fr;
      gap: 10px;
    }
    .other_item-cards {
      height: 30vh;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 40px;
      margin-top: 40px;
    }
  `;

  const MenuMobileItems = [
    {
      key: "1",
      label: "",
      showArrow: false,

      children: (
        <Menu
          className="menu-items-mobile"
          mode={"inline"}
          items={CategoriesItems}
        />
      ),
    },
  ];

  return (
    <StyledHomeContainer>
      <div className="hero_section">
        <div className="categories">
          <div className="category_button" onClick={toggleCategory}>
            <AppstoreOutlined style={{ marginLeft: 10 }} />
            <span className="category_label">CATEGORIES</span>
            <DownOutlined style={{ marginRight: 10 }} />
          </div>

          <Collapse
            className="categories_menu"
            defaultActiveKey={["1"]}
            activeKey={["1"]}
            items={MenuMobileItems}
            bordered:false
          />
        </div>

        <div className="home-carousel">
          <HomeCarousel />
        </div>
        <div className="home-images">
          <ItemCard />
          <ItemCard />
        </div>
      </div>

      <div className="other_item-cards">
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </StyledHomeContainer>
  );
}
