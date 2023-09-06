import { useState } from "react";
import { Menu } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
export default function NavBar() {
  // const [current, setCurrent] = useState("home");

  const items = [
    {
      label: "Home",
      key: "home",
      children: [
        {
          type: "group",
          children: [
            {
              label: "Home One",
              key: "home:1",
              onClick: () => {
                console.log("home clicked");
              },
            },
            {
              label: "Home Two",
              key: "home:2",
            },
            {
              label: "Home Three",
              key: "home:3",
            },
            {
              label: "Home Four",
              key: "home:4",
            },
          ],
        },
      ],
    },
    {
      label: "Shop",
      key: "app",
      children: [
        {
          label: "Big Layouts",
          key: "page:12",
          children: [
            {
              label: "Blog 2 Column",
              key: "blog11:1",
            },
            {
              label: "Blog 3 Column",
              key: "blog11:2",
            },
            {
              label: "Grid Left Sidebar",
              key: "blog11:3",
            },
            {
              label: "Grid Right Sidebar",
              key: "blog11:4",
            },
            {
              label: "Blog List",
              key: "blog11:5",
            },
            {
              label: "List Left Sidebar",
              key: "blog11:6",
            },
            {
              label: "List Right Sidebar",
              key: "blog11:7",
            },
          ],
        },
        {
          label: "Blog Details Pages",
          key: "pages:21",
          children: [
            {
              label: "Left Sidebar",
              key: "blog21:1",
            },
            {
              label: "Right Sidebar",
              key: "blog21:2",
            },
            {
              label: "Blog Audio Format",
              key: "blog21:3",
            },
            {
              label: "Blog Video Format",
              key: "blog21:4",
            },
            {
              label: "Blog Gallery Format",
              key: "blog21:5",
            },
          ],
        },
      ],
      // onMouseEnter: () => setShopSubMenuVisible(true),
      // onMouseLeave: () => setShopSubMenuVisible(false),
    },
    {
      label: "Blog",
      key: "SubMenu",
      children: [
        {
          type: "group",
          children: [
            {
              label: "Blog Grid View",
              key: "blog:1",
              children: [
                {
                  label: "Blog 2 Column",
                  key: "blog1:1",
                },
                {
                  label: "Blog 3 column",
                  key: "blog1:2",
                },
                {
                  label: "Grid Left sidebar",
                  key: "blog1:3",
                },
                {
                  label: "Grid Right sidebar",
                  key: "blog1:4",
                },
              ],
            },
            {
              label: "Blog List View",
              key: "blog:2",
              children: [
                {
                  label: "Blog List",
                  key: "blog2:1",
                },
                {
                  label: "List Left Sidebar",
                  key: "blog2:2",
                },
                {
                  label: "List Right Sidebar",
                  key: "blog2:3",
                },
              ],
            },
            {
              label: "Blog Details",
              key: "blog:3",
              children: [
                {
                  label: "List Left Sidebar",
                  key: "blog3:1",
                },
                {
                  label: "List Right Sidebar",
                  key: "blog3:2",
                },
              ],
            },
            {
              label: "Blog Format",
              key: "blog:4",
              children: [
                {
                  label: "Blog Audio Format",
                  key: "blog4:1",
                },
                {
                  label: "Blog Video Format",
                  key: "blog4:2",
                },
                {
                  label: "Galllery Video Format",
                  key: "blog4:3",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: "Pages",
      key: "alipay",
      children: [
        {
          label: "Big Layouts",
          key: "page:1",
          children: [
            {
              label: "Blog 2 Column",
              key: "page1:1",
            },
            {
              label: "Blog 3 Column",
              key: "page1:2",
            },
            {
              label: "Grid Left Sidebar",
              key: "page1:3",
            },
            {
              label: "Grid Right Sidebar",
              key: "page1:4",
            },
            {
              label: "Blog List",
              key: "page1:5",
            },
            {
              label: "List Left Sidebar",
              key: "page1:6",
            },
            {
              label: "List Right Sidebar",
              key: "page1:7",
            },
          ],
        },
        {
          label: "Blog Details Pages",
          key: "pages:2",
          children: [
            {
              label: "Left Sidebar",
              key: "page2:1",
            },
            {
              label: "Right Sidebar",
              key: "page2:2",
            },
            {
              label: "Blog Audio Format",
              key: "page2:3",
            },
            {
              label: "Blog Video Format",
              key: "page2:4",
            },
            {
              label: "Blog Gallery Format",
              key: "page2:5",
            },
          ],
        },
        {
          label: "Other Pages",
          key: "page3",
          children: [
            {
              label: "My Account",
              key: "page3:1",
            },
            {
              label: "Checkout",
              key: "page3:2",
            },
            {
              label: "Compare",
              key: "page3:3",
            },
            {
              label: "Whishlist",
              key: "page3:4",
            },
            {
              label: "Shopping Cart",
              key: "page3:5",
            },
          ],
        },
      ],
      // onMouseEnter: () => setIsPagesSubMenuVisible(true),
      // onMouseLeave: () => setIsPagesSubMenuVisible(false),
    },
  ];

  return (
    <div className="nav-container">
      <Menu
        className="menu-items"
        // onClick={setCurrent}
        // selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <p>6688 London, Greater London BAS 23JK, UK</p>
    </div>
  );
}
