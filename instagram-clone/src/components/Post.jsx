import React from "react";
import "../css/Post.css";
import Avatar from "@material-ui/core/Avatar";
function Post({userName, caption, imageUrl}) {
  return (
    <div className="post">

      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Jekko Syquia"
          src="/static/images/avatar/1.jpg"
        />
        <h4>{userName}</h4>
      </div>

      <img
        className="post__image"
        src={imageUrl}
      ></img>

      <h4 className="post__text"><strong>{userName}</strong> {caption}</h4>
    </div>
  );
}

export default Post;
