import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calculator, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

const quoteSchema = z.object({
  service_type: z.string().min(1, 'Please select a service'),
  description: z.string().min(10, 'Please provide more details'),
  contact_email: z.string().email('Invalid email address'),
  contact_phone: z.string().min(10, 'Invalid phone number'),
  property_size: z.number().min(1, 'Property size is required'),
  preferred_date: z.string().min(1, 'Preferred date is required'),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const services = [
  { name: 'Lawn Maintenance', basePrice: 50, unit: 'per visit' },
  { name: 'Land Clearing', basePrice: 150, unit: 'per hour' },
  { name: 'Excavation', basePrice: 200, unit: 'per hour' },
  { name: 'Paver Installation', basePrice: 15, unit: 'per sq ft' },
  { name: 'Pond Installation', basePrice: 2500, unit: 'base price' },
  { name: 'Pressure Washing', basePrice: 0.75, unit: 'per sq ft' }
];

export default function QuoteGenerator() {
  const { user } = useAuth();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    try {
      const { error } = await supabase.from('quote_requests').insert({
        ...data,
        user_id: user?.id,
        status: 'pending'
      });

      if (error) throw error;

      // Send email notification (this would typically be handled by a server-side function)
      // For now, we'll just log the success
      console.log('Quote request submitted successfully');
    } catch (error) {
      console.error('Error submitting quote request:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8 sm:p-12">
          <div className="flex items-center space-x-4 mb-8">
            <Calculator className="h-8 w-8 text-green-600" />
            <h2 className="text-3xl font-bold text-gray-900">Get an Instant Quote</h2>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Service
              </label>
              <select
                {...register('service_type')}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Choose a service...</option>
                {services.map((service) => (
                  <option key={service.name} value={service.name}>
                    {service.name} ({service.unit})
                  </option>
                ))}
              </select>
              {errors.service_type && (
                <p className="mt-1 text-sm text-red-600">{errors.service_type.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Size (sq ft)
              </label>
              <input
                type="number"
                {...register('property_size', { valueAsNumber: true })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              {errors.property_size && (
                <p className="mt-1 text-sm text-red-600">{errors.property_size.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Description
              </label>
              <textarea
                {...register('description')}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  {...register('contact_email')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                {errors.contact_email && (
                  <p className="mt-1 text-sm text-red-600">{errors.contact_email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  {...register('contact_phone')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                {errors.contact_phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.contact_phone.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                {...register('preferred_date')}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              {errors.preferred_date && (
                <p className="mt-1 text-sm text-red-600">{errors.preferred_date.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300 flex items-center justify-center"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}