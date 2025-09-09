import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Building2 } from 'lucide-react';

const Hero = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const targetStat = 35000;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStat(prev => {
        if (prev < targetStat) {
          return Math.min(prev + 500, targetStat);
        }
        return targetStat;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-200/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 leading-tight">
              Empowering
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Financial Inclusion
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              The All India Association For Chit Funds - Fostering trust, transparency, and growth in India's traditional savings ecosystem since 1971.
            </p>
          </div>

          {/* Dynamic Stat */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto shadow-xl border border-white/20">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              <span className="text-slate-600 font-medium">Annual Turnover</span>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-slate-800">
              ₹{currentStat.toLocaleString()}
              <span className="text-2xl text-blue-600"> crore+</span>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/80 transition-all duration-300">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-800">500+</div>
              <div className="text-slate-600">Member Companies</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/80 transition-all duration-300">
              <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-800">50+</div>
              <div className="text-slate-600">Years of Service</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/80 transition-all duration-300">
              <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-800">28</div>
              <div className="text-slate-600">States Covered</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <a
              href="#about"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Discover Our Mission
              <TrendingUp className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;