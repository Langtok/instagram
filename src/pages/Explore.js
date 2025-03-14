// src/pages/Explore.js
import { useState, useEffect } from 'react';
import { generateClient } from '@aws-amplify/api'; // Updated import
import { listPosts } from '../graphql/queries';
import Post from '../components/Post';
import './Explore.css';

const client = generateClient();

const Explore = ({ user }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data } = await client.graphql({ query: listPosts, variables: { limit: 100 } });
      setPosts(data.listPosts.items.sort(() => Math.random() - 0.5));
    } catch (error) {
      console.error('Fetch posts failed:', error);
    }
  };

  return (
    <div className="explore">
      {posts.map((post) => (
        <Post key={post.id} post={post} user={user} />
      ))}
    </div>
  );
};

export default Explore;