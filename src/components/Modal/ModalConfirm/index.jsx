import React from "react";
import { ModalConfirmStyle } from "./Style";
import Button from "../../Button/Button";
import { useFetch } from "../../../Hooks/useFetch";
import { POSTDELETE_DELETE } from "../../../api";

const ModalEdit = ({ className, title, postid, setLoading, closeModal }) => {
  const { response } = useFetch();
  function handleCancel() {
    closeModal(true);
  }
  async function handleOK() {
    const { url, options } = POSTDELETE_DELETE(postid);
    await response(url, options, "DELETE");
    closeModal(true);
    setLoading(true);
  }

  return (
    <ModalConfirmStyle
      className={className}
      onSubmit={(event) => event.preventDefault()}
      onKeyDown={(event) => (event.key === "Escape" ? closeModal(true) : null)}
    >
      <h2>{title}</h2>
      <div className="buttons">
        <Button border="2px solid black" onClick={handleCancel} autoFocus>
          Cancel
        </Button>
        <Button border="2px solid black" onClick={handleOK}>OK</Button>
      </div>
    </ModalConfirmStyle>
  );
};

export default ModalEdit;
