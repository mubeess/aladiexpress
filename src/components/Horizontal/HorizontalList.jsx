import React from "react";
import Card from "../Card/Card";
import styled from "styled-components";
import { ArrowRightOutlined } from "@ant-design/icons";

function HorizontalList({ name, data }) {
  return (
    <Container>
      <div className="header">
        <p className="name">{name}</p>
        <button>
          View All <ArrowRightOutlined />
        </button>
      </div>
      <div className="list">
        {data?.map((item) => {
          return <Card key={item.id} />;
        })}
      </div>
    </Container>
  );
}

export default HorizontalList;

const Container = styled.div`
  padding: 10px 10px;
  height: 60vh;
  margin: 15px 0px;
  /* background: red; */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header .name {
    font-size: 1.7em;
  }
  .header button {
    background: none;
    border-radius: 5px;
    padding: 10px;
    width: 100px;
    border: 1px solid #f1f1f1f1;
    cursor: pointer;
  }
  .list {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: row;
    overflow-x: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    /* overflow: hidden; */
  }
  .list::-webkit-scrollbar {
    display: none;
  }
  .list div {
    /* flex-grow: 1; */
    margin: 10px;
  }
`;
