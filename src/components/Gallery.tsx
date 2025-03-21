import React from 'react';

const projects = [
  {
    title: 'Modern Landscape Design',
    category: 'Landscaping',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Paver Installation',
    category: 'Hardscaping',
    image: 'https://images.unsplash.com/photo-1621189426664-a1f69d735897?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Garden Transformation',
    category: 'Landscaping',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Pond Installation',
    category: 'Water Features',
    image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Commercial Landscaping',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1626807236036-9fd3df15cb91?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Residential Maintenance',
    category: 'Maintenance',
    image: 'https://images.unsplash.com/photo-1595748424527-426463e9ae76?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Gallery() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Our Project Gallery</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Explore our portfolio of completed projects and transformations
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="relative h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="text-green-400 text-sm font-semibold mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}