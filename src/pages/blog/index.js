import React from 'react';
import Link from 'gatsby-link';

export default function Blog({ data }) {
  const { posts } = data;
  return (
    <div>
      <h1>This is my blog</h1>
      <h3>But hey... each post is now a component!</h3>
      <ul>
        {
          posts.edges.map(({ node }) => (
            <Link key={node.path} to={node.path}>{node.path}</Link>
          ))
        }
      </ul>
    </div>
  );
}

export const blogQuery = graphql`
  query BlogPostQuery {
    posts:allSitePage(filter:{path:{regex:"/blog\/[^index]/"}}) {
      edges {
        node {
          path
        }
      }
    }
  }
`;
