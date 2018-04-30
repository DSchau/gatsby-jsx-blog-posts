import React from 'react';
import Link from 'gatsby-link';

export default function Blog() {
  return (
    <div>
      <h1>This is my blog</h1>
      <h2>Not <em>totally</em> sure how best to do a blog post listing...</h2>
      <h3>But hey... each post is now a component!</h3>
      <ul>
        <li><Link to="/blog/sample-post">Sample post with JSX</Link></li>
      </ul>
    </div>
  );
}
