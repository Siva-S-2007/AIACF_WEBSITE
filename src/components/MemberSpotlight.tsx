import React from 'react';
import { Award, Mail, Phone } from 'lucide-react';

const MemberSpotlight = () => {
  const officeBearer = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'President',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Leading the association with over 25 years of experience in the chit fund industry. Advocate for digital transformation and regulatory reforms.',
      achievements: ['Industry Pioneer Award 2020', 'Financial Inclusion Champion', 'Policy Reform Advocate'],
      email: 'president@aiacf.org',
      phone: '+91-98765-43210'
    },
    {
      name: 'Mrs. Priya Sharma',
      position: 'General Secretary',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Dedicated to member services and organizational excellence. Expert in regulatory compliance and industry best practices.',
      achievements: ['Excellence in Service Award', 'Compliance Expert', 'Member Advocate'],
      email: 'secretary@aiacf.org',
      phone: '+91-98765-43211'
    },
    {
      name: 'Mr. Suresh Patel',
      position: 'Treasurer',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Financial steward ensuring transparent and efficient management of association resources. CPA with expertise in financial governance.',
      achievements: ['Financial Excellence Award', 'Transparency Champion', 'Governance Expert'],
      email: 'treasurer@aiacf.org',
      phone: '+91-98765-43212'
    }
  ];

  return (
    <section id="members" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Leadership Team
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Meet the dedicated leaders driving AIACF's mission forward and representing the interests of chit fund companies across India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {officeBearer.map((member, index) => (
            <div key={index} className="bg-slate-50 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              {/* Profile Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-blue-200">{member.position}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-slate-600 mb-6 leading-relaxed">{member.bio}</p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-800 mb-3 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-blue-600" />
                    Key Achievements
                  </h4>
                  <div className="space-y-2">
                    {member.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-slate-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 pt-4 border-t border-slate-200">
                  <div className="flex items-center space-x-3 text-sm text-slate-600">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <a href={`mailto:${member.email}`} className="hover:text-blue-600 transition-colors duration-200">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-slate-600">
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-100 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Want to Connect with Our Leadership?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Our leadership team is always available to discuss industry matters, membership opportunities, or collaboration initiatives.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberSpotlight;