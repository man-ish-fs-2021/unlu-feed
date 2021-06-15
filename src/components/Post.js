import React from "react";

const Post = (props) => {
  console.log(props);
  const { post } = props;
  let date = new Date(post.event_date);

  return (
    <div className="post-wrapper">
      <div className="post-header">
        <div>
          <span className="event-name">{post.event_name}</span>
          <span className="event-date">
            {date.toString().substring(15, 21)}
          </span>
        </div>
      </div>
      <div className="container">
        <div className="img-wrapper">
          <a href={post.thumbnail_image}>
            <img src={post.thumbnail_image} alt={post.event_name} />{" "}
          </a>
        </div>
      </div>
      <div className="post-actions">
        <div className="post-likes">
          <img
            src="https://image.flaticon.com/icons/png/512/1077/1077035.png"
            alt="likes-img"
          ></img>
          <span>{post.likes}</span>
        </div>
        <div className="post-views">
          <img
            src="https://image.flaticon.com/icons/png/512/709/709612.png"
            alt="views-img"
          ></img>
          <span>{post.views}</span>
        </div>
        <div className="post-shares">
          <img
            src="https://image.flaticon.com/icons/png/512/929/929610.png"
            alt="shares-img"
          ></img>
          <span>{post.shares}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
