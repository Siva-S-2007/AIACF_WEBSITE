import React from 'react';
import { Scale, BookOpen, Shield, AlertCircle } from 'lucide-react';

const ChitFundAct = () => {
  const actSections = [
    {
      title: 'Definition and Scope',
      icon: BookOpen,
      content: 'The Chit Funds Act, 1982 defines chit funds as transactions where persons enter into an agreement to subscribe to a certain sum by way of periodical installments over a definite period.',
      keyPoints: [
        'Minimum 10 subscribers required',
        'Maximum duration of 10 years',
        'Clear definition of chit amount and installments',
        'Foreman responsibilities outlined'
      ]
    },
    {
      title: 'Registration Requirements',
      icon: Shield,
      content: 'All chit fund companies must register with the Registrar of Chits in their respective states before commencing operations.',
      keyPoints: [
        'State government registration mandatory',
        'Minimum paid-up capital requirements',
        'Security deposit with government',
        'Annual compliance reporting'
      ]
    },
    {
      title: 'Operational Guidelines',
      icon: Scale,
      content: 'The Act prescribes detailed operational procedures including auction conduct, prize money distribution, and subscriber rights.',
      keyPoints: [
        'Transparent auction process',
        'Commission limits for foreman',
        'Subscriber protection measures',
        'Dispute resolution mechanisms'
      ]
    },
    {
      title: 'Penalties and Compliance',
      icon: AlertCircle,
      content: 'Strict penalties for non-compliance including imprisonment and fines for operating without registration or violating prescribed norms.',
      keyPoints: [
        'Criminal liability for violations',
        'Regular inspections by authorities',
        'Subscriber complaint mechanisms',
        'Recovery procedures for defaults'
      ]
    }
  ];

  const stateRegulations = [
    { state: 'Tamil Nadu', year: '1961', specialFeatures: 'Pioneer in chit fund regulation' },
    { state: 'Andhra Pradesh', year: '1971', specialFeatures: 'Comprehensive subscriber protection' },
    { state: 'Karnataka', year: '1975', specialFeatures: 'Digital compliance framework' },
    { state: 'Kerala', year: '1975', specialFeatures: 'Strong enforcement mechanisms' },
    { state: 'Maharashtra', year: '1982', specialFeatures: 'Urban-focused regulations' },
    { state: 'Gujarat', year: '1983', specialFeatures: 'Business-friendly policies' }
  ];

  return (
    <section id="central-chit-fund-act" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Central Chit Fund Act, 1982
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive legislation governing chit fund operations across India, ensuring transparency, 
            subscriber protection, and industry standardization.
          </p>
        </div>

        {/* Act Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {actSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl mr-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{section.title}</h3>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">{section.content}</p>
                <div className="space-y-2">
                  {section.keyPoints.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-slate-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* State Regulations */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
            State-wise Implementation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stateRegulations.map((regulation, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors duration-200">
                <h4 className="text-lg font-semibold text-slate-800 mb-2">{regulation.state}</h4>
                <div className="text-sm text-blue-600 font-medium mb-3">Since {regulation.year}</div>
                <p className="text-sm text-slate-600">{regulation.specialFeatures}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChitFundAct;