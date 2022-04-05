import React from "react";

export const UseContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    const username = window.localStorage.getItem("username");
    if (username && !data) {
      setData(username);
    }
  }, []);

  return (
    <UseContext.Provider value={{ data, setData }}>
      {children}
    </UseContext.Provider>
  );
};
