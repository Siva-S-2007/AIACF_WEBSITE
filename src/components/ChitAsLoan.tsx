import React from 'react';
import { CreditCard, TrendingUp, Users, CheckCircle } from 'lucide-react';

const ChitAsLoan = () => {
  const loanFeatures = [
    {
      title: 'No Credit Score Required',
      description: 'Access funds based on group trust and regular contributions, not credit history.',
      icon: Users,
      benefit: 'Inclusive access to credit for all economic segments'
    },
    {
      title: 'Competitive Interest Rates',
      description: 'Lower effective interest rates compared to traditional personal loans and credit cards.',
      icon: TrendingUp,
      benefit: 'Cost-effective borrowing with transparent pricing'
    },
    {
      title: 'Flexible Repayment',
      description: 'Repayment through continued participation in the chit fund cycle.',
      icon: CreditCard,
      benefit: 'Structured repayment aligned with savings habit'
    },
    {
      title: 'Quick Disbursement',
      description: 'Faster access to funds through auction process without lengthy approvals.',
      icon: CheckCircle,
      benefit: 'Immediate liquidity for urgent financial needs'
    }
  ];

  const comparisonData = [
    {
      aspect: 'Documentation',
      chitFund: 'Minimal - Basic KYC',
      bankLoan: 'Extensive - Income proof, collateral',
      advantage: 'chit'
    },
    {
      aspect: 'Processing Time',
      chitFund: '1-2 days (auction cycle)',
      bankLoan: '15-30 days',
      advantage: 'chit'
    },
    {
      aspect: 'Interest Rate',
      chitFund: '12-18% effective',
      bankLoan: '15-24% + processing fees',
      advantage: 'chit'
    },
    {
      aspect: 'Eligibility',
      chitFund: 'Group membership based',
      bankLoan: 'Credit score dependent',
      advantage: 'chit'
    },
    {
      aspect: 'Collateral',
      chitFund: 'Not required',
      bankLoan: 'Often required',
      advantage: 'chit'
    }
  ];

  const useCases = [
    {
      title: 'Business Expansion',
      description: 'Small business owners use chit funds to access working capital for inventory, equipment, or expansion.',
      example: 'A textile shop owner wins a ₹5 lakh chit to purchase new inventory for the festive season.'
    },
    {
      title: 'Education Financing',
      description: 'Families fund higher education expenses through chit fund winnings.',
      example: 'Parents use chit fund proceeds to pay for their child\'s engineering college fees.'
    },
    {
      title: 'Medical Emergencies',
      description: 'Quick access to funds for unexpected medical expenses.',
      example: 'A family accesses ₹2 lakh from their chit fund for emergency surgery costs.'
    },
    {
      title: 'Home Renovation',
      description: 'Homeowners finance renovation projects through chit fund proceeds.',
      example: 'A family renovates their kitchen using ₹3 lakh won from their chit fund.'
    }
  ];

  return (
    <section id="chit-as-loan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Chit Fund as a Loan Alternative
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover how chit funds serve as an innovative lending mechanism, providing accessible 
            credit solutions with community backing and transparent processes.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {loanFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-slate-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl inline-flex mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{feature.description}</p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-xs text-blue-700 font-medium">{feature.benefit}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
            Chit Fund vs Traditional Bank Loan
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 px-6 text-slate-700 font-semibold">Aspect</th>
                  <th className="text-center py-4 px-6 text-blue-700 font-semibold">Chit Fund</th>
                  <th className="text-center py-4 px-6 text-slate-700 font-semibold">Bank Loan</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-white/50 transition-colors duration-200">
                    <td className="py-4 px-6 font-medium text-slate-800">{item.aspect}</td>
                    <td className={`py-4 px-6 text-center ${
                      item.advantage === 'chit' ? 'text-green-700 font-semibold' : 'text-slate-600'
                    }`}>
                      {item.chitFund}
                    </td>
                    <td className={`py-4 px-6 text-center ${
                      item.advantage === 'bank' ? 'text-green-700 font-semibold' : 'text-slate-600'
                    }`}>
                      {item.bankLoan}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Use Cases */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-12">
            Real-World Applications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <h4 className="text-xl font-semibold text-slate-800 mb-3">{useCase.title}</h4>
                <p className="text-slate-600 mb-4 leading-relaxed">{useCase.description}</p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <p className="text-sm text-blue-800 italic">Example: {useCase.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChitAsLoan;