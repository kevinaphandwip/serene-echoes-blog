import HeadlineSection from '../components/HeadlineSection';
import Navbar from '../components/Navbar';
import BannerSection from '../components/BannerSection';
import BlogCardSection from '../components/BlogCardSection';

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
      <a href="/" className="hover:underline">Home</a>
      <a href="/blog" className="hover:underline">Blog</a>
      <a href="/about" className="hover:underline">About</a>
      <a href="/portfolio" className="hover:underline">Portfolio</a>
    </div>
  </div>
</footer>


       
        
      </main>
    </>
  );
}


