import Link from 'next/link';
export default function FooterSection() {
return (
    
<footer className="bg-darkcustom text-white py-8">
  <div className="container mx-auto px-4 text-center space-y-4">
    <p className="text-sm">© 2025 Still Bloom. All rights reserved.</p>
    <div className="flex justify-center space-x-6 text-sm">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/blog" className="hover:underline">Blog</Link>
      <Link href="/about" className="hover:underline">About</Link>
      <Link href="/portfolio" className="hover:underline">Portfolio</Link>
    </div>
  </div>
</footer>

);
}   