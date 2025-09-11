import React from 'react';
import { Quote } from 'lucide-react';

const ImageHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="AIACF Team Group Photo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/80"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="mb-8">
          <Quote className="w-16 h-16 mx-auto mb-6 text-blue-300" />
        </div>
        
        <blockquote className="text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed mb-8">
          "Together, we build bridges of financial inclusion, 
          <span className="block font-semibold text-blue-300 mt-2">
            empowering communities through trust and tradition."
          </span>
        </blockquote>
        
        <div className="text-lg md:text-xl text-slate-300 mb-8">
          — AIACF Leadership Team
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#council"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Meet Our Council
          </a>
          <a
            href="#about"
            className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-slate-800 font-semibold rounded-full transition-all duration-200"
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default ImageHero;