import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'John Smith',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    content: 'Concrete Jungle transformed our backyard into a stunning oasis. Their attention to detail and professionalism exceeded our expectations.',
    rating: 5
  },
  {
    name: 'Sarah Johnson',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    content: 'We hired them for our commercial property maintenance, and they have been exceptional. Reliable, thorough, and always professional.',
    rating: 5
  },
  {
    name: 'Mike Davis',
    role: 'Property Manager',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    content: 'Their excavation work was outstanding. They handled everything efficiently and left the site immaculate. Highly recommend!',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-green-600" />
                </div>
                
                <p className="text-gray-600 mb-6">{testimonial.content}</p>
                
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-green-600 font-semibold">
            <Star className="h-5 w-5 fill-current" />
            <span>4.9 out of 5 based on 29 reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}