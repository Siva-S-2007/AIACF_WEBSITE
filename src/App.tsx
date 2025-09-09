import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickAccess from './components/QuickAccess';
import About from './components/About';
import ChitFundsExplained from './components/ChitFundsExplained';
import Objectives from './components/Objectives';
import MemberSpotlight from './components/MemberSpotlight';
import MediaGallery from './components/MediaGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <QuickAccess />
        <About />
        <ChitFundsExplained />
        <Objectives />
        <MemberSpotlight />
        <MediaGallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;