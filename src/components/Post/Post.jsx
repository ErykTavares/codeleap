import React from "react";
import { PostStyles } from "./PostStyles";
import { ReactComponent as Trash } from "../../assets/svg/trash.svg";
import { ReactComponent as Edit } from "../../assets/svg/edit.svg";
import { UseContext } from "../../UseContext";
import Button from "../Button/Button";
import { formatDistance } from "date-fns";

const Post = ({
  id,
  title,
  author,
  hour,
  text,
  setEdit,
  edit,
  setPostID,
  postdelete,
  setPostDelete,
}) => {
  const username = React.useContext(UseContext).data;

  function isEdit() {
    if (edit) {
      setEdit(false);
    } else if (!edit) {
      setPostID(id);
      setEdit(true);
    }
  }

  function isDelete() {
    if (postdelete) {
      setPostDelete(false);
    } else if (!postdelete) {
      setPostID(id);
      setPostDelete(true);
    }
  }

  function getHour() {
    let postdate = formatDistance(new Date(hour), new Date(), {
      addSuffix: true,
    });
    return postdate;
  }

  return (
    <PostStyles>
      <header>
        <h2>{title}</h2>
        {author === username && (
          <ul>
            <li className="trash">
              <Button
                bgcolor={"transparent"}
                width="25px"
                height="25px"
                onClick={isDelete}
              >
                <Trash />
              </Button>
            </li>
            <li>
              <Button
                bgcolor="transparent"
                width="30px"
                height="30px"
                onClick={isEdit}
              >
                <Edit />
              </Button>
            </li>
          </ul>
        )}
      </header>
      <div className="title">
        <h4 className="titleName">@{author}</h4>
        <h4 className="titleHour">{getHour()}</h4>
      </div>
      <div className="content">
        <p>{text}</p>
      </div>
    </PostStyles>
  );
};

export default Post;
