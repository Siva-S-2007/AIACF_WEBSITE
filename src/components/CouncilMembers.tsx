import React from 'react';
import { Users, Mail, Phone, MapPin, Award } from 'lucide-react';

const CouncilMembers = () => {
  const councilMembers = [
    {
      name: 'T S SIVA RAMAKRISHNAN',
      position: 'ADVISOR',
      location: 'New Delhi',
      image: './src/9.jpg',
      email: 'president@aiacf.org',
      phone: '+91-98765-43210',
      experience: '25+ Years',
      specialization: 'Policy & Regulation'
    },
    {
      name: 'PRAVEEN',
      position: 'President',
      location: 'Mumbai',
      image: './src/praveen.png',
      email: 'secretary@aiacf.org',
      phone: '+91-98765-43211',
      experience: '20+ Years',
      specialization: 'Member Relations'
    },
    {
      name: 'Chitrarasu',
      position: 'General Secretary',
      location: 'Ahmedabad',
      image: './src/chitrarasu.png',
      email: 'treasurer@aiacf.org',
      phone: '+91-98765-43212',
      experience: '18+ Years',
      specialization: 'Financial Management'
    },
    {
      name: 'AP Arunachalam',
      position: 'TREASURER',
      location: 'Hyderabad',
      image: './src/ap arunachalam.png',
      email: 'vp.south@aiacf.org',
      phone: '+91-98765-43213',
      experience: '22+ Years',
      specialization: 'Regional Operations'
    },
    {
      name: 'Mr. Amit Singh',
      position: 'Vice President (North)',
      location: 'Chandigarh',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'vp.north@aiacf.org',
      phone: '+91-98765-43214',
      experience: '19+ Years',
      specialization: 'Business Development'
    },
    {
      name: 'Mrs. Kavita Joshi',
      position: 'Joint Secretary',
      location: 'Pune',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'joint.secretary@aiacf.org',
      phone: '+91-98765-43215',
      experience: '15+ Years',
      specialization: 'Legal Affairs'
    },
    {
      name: 'Mr. Ravi Kumar',
      position: 'Executive Member',
      location: 'Bangalore',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'executive1@aiacf.org',
      phone: '+91-98765-43216',
      experience: '16+ Years',
      specialization: 'Technology & Innovation'
    },
    {
      name: 'Mrs. Sunita Agarwal',
      position: 'Executive Member',
      location: 'Kolkata',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'executive2@aiacf.org',
      phone: '+91-98765-43217',
      experience: '14+ Years',
      specialization: 'Training & Development'
    },
    {
      name: 'Mr. Deepak Gupta',
      position: 'Executive Member',
      location: 'Jaipur',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'executive3@aiacf.org',
      phone: '+91-98765-43218',
      experience: '17+ Years',
      specialization: 'Compliance & Audit'
    }
  ];

  const governingBodySections = [
    {
      title: 'Central Chit Fund Act',
      description: 'Comprehensive legislation governing chit fund operations nationwide',
      icon: Award
    },
    {
      title: 'Chit as a Loan',
      description: 'Understanding chit funds as alternative lending mechanisms',
      icon: Users
    },
    {
      title: 'Chit Funds for Savings and Investment',
      description: 'Dual benefit instrument for systematic savings and investment',
      icon: Award
    },
    {
      title: 'Chit vs. Other Financial Instruments',
      description: 'Comparative analysis with banks, mutual funds, and other options',
      icon: Users
    },
    {
      title: 'Glossary',
      description: 'Comprehensive terminology and definitions for industry terms',
      icon: Award
    },
    {
      title: 'Governing Body',
      description: 'Structure and composition of AIACF leadership and governance',
      icon: Users
    },
    {
      title: 'Rules & Regulations',
      description: 'Complete framework of operational guidelines and compliance',
      icon: Award
    },
    {
      title: 'Representation to Government Agencies',
      description: 'Active advocacy and liaison with regulatory authorities',
      icon: Users
    }
  ];

  return (
    <section id="council" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Council Members
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Meet the distinguished leaders who guide AIACF's mission and represent the interests of chit fund companies across India.
          </p>
        </div>

        {/* Council Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {councilMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              {/* Profile Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-blue-200 text-sm">{member.position}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>{member.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <Award className="w-4 h-4 text-blue-600" />
                    <span>{member.experience} • {member.specialization}</span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 pt-4 border-t border-slate-200">
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <a href={`mailto:${member.email}`} className="hover:text-blue-600 transition-colors duration-200">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <a href={`tel:${member.phone}`} className="hover:text-blue-600 transition-colors duration-200">
                      {member.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Governing Body Information */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
            Governing Body Framework
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {governingBodySections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="text-center p-4 rounded-xl hover:bg-slate-50 transition-colors duration-200">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl inline-flex mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">{section.title}</h4>
                  <p className="text-sm text-slate-600">{section.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CouncilMembers;