import React, { useState } from "react";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import HorizontalList from "../../components/HorizontalItems/HorizontalList";

export default function HomeLayout() {
  const [viewMenu, setViewMenu] = useState(false);
  const toggleMenu = () => {
    setViewMenu((prev) => !prev);
  };
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
  return (
    <div className="main_layout_container">
      <div className="layout_header">
        <Header toggleMenu={toggleMenu} isToggled={viewMenu} />
      </div>

      <NavBar viewMenu={viewMenu} />
      <div className="main_layout_body">
        <Outlet />
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

      <div>
        <Footer />
      </div>
    </div>
  );
}
