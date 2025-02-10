import React, { useState } from "react";
import { Car, Fuel, Phone, MapPin, AlertTriangle } from "lucide-react";

function App() {
  const [loading, setLoading] = useState(false);

  const handleEmergencyCall = () => {
    setLoading(true);
    // Simulating API call
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-2">
            <Car className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-800">Amigo Assist</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Emergency Services Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-800">
                  24/7 Roadside Assistance
                </h2>
                <p className="text-gray-600">
                  Experience peace of mind with our comprehensive roadside
                  assistance service. We're here to help you get back on the
                  road quickly and safely.
                </p>
                <button
                  onClick={handleEmergencyCall}
                  disabled={loading}
                  className="w-full md:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <Phone className="w-5 h-5" />
                      <span>Emergency Assistance</span>
                    </>
                  )}
                </button>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80"
                  alt="Roadside Assistance"
                  className="rounded-lg shadow-md w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Mechanic Locator */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Find Mechanics
                </h3>
              </div>
              <p className="text-gray-600">
                Locate nearby certified mechanics and repair shops in your area.
              </p>
            </div>

            {/* Emergency Fuel */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Fuel className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Emergency Fuel
                </h3>
              </div>
              <p className="text-gray-600">
                Run out of fuel? Get 1 litre emergency fuel delivery to reach
                the nearest station.
              </p>
            </div>

            {/* Emergency Support */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-red-100 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  24/7 Support
                </h3>
              </div>
              <p className="text-gray-600">
                Immediate assistance from our emergency response team, available
                24/7.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Car Animation */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gray-200">
        <div className="car-animation">
          <Car className="w-8 h-8 text-indigo-600" />
        </div>
      </div>
    </div>
  );
}

export default App;
