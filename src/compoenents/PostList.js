import React from "react";
import MyLayout from "../layouts/MyLayout";
import PostItems from "./PostItems";
import { useSelector } from "react-redux";

// const dummyPosts = [
//   { id: 1, title: "First Post", content: "This is the first post." },
//   { id: 2, title: "Second Post", content: "This is the second post." },
// ];

const PostList = () => {
  const dummyPosts = useSelector((state) => state.post.posts);
  console.log("dummyPosts", dummyPosts);
  return (
    <div>
      <MyLayout>
        <h1>PostList</h1>
        <PostItems posts={dummyPosts} />
      </MyLayout>
    </div>
  );
};

export default PostList;
