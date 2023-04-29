import React, { useState, useEffect } from "react";

function BlogNav() {
  const [blogFeeds, setBlogFeeds] = useState([]);

  useEffect(() => {
    fetch("path/to/rss")
      .then((response) => response.text())
      .then((data) => {
        // parse RSS feed and set blogFeeds state to last 5 items
        const parsedData = parseRssFeed(data);
        setBlogFeeds(parsedData.slice(0, 5));
      });
  }, []);

  const parseRssFeed = (data) => {
    // function to parse XML RSS feed
    return parsedData;
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
      <div>
        {blogFeeds.map((feed) => (
          <div key={feed.id}>
            <p>{feed.title}</p>
            <a href={feed.link}>{feed.author}</a>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default BlogNav;
