import React from "react";
import { ButtonStyle } from "./ButtonStyle";

const Button = ({
  children,
  type,
  width,
  height,
  bgcolor,
  border,
  textColor,
  onClick,
  disabled,
  autoFocus
}) => {
  return (
    <ButtonStyle
      type={type}
      width={width}
      height={height}
      bgcolor={bgcolor}
      border={border}
      textColor={textColor}
      onClick={onClick}
      disabled={disabled}
      autoFocus={autoFocus}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
