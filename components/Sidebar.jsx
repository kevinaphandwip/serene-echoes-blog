import posts from '../data/posts';

export default function Sidebar({ className = '' }) {
  return (
<aside className={`w-full lg:w-1/3 space-y-8 ${className}`}>
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
    );
}