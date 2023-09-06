import { HeartOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
export default function IconButton({
  bgColor,
  label,
  outlined,
  hoverColor,
  icon,
}) {
  const StyledIconButton = styled.div`
    width: 40px;
    height: 40px;
    border: ${outlined ? "1px solid var(--border)" : "none"};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    background-color: ${bgColor};
    cursor: pointer;
    position: relative;
    .label {
      position: absolute;
      height: 25px;
      width: 25px;
      background-color: var(--yellow);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translate(-20px, -20px);
    }
    &:hover {
      border: ${outlined ? `1px solid ${hoverColor}` : "none"};
    }
  `;
  return (
    <StyledIconButton>
      {icon}

      {label && (
        <div className="label">
          <span>{label}</span>
        </div>
      )}
    </StyledIconButton>
  );
}
