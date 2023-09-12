import { Button, Select } from "antd";
import React from "react";
import styled from "styled-components";

export default function Cart() {
  const StyledCartContainer = styled.div`
    padding: 20px;
    table {
      width: 100%;
      border: 1px solid var(--border);
    }
    #image-cell {
      width: 20%;
    }

    td {
      border-right: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
      width: auto;
      padding: 10px;
      place-items: center;
      text-align: center;
      .cart-image {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        text-align: justify;
        .main-image {
          width: 100px;
          height: 75px;
          border: 1px solid var(--border);
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 20px;
          img {
            width: 60px;
            height: 60px;
          }
        }
      }

      .buttons {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .cart-action {
          background-color: var(--yellow);
        }
      }
    }
    .total-balance {
      width: 30%;
      margin-top: 70px;
      margin-left: auto;
      min-height: 100px;
      .amount {
        display: flex;
        justify-content: space-between;
        height: 70px;
        span {
          margin-top: auto;
        }
      }
    }
  `;
  return (
    <StyledCartContainer>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: "5%" }}>1</td>
            <td id="image-cell">
              <div className="cart-image">
                <div className="main-image">
                  <img src="nobg.png" />
                </div>
                <span>Flames 200 Watts Monocrystalline Solar Panel</span>
              </div>
            </td>
            <td id="image-cell">
              <div className="buttons">
                <Button className="cart-action">-</Button>
                <Button disabled>2</Button>
                <Button className="cart-action">+</Button>
              </div>
            </td>
            <td id="image-cell">
              <Select
                style={{ width: "100%" }}
                defaultValue="lucy"
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              />
            </td>
            <td style={{ width: "15%" }}>
              <h4>NGN 230,000</h4>
            </td>
            <td id="image-cell">
              <Button>Remove</Button>
            </td>
          </tr>

          <tr>
            <td style={{ width: "5%" }}>2</td>
            <td id="image-cell">
              <div className="cart-image">
                <div className="main-image">
                  <img src="nobg.png" />
                </div>
                <span>Flames 200 Watts Monocrystalline Solar Panel</span>
              </div>
            </td>
            <td id="image-cell">
              <div className="buttons">
                <Button className="cart-action">-</Button>
                <Button disabled>2</Button>
                <Button className="cart-action">+</Button>
              </div>
            </td>
            <td id="image-cell">
              <Select
                style={{ width: "100%" }}
                defaultValue="lucy"
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              />
            </td>
            <td style={{ width: "15%" }}>
              <h4>NGN 230,000</h4>
            </td>
            <td id="image-cell">
              <Button>Remove</Button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="total-balance">
        <div className="amount">
          <div className="total">
            <span>Total</span>
            <h2>NGN 460,000.00</h2>
          </div>

          <span>2 items</span>
        </div>

        <Button
          style={{
            backgroundColor: "var(--yellow)",
            width: "100%",
            marginTop: 10,
          }}
        >
          Proceed to checkout
        </Button>
      </div>
    </StyledCartContainer>
  );
}
