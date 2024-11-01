import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    { id: 1, title: "First Post", content: "This is the first post." },
    { id: 2, title: "Second Post", content: "This is the second post." },
  ],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      const newId =
        state.posts.length > 0
          ? Math.max(...state.posts.map((post) => post.id)) + 1
          : 1;

      state.posts.push({
        ...action.payload,
        id: newId,
      });
    },
    editPost: (state, action) => {
      const { id, title, content } = action.payload;
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    deletePost: (state, action) => {
      const id = action.payload;
      console.log("deletePost id", id);
      state.posts = state.posts.filter((post) => post.id !== id);
    },
  },
});

export const { addPost, editPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
