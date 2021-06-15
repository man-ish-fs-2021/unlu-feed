import React, { useState } from "react";
import { Post } from "./index";

const PostList = (props) => {
  const { posts, page } = props;
  console.log("posts",posts);
  const [sortedPosts, setSortedPost] = useState(posts);

  const handleDate = ()=>{

      const sorted = [...sortedPosts].sort((a,b)=>{
          return b.event_date-a.event_date;
      });
      setSortedPost(sorted);

  }
  const handleLike = ()=>{

    const sorted = [...sortedPosts].sort((a,b)=>{
        return b.likes-a.likes;
    });
    setSortedPost(sorted);

}
const handleViews = ()=>{

    const sorted = [...sortedPosts].sort((a,b)=>{
        return b.views-a.views;
    });
    setSortedPost(sorted);

}
const handleShares = ()=>{

    const sorted = [...sortedPosts].sort((a,b)=>{
        return b.shares-a.shares;
    });
    setSortedPost(sorted);

}
  return (
    <div className="posts-list">
        
        <div className="sort-wrapper">
            <div className="sort-cell" onClick={handleDate}>Date</div>
            <div className="sort-cell" onClick={handleLike}>Likes</div>
            <div className="sort-cell" onClick={handleViews}>Views</div>
            <div className="sort-cell" onClick={handleShares}>Shares</div>
            <div className="page sort-cell">{page}</div>
        </div>
      {sortedPosts.map((post, index) => (
        <Post post={post} page={page} key={`${index} - ${post.id}`} />
      ))}
    </div>
  );
};

export default PostList;
