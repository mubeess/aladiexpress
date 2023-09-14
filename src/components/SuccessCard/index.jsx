import React from "react";
import Lottie from "react-lottie-player";
import styled from "styled-components";
import * as animationData from "../../assets/animation_lmj6hhzp.json";
function SuccessCard() {
  return (
    <Card>
      <div>
        <Lottie
          loop
          animationData={animationData}
          play
          style={{ width: 150, height: 150 }}
        />
      </div>
      <div className="msg">
        <h3>Your account was create successfully</h3>
        <p>
          Feel free to keep exploring our store and relish the finest deals
          while you shop
        </p>
      </div>
      <div className="btnCont">
        <button>Continue Shopping</button>
        <button className="goto">Go to my account</button>
      </div>
    </Card>
  );
}

export default SuccessCard;

export const Card = styled.div`
  background: #ffffff;
  border: 1px solid var(--border);
  border-radius: 5px;
  padding: 10px;
  max-width: 391px;
  height: 326px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
  .msg {
    text-align: center;
  }
  .msg p {
    color: var(--secondary);
    font-size: small;
  }
  .btnCont {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
  .btnCont button {
    padding: 10px;
    border: 1px solid var(--border);
    width: 40%;
    border-radius: 5px;
    background: none;
  }
  .goto {
    background: var(--yellow) !important;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;
