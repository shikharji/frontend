import React, { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../utils/GetApiUrl";

export default function Comments({ postId }) {
  const [body, setBody] = useState("");
  const [topic, setTopic] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`${apiUrl}/comment/${postId}/comment`);
        setComments(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchComments();
  }, [postId]);

  const addComment = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem("Token");
      const response = await axios.post(`${apiUrl}/comment/${postId}/comment`, {
        topic,
        body,
        userId,
      });
      const newComment = response.data;
      setComments([newComment, ...comments]); // Add the new comment to the existing comments array
      setBody("");
      setTopic("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="comment-card">
        <span className="comment-title">Leave a Comment</span>
        <form className="comment-form">
          <div className="comment-group">
            <input
              type="text"
              required
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
            <label>Topic</label>
          </div>

          <div className="comment-group">
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows="5"
              required
            ></textarea>
            <label htmlFor="comment">Comment</label>
          </div>
          <button type="submit" onClick={addComment}>
            Submit
          </button>
        </form>
      </div>

      <h2>Displaying Comments</h2>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </>
  );
}

export function Comment({ comment }) {
  return (
    <>
      <div className="comment">
        <h3>Single comment</h3>
        <p>{comment.topic}</p>
        <p>{comment.body}</p>
        <p>Date: {new Date(comment.date).toLocaleDateString()}</p>
      </div>
    </>
  );
}
