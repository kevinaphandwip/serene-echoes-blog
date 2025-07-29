'use client';

import { useState } from 'react';
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import Sidebar from './Sidebar';
import posts from '../data/posts';

export default function BlogCardSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // Data dummy langsung di sini
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="max-w-6xl bg-white mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      {/* Kiri: Blog List */}
      <div className="flex-[4] space-y-8 ">
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
      <Sidebar posts={posts} className='lg:flex-[1]'/>
    </div>
  );
}
