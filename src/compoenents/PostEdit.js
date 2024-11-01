import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import MyLayout from "../layouts/MyLayout";
import { editPost } from "../reducer/postSlice";

const PostEdit = () => {
  const { id } = useParams();

  const post = useSelector((state) =>
    state.post.posts.find((post) => post.id === parseInt(id))
  );
  console.log("post", post);

  const [title, setTitle] = useState(post.title || "");
  const [content, setContent] = useState(post.content || "");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
    const editedPost = {
      id: parseInt(id),
      title,
      content,
    };
    console.log("editedPost", editedPost);
    // setPosts((prevPosts) =>
    //      prevPosts.map((post) => (post.id === id ? editPost : post))
    // );
    dispatch(editPost(editedPost));

    // 입력값 초기화
    setTitle("");
    setContent("");
    // 리스트 페이지로 이동
    navigate("/posts");
  };

  return (
    <div>
      <MyLayout>
        <h1>Edit Post</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title을 입력하세요..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <textarea
            placeholder="Content을 입력하세요..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <br />
          <button type="submit">수정</button>
        </form>
      </MyLayout>
    </div>
  );
};

export default PostEdit;
