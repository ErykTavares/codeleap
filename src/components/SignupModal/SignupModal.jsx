import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { SignupModalStyle } from "./SignupModalStyle";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../Hooks/useForm";
import { UseContext } from "../../UseContext";

const SignupModal = () => {
  const navigate = useNavigate();
  const username = useForm();
  const { setData } = React.useContext(UseContext);
  const [disable, setDisable] = React.useState(false);

  React.useEffect(() => {
    return username.value.length === 0 ? setDisable(true) : setDisable(false);
  }, [username]);

  function handleClick() {
    setData(username.value);
    localStorage.setItem("username", username.value);
    navigate("/mainscreen");
  }

  return (
    <SignupModalStyle>
      <div className="modalText">
        <h2>Welcome to CodeLeap network!</h2>
        <h4>Please enter your username</h4>
      </div>
      <div className="inputmodal">
        <Input
          type="text"
          name="username"
          placeholder="Douglas"
          width="440"
          height="35"
          bgcolor="#f2f2f2"
          {...username}
          onKeyDown={(event) => (event.key === "Enter" ? handleClick() : null)}
        />
        {username.error ? <p>{username.error}</p> : null}
      </div>
      <div className="divButton">
        <Button
          type="submit"
          bgcolor="#000"
          textColor="#ffff"
          onClick={handleClick}
          disabled={disable}
        >
          ENTER
        </Button>
      </div>
    </SignupModalStyle>
  );
};

export default SignupModal;
