// src/pages/ProfilePage.js
import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { generateClient } from '@aws-amplify/api'; // Updated import
import { getUser } from '../graphql/queries';
import Profile from '../components/Profile';
import Post from '../components/Post';
import './ProfilePage.css';

const client = generateClient();

const ProfilePage = ({ user }) => {
  const { userId } = useParams();
  const [profile, setProfile] = useState(null);

  const fetchProfile = useCallback(async () => {
    try {
      const { data } = await client.graphql({ query: getUser, variables: { id: userId } });
      setProfile(data.getUser);
    } catch (error) {
      console.error('Fetch profile failed:', error);
    }
  }, [userId]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return (
    <div className="profile-page">
      {profile && (
        <>
          {profile.id === user.attributes.sub && (
            <Profile user={profile} onProfileUpdate={fetchProfile} />
          )}
          <div className="profile-posts">
            {profile.posts?.items.map((post) => (
              <Post key={post.id} post={post} user={user} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProfilePage;