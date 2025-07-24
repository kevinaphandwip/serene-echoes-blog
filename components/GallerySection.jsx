import Slider from '../components/Slider';

export default function GallerySection() {
  const images = [
    '../assets/banner.jpg',
    '/assets/banner.jpg',
    '/assets/banner.jpg',
    '/assets/banner.jpg',
    '/assets/banner.jpg'
  ];

  return (
    <section className="px-10 py-8 bg-darkcustom text-white">
        <h2 className="text-2xl font-bold mb-6">Gallery</h2>
        <Slider images={images} />
      </section>
  );
}
