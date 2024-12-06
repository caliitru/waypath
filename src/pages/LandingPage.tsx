import React, { useEffect } from 'react';
import { DashboardPreview } from '@/components/shared/Dashboard';

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
     <DashboardPreview />
     <Features />
     <FeaturesGrid />
     <HowItWorks />
     <SocialProof />
     <Pricing />
     <Footer />
   </div>
 );
}
