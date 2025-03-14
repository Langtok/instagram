// src/components/Comment.js
import { formatDistanceToNow } from 'date-fns';
import './Comment.css';

const Comment = ({ comment }) => (
  <div className="comment">
    <p><strong>{comment.owner.username}</strong> {comment.content}</p>
    <span>{formatDistanceToNow(new Date(comment.createdAt))} ago</span>
  </div>
);

export default Comment;