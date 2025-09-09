import React from 'react';
import { Target, Shield, Users, BookOpen, Gavel, TrendingUp } from 'lucide-react';

const Objectives = () => {
  const objectives = [
    {
      icon: Target,
      title: 'Industry Promotion',
      description: 'Promote and protect the interests of chit fund companies across India through advocacy and representation.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Ensure adherence to regulatory frameworks and promote best practices in chit fund operations.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Users,
      title: 'Member Support',
      description: 'Provide comprehensive support, guidance, and resources to member companies for sustainable growth.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BookOpen,
      title: 'Education & Awareness',
      description: 'Educate stakeholders about chit fund benefits and create awareness about financial inclusion.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Gavel,
      title: 'Policy Advocacy',
      description: 'Work with government bodies to shape policies that benefit the chit fund industry and subscribers.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: TrendingUp,
      title: 'Innovation & Growth',
      description: 'Foster innovation, digitization, and modernization to ensure the industry\'s continued relevance.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const regulations = [
    {
      title: 'Chit Funds Act, 1982',
      description: 'Primary legislation governing chit fund operations in India',
      status: 'Active'
    },
    {
      title: 'State Regulations',
      description: 'State-specific rules and compliance requirements',
      status: 'Varies by State'
    },
    {
      title: 'RBI Guidelines',
      description: 'Reserve Bank of India guidelines for financial operations',
      status: 'Updated Regularly'
    },
    {
      title: 'Consumer Protection',
      description: 'Measures to protect subscriber interests and rights',
      status: 'Enforced'
    }
  ];

  const memberBenefits = [
    'Regulatory guidance and compliance support',
    'Industry representation at government level',
    'Networking opportunities with industry peers',
    'Access to training and development programs',
    'Market intelligence and industry insights',
    'Legal and technical assistance',
    'Advocacy for favorable policies',
    'Brand credibility and trust enhancement'
  ];

  return (
    <section id="objectives" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Objectives & Regulations
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Driving the chit fund industry forward through clear objectives, regulatory compliance, and comprehensive member support.
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-12">Core Objectives</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${objective.color} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-3">{objective.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{objective.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Regulations Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-12">Regulatory Framework</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regulations.map((regulation, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-colors duration-200">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold text-slate-800">{regulation.title}</h4>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                    {regulation.status}
                  </span>
                </div>
                <p className="text-slate-600">{regulation.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Member Benefits */}
        <div id="regulation" className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Member Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {memberBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span className="text-lg opacity-90">{benefit}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-slate-100 transition-colors duration-200"
            >
              Become a Member
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;