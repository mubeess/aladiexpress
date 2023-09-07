import { useState } from "react";
import { Collapse, Menu } from "antd";
import { MenuItems } from "../../utils/contant";
export default function NavBar() {
  const [viewMenu, setViewMenu] = useState(!true);

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

  const toggleCollapse = () => {
    setViewMenu(!viewMenu);
  };
  return (
    <div className="nav-container">
      <button onClick={toggleCollapse}>View</button>
      <Collapse
        defaultActiveKey={["1"]}
        activeKey={viewMenu ? ["1"] : []}
        items={MenuMobileItems}
        bordered:false
      />

      <Menu className="menu-items" mode={"horizontal"} items={MenuItems} />
      <p>6688 London, Greater London BAS 23JK, UK</p>
    </div>
  );
}
