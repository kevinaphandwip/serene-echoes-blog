import HeadlineSection from '../components/HeadlineSection';
import Navbar from '../components/Navbar';
import BannerSection from '../components/BannerSection';
import BlogCardSection from '../components/BlogCardSection';
import FooterSection from '../components/FooterSection';


import GallerySection from '@/components/GallerySection';



export default function Home() {
  return (
    <>

      <main className="">

        <Navbar />
   
        <BannerSection />

        <BlogCardSection />
       
        <GallerySection/>

        <FooterSection />
        


       
        
      </main>
    </>
  );
}


