import {
  // AndroidOutlined,
  FileTextOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Collapse, Select, Tabs } from "antd";
import React from "react";
import styled from "styled-components";

function Features() {
  return (
    <table
      border={"1px"}
      style={{ width: "30%", margin: " auto", borderCollapse: "collapse" }}>
      <tbody>
        <tr>
          <td>Dimension</td>
          <td>234x234</td>
        </tr>
        <tr>
          <td>Dimension</td>
          <td>234x234</td>
        </tr>
        <tr>
          <td>Dimension</td>
          <td>234x234</td>
        </tr>
        <tr>
          <td>Dimension</td>
          <td>234x234</td>
        </tr>
        <tr>
          <td>Dimension</td>
          <td>234x234</td>
        </tr>
      </tbody>
    </table>
  );
}

function ProductDetails() {
  let text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
  impedit illo distinctio cum, perspiciatis quod labore sapiente dolor
  eveniet maxime iste nam odio dolorum officiis quae vel placeat
  repellendus itaque?`;
  return (
    <>
      <ProductCont>
        <div className="product-img">
          <div className="main-img">
            <img src="1.jpg" width={"100%"} height={"100%"} />
          </div>
          <div className="sub-img">
            <div>
              <img src="nobg.png" width={"100%"} height={"100%"} />
            </div>
            <div>
              <img src="nobg.png" width={"100%"} height={"100%"} />
            </div>
            <div>
              <img src="nobg.png" width={"100%"} height={"100%"} />
            </div>
            <div>
              <img src="nobg.png" width={"100%"} height={"100%"} />
            </div>
          </div>
        </div>
        <div className="product-details">
          <div>
            <p className="name">Product Name</p>
            <p className="price">NGN 230,000</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              impedit illo distinctio cum, perspiciatis quod labore sapiente
              dolor eveniet maxime iste nam odio dolorum officiis quae vel
              placeat repellendus itaque?
            </p>
          </div>
          <div>
            <p className="variation">Variation</p>
            <label>Horse Power</label>
            <Select
              // defaultValue="Abuja"
              placeholder="Select"
              style={{
                width: "50%",
                display: "block",
                margin: "15px 0px",
                borderRadius: "5px",
              }}
              allowClear
              //   onChange={handleChange}
              options={[
                { value: "Cup", label: "Cup" },
                { value: "phone", label: "Phone" },
                { value: "Kaduna", label: "Kaduna" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
            <div>
              <button>-</button>
              <button>1</button>
              <button>+</button>
            </div>
            <button className="addBtn">
              {" "}
              Add to cart <ShoppingCartOutlined />{" "}
            </button>
            <button className="addWish">
              Add to wishlist <HeartOutlined />
            </button>
          </div>
          <div>
            <Collapse
              ghost
              items={[
                {
                  key: "1",
                  label: "Delivary date",
                  extra: <FileTextOutlined />,
                  children: <p>{text}</p>,
                },
              ]}
            />
            <Collapse
              ghost
              items={[
                {
                  key: "1",
                  label: `Return Policy`,
                  children: <p>{text}</p>,
                  // showArrow: false,
                  extra: <FileTextOutlined />,
                },
              ]}
            />
          </div>
        </div>
      </ProductCont>

      <ProductDesc>
        <Tabs
          defaultActiveKey="1"
          centered
          items={[
            {
              key: "1",
              label: "Product Details",
              children: <Features />,
            },
            {
              key: "2",
              label: "Reviews",
              children: "Content of Tab Pane 2",
            },
          ]}
          // onChange={onChange}
        />
      </ProductDesc>
    </>
  );
}

export default ProductDetails;

const ProductCont = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 1em;
  height: 100%;
  padding: 0.8em;

  .sub-img {
    display: flex;
    justify-content: space-between;
    height: auto;
    margin: 5px 0px;
  }
  .sub-img div {
    padding: 10px;
    height: 70%;
    width: 8em;
    border-radius: 5px;
    border: 1px solid var(--border);
  }
  .product-details {
    /* background: blue; */
    /* grid-row: 1/2; */
  }
  .name {
    font-weight: 100;
    font-size: 1.8em;
    margin: 0;
    padding: 0;
  }
  .price {
    font-weight: 900;
    font-size: 1.4em;
  }
  .variation {
    font-size: 1.4em;
    padding: 0;
    /* margin: 8px 0px; */
  }
  button {
    padding: 15px;
    background: none;
    border: 1px solid var(--border);
    border-radius: 5px;
    cursor: pointer;
    width: 50px;
  }
  .addBtn {
    background: var(--yellow);
    width: 50%;
    border: none;
    margin: 8px 0px;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
  }
  .addWish {
    width: 30%;
    margin-left: 5px;
  }
  .ant-collapse {
    display: block !important;
    border: 1px solid lightgray;
    border-radius: 5px;
    margin: 5px 0px;
  }
`;

const ProductDesc = styled.div`
  /* background: red; */
  /* margin: auto; */
`;
