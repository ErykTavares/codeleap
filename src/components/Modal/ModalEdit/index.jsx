import React from "react";
import { ModalEditStyle } from "./Style";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import TextArea from "../../TextArea/TextArea";
import { useForm } from "../../../Hooks/useForm";
import { POSTEDIT_PATCH } from "../../../api";
import { useFetch } from "../../../Hooks/useFetch";
import { UseContext } from "../../../UseContext";

const ModalEdit = ({
  className,
  method,
  titlemodal,
  buttontext,
  closeModal,
  postid,
  setLoading,
}) => {
  const titleinput = useForm();
  const content = useForm();
  const [disable, setDisable] = React.useState(false);
  const { url, options } = POSTEDIT_PATCH(postid, {
    title: titleinput.value,
    content: content.value,
  });
  const { response } = useFetch();
  const {postedit, setPostEdit} = React.useContext(UseContext)  

  React.useEffect(() => {
    return titleinput.value.length === 0 || content.value.length === 0
      ? setDisable(true)
      : setDisable(false);
  }, [titleinput, content]);

  React.useEffect(() => {
    titleinput.setValue(postedit.title);
    content.setValue(postedit.content);
  },[]);

  async function handleSubmit(event) {
    event.preventDefault();
    await response(url, options);
    closeModal(true);
    setLoading(true);
    setPostEdit({});
  }

  return (
    <ModalEditStyle
      className={className}
      method={method}
      onSubmit={(event) => handleSubmit(event)}
      onKeyDown={(event) => (event.key === "Escape" ? closeModal(event) : null)}
    >
      <div className="title">
        <h2>{titlemodal}</h2>
      </div>
      <div className="content">
        <div>
          <label htmlFor="title">Title</label>
          <Input
            name="title"
            placeholder="Hello Word"
            id="title"
            width="520"
            height="35"
            bgcolor="ffff"
            border={true}
            autoFocus={true}
            {...titleinput}
          />
        </div>
        <div>
          <label htmlFor="text">Content</label>
          <TextArea
            name="text"
            placeholder="Content Here"
            id="text"
            rows="5"
            cols="54"
            resize="none"
            bgcolor="#ffff"
            border={true}
            {...content}
          />
        </div>
      </div>
      <Button type="Submit" bgcolor="#000" textColor="#ffff" disabled={disable}>
        {buttontext}
      </Button>
    </ModalEditStyle>
  );
};

export default ModalEdit;
