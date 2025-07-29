'use client';

import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import posts from '../../data/posts';
import Image from 'next/image';
import FooterSection from '/components/FooterSection';
import GallerySection from '/components/GallerySection';

export default function BlogDetail() {
  const router = useRouter();
  const { id } = router.query;

  const post = posts.find((p) => p.id === id);

  if (!post) return <p className="text-center py-10">Loading...</p>;

  return (
    <>
      <Navbar />

    
      


      <main className="flex flex-col lg:flex-row max-w-6xl mx-auto px-6 py-6 gap-12">
        
        
        
        {/* Artikel */}
        <article className="lg:flex-[4] space-y-8">

        <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-semibold text-gray-900 leading-snug">
          {post.title}
        </h1>
        <p className="text-sm text-gray-500 italic mt-2">
          author : Kevin Naphan Dwiputra
        </p>
      </div>

      {/* Gambar */}
      <div className="relative w-full max-w-6xl aspect-[3/1] mx-auto mt-8 rounded-xl overflow-hidden">
  <Image
    src={post.imageSrc}
    alt={post.title}
    fill
    className="object-cover object-center"
  />
</div>


          {/* Isi artikel */}
          <div className="prose prose-lg max-w-none text-justify text-gray-800 leading-relaxed">
            {post.content?.split('\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Author Box */}
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
              <p className="text-sm text-gray-800">Finding calm through words and visuals</p>
            </div>
          </div>
        </article>

        <div className="lg:flex-[1]">
          <Sidebar/>
        </div>

       
        
      </main>
      <GallerySection/>
      <FooterSection />
    </>
  );
}
