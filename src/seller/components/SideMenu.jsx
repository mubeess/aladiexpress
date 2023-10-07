import { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { styled } from "styled-components";

const items = [
  {
    label: "Dashboard",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "Product",
    key: "app",
    icon: <AppstoreOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
    ],
  },
  {
    label: "Other",
    key: "other",
    icon: <SettingOutlined />,
  },
  {
    label: "Notification",
    key: "notification",
    icon: <SettingOutlined />,
  },
];

export const SideMenu = () => {
  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <SideBar>
      <div className="logo">Logo</div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="vertical"
        style={{ width: "200px", background: "#0b1019" }}
        items={items}
        theme="dark"
      />
    </SideBar>
  );
};

const SideBar = styled.div`
  background: #0b1019;
  min-height: 100vh;
  width: 100%;
  padding: 10px 5px;
  .logo {
    background: #fff;
    border-radius: 5px;
    width: 100px;
    padding: 10px;
    margin-bottom: 30px;
  }
`;
