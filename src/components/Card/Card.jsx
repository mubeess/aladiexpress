import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";
function Card() {
  const [isHovered, setHovered] = useState(false);
  return (
    <>
      <CardContainer
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="img">
          <img src="../2.jpg" width={"100%"} />
        </div>
        <div className="details">
          <div>
            <p className="item-price">
              <strong> NGN 230,000 </strong>
            </p>
            <p className="item-name">Flames 2000 Watts</p>
            <p className="item-info">Monocrystalline Solar Panel</p>
            <p className="item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: isHovered ? 5 : 0, opacity: isHovered ? 1 : 0 }}
          >
            <div className="btn-cont">
              <button className="add">
                Add to cart <ShoppingCartOutlined />
              </button>
              <button className="favourite">
                <HeartOutlined />{" "}
              </button>
            </div>
          </motion.div>
        </div>
      </CardContainer>
    </>
  );
}

export default Card;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  max-width: 225px;
  min-width: 225px;
  padding: 10px;
  height: 340px;
  transition: height 0.3s ease; /* Add a smooth transition for the height change */

  &:hover {
    height: 355px; /* Height on hover */
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
  }
  .img {
  }
  .details {
    text-align: justify;
  }
  .details div p {
    /* line-height: 1em; */
  }
  .details .item-name {
    /* background: red; */
    margin: 0;
    padding: 0;
    font-size: 0.85em;
  }
  .details .item-price {
    font-weight: bolder;
    margin: 5px 0px 0px 0px;
    padding: 0;
  }
  .details .item-info {
    margin: 0;
    font-size: 0.85em;
    padding: 0;
  }
  .details .item-description {
    font-size: small;
    color: #b7b7b7;
  }
  .btn-cont {
    margin-top: -10px;
    width: 100%;
  }
  .btn-cont button {
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    padding: 5px;
    border: 1px solid #f1f1f1;
    margin: 4px 2px;
    border-radius: 3px;
    cursor: pointer;
  }
  .add {
    background: var(--yellow);
    font-weight: 600;
    width: 80%;
    font-size: smaller;
  }
  .favourite {
    width: 15%;
    background: #fff;
  }
`;
