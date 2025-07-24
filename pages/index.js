import HeadlineSection from '../components/HeadlineSection';
import Navbar from '../components/Navbar';
import BannerSection from '../components/BannerSection';
import BlogCardSection from '../components/BlogCardSection';
import Link from 'next/link';

import GallerySection from '@/components/GallerySection';



export default function Home() {
  return (
    <>

      <main className="">

        <Navbar />
   
        <BannerSection />

        <BlogCardSection />
       
        <GallerySection/>

        <footer className="bg-darkcustom text-white py-8">
  <div className="container mx-auto px-4 text-center space-y-4">
    <p className="text-sm">© 2025 Serene Echoes. All rights reserved.</p>
    <div className="flex justify-center space-x-6 text-sm">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/blog" className="hover:underline">Blog</Link>
      <Link href="/about" className="hover:underline">About</Link>
      <Link href="/portfolio" className="hover:underline">Portfolio</Link>
    </div>
  </div>
</footer>


       
        
      </main>
    </>
  );
}


