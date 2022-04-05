import React from "react";
import { InputStyle } from "./InputStyle";

const Input = ({
  type,
  placeholder,
  name,
  width,
  height,
  bgcolor,
  border,
  value,
  onChange,
  onBlur,
  ...rest
}) => {
  return (
    <InputStyle
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      width={width}
      height={height}
      bgcolor={bgcolor}
      border={border}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      {...rest}
    />
  );
};

export default Input;
