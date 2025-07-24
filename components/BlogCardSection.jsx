'use client';

import { useState } from 'react';
import BlogCard from './BlogCard';
import Pagination from './Pagination';

export default function BlogCardSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // Data dummy langsung di sini
  const posts = [
    {
      id: 1,
      title: 'Casting Peace: A Chill Fishing Day at Lembah Dieng, Malang',
      excerpt: "If you're feeling burned out and need a quick escape ...",
      category: 'Fishing',
      imageSrc: '/assets/lembah-dieng.png',
    },
    {
      id: 2,
      title: 'Small Fish, Big Thrill: Chasing Wader in the Wild',
      excerpt: "You don’t always need a fancy fishing rod, a big boat, or deep water to have fun. Sometimes, it’s the small things—literally—that bring the biggest joy. That’s exactly what happened on my trip to hunt wader fish.For those who aren’t familiar, wader is a small freshwater fish commonly found in rivers and clean creeks across Indonesia. Don’t let the size fool you—these little guys are fast, slippery, and surprisingly fun to catch.",
      category: 'Fishing',
      imageSrc: '/assets/wader.jpg',
    },
    // tambahin lebih banyak buat testing pagination
  ];

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      {/* Kiri: Blog List */}
      <div className="flex-1">
        {currentPosts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Kanan: Sidebar */}
      <aside className="w-full lg:w-[300px] space-y-6">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border rounded-full px-4 py-2 pr-10"
          />
          <span className="absolute right-3 top-2.5 text-gray-500">🔍</span>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="font-francois text-gray-800 text-lg mb-2">Recent Post</h3>
          {posts.slice(0, 3).map((post) => (
            <p key={post.id} className="text-sm underline text-gray-800">
              {post.title}
            </p>
          ))}
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-francois text-gray-800 text-lg mb-2">Categories</h3>
          <ul className="text-sm space-y-1 text-gray-800">
            <li>Fishing</li>
            <li>Tech</li>
            <li>Nature</li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
