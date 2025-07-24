export default function BannerSection() {
  return (
     <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("../assets/banner.jpg")' }}
    >
      {/* Content container */}
      <div className="relative z-10 flex flex-col h-full px-6 sm:px-12 max-w-5xl pt-32">
        <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight max-w-3xl">
          Quiet Thoughts,<br />Gentle Reflections
        </h1>

        <div className="mt-6">
          <hr className="border-t-2 border-white mb-1 w-full sm:w-[70%]" />
          <hr className="border-t-2 border-white w-1/2 sm:w-[40%]" />
        </div>
      </div>
    </section>

    

    
  );
}

