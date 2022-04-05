import React from "react";
import { PostCreateStyle } from "./PostCreateStyle";
import Input from "../../Input/Input";
import TextArea from "../../TextArea/TextArea";
import Button from "../../Button/Button";
import { useForm } from "../../../Hooks/useForm";
import { POSTS_POST } from "../../../api";
import { UseContext } from "../../../UseContext";
import { useFetch } from "../../../Hooks/useFetch";

const PostCreate = ({ setLoading }) => {
  const title = useForm();
  const content = useForm();
  const [disable, setDisable] = React.useState(false);
  const { data } = React.useContext(UseContext);
  const { url, options } = POSTS_POST({
    username: data,
    title: title.value,
    content: content.value,
  });
  const { response } = useFetch();

  React.useEffect(() => {
    return title.value.length === 0 || content.value.length === 0
      ? setDisable(true)
      : setDisable(false);
  }, [title, content]);

  async function handleSubmit(event) {
    event.preventDefault();
    await response(url, options);
    title.reset();
    content.reset();
    setLoading(true);
  }

  return (
    <PostCreateStyle method="POST" onSubmit={(event) => handleSubmit(event)}>
      <div className="title">
        <h2>What's on your mind?</h2>
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
            {...title}
          />
        </div>
        <div>
          <label htmlFor="text">Content</label>
          <TextArea
            name="text"
            value={content}
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
        CREATE
      </Button>
    </PostCreateStyle>
  );
};

export default PostCreate;
