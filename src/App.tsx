import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageHero from './components/ImageHero';
import QuickAccess from './components/QuickAccess';
import About from './components/About';
import ChitFundsExplained from './components/ChitFundsExplained';
import ChitFundAct from './components/ChitFundAct';
import ChitAsLoan from './components/ChitAsLoan';
import ChitVsOthers from './components/ChitVsOthers';
import Glossary from './components/Glossary';
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
        <ChitFundAct />
        <ChitAsLoan />
        <ChitVsOthers />
        <Objectives />
        <CouncilMembers />
        <MemberSpotlight />
        <StateOffices />
        <Glossary />
        <MediaGallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;