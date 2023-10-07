import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function ChannelCard({ data }) {
  const navigation = useNavigate();
  return (
    <StyledConatiner onClick={() => navigation(data.route)}>
      <div className="channel-img">
        <img src={data.src} />
      </div>
      <div className="channel-label">
        <span>{data.name}</span>
      </div>
    </StyledConatiner>
  );
}

const StyledConatiner = styled.div`
  height: 151px;
  width: 151px;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  cursor: pointer;
  .channel-img {
    background-color: #fff;
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .channel-label {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    background-color: #f7f7f7;
    border-top: 1px solid #e6e6e6;
  }
  @media screen and (max-width: 580px) {
    width: 80%;
    margin-top: 20px;
  }
`;
export default ChannelCard;
