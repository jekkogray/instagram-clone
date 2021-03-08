import React from "react";
import "../css/Post.css";
import Avatar from "@material-ui/core/Avatar";
function Post() {
  return (
    <div className="post">

      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Jekko Syquia"
          src="/static/images/avatar/1.jpg"
        />

        <h4>jekkogray</h4>
      </div>

      <img
        className="post__image"
        src="https://previews.123rf.com/images/totamilow/totamilow1807/totamilow180700050/105150326-hand-drawn-acrylic-painting-abstract-art-background-color-texture-fragment-of-artwork-abstract-paint.jpg"
      ></img>

      <h4 className="post__text"><strong>jekkogray</strong> Hello this is my first post.</h4>
    </div>
  );
}

export default Post;
