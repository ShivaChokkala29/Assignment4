 
import React from "react";

function BlogFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {currentYear} @blogspot.com</p>
    </footer>
  );
}

export default BlogFooter;
