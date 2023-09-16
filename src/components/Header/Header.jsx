import React from "react";
import styled from "styled-components";
import IconButton from "../IconButton/IconButton";
import CartHolder from "../CartHolder/CartHolder";
import { Dropdown, Input } from "antd";
import {
  CloseCircleOutlined,
  DownOutlined,
  HeartOutlined,
  HomeOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const items = [
  { label: "Sample", key: 1 },
  { label: "Sample Saampleee", key: 2 },
  { label: "Sample samplek samplee", key: 3 },
];
export default function Header({ toggleMenu, isToggled }) {
  const StyledHader = styled.div`
    background-color: var(--white);
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px auto;
    .logo {
      width: 20%;
    }

    .main-header-cart {
      flex: 1;
      display: flex;
      height: 50px;
      justify-content: space-between;
      align-items: center;
      .header_icon_group {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 20px;
        .phone-menu {
          display: none;
        }
      }
      .search-placeholder {
        width: 75%;
        border: 1px solid var(--border);
        border-right: none;
        overflow: hidden;
        height: 40px;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 10px;
        .search-select {
          border-right: 1px solid var(--border);
          span {
            margin-right: 10px;
          }
        }
      }
    }

    @media only screen and (max-width: 1200px) {
      flex-direction: column;
      .logo {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .main-header-cart {
        width: 100%;
        .search-placeholder {
          width: 70%;
        }
      }
    }

    @media only screen and (max-width: 1040px) {
      height: auto;
      .main-header-cart {
        height: auto;
        width: 100%;
        .search-placeholder {
          .search-select {
            width: 20%;
          }
        }
      }
    }

    @media only screen and (max-width: 637px) {
      height: auto;
      .main-header-cart {
        height: auto;
        width: 100%;
        flex-direction: column;
        .header_icon_group {
          width: 100%;
          .phone-menu {
            display: block;
          }
        }
        .search-placeholder {
          width: 100%;
          margin-top: 20px;
          margin-bottom: 20px;
          .search-select {
            width: 20%;
          }
        }
      }
    }
  `;

  return (
    <StyledHader>
      <div className="logo">
        <img src="logo.jpeg" />
      </div>

      <div className="main-header-cart">
        <div className="search-placeholder">
          <Dropdown trigger={["click"]} menu={{ items }} placement="bottomLeft">
            <div className="search-select">
              <span>All</span>
              <DownOutlined />
            </div>
          </Dropdown>

          <Input
            style={{ width: "80%", border: "none" }}
            placeholder="enter search keyword"
          />
          <IconButton
            icon={<SearchOutlined style={{ fontSize: 25 }} />}
            bgColor="var(--yellow)"
          />
        </div>

        <div className="header_icon_group">
          <IconButton
            icon={<HeartOutlined style={{ fontSize: 25 }} />}
            hoverColor="var(--yellow)"
            outlined
            label="0"
          />
          <CartHolder />
          {isToggled ? (
            <CloseCircleOutlined className="phone-menu" onClick={toggleMenu} />
          ) : (
            <MenuOutlined className="phone-menu" onClick={toggleMenu} />
          )}
        </div>
      </div>
    </StyledHader>
  );
}
