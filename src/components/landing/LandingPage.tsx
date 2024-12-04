import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { PowerfulFeatures } from './PowerfulFeatures';
import { Features } from './Features';
import { HowItWorks } from './HowItWorks';
import { SocialProof } from './testimonials/SocialProof';
import { Pricing } from './pricing/Pricing';
import { Footer } from './footer/Footer';

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PowerfulFeatures />
      <Features />
      <HowItWorks />
      <SocialProof />
      <Pricing />
      <Footer />
    </div>
  );
}