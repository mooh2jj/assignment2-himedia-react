import React, { useState } from "react";
import MyLayout from "../layouts/MyLayout";
import { useDispatch } from "react-redux";
import { addPost } from "../slices/postSlice";
import { useNavigate } from "react-router-dom";

const PostWrite = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
    const newPost = { title, content };
    // setPosts((prevPosts) => [...prevPosts, newPost]);
    dispatch(addPost(newPost));

    // 입력값 초기화
    setTitle("");
    setContent("");
    // 리스트 페이지로 이동
    navigate("/posts");
  };

  return (
    <div>
      <MyLayout>
        <h1>Write a New Post</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <br />
          <button type="submit">등록</button>
        </form>
      </MyLayout>
    </div>
  );
};

export default PostWrite;
