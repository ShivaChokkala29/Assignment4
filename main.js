import React, { useState, useEffect } from "react";
let parsedData;
// code to assign value to parsedData
console.log(parsedData); // parsedData is now defined and can be used


function BlogMain() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch("path/to/rss")
      .then((response) => response.text())
      .then((data) => {
        // parse RSS feed and set blogPosts state
        setBlogPosts(parsedData);
      });
  }, []);

  return (
    <main>
      {blogPosts.map((post) => (
        <article key={post.id}>
          <img src={post.image} alt={post.title} />
          <h2>{post.title}</h2>
          <p>{post.summary}</p>
          <a href={post.link}>Read More</a>
        </article>
      ))}
    </main>
  );
}

export default BlogMain;
