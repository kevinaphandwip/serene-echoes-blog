import client from './apolloClient';
import { gql } from '@apollo/client';   

// Ambil semua post (untuk BlogCard atau getStaticPaths)
export async function getAllPosts() {
  const { data } = await client.query({
    query: gql`
      query AllPosts {
        posts {
          nodes {
            id
            title
            excerpt
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
              nodes {
                name
              }
            }
          }
        }
      }
    `
  });

  return data.posts.nodes;
}

// Ambil 1 post berdasarkan slug (untuk halaman detail)
export async function getPostBySlug(slug) {
  const { data } = await client.query({
    query: gql`
      query PostBySlug($slug: ID!) {
        post(id: $slug, idType: SLUG) {
          id
          title
          slug
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            nodes {
              name
            }
          }
          author {
            node {
              name
              description
              avatar {
                url
              }
            }
          }
        }
      }
    `,
    variables: { slug },
  });

  return data.post;
}
