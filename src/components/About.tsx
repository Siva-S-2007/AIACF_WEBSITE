import React from 'react';
import { Calendar, Award, Users, Target } from 'lucide-react';

const About = () => {
  const milestones = [
    {
      year: '1971',
      title: 'Foundation',
      description: 'AIACF was established to represent and promote the interests of chit fund companies across India.',
      icon: Calendar
    },
    {
      year: '1982',
      title: 'Chit Funds Act',
      description: 'Played a crucial role in the formulation and implementation of the Chit Funds Act, 1982.',
      icon: Award
    },
    {
      year: '1995',
      title: 'National Recognition',
      description: 'Gained recognition as the premier association representing chit fund industry at national level.',
      icon: Users
    },
    {
      year: '2010',
      title: 'Digital Transformation',
      description: 'Led initiatives for digitization and modernization of chit fund operations.',
      icon: Target
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From humble beginnings in 1971 to becoming India's leading chit fund association, 
            our story is one of dedication, growth, and unwavering commitment to financial inclusion.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600 rounded-full"></div>

          <div className="space-y-16">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-5/12 ${isEven ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200">
                      <div className={`flex items-center ${isEven ? 'justify-end' : 'justify-start'} mb-4`}>
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2 rounded-lg">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</h3>
                      <h4 className="text-xl font-semibold text-slate-800 mb-3">{milestone.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  </div>

                  {/* Spacer */}
                  <div className="w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
            To promote, protect, and advance the interests of chit fund companies in India while ensuring 
            transparency, ethical practices, and sustainable growth that benefits millions of subscribers 
            across the nation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;