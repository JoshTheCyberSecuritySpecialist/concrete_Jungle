import React from 'react';
import { Shovel, Trees, Truck, Droplets, Construction, Hammer, Leaf, SprayCan as Spray } from 'lucide-react';

const services = [
  {
    icon: <Shovel className="h-8 w-8" />,
    title: 'Excavation & Grading',
    description: 'Professional ground preparation and leveling for your construction needs'
  },
  {
    icon: <Trees className="h-8 w-8" />,
    title: 'Land Clearing',
    description: 'Selective tree removal and land preparation services'
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: 'Hauling & Debris Removal',
    description: 'Efficient removal and transportation of materials and debris'
  },
  {
    icon: <Droplets className="h-8 w-8" />,
    title: 'Pond & Drainage',
    description: 'Expert pond excavation and drainage system installation'
  },
  {
    icon: <Construction className="h-8 w-8" />,
    title: 'Skid Steer Work',
    description: 'Versatile equipment operation for various construction needs'
  },
  {
    icon: <Hammer className="h-8 w-8" />,
    title: 'Paver Installation',
    description: 'Beautiful and durable paver and concrete installations'
  },
  {
    icon: <Leaf className="h-8 w-8" />,
    title: 'Landscaping',
    description: 'Complete landscape design and maintenance services'
  },
  {
    icon: <Spray className="h-8 w-8" />,
    title: 'Pressure Washing',
    description: 'Professional cleaning for all outdoor surfaces'
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 mb-12">
            Comprehensive property maintenance solutions for all your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-green-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}