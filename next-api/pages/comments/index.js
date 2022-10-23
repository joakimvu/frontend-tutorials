import { useState } from "react";

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  // Fetching all comments from database
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  // Submitting a new comments to database
  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "Post",
      body: JSON.stringify({ comment: comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  // Delete a comment
  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    fetchComments();
  };

  return (
    <>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit Comment</button>
      <button onClick={fetchComments}>Load comments</button>
      {comments?.map((comment) => {
        return (
          <div key={comment?.id}>
            {comment?.id} {comment?.text}
            <button onClick={() => deleteComment(comment?.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
}
