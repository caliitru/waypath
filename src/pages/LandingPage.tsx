import React, { useEffect } from 'react';
import { 
  ScoreChart,
  ScoreCircle,
  StatsCard 
} from '@/components/shared/Dashboard';
import { DashboardDemo } from '../components/landing/DashboardDemo';

export function LandingPage() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <DashboardDemo />
      <Features />
      <FeaturesGrid />
      <HowItWorks />
      <SocialProof />
      <Pricing />
      <Footer />
    </div>
  );
}
