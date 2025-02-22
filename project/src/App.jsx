import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import CaseStudies from './components/CaseStudies';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <CaseStudies />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;