import React from 'react';

function Post() {
  return (
    <div className="post">
      <h3>Username</h3>
      {/* header -> avatar + username */}

      <img className="post__image" src="https://freecodecamp.org/news/content/images"></img>
      {/* image */}

      <h4>Username: caption</h4>
      {/* username + caption */}
    </div>
  )
}

export default Post
