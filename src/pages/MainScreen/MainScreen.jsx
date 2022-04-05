import React from "react";
import { MainScreenStyle } from "./MainScreenStyle";
import { POSTS_GET } from "../../api";
import Loading from "../../components/Loading/Loading";
import Post from "../../components/Post/Post";
import PostCreate from "../../components/Post/PostCreate/PostCreate";
import PostModal from "../../components/Post/PostModal";
import { useFetch } from "../../Hooks/useFetch";

const MainScreen = () => {
  const { url, options } = POSTS_GET();
  const posts = useFetch(url, options);
  const [loading, setLoading] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [postdelete, setPostDelete] = React.useState(false);
  const [postid, setPostID] = React.useState("");

  function postsGenerator() {
    let postsList = posts.data;
    if (postsList) {
      return postsList.results.map((item) => {
        return (
          <Post
            key={item.id}
            id={item.id}
            title={item.title}
            author={item.username}
            hour={item.created_datetime}
            text={item.content}
            edit={edit}
            setEdit={setEdit}
            setPostID={setPostID}
            postdelete={postdelete}
            setPostDelete={setPostDelete}
          />
        );
      });
    }
  }

  React.useEffect(() => {
    if (loading) {
      posts.response(url, options);
      setLoading(false);
    }
  }, [loading, posts, url, options]);

  return (
    <MainScreenStyle>
      {edit || postdelete ? (
        <PostModal
          setEdit={setEdit}
          edit={edit}
          postdelete={postdelete}
          setPostDelete={setPostDelete}
          postid={postid}
          setPostID={setPostID}
          setLoading={setLoading}
        />
      ) : null}
      <PostCreate setLoading={setLoading} />
      {posts.loading ? <Loading /> : postsGenerator()}
    </MainScreenStyle>
  );
};

export default MainScreen;
