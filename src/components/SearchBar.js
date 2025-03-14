// src/components/SearchBar.js
import { useState } from 'react';
import { generateClient } from '@aws-amplify/api'; // Updated import
import { postsByHashtag, userByUsername } from '../graphql/queries';
import './SearchBar.css';

const client = generateClient();

const SearchBar = ({ onResults }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      if (query.startsWith('#')) {
        const { data } = await client.graphql({ query: postsByHashtag, variables: { hashtag: query.slice(1) } });
        onResults(data.postsByHashtag.items.map((item) => item.post));
      } else {
        const { data } = await client.graphql({ query: userByUsername, variables: { username: query } });
        onResults(data.userByUsername ? [data.userByUsername] : []);
      }
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
      />
    </div>
  );
};

export default SearchBar;