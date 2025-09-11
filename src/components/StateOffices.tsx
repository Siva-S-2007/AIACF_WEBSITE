import React from 'react';
import { MapPin, Phone, Mail, Building2 } from 'lucide-react';

const StateOffices = () => {
  const stateOffices = [
    {
      state: 'Andhra Pradesh',
      city: 'Hyderabad',
      address: '123 Chit Fund Plaza, Banjara Hills, Hyderabad - 500034',
      phone: '+91-40-2345-6789',
      email: 'ap@aiacf.org',
      president: 'Mr. Venkat Reddy',
      established: '1975'
    },
    {
      state: 'Tamil Nadu',
      city: 'Chennai',
      address: '456 Financial District, Anna Salai, Chennai - 600002',
      phone: '+91-44-2345-6789',
      email: 'tn@aiacf.org',
      president: 'Mrs. Lakshmi Narayanan',
      established: '1973'
    },
    {
      state: 'Karnataka',
      city: 'Bangalore',
      address: '789 Business Hub, MG Road, Bangalore - 560001',
      phone: '+91-80-2345-6789',
      email: 'ka@aiacf.org',
      president: 'Mr. Rajesh Kumar',
      established: '1976'
    },
    {
      state: 'Kerala',
      city: 'Kochi',
      address: '321 Marine Drive, Ernakulam, Kochi - 682031',
      phone: '+91-484-234-5678',
      email: 'kl@aiacf.org',
      president: 'Mrs. Priya Nair',
      established: '1974'
    },
    {
      state: 'Maharashtra',
      city: 'Mumbai',
      address: '654 Nariman Point, Mumbai - 400021',
      phone: '+91-22-2345-6789',
      email: 'mh@aiacf.org',
      president: 'Mr. Suresh Patil',
      established: '1972'
    },
    {
      state: 'Gujarat',
      city: 'Ahmedabad',
      address: '987 CG Road, Navrangpura, Ahmedabad - 380009',
      phone: '+91-79-2345-6789',
      email: 'gj@aiacf.org',
      president: 'Mrs. Meera Shah',
      established: '1977'
    },
    {
      state: 'West Bengal',
      city: 'Kolkata',
      address: '147 Park Street, Kolkata - 700016',
      phone: '+91-33-2345-6789',
      email: 'wb@aiacf.org',
      president: 'Mr. Amit Banerjee',
      established: '1978'
    },
    {
      state: 'Rajasthan',
      city: 'Jaipur',
      address: '258 MI Road, Jaipur - 302001',
      phone: '+91-141-234-5678',
      email: 'rj@aiacf.org',
      president: 'Mrs. Kavita Sharma',
      established: '1979'
    },
    {
      state: 'Punjab',
      city: 'Chandigarh',
      address: '369 Sector 17, Chandigarh - 160017',
      phone: '+91-172-234-5678',
      email: 'pb@aiacf.org',
      president: 'Mr. Harpreet Singh',
      established: '1980'
    },
    {
      state: 'Odisha',
      city: 'Bhubaneswar',
      address: '741 Saheed Nagar, Bhubaneswar - 751007',
      phone: '+91-674-234-5678',
      email: 'od@aiacf.org',
      president: 'Mrs. Sunita Panda',
      established: '1981'
    },
    {
      state: 'Telangana',
      city: 'Hyderabad',
      address: '852 HITEC City, Hyderabad - 500081',
      phone: '+91-40-2345-6790',
      email: 'ts@aiacf.org',
      president: 'Mr. Krishna Rao',
      established: '2014'
    },
    {
      state: 'Madhya Pradesh',
      city: 'Bhopal',
      address: '963 New Market, Bhopal - 462001',
      phone: '+91-755-234-5678',
      email: 'mp@aiacf.org',
      president: 'Mrs. Rekha Agarwal',
      established: '1982'
    }
  ];

  const regions = [
    {
      name: 'South India',
      states: ['Andhra Pradesh', 'Tamil Nadu', 'Karnataka', 'Kerala', 'Telangana'],
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      name: 'West India',
      states: ['Maharashtra', 'Gujarat'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'East India',
      states: ['West Bengal', 'Odisha'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'North India',
      states: ['Rajasthan', 'Punjab', 'Madhya Pradesh'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="state-offices" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            State Associations & Offices
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our extensive network spans across India with dedicated state offices serving local chit fund companies and promoting regional growth.
          </p>
        </div>

        {/* Regional Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {regions.map((region, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-6 text-center">
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${region.color} mb-4`}>
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">{region.name}</h3>
              <p className="text-sm text-slate-600">{region.states.length} States</p>
              <div className="mt-3 text-xs text-slate-500">
                {region.states.join(', ')}
              </div>
            </div>
          ))}
        </div>

        {/* State Offices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stateOffices.map((office, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-200">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">{office.state}</h3>
                  <p className="text-blue-600 font-medium">{office.city}</p>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500">Established</div>
                  <div className="text-sm font-semibold text-slate-700">{office.established}</div>
                </div>
              </div>

              {/* President */}
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="text-sm text-slate-600 mb-1">State President</div>
                <div className="font-semibold text-slate-800">{office.president}</div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="text-sm text-slate-600">{office.address}</div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <a href={`tel:${office.phone}`} className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200">
                    {office.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <a href={`mailto:${office.email}`} className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200">
                    {office.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Connect with Your State Office
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our state offices provide localized support, guidance, and representation. Reach out to your nearest office for assistance with membership, compliance, or industry-related queries.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-slate-100 transition-colors duration-200"
            >
              Find Your State Office
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StateOffices;