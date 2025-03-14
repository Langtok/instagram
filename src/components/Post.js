// src/components/Post.js
import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { generateClient } from '@aws-amplify/api'; // Updated import
import { createLike, deletePost, createComment } from '../graphql/mutations';
import VideoPlayer from './VideoPlayer';
import AudioPlayer from './AudioPlayer';
import Comment from './Comment';
import './Post.css';

const client = generateClient();

const Post = ({ post, user }) => {
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState('');

  const handleLike = async () => {
    try {
      await client.graphql({
        query: createLike,
        variables: { input: { userID: user.attributes.sub, postID: post.id } }
      });
    } catch (error) {
      console.error('Like failed:', error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await client.graphql({
          query: deletePost,
          variables: { input: { id: post.id } }
        });
      } catch (error) {
        console.error('Delete failed:', error);
      }
    }
  };

  const handleComment = async () => {
    if (!comment) return;
    try {
      await client.graphql({
        query: createComment,
        variables: { input: { postID: post.id, userID: user.attributes.sub, content: comment } }
      });
      setComment('');
    } catch (error) {
      console.error('Comment failed:', error);
    }
  };

  return (
    <div className="post">
      <div className="post-header">
        <div className="post-user">
          <img src={post.owner.avatar || 'https://via.placeholder.com/32'} alt="Avatar" className="avatar" />
          <span>{post.owner.username}</span>
        </div>
        {post.owner.id === user.attributes.sub && (
          <button className="delete-btn" onClick={handleDelete}>⋯</button>
        )}
      </div>
      {post.image && <img src={post.image} alt="Post" />}
      {post.video && <VideoPlayer src={post.video} />}
      {post.audio && <AudioPlayer src={post.audio} />}
      <div className="post-actions">
        <button onClick={handleLike}><i className="icon-like"></i></button>
        <button onClick={() => setShowComments(!showComments)}><i className="icon-comment"></i></button>
      </div>
      <div className="post-likes">
        {post.likes?.items.length || 0} likes
      </div>
      <div className="post-content">
        <p><strong>{post.owner.username}</strong> {post.caption}</p>
        {post.hashtags?.items.length > 0 && (
          <p className="hashtags">{post.hashtags.items.map((h) => `#${h.hashtag}`).join(' ')}</p>
        )}
        <span>{formatDistanceToNow(new Date(post.createdAt))} ago</span>
      </div>
      {showComments && (
        <>
          {post.comments?.items.map((c) => <Comment key={c.id} comment={c} />)}
          <div className="comment-input">
            <input
              type="text"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleComment()}
            />
            <button onClick={handleComment}>Post</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Post;