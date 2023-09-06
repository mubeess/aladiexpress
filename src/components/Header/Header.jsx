import React from "react";
import styled from "styled-components";
import IconButton from "../IconButton/IconButton";
import CartHolder from "../CartHolder/CartHolder";
import { Dropdown, Input } from "antd";
import { DownOutlined, HeartOutlined, SearchOutlined } from "@ant-design/icons";

const items = [
  { label: "Sample", key: 1 },
  { label: "Sample Saampleee", key: 2 },
  { label: "Sample samplek samplee", key: 3 },
];
export default function Header() {
  const StyledHader = styled.div`
    background-color: var(--white);
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 20%;
    }
    .search-placeholder {
      width: 60%;
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
  `;
  return (
    <StyledHader>
      <div className="logo">
        <img src="logo.jpeg" />
      </div>
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
      <IconButton
        icon={<HeartOutlined style={{ fontSize: 25 }} />}
        hoverColor="var(--yellow)"
        outlined
        label="0"
      />
      <CartHolder />
    </StyledHader>
  );
}
