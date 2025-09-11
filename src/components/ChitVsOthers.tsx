import React, { useState } from 'react';
import { PieChart, TrendingUp, Shield, Clock, DollarSign, Users } from 'lucide-react';

const ChitVsOthers = () => {
  const [activeComparison, setActiveComparison] = useState('banks');

  const instruments = [
    { id: 'banks', name: 'Banks', icon: Shield },
    { id: 'mutualfunds', name: 'Mutual Funds', icon: TrendingUp },
    { id: 'fixeddeposits', name: 'Fixed Deposits', icon: PieChart },
    { id: 'gold', name: 'Gold Investment', icon: DollarSign }
  ];

  const comparisons = {
    banks: {
      title: 'Chit Funds vs Banks',
      chitAdvantages: [
        'No credit score requirements',
        'Faster loan approval process',
        'Lower documentation',
        'Community-based trust system',
        'Dual benefit of savings and credit'
      ],
      bankAdvantages: [
        'FDIC insurance protection',
        'Wide range of products',
        'Digital banking facilities',
        'Established regulatory framework'
      ],
      comparison: [
        { aspect: 'Loan Approval', chit: '1-2 days', other: '15-30 days', winner: 'chit' },
        { aspect: 'Interest Rates', chit: '12-18%', other: '15-24%', winner: 'chit' },
        { aspect: 'Documentation', chit: 'Minimal', other: 'Extensive', winner: 'chit' },
        { aspect: 'Insurance', chit: 'Limited', other: 'Full Coverage', winner: 'other' }
      ]
    },
    mutualfunds: {
      title: 'Chit Funds vs Mutual Funds',
      chitAdvantages: [
        'Guaranteed returns through auctions',
        'No market risk exposure',
        'Immediate liquidity access',
        'Predictable cash flows',
        'No management fees'
      ],
      otherAdvantages: [
        'Professional fund management',
        'Diversified portfolio',
        'Potential for higher returns',
        'Tax benefits available'
      ],
      comparison: [
        { aspect: 'Risk Level', chit: 'Low', other: 'Medium-High', winner: 'chit' },
        { aspect: 'Liquidity', chit: 'High', other: 'Medium', winner: 'chit' },
        { aspect: 'Returns', chit: '8-15%', other: '10-20%', winner: 'other' },
        { aspect: 'Fees', chit: 'Minimal', other: '1-3% annually', winner: 'chit' }
      ]
    },
    fixeddeposits: {
      title: 'Chit Funds vs Fixed Deposits',
      chitAdvantages: [
        'Higher effective returns',
        'Loan facility available',
        'Flexible tenure options',
        'No penalty for early withdrawal',
        'Community participation benefits'
      ],
      otherAdvantages: [
        'Guaranteed fixed returns',
        'Bank insurance coverage',
        'Tax benefits under 80C',
        'No auction participation required'
      ],
      comparison: [
        { aspect: 'Returns', chit: '10-15%', other: '5-7%', winner: 'chit' },
        { aspect: 'Flexibility', chit: 'High', other: 'Low', winner: 'chit' },
        { aspect: 'Safety', chit: 'Good', other: 'Excellent', winner: 'other' },
        { aspect: 'Loan Access', chit: 'Available', other: 'Against FD only', winner: 'chit' }
      ]
    },
    gold: {
      title: 'Chit Funds vs Gold Investment',
      chitAdvantages: [
        'No storage or security concerns',
        'Regular cash flow generation',
        'No making charges or wastage',
        'Easy liquidation process',
        'Inflation hedge with income'
      ],
      otherAdvantages: [
        'Tangible asset ownership',
        'Cultural and emotional value',
        'Long-term wealth preservation',
        'No counterparty risk'
      ],
      comparison: [
        { aspect: 'Storage Cost', chit: 'None', other: 'High', winner: 'chit' },
        { aspect: 'Liquidity', chit: 'High', other: 'Medium', winner: 'chit' },
        { aspect: 'Income Generation', chit: 'Regular', other: 'None', winner: 'chit' },
        { aspect: 'Inflation Hedge', chit: 'Good', other: 'Excellent', winner: 'other' }
      ]
    }
  };

  const currentComparison = comparisons[activeComparison];

  return (
    <section id="chit-vs-others" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Chit Funds vs Other Financial Instruments
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Compare chit funds with traditional financial instruments to understand their unique 
            advantages and make informed investment decisions.
          </p>
        </div>

        {/* Instrument Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {instruments.map((instrument) => {
            const Icon = instrument.icon;
            return (
              <button
                key={instrument.id}
                onClick={() => setActiveComparison(instrument.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  activeComparison === instrument.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{instrument.name}</span>
              </button>
            );
          })}
        </div>

        {/* Comparison Content */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
            {currentComparison.title}
          </h3>

          {/* Advantages Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Chit Fund Advantages
              </h4>
              <ul className="space-y-3">
                {currentComparison.chitAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-slate-700">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                {instruments.find(i => i.id === activeComparison)?.name} Advantages
              </h4>
              <ul className="space-y-3">
                {(currentComparison.otherAdvantages || currentComparison.bankAdvantages).map((advantage, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                    <span className="text-slate-700">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Detailed Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 px-6 text-slate-700 font-semibold">Comparison Factor</th>
                  <th className="text-center py-4 px-6 text-blue-700 font-semibold">Chit Funds</th>
                  <th className="text-center py-4 px-6 text-slate-700 font-semibold">
                    {instruments.find(i => i.id === activeComparison)?.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentComparison.comparison.map((item, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200">
                    <td className="py-4 px-6 font-medium text-slate-800">{item.aspect}</td>
                    <td className={`py-4 px-6 text-center ${
                      item.winner === 'chit' ? 'text-green-700 font-semibold' : 'text-slate-600'
                    }`}>
                      {item.chit}
                    </td>
                    <td className={`py-4 px-6 text-center ${
                      item.winner === 'other' ? 'text-green-700 font-semibold' : 'text-slate-600'
                    }`}>
                      {item.other}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-4">Key Takeaway</h3>
            <p className="text-blue-100 max-w-3xl mx-auto">
              Chit funds offer a unique combination of savings and credit facilities with community backing, 
              making them an excellent complement to traditional financial instruments in a diversified portfolio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChitVsOthers;