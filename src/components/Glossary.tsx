import React, { useState } from 'react';
import { Search, BookOpen } from 'lucide-react';

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Terms' },
    { id: 'basic', name: 'Basic Terms' },
    { id: 'legal', name: 'Legal Terms' },
    { id: 'financial', name: 'Financial Terms' },
    { id: 'operational', name: 'Operational Terms' }
  ];

  const glossaryTerms = [
    {
      term: 'Chit Fund',
      category: 'basic',
      definition: 'A financial instrument that combines savings and credit, where a group of people contribute a fixed amount regularly and each member gets a chance to receive the pooled amount.',
      example: 'A 20-member chit fund with ₹10,000 monthly contribution creates a pool of ₹2 lakh each month.'
    },
    {
      term: 'Chitty',
      category: 'basic',
      definition: 'Another term for chit fund, commonly used in South India. It operates on the same principle of collective savings and rotational credit.',
      example: 'The local chitty group meets every month to conduct the auction.'
    },
    {
      term: 'ROSCA',
      category: 'basic',
      definition: 'Rotating Savings and Credit Association - the international term for chit funds, found in various forms worldwide.',
      example: 'ROSCAs are popular in many developing countries as informal financial institutions.'
    },
    {
      term: 'Foreman',
      category: 'legal',
      definition: 'The person or company that organizes and manages the chit fund, responsible for collecting installments and conducting auctions.',
      example: 'The foreman collects a commission of 5% from each auction for managing the chit fund.'
    },
    {
      term: 'Subscriber',
      category: 'basic',
      definition: 'A member of the chit fund who agrees to pay regular installments and participate in auctions.',
      example: 'Each subscriber in the 50-member chit fund pays ₹5,000 monthly.'
    },
    {
      term: 'Chit Amount',
      category: 'financial',
      definition: 'The total sum that is auctioned each month, calculated by multiplying the number of subscribers by the installment amount.',
      example: 'With 25 subscribers paying ₹4,000 each, the chit amount is ₹1 lakh.'
    },
    {
      term: 'Installment',
      category: 'financial',
      definition: 'The fixed amount each subscriber pays monthly throughout the chit fund duration.',
      example: 'The monthly installment for this chit fund is ₹2,000 per subscriber.'
    },
    {
      term: 'Auction',
      category: 'operational',
      definition: 'The process by which the chit amount is awarded to a subscriber, typically through competitive bidding.',
      example: 'In today\'s auction, the chit amount was won with a bid of ₹15,000 discount.'
    },
    {
      term: 'Prize Money',
      category: 'financial',
      definition: 'The amount received by the winning subscriber after deducting the discount amount and foreman\'s commission.',
      example: 'From the ₹1 lakh chit amount, after ₹10,000 discount and ₹5,000 commission, the prize money is ₹85,000.'
    },
    {
      term: 'Discount',
      category: 'financial',
      definition: 'The amount bid by the winning subscriber, which is distributed among all subscribers as a dividend.',
      example: 'The ₹8,000 discount is divided equally among all 20 subscribers, giving each ₹400.'
    },
    {
      term: 'Dividend',
      category: 'financial',
      definition: 'The share of discount amount that each subscriber receives, reducing their effective installment.',
      example: 'This month\'s dividend of ₹300 reduces your effective installment from ₹2,000 to ₹1,700.'
    },
    {
      term: 'Non-Prized Subscriber',
      category: 'operational',
      definition: 'A subscriber who has not yet won the chit amount and continues to pay installments.',
      example: 'Non-prized subscribers are eligible to participate in future auctions.'
    },
    {
      term: 'Prized Subscriber',
      category: 'operational',
      definition: 'A subscriber who has already won the chit amount and continues to pay installments without auction participation.',
      example: 'Prized subscribers must continue paying installments until the chit fund matures.'
    },
    {
      term: 'Maturity',
      category: 'operational',
      definition: 'The completion of the chit fund cycle when all subscribers have received their turn or the predetermined period ends.',
      example: 'The 25-month chit fund reaches maturity when all members have won or 25 auctions are completed.'
    },
    {
      term: 'Default',
      category: 'legal',
      definition: 'Failure by a subscriber to pay the required installment, which may result in penalties or legal action.',
      example: 'Subscribers who default for three consecutive months may face legal proceedings.'
    },
    {
      term: 'Security Deposit',
      category: 'legal',
      definition: 'An amount deposited by the foreman with the government as security for proper conduct of the chit fund.',
      example: 'The foreman has deposited ₹10 lakh as security with the state government.'
    },
    {
      term: 'Registration',
      category: 'legal',
      definition: 'The mandatory process of registering chit funds with the state government before commencing operations.',
      example: 'All chit fund companies must obtain registration from the Registrar of Chits.'
    },
    {
      term: 'Commission',
      category: 'financial',
      definition: 'The fee charged by the foreman for organizing and managing the chit fund, typically 5% of the chit amount.',
      example: 'The foreman\'s commission of ₹5,000 is deducted from each month\'s chit amount.'
    }
  ];

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="glossary" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Chit Fund Glossary
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive dictionary of chit fund terminology to help you understand 
            the industry language and concepts.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-slate-50 rounded-2xl p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search terms or definitions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="md:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-slate-600">
            Showing {filteredTerms.length} of {glossaryTerms.length} terms
          </p>
        </div>

        {/* Glossary Terms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTerms.map((item, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-800">{item.term}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  item.category === 'basic' ? 'bg-blue-100 text-blue-700' :
                  item.category === 'legal' ? 'bg-red-100 text-red-700' :
                  item.category === 'financial' ? 'bg-green-100 text-green-700' :
                  'bg-purple-100 text-purple-700'
                }`}>
                  {categories.find(c => c.id === item.category)?.name.replace(' Terms', '')}
                </span>
              </div>
              
              <p className="text-slate-600 mb-4 leading-relaxed">{item.definition}</p>
              
              {item.example && (
                <div className="bg-white border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold text-blue-700">Example:</span> {item.example}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-600 mb-2">No terms found</h3>
            <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Glossary;