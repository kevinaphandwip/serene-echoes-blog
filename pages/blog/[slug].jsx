import { getAllPosts, getPostBySlug } from '@/lib/getPosts';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import FooterSection from '@/components/FooterSection';
import GallerySection from '@/components/GallerySection';
import Head from 'next/head';

export async function getStaticPaths() {
  const posts = await getAllPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export default function BlogDetail({ post }) {
  if (!post) return <p className="text-center py-10">Loading...</p>;

  const category = post.categories?.nodes?.[0]?.name || 'Uncategorized';
  const imageSrc = post.featuredImage?.node?.sourceUrl || '/placeholder.jpg';

  return (
    <>
      <Head>
        <title>{post.title} | Blog</title>
      </Head>
      <Navbar />

      <main className="flex flex-col lg:flex-row max-w-6xl mx-auto px-6 py-6 gap-12">
        {/* Artikel */}
        <article className="lg:flex-[4] space-y-8">
          {/* Judul dan Author */}
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-semibold text-gray-900 leading-snug">
              {post.title}
            </h1>
            <p className="text-sm text-gray-500 italic mt-2">
              author: Kevin Naphan Dwiputra — {category}
            </p>
          </div>

          {/* Gambar Utama */}
          <div className="relative w-full max-w-6xl aspect-[3/1] mx-auto mt-8 rounded-xl overflow-hidden">
            <Image
              src={imageSrc}
              alt={post.title}
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Konten (HTML) */}
          <div
            className="prose prose-lg max-w-none text-justify text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author */}
          <div className="flex gap-4 pt-8 border-t mt-12">
            <Image
              src="/assets/avatar.png"
              alt="Author Avatar"
              width={75}
              height={75}
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-800">Kevin Naphan Dwiputra</p>
              <p className="text-sm text-gray-800">
                Finding calm through words and visuals
              </p>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <div className="lg:flex-[1]">
          <Sidebar posts={[post]} />
        </div>
      </main>

      <GallerySection />
      <FooterSection />
    </>
  );
}
