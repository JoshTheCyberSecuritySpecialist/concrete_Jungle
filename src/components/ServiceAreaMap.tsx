import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import { Loader } from '@googlemaps/js-api-loader';

const serviceAreas = [
  { city: 'Orlando', coordinates: { lat: 28.5383, lng: -81.3792 } },
  { city: 'Winter Park', coordinates: { lat: 28.5999, lng: -81.3392 } },
  { city: 'Kissimmee', coordinates: { lat: 28.2919, lng: -81.4076 } },
  { city: 'Lake Mary', coordinates: { lat: 28.7589, lng: -81.3178 } },
  { city: 'Winter Garden', coordinates: { lat: 28.5652, lng: -81.5861 } },
  { city: 'Sanford', coordinates: { lat: 28.8028, lng: -81.2731 } }
];

export default function ServiceAreaMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        version: 'weekly',
      });

      try {
        const google = await loader.load();
        const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
        const { Marker } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

        // Center the map on Orlando
        const map = new Map(mapRef.current!, {
          center: { lat: 28.5383, lng: -81.3792 },
          zoom: 10,
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }]
            },
            {
              featureType: 'administrative',
              elementType: 'labels',
              stylers: [{ visibility: 'on' }]
            },
            {
              featureType: 'road',
              elementType: 'labels',
              stylers: [{ visibility: 'on' }]
            },
            {
              featureType: 'landscape',
              elementType: 'all',
              stylers: [
                { hue: '#08ff00' },
                { saturation: -50 },
                { lightness: 10 }
              ]
            }
          ]
        });

        // Clear existing markers
        markersRef.current.forEach(marker => marker.setMap(null));
        markersRef.current = [];

        // Add markers for each service area
        serviceAreas.forEach(area => {
          const marker = new Marker({
            position: area.coordinates,
            map,
            title: area.city,
            animation: google.maps.Animation.DROP,
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 10,
              fillColor: '#16a34a',
              fillOpacity: 1,
              strokeColor: '#ffffff',
              strokeWeight: 2,
            }
          });

          // Add info window
          const infoWindow = new google.maps.InfoWindow({
            content: `<div class="p-2"><strong>${area.city}</strong></div>`
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });

          markersRef.current.push(marker);
        });

      } catch (error) {
        console.error('Error loading Google Maps:', error);
      }
    };

    initMap();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Area</h2>
          <p className="text-xl text-gray-600">
            Proudly serving Central Florida communities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Container */}
          <div 
            ref={mapRef} 
            className="h-[500px] bg-gray-100 rounded-lg overflow-hidden shadow-lg"
          />

          {/* Service Areas List */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Areas We Serve</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceAreas.map((area) => (
                <div
                  key={area.city}
                  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition duration-300"
                >
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-gray-900">{area.city}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600">
                Don't see your area listed? Contact us to check if we service your location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}