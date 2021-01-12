import React, { useState } from "react";
import axios from "axios";

export default function CommentCreate({ postId }) {
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    // From calling localhost:4001 we are instead calling posts.com, because nginx
    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content,
    });
    setContent("");
    window.location.reload();
  };

  return (
    <div>
      <form className="form-group" onSubmit={onSubmit}>
        <label>New Comment</label>
        <input
          className="form-control"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </form>
      <button className="btn btn-primary">Submit</button>
    </div>
  );
}
