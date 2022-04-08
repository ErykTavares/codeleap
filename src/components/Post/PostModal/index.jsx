import React from "react";
import { PostEditModalStyleStyle } from "./Style";
import ModalEdit from "../../Modal/ModalEdit";
import ModalConfirm from "../../Modal/ModalConfirm";

const PostEditModal = ({
  setEdit,
  edit,
  postdelete,
  setPostDelete,
  postid,
  setPostID,
  setLoading,
}) => {
  const [active, setActive] = React.useState(false);


  React.useEffect(() => {
    setActive(true);
  }, []);

  function closeModal(value) {
    setActive(false);
    setTimeout(() => {
      if  (value) {
        setPostID("");
        if (edit) {
          setEdit(false);
        } else if (postdelete) {
          setPostDelete(false);
        }
      }
    }, 1000);
  }

  return (
    <PostEditModalStyleStyle
      className="close"
      tabIndex="0"
      onKeyDown={(event) => {return event.key === "Escape"? closeModal(event): null}}
      onClick={(event) => {
        return event.target.classList.contains("close")
          ? closeModal(event, true)
          : null;
      }}
    >
      {edit ? (
        <ModalEdit
          className={active ? "popmodal" : "unpopmodal"}
          method="POST"
          titlemodal="Edit item"
          buttontext="SAVE"
          closeModal={closeModal}
          postid={postid}
          setLoading={setLoading}
        />
      ) : null}

      {postdelete ? (
        <ModalConfirm
          className={active ? "popmodal" : "unpopmodal"}
          title="Are you sure you want to delete this item?"
          postid={postid}
          setLoading={setLoading}
          closeModal={closeModal}
        />
      ) : null}
    </PostEditModalStyleStyle>
  );
};

export default PostEditModal;
