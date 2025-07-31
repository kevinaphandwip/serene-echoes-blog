import Navbar from '../components/Navbar';
import BannerSection from '../components/BannerSection';
import BlogCardSection from '../components/BlogCardSection';
import FooterSection from '../components/FooterSection';


import GallerySection from '@/components/GallerySection';



export default function HomePage({ posts }) {
  return (
    <>

      <main className="">

        <Navbar />
   
        <BannerSection />

        <BlogCardSection posts={posts}/>
       
        <GallerySection/>

        <FooterSection />
        


       
        
      </main>
    </>
  );
}