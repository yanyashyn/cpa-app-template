import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ButtonType } from "../types";

const StyledButton = styled.button<{ buttonType: string }>`
  outline: none;
  border: 1px solid #59c3c3;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 6px;
  background: #59c3c3;

  :hover {
    background: #ffffff;
    transition: 0.5s;
  }

  ${({ buttonType }) => {
    if (buttonType === "secondary")
      return css`
        border: 1px solid #ebebeb;
        background: #ebebeb;

        :hover {
          background: #000000;
          color: white;
          transition: 0.5s;
        }
      `;
  }}
`;

export const Button = ({
  onClick,
  children,
  buttonType = "primary",
}: {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  children: ReactElement | string;
  buttonType?: ButtonType;
}) => {
  return (
    <StyledButton onClick={onClick} buttonType={buttonType}>
      {children}
    </StyledButton>
  );
};
