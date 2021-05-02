import React from 'react';
import './Post.css';

function Post() {
  return (
    <div className="post">
      <div className="post__header">
      <Avatar 
        className="post__avatar"
        alt={username}
        src="/static/images/avatar/1.jpg"
      />
      <h3>Username</h3>
      {/* header -> avatar + username */}

      <img className="post__image" src="https://freecodecamp.org/news/content/images"></img>
      {/* image */}

      <h4 className="post__text"><strong>two_t_elliott </strong>Man do I wonder sometimes</h4>
      {/* username + caption */}
      </div>
    </div>
  )
}

export default Post
