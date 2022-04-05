import React from "react";
import { useLocation } from "react-router-dom";
import { UseContext } from "../../UseContext";
import { HeaderStyle } from "./HeaderStyle";

const Header = () => {
  const location = useLocation();
  const {data} = React.useContext(UseContext)
  
  if (location.pathname != "/signup") {
    return (
      <HeaderStyle>
          <h1>CodeLeap Network</h1>
          <h2>{data}</h2>
      </HeaderStyle>
    );
  }else{
    return null
  }
};

export default Header;
