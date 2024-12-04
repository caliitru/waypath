import React from 'react';
import { FooterLinks } from './FooterLinks';
import { FooterSocial } from './FooterSocial';
import { FooterNewsletter } from './FooterNewsletter';

export function Footer() {
  return (
    <footer className="bg-[#1A1D21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-[#F7F8F9] text-lg font-semibold mb-4">Pathway Credit</h3>
            <p className="text-[#4A4F54] mb-6">
              Empowering individuals to take control of their financial future through
              intelligent credit repair solutions and education.
            </p>
            <FooterSocial />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#F7F8F9] text-lg font-semibold mb-4">Quick Links</h3>
            <FooterLinks />
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#F7F8F9] text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-[#4A4F54]">
              <p>1-800-PATHWAY</p>
              <p>support@pathwaycredit.com</p>
              <p>123 Credit Street<br />Financial District</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[#F7F8F9] text-lg font-semibold mb-4">Stay Updated</h3>
            <FooterNewsletter />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2A2F35] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#4A4F54] text-sm">
              © {new Date().getFullYear()} Pathway Credit. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-[#4A4F54] hover:text-[#7A9E7E] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-[#4A4F54] hover:text-[#7A9E7E] text-sm transition-colors">
                Terms of Service
              </a>
              <a href="/security" className="text-[#4A4F54] hover:text-[#7A9E7E] text-sm transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}