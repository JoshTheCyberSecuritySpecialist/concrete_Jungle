import React, { useState } from 'react';
import { Calendar, Clock, FileText, Settings, Bell, LogOut } from 'lucide-react';

type ServiceRequest = {
  id: string;
  service: string;
  date: string;
  status: 'scheduled' | 'completed' | 'pending';
  notes?: string;
};

const mockServiceRequests: ServiceRequest[] = [
  {
    id: 'SR001',
    service: 'Lawn Maintenance',
    date: '2024-03-20',
    status: 'scheduled',
    notes: 'Monthly service'
  },
  {
    id: 'SR002',
    service: 'Pressure Washing',
    date: '2024-03-15',
    status: 'completed',
    notes: 'Driveway and walkway'
  }
];

export default function CustomerDashboard() {
  const [activeTab, setActiveTab] = useState('services');

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Sidebar */}
            <div className="lg:col-span-1 bg-gray-50 p-6 border-r border-gray-200">
              <div className="space-y-6">
                <button
                  onClick={() => setActiveTab('services')}
                  className={`flex items-center space-x-3 w-full p-3 rounded-lg ${
                    activeTab === 'services' ? 'bg-green-50 text-green-600' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Calendar className="h-5 w-5" />
                  <span>Service History</span>
                </button>
                <button
                  onClick={() => setActiveTab('schedule')}
                  className={`flex items-center space-x-3 w-full p-3 rounded-lg ${
                    activeTab === 'schedule' ? 'bg-green-50 text-green-600' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Clock className="h-5 w-5" />
                  <span>Schedule Service</span>
                </button>
                <button
                  onClick={() => setActiveTab('documents')}
                  className={`flex items-center space-x-3 w-full p-3 rounded-lg ${
                    activeTab === 'documents' ? 'bg-green-50 text-green-600' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <FileText className="h-5 w-5" />
                  <span>Documents</span>
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`flex items-center space-x-3 w-full p-3 rounded-lg ${
                    activeTab === 'settings' ? 'bg-green-50 text-green-600' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-4 p-8">
              {activeTab === 'services' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Service History</h2>
                  <div className="space-y-4">
                    {mockServiceRequests.map((request) => (
                      <div
                        key={request.id}
                        className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg">{request.service}</h3>
                            <p className="text-gray-600">
                              {new Date(request.date).toLocaleDateString()}
                            </p>
                            {request.notes && (
                              <p className="text-gray-500 mt-2">{request.notes}</p>
                            )}
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              request.status === 'completed'
                                ? 'bg-green-100 text-green-800'
                                : request.status === 'scheduled'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'schedule' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Schedule a Service</h2>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Type
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent">
                        <option>Select a service...</option>
                        <option>Lawn Maintenance</option>
                        <option>Pressure Washing</option>
                        <option>Landscaping</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Notes
                      </label>
                      <textarea
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        rows={4}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300"
                    >
                      Request Service
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}