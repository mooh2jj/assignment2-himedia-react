import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PostDetail from "./compoenents/PostDetail";
import PostList from "./compoenents/PostList";
import HomePage from "./pages/HomePage";
import PostWrite from "./compoenents/PostWrite";
import { Provider } from "react-redux";
import store from "./store";
import PostEdit from "./compoenents/PostEdit";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/write" element={<PostWrite />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/posts/:id/edit" element={<PostEdit />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
