import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MyLayout from "../layouts/MyLayout";

const PostDetail = () => {
  const { id } = useParams();

  const post = useSelector((state) =>
    state.post.posts.find((post) => post.id === parseInt(id))
  );

  return (
    <div>
      <MyLayout>
        <br />

        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </MyLayout>
    </div>
  );
};

export default PostDetail;
