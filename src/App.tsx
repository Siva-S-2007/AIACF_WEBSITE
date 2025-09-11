import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageHero from './components/ImageHero';
import QuickAccess from './components/QuickAccess';
import About from './components/About';
import ChitFundsExplained from './components/ChitFundsExplained';
import Objectives from './components/Objectives';
import CouncilMembers from './components/CouncilMembers';
import MemberSpotlight from './components/MemberSpotlight';
import StateOffices from './components/StateOffices';
import MediaGallery from './components/MediaGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ImageHero />
        <QuickAccess />
        <About />
        <ChitFundsExplained />
        <Objectives />
        <CouncilMembers />
        <MemberSpotlight />
        <StateOffices />
        <MediaGallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;