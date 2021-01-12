import React from "react";
import PostCreate from "./Component/PostCreate";
import PostList from "./Component/PostList";

export default function App() {
  return (
    <div className="container">
      <h1>Cool Fish Stand</h1>
      <PostCreate />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
}
