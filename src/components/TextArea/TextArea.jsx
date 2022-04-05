import React from "react";
import { TextAreaStyle } from "./TextAreaStyle";

const TextArea = ({
  id,
  name,
  value,
  placeholder,
  rows,
  cols,
  resize,
  border,
  onChange
}) => {
    
  return (
    <TextAreaStyle
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      resize={resize}
      border={border}
      onChange={onChange}
    />
  );
};

export default TextArea;
