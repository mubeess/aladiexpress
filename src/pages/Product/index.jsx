import { PlusOutlined } from "@ant-design/icons";
import { Breadcrumb, Select, Slider } from "antd";

import styled from "styled-components";
import Card from "../../components/Card/Card";

function Product() {
  return (
    <ProductCont>
      <div className="box-one">
        <div className="card">
          <div className="header">
            <p>Filter</p>
            <p>
              <PlusOutlined />
            </p>
          </div>
          <div className="main">
            <div className="price">
              <p className="label">Type</p>
              <CustomeSelect
                // defaultValue="Abuja"
                style={{ width: "100%", borderRadius: "5px" }}
                allowClear
                //   onChange={handleChange}
                options={[
                  { value: "Cup", label: "Cup" },
                  { value: "phone", label: "Phone" },
                  { value: "Kaduna", label: "Kaduna" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="header">
            <p>Filter</p>
            <p>
              <PlusOutlined />
            </p>
          </div>
          <div className="main">
            <div className="price">
              <p className="label">Price Range</p>

              <Slider
                style={{ margin: 0 }}
                defaultValue={30}
                // onChange={onChange}
                // onAfterChange={onAfterChange}
              />
              <div className="range">
                <p className="min">0 NGN</p>
                <p className="max">1,000,000 NGN</p>
              </div>
            </div>
            <div className="condition">
              <p className="label">Condition</p>
              <input type="radio" name="condition" id="new" />
              <label htmlFor="new"> New</label> <br />
              <input type="radio" name="condition" id="used" />
              <label htmlFor="used">Used</label>
            </div>

            <div className="location">
              <p className="label">Location</p>
              <CustomeSelect
                // defaultValue="lucy"
                placeholder="Select"
                style={{ width: "100%", borderRadius: "5px" }}
                allowClear
                //   onChange={handleChange}
                options={[
                  { value: "Abuja", label: "Abuja" },
                  { value: "Lagos", label: "Lagos" },
                  { value: "Computer", label: "Laptop" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="box-two">
        <Breadcrumb
          items={[
            {
              title: <a href="/">Home</a>,
            },
            {
              title: <a href="">Solar Panels</a>,
            },
          ]}
        />
        <div className="product-info">
          <div className="product-image">
            <img src="../nobg.png" width={"100%"} />
          </div>
          <div className="product-name">Solar Panel</div>
        </div>
      </div>
      <div className="box-three">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </ProductCont>
  );
}

export default Product;

const ProductCont = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2fr 2fr;
  grid-template-rows: 200px auto;
  gap: 2em 2em;
  padding: 1em;

  .box-one {
    grid-row: 1/4;
    .card {
      border: 2px solid var(--border);
      width: 280px;
      border-radius: 10px;
      margin: 10px 0px;
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: var(--gray);
      padding: 0 10px 0 10px;
      border-radius: 10px 10px 0 0px;
    }
    .main {
      .label {
        font-weight: 500;
        font-size: medium;
        margin: 10px 0px;
        padding: 0;
      }
      .price {
        padding: 10px;
      }
      .range {
        display: flex;
        justify-content: space-between;
        padding: 10px 0px;
      }
      .range p {
        padding: 0;
        margin: 0;
        font-size: small;
      }
      .condition {
        padding: 10px;
        border-top: 1px solid var(--border);
      }
      .condition input {
        margin: 5px;
      }
      .condition label {
        font-size: small;
      }
      .location {
        padding: 20px;
        border-top: 1px solid var(--border);
      }
    }
  }
  .box-two {
    grid-column: 2/4;
    width: 100%;
    margin: 10px;
  }
  .box-two .product-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #ffd6d6;
    height: 100%;
    padding: 10px;
    border-radius: 5px;
  }
  .box-two .product-info .product-image {
    width: 50%;
    height: 100%;
  }

  .box-two .product-info .product-image img {
    width: 50%;
    height: 100%;
  }
  .box-two .product-info .product-name {
    color: var(--danger);
    font-size: xx-large;
    margin-right: 30px;
  }
  .box-three {
    grid-column: 2/4;
    grid-row: 3/4;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    margin: 5px;
  }
  .box-three div {
    margin: 5px;
  }

  @media screen and (max-width: 915px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;

    .box-one {
      grid-column: 1/3;
      grid-row: 1/2;
      margin: auto;
    }
    .box-two {
      grid-row: 2/3;
      grid-column: 1/3;
    }
    .box-three {
      grid-row: 3/4;
      grid-column: 1/3;
      justify-content: center;
    }
  }
`;

const CustomeSelect = styled(Select)`
  background: none;
  border: none;
`;
