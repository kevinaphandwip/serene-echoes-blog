

export default function Sidebar({ posts = [], className = '' }) {
 const uniqueCategories = Array.from(
    new Set(posts.map((post) => post.category).filter(Boolean))
  );

  return (
<aside className={`  space-y-8 ${className}`}>
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
            <p key={post.id} className="text-xs my-1 underline text-gray-800">
              {post.title}
            </p>
          ))}
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-francois text-gray-800 text-lg mb-2">Categories</h3>
          <ul className="text-xs space-y-1 text-gray-800">
          {uniqueCategories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
        </div>
      </aside>
    );
}