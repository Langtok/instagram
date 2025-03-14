// src/components/Profile.js
import { useState } from 'react';
import { generateClient } from '@aws-amplify/api'; // Updated import
import { updateUser } from '../graphql/mutations';
import './Profile.css';

const client = generateClient();

const Profile = ({ user, onProfileUpdate }) => {
  const [bio, setBio] = useState(user.bio || '');
  const [tags, setTags] = useState(user.tags?.join(', ') || '');

  const handleUpdate = async () => {
    try {
      await client.graphql({
        query: updateUser,
        variables: { input: { id: user.attributes.sub, bio, tags: tags.split(', ') } }
      });
      onProfileUpdate();
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  return (
    <div className="profile">
      <div className="profile-header">
        <img src={user.avatar || 'https://via.placeholder.com/150'} alt="Avatar" className="profile-avatar" />
        <div className="profile-info">
          <h2>{user.username}</h2>
          <textarea
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <input
            type="text"
            placeholder="Tags (comma-separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;