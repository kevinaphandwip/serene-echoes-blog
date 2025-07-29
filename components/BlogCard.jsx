import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'; 

function truncateText(text, maxLength) {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}


export default function BlogCard({ id,title, excerpt, category, imageSrc }) {
  return (
    <div className="flex flex-col md:flex-row border-b py-6 gap-4">
      {/* Gambar */}
      <div className="w-full md:w-[264px] flex-shrink-0">
        <Image
          src={imageSrc}
          alt={title}
          width={264}
          height={256}
          className="rounded-xl object-cover w-full h-[256px]"
        />
      </div>

      {/* Konten */}
      <div className="flex flex-col justify-between relative flex-grow">
        <div>
          <h2 className="text-xl text-gray-800 font-francois">{title}</h2>
          <p className="text-xs text-gray-600 mt-2">{truncateText(excerpt, 300)}</p>
          <p className="mt-2 font-semibold text-sm text-gray-800">{category}</p>
        </div>

        {/* Tombol panah */}
        <Link
  href={`/blog/${id}`}
  className="absolute bottom-0 right-0 p-2 rounded-full hover:bg-gray-200 transition"
>
  <ArrowRight size={20} className="text-gray-800" />
</Link>

      </div>
    </div>
  );
}

