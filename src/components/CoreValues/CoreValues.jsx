import { CarOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
const sample = [1, 2, 3, 4];
export default function CoreValues() {
  const StyledConatiner = styled.div`
    width: 100%;
    height: 30vh;
    background-color: #f0f2f4;
    padding: 40px 0px;
    display: grid;
    overflow: hidden;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
    .value-card {
      width: 100%;
      height: 100%;
      border-right: 1px solid gray;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      .value-icon {
        height: 62px;
        width: 62px;
        border-radius: 62px;
        background-color: #d9d9d9;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    @media screen and (max-width: 915px) {
      grid-template-columns: 1fr;
      height: auto;
      .value-card {
        width: 50%;
        height: 30vh;
        border-right: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        .value-icon {
          height: 62px;
          width: 62px;
          border-radius: 62px;
          background-color: #d9d9d9;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  `;
  return (
    <StyledConatiner>
      {sample.map((data) => (
        <div key={data} className="value-card">
          <div className="value-icon">
            <CarOutlined />
          </div>
          <h4>Free delivery</h4>
          <span>And free returns. See checkout for delivery dates</span>
        </div>
      ))}
    </StyledConatiner>
  );
}
