import React, { Fragment, useEffect, useState } from 'react';

import PostItem from './PostItem';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json().then(data => {
        setPosts(data)
      }));
  }, []);

  return (
    <Fragment>
      <input onChange={e => setNewPost(e.target.value)} value={newPost} />
      <ul>
        {posts.map(post => <PostItem key={post.id} post={post} />)}
      </ul>
    </Fragment>
  );
};

export default PostList;