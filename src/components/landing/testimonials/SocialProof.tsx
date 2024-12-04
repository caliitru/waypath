import React from 'react';
import { TestimonialCarousel } from './TestimonialCarousel';
import { TrustBadges } from './TrustBadges';
import { PartnerLogos } from './PartnerLogos';

export function SocialProof() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2F3337] font-heading">
            Trusted by Thousands
          </h2>
          <p className="mt-4 text-xl text-[#4A4F54]">
            Join our community of successful credit rebuilders
          </p>
        </div>

        <div className="grid gap-16">
          <PartnerLogos />
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
}