import React from "react";
import styled from "styled-components";

export default function CheckButton({ title, onPress, style, active, Image }) {
  const StyledContainer = styled.div`
    width: 100%;
    height: 45px;
    border: 1px solid var(--border);
    border-radius: 4px;
    align-items: center;
    /* padding: 0px 20px; */
    margin-left: auto;
    margin-right: auto;
    display: flex;
    margin-top: 10px;

    align-items: center;
    img {
      width: 40px;
      height: 20px;
    }
    input {
      border-radius: 20px;
      margin-right: 20px;
      width: 20px;
      height: 20px;
      margin-left: 20px;
    }
    span {
      margin-left: 20px;
    }
  `;
  return (
    <StyledContainer onPress={onPress} style={style}>
      <input type="checkbox" value={active} />
      <div>
        {Image && Image}
        <span>{title}</span>
      </div>
    </StyledContainer>
  );
}
