import React from 'react';
import { Info, BookOpen, MessageCircle, ArrowRight } from 'lucide-react';

const QuickAccess = () => {
  const cards = [
    {
      icon: Info,
      title: 'About Us',
      description: 'Learn about our 50+ year journey in promoting chit fund industry growth and regulation.',
      href: '#about',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700'
    },
    {
      icon: BookOpen,
      title: 'Chit 101',
      description: 'Understand chit funds, their benefits, and how they serve as a financial inclusion tool.',
      href: '#chit-insights',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700'
    },
    {
      icon: MessageCircle,
      title: 'Get in Touch',
      description: 'Connect with us for membership, queries, or collaboration opportunities.',
      href: '#contact',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Quick Access
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Navigate to key sections and discover what makes AIACF the leading voice in India's chit fund industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className={`absolute inset-0 ${card.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative p-8">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${card.color} mb-6`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900">
                    {card.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed group-hover:text-slate-700">
                    {card.description}
                  </p>
                  
                  <a
                    href={card.href}
                    className={`inline-flex items-center font-semibold ${card.textColor} group-hover:gap-3 transition-all duration-200`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;