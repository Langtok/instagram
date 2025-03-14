// src/components/PostCreator.js
import { useState } from 'react';
import { getCurrentUser } from '@aws-amplify/auth'; // Updated import
import { uploadData } from '@aws-amplify/storage'; // Updated import
import { generateClient } from '@aws-amplify/api'; // Updated import
import { createPost, createPostHashtag } from '../graphql/mutations';
import './PostCreator.css';

const client = generateClient();

const PostCreator = ({ onPostCreated }) => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [hashtags, setHashtags] = useState('');

  const handlePost = async () => {
    if (!file && !caption) return;
    try {
      const { key } = await uploadData({ key: file.name, data: file }).result;
      const user = await getCurrentUser();
      const postInput = {
        userID: user.userId,
        caption,
        [file.type.startsWith('image') ? 'image' : file.type.startsWith('video') ? 'video' : 'audio']: key,
        type: file.type.split('/')[0] || 'text',
      };
      const { data } = await client.graphql({ query: createPost, variables: { input: postInput } });
      const postId = data.createPost.id;

      const hashtagArray = hashtags.split(' ').map((tag) => tag.replace('#', ''));
      for (const hashtag of hashtagArray) {
        await client.graphql({ query: createPostHashtag, variables: { input: { postID: postId, hashtag } } });
      }

      setFile(null);
      setCaption('');
      setHashtags('');
      onPostCreated();
    } catch (error) {
      console.error('Post failed:', error);
    }
  };

  return (
    <div className="post-creator">
      <textarea
        placeholder="Write a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <input
        type="text"
        placeholder="#hashtags"
        value={hashtags}
        onChange={(e) => setHashtags(e.target.value)}
      />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handlePost}>Share</button>
    </div>
  );
};

export default PostCreator;