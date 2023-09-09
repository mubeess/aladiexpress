import { EyeFilled, HeartOutlined, StarOutlined } from "@ant-design/icons";
import { React } from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";
function Card() {
  return (
    <>
      <CardContainer>
        <div className="img">Img</div>
        <div className="details">
          <div className="name">
            <p>Graphic Corner</p>
            <p>
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
            </p>
          </div>
          <hr />
          <div className="price-details">
            <p>Accusantium Dolorem1</p>
            <p>$54.40</p>
          </div>
          <motion.div initial={{ y: -40, opacity: 0 }}>Hi</motion.div>
          <div className="btn-cont">
            <button className="add">Add to Cart</button>
            <button>
              <HeartOutlined />{" "}
            </button>
            <button>
              <EyeFilled />{" "}
            </button>
          </div>
        </div>
      </CardContainer>
    </>
  );
}

export default Card;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid;
  border-radius: 3px;
  width: 300px;
  padding: 10px;
  .img {
    height: 300px;
    background: red;
  }
  /* box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1); */
  .details {
    /* height: 20%; */
  }
  .name {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 45px;
  }
  .name p:nth-child(1) {
    font-size: 15px;
  }
  .price-details {
    font-weight: bolder;
    line-height: 10px;
    padding-bottom: 10px;
    font-size: 14px;
  }
  .price-details p:nth-child(1) {
    color: var(--primary);
  }
  .price-details p:nth-child(1):hover {
    text-decoration: underline;
    cursor: pointer;
  }
  .btn-cont button {
    background: #f7f7f7f7;
    padding: 0.6em;
    border: 1px solid #c6c6c6f6;
    margin: 4px 2px;
    border-radius: 3px;
  }
  .btn-cont button:hover {
    background: var(--yellow);
  }
  .add {
    text-transform: uppercase;
    font-weight: 900;
  }
`;
