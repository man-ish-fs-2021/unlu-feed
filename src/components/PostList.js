import React from "react";
import { Post } from "./index";

const PostList = (props) => {
  const { posts, page } = props;
  console.log(posts);
  return (
    <div className="posts-list">
      {posts.map((post, index) => (
        <Post post={post} page={page} key={`${index} - ${post.id}`} />
      ))}
    </div>
  );
};

export default PostList;
