import { Collapse, Drawer, Menu } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { MenuItems } from "../../utils/contant";

function Nav({ viewMenu = !false, toggleMenu }) {
  const [open, setOpen] = useState(!false);
  const MenuMobileItems = [
    {
      key: "1",
      label: "",
      showArrow: false,
      children: (
        <Menu className="menu-items-mobile" mode={"inline"} items={MenuItems} />
      ),
    },
  ];
  return (
    <Container>
      <div className="desktop">
        <Menu className="menu-items" mode={"horizontal"} items={MenuItems} />
      </div>

      <Drawer
        closable={false}
        title=""
        placement="left"
        onClose={toggleMenu}
        open={viewMenu}
      >
        <img src="logo.jpeg" />
        <Collapse
          ghost
          defaultActiveKey={["1"]}
          activeKey={viewMenu ? ["1"] : []}
          items={MenuMobileItems}
          bordered:false
        />
        <p>Categories</p>
        <Collapse
          className="categories_menu"
          defaultActiveKey={["1"]}
          activeKey={["1"]}
          items={MenuMobileItems}
          bordered:false
        />
      </Drawer>
    </Container>
  );
}

export default Nav;
const Container = styled.nav`
  background: var(--yellow);
  width: 95%;
  margin: 5px auto;
  border-radius: 5px !important;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
  height: 40px;

  ul {
    list-style: none;
    width: 100%;
    display: flex;
    align-items: center;
    /* justify-content: space-around; */
    height: 100%;
    /* background: coral; */
  }
  ul li {
    height: 100%;
  }
  a {
    text-decoration: none;
    color: #000000;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0px 5px;
    font-size: small;
    /* background: red; */
  }

  @media only screen and (max-width: 768px) {
    ul {
      display: none;
    }
    display: none;
  }
`;
