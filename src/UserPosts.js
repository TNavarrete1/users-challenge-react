import React, { useState } from "react";

export default function UserPosts({ userId }) {
  const [posts, setPosts] = useState();

  useState(() => {
    async function fetchData() {
      try {
        let res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}/posts`
        );
        const posts = await res.json();
        setPosts(posts);
      } catch (error) {
        console.log(error);
        return;
      }
    }
    fetchData();
  }, []);

  return (
    <ul>
      {posts &&
        posts.map((post) => {
          return (
            <li key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </li>
          );
        })}
    </ul>
  );
}
