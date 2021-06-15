import React from "react";
import { Post } from "./index";

const PostList = (props) => {
  const { posts, page } = props;
  return (
    <div className="posts-list">
      {posts.map((post) => {
        <Post post={post} page={page} key={post.id} />;
      })}
    </div>
  );
};

export default PostList;
