import { Button, Select } from "antd";
import React from "react";
import styled from "styled-components";
import Input from "../../components/Input/Input";
import CheckButton from "../../components/Buttons/CheckButton";

export default function Checkout() {
  return (
    <StyledChckoutContainer>
      <h1>Checkout</h1>
      <div className="register-section">
        <Button>New customer? Click to register</Button>
        <Button type="text">Returning customer? Click to login</Button>
      </div>
      <div className="checkout-breackdown">
        <div className="billing-details">
          <div className="main-billing">
            <div className="checkout-header">
              <span>Billing Details</span>
            </div>
            <div className="billing-inputs">
              <div className="grid-input">
                <Input label="First Name" outlined />
                <Input label="Second Name" outlined />
              </div>

              <Input outlined label="Company Name" />
              <Input outlined label="Company Name" />
              <Input outlined label="Company Name" />
              <Input outlined label="Company Name" />
              <div className="grid-input">
                <Input label="Town" outlined />
                <Input label="City" outlined />
              </div>
              <div className="grid-input">
                <Input label="Email" outlined />
                <Input label="Phone" outlined />
              </div>
            </div>
          </div>

          <div className="main-billing">
            <div className="checkout-header">
              <span>Billing Details</span>
            </div>

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
                        {
                          value: "disabled",
                          label: "Disabled",
                          disabled: true,
                        },
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
                        {
                          value: "disabled",
                          label: "Disabled",
                          disabled: true,
                        },
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
          </div>
        </div>

        <div className="order">
          <div className="checkout-header">
            <span>Your Order</span>
          </div>

          <div className="product-qty">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Flames 200 Watts Monocrystalline Solar Panel</td>
                  <td>1</td>

                  <td>
                    <h4>NGN 230,000</h4>
                  </td>
                </tr>
                <tr>
                  <td>Flames 200 Watts Monocrystalline Solar Panel</td>
                  <td>1</td>

                  <td>
                    <h4>NGN 230,000</h4>
                  </td>
                </tr>
                <tr>
                  <td>Tax</td>

                  <td colSpan={2}>
                    <h4>NGN 230,000</h4>
                  </td>
                </tr>

                <tr>
                  <td>Delivery Cost</td>

                  <td colSpan={2}>
                    <h4>NGN 230,000</h4>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="billing-buttons">
            <h2>Payment Methods</h2>
            <CheckButton
              title="Paystack"
              onPress={() => {}}
              active={true}
              Image={<img src="nobg.png" />}
            />

            <CheckButton
              title="Flutterwave"
              onPress={() => {}}
              active={true}
              Image={<img src="nobg.png" />}
            />
            <Button
              style={{
                marginTop: 20,
                backgroundColor: "var(--yellow)",
                width: "100%",
                marginBottom: 20,
              }}
            >
              Pay Now
            </Button>
          </div>
        </div>
      </div>
    </StyledChckoutContainer>
  );
}
const StyledChckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-height: 80vh;
  .register-section {
    display: flex;
    justify-content: space-between;
    width: 40%;
    align-items: center;
    margin: 20px 10px;
  }
  .checkout-header {
    width: 100%;
    height: 40px;
    background-color: #e5e5e5;
    display: flex;
    align-items: center;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    padding: 0px 10px;
  }
  .grid-input {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .checkout-breackdown {
    flex: 1;
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 20px;
    .billing-details {
      grid-column: 1/5;

      display: flex;
      flex-direction: column;
      .main-billing {
        width: 100%;
        overflow: hidden;
        border: 1px solid var(--border);
        min-height: 20vh;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        .billing-inputs {
          flex: 1;
          padding: 10px 10px;
        }

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
      }
    }
    .order {
      grid-column: 5/8;
      border-radius: 10px;
      border: 1px solid var(--border);
      overflow: hidden;
      min-height: 80vh;
      .product-qty {
        width: 90%;
        padding: 20px;
        margin-left: auto;
        margin-right: auto;
        table {
          width: 100%;
          text-align: center;
          font-size: 13px;
          thead th {
            border: 1px solid var(--border);
            height: 41px;
          }
          tr {
            height: 41px;
          }
          td {
            padding: 5px;
            border: 1px solid var(--border);
          }
        }
      }

      .billing-buttons {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 30px;
      }
    }
  }
  @media screen and (max-width: 1120px) {
    overflow: hidden;
    .checkout-header {
      width: 100%;
      height: 40px;
      background-color: #e5e5e5;
      display: flex;
      align-items: center;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      padding: 0px 10px;
    }

    .checkout-breackdown {
      flex: 1;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      grid-template-columns: 1fr;
      gap: 20px;
      .billing-details {
        grid-column: 1/2;

        display: flex;
        flex-direction: column;
        .main-billing {
          width: 100%;
          overflow: hidden;
          overflow-x: scroll;
          border: 1px solid var(--border);
          min-height: 20vh;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
          .billing-inputs {
            flex: 1;
            padding: 10px 10px;
          }

          table {
            width: 100%;
            max-width: 100%;
            overflow-x: scroll;
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
        }
      }
      .order {
        grid-column: 1/2;
        border-radius: 10px;
        border: 1px solid var(--border);
        overflow: hidden;
        min-height: 80vh;
        .product-qty {
          width: 90%;
          padding: 20px;
          margin-left: auto;
          margin-right: auto;
          table {
            width: 100%;
            max-width: 100%;
            overflow-x: auto;

            text-align: center;
            font-size: 13px;
            thead th {
              border: 1px solid var(--border);
              height: 41px;
            }
            tr {
              height: 41px;
            }
            td {
              padding: 5px;
              border: 1px solid var(--border);
            }
          }
        }

        .billing-buttons {
          width: 90%;
          margin-left: auto;
          margin-right: auto;
          margin-top: 30px;
        }
      }
    }
  }

  @media screen and (max-width: 510px) {
    .register-section {
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;
    }
  }
`;
