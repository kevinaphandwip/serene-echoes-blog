
import { getAllPosts } from '@/lib/getPosts';
import HomePage from '@/components/HomePage';

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

export default function Home(props) {
  return <HomePage {...props} />;
}



