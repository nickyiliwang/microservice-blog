import React from "react";

export default function CommentList({ comments }) {
  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status === "approved") {
      content = comment.content;
    }

    if (comment.status === "pending") {
      content = "This comment is awaiting moderation";
    }

    if (comment.status === "rejected") {
      content = "USER WAS BANNED FOR THIS COMMENT";
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
}

// Using query service we are eliminating the need to make multiple ajax calls using the postId to retrieve the comments from a post.

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function CommentList({ postId }) {
//   const [comments, setComments] = useState([]);

//   const fetchData = async () => {
//     const res = await axios.get(
//       `http://localhost:4001/posts/${postId}/comments`
//     );

//     setComments(res.data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const renderedComments = comments.map((comment) => {
//     return <li key={comment.id}>{comment.content}</li>;
//   });

//   return <ul>{renderedComments}</ul>;
// }
