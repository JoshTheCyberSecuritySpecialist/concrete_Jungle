import React from 'react';
import { Shield, Award, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Licensed & Insured',
    description: 'Full coverage for your peace of mind'
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: 'Expert Team',
    description: 'Skilled professionals with years of experience'
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'Timely Service',
    description: 'On-time project completion, every time'
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Customer Focused',
    description: '98% customer satisfaction rate'
  }
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">About Concrete Jungle</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Central Florida's premier property maintenance and landscaping service provider
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Since our establishment, Concrete Jungle has been dedicated to transforming outdoor spaces across Central Florida. Our journey began with a simple mission: to provide exceptional property maintenance services that exceed client expectations.
              </p>
              <p>
                Today, we're proud to be one of the region's most trusted names in landscaping and property maintenance. Our team of skilled professionals brings years of experience and a passion for excellence to every project we undertake.
              </p>
              <p>
                We believe in sustainable practices, attention to detail, and building lasting relationships with our clients. Whether it's a small residential project or a large commercial undertaking, we approach each job with the same level of dedication and professionalism.
              </p>
            </div>
          </div>
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=800&q=80"
              alt="Team at work"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Choose Us</h2>
            <p className="text-gray-600 mt-4">
              We're committed to delivering excellence in every aspect of our service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="text-green-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}