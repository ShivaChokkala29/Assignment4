import React, { useState, useEffect } from 'react';

function Main() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('path/to/blogpostexample.xml')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, 'application/xml');
        const postElements = xml.getElementsByTagName('post');
        const parsedPosts = [];
        for (let i = 0; i < postElements.length; i++) {
          const post = {
            date: postElements[i].getElementsByTagName('date')[0].textContent,
            author: postElements[i].getElementsByTagName('author')[0].textContent,
            title: postElements[i].getElementsByTagName('title')[0].textContent,
            summary: {
              imagePath: postElements[i].getElementsByTagName('image_path')[0].textContent,
              text: postElements[i].getElementsByTagName('text')[0].textContent,
            },
            body: postElements[i].getElementsByTagName('body')[0].textContent,
          };
          parsedPosts.push(post);
        }
        setPosts(parsedPosts);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.title}>
          <h2>{post.title}</h2>
          <p>{post.date}</p>
          <p>{post.author}</p>
          <img src={post.summary.imagePath} alt="post summary" />
          <p>{post.summary.text}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Main;
