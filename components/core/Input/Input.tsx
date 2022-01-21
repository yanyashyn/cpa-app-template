import React from "react";
import styled from "styled-components";
import { typeStyle } from "../../../styles";

const StyledInput = styled.input`
  ${typeStyle("labelM")}
  padding: 8px;
  border: 1px solid purple;
  border-radius: 6px;
`;

export const Input = ({
  onChange,
  type = "text",
  placeholder,
  name,
  value,
}: {
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password";
  placeholder?: string;
  name?: string;
  value?: string;
}) => {
  return (
    <div>
      <StyledInput
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
