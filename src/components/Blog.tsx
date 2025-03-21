import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Essential Spring Lawn Care Tips',
    excerpt: 'Get your lawn ready for the growing season with these professional maintenance tips...',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80',
    author: 'Mike Wilson',
    date: 'March 15, 2024',
    category: 'Lawn Care'
  },
  {
    title: 'The Benefits of Professional Land Clearing',
    excerpt: 'Learn why professional land clearing services are essential for your property development...',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    author: 'Sarah Johnson',
    date: 'March 10, 2024',
    category: 'Land Management'
  },
  {
    title: 'Creating the Perfect Outdoor Living Space',
    excerpt: 'Transform your backyard into a stunning retreat with these design ideas...',
    image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&w=800&q=80',
    author: 'John Davis',
    date: 'March 5, 2024',
    category: 'Design'
  }
];

export default function Blog() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Landscaping Insights</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Expert tips and advice for maintaining your property
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <button className="mt-4 text-green-600 font-semibold flex items-center hover:text-green-700 transition duration-300">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}