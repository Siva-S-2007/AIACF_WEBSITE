import React, { useState } from 'react';
import { ChevronDown, ChevronUp, PiggyBank, Users, TrendingUp, Shield } from 'lucide-react';

const ChitFundsExplained = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const accordionItems = [
    {
      title: 'What is a Chit Fund?',
      icon: PiggyBank,
      content: 'A chit fund is a financial instrument that combines savings and credit. It\'s a rotating savings and credit association where a group of people contribute a fixed amount regularly, and each member gets a chance to receive the pooled amount through bidding or lottery.',
      features: ['Regular savings habit', 'Access to lump sum', 'No credit checks required', 'Community-based finance']
    },
    {
      title: 'Understanding Chitty',
      icon: Users,
      content: 'Chitty is another term for chit fund, commonly used in South India. It operates on the same principle of collective savings and rotational credit, fostering financial discipline and community participation.',
      features: ['Group participation', 'Transparent process', 'Regulated operations', 'Flexible tenure options']
    },
    {
      title: 'ROSCA (Rotating Savings and Credit Association)',
      icon: TrendingUp,
      content: 'ROSCA is the international term for chit funds. It\'s a financial practice found worldwide, demonstrating the universal appeal and effectiveness of this savings and credit model.',
      features: ['Global recognition', 'Proven track record', 'Cultural adaptation', 'Financial inclusion tool']
    },
    {
      title: 'Benefits Over Traditional Banking',
      icon: Shield,
      content: 'Chit funds offer unique advantages including easier access to credit, no complex documentation, community support, and the dual benefit of savings and borrowing in a single instrument.',
      features: ['Minimal documentation', 'Quick access to funds', 'Lower interest rates', 'Social security aspect']
    }
  ];

  const comparisons = [
    {
      aspect: 'Documentation',
      chitFund: 'Minimal paperwork',
      bank: 'Extensive documentation',
      advantage: 'chit'
    },
    {
      aspect: 'Credit Access',
      chitFund: 'Based on group trust',
      bank: 'Credit score dependent',
      advantage: 'chit'
    },
    {
      aspect: 'Interest Rates',
      chitFund: 'Competitive rates',
      bank: 'Fixed high rates',
      advantage: 'chit'
    },
    {
      aspect: 'Processing Time',
      chitFund: 'Quick disbursement',
      bank: 'Lengthy approval process',
      advantage: 'chit'
    }
  ];

  return (
    <section id="chit-insights" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Understanding Chit Funds
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover how chit funds work, their benefits, and why they remain one of India's most trusted financial instruments.
          </p>
        </div>

        {/* Interactive Accordion */}
        <div className="mb-16">
          <div className="space-y-4">
            {accordionItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeAccordion === index;
              
              return (
                <div key={index} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
                  <button
                    onClick={() => setActiveAccordion(isActive ? -1 : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-100 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
                    </div>
                    {isActive ? (
                      <ChevronUp className="w-6 h-6 text-slate-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-slate-600" />
                    )}
                  </button>
                  
                  <div className={`transition-all duration-300 ${
                    isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="p-6 pt-0">
                      <p className="text-slate-600 mb-4 leading-relaxed">{item.content}</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {item.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="bg-white p-3 rounded-lg border border-slate-200">
                            <span className="text-sm text-slate-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
            Chit Funds vs Traditional Banking
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 px-6 text-slate-700 font-semibold">Aspect</th>
                  <th className="text-center py-4 px-6 text-blue-700 font-semibold">Chit Funds</th>
                  <th className="text-center py-4 px-6 text-slate-700 font-semibold">Traditional Banks</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comparison, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-white/50 transition-colors duration-200">
                    <td className="py-4 px-6 font-medium text-slate-800">{comparison.aspect}</td>
                    <td className={`py-4 px-6 text-center ${
                      comparison.advantage === 'chit' ? 'text-green-700 font-semibold' : 'text-slate-600'
                    }`}>
                      {comparison.chitFund}
                    </td>
                    <td className={`py-4 px-6 text-center ${
                      comparison.advantage === 'bank' ? 'text-green-700 font-semibold' : 'text-slate-600'
                    }`}>
                      {comparison.bank}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChitFundsExplained;