// src/pages/Home.js
import { useState, useEffect, useCallback } from 'react';
import { generateClient } from '@aws-amplify/api'; // Updated import
import { listPosts } from '../graphql/queries';
import PostCreator from '../components/PostCreator';
import Post from '../components/Post';
import './Home.css';

const client = generateClient();

const Home = ({ user, showNotification }) => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = useCallback(async () => {
    try {
      const { data } = await client.graphql({ query: listPosts, variables: { limit: 100 } });
      setPosts(data.listPosts.items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
      showNotification('Posts refreshed');
    } catch (error) {
      console.error('Fetch posts failed:', error);
    }
  }, [showNotification]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="home">
      <PostCreator onPostCreated={fetchPosts} />
      {posts.map((post) => (
        <Post key={post.id} post={post} user={user} />
      ))}
    </div>
  );
};

export default Home;