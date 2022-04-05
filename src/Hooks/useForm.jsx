import React from "react";

export const useForm = () => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  function validate(value) {
    if (value.length === 0) {
      setError("Enter a Name");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function reset() {
    setValue("");
  }

  return {
    value,
    error,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
    reset,
  };
};
