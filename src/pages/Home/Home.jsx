import { useState } from "react";
import styled from "styled-components";
import HomeCarousel from "./components/HomeCarousel";
import ItemCard from "../../components/Cards/ItemCard";
import { AppstoreOutlined, DownOutlined } from "@ant-design/icons";
import { Collapse, Menu } from "antd";
import { CategoriesItems } from "../../utils/contant";
import HorizontalList from "../../components/Horizontal/HorizontalList";
import FeaturedCard from "../../components/Cards/FeaturedCard";

export default function Home() {
  const [categoryToggled, setCategoryToggled] = useState(true);

  let datas = [
    {
      id: 1,
      title: "Home",
      price: "300",
      description: "Home component",
      info: "information",
    },
    {
      id: 2,
      title: "Home",
      price: "300",
      description: "Home component",
      info: "information",
    },
    {
      id: 3,
      title: "Home",
      price: "300",
      description: "Home component",
      info: "information",
    },
    {
      id: 4,
      title: "Home",
      price: "300",
      description: "Home component",
      info: "information",
    },
    {
      id: 5,
      title: "Home",
      price: "300",
      description: "Home component",
      info: "information",
    },
    {
      id: 6,
      title: "Home",
      price: "300",
      description: "Home component",
      info: "information",
    },
    {
      id: 7,
      title: "Home",
      price: "300",
      description: "Home component",
      info: "information",
    },
    {
      id: 8,
      title: "Home",
      price: "300",
      description: "Home component",
      info: "information",
    },
    {
      id: 9,
      title: "Home",
      price: "300",
      description: "Home component",
      info: "information",
    },
  ];

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
      background-color: #ffff;
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
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 40px;
      margin-top: 40px;
    }
    @media screen and (max-width: 1120px) {
      padding: 10px;
      .hero_section {
        grid-template-columns: 1fr;
        gap: 0px;
      }
      .other_item-cards {
        margin: 0 auto;
        height: 45vh;
        display: flex;
        justify-content: center;
        flex-direction: row;
        overflow-x: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        overflow-y: hidden;
        /* overflow: hidden; */
      }

      .categories {
        display: none;
      }
      .home-carousel {
        grid-column: 1/2;
        width: 100%;
        height: 50vh;

        overflow: hidden;
      }
      .home-images {
        display: none;
      }
    }

    @media screen and (max-width: 580px) {
      .home-carousel {
        height: 40vh;
      }
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
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </div>

      <div>
        <HorizontalList data={datas} name={"Trending Products"} />
      </div>
      <div>
        <HorizontalList data={datas} name={"New Products"} />
      </div>
      <div>
        <HorizontalList data={datas} name={"All Products"} />
      </div>
    </StyledHomeContainer>
  );
}
