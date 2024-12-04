import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { label: 'About Us', href: '/about' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Help Center', href: '/help' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
];

export function FooterLinks() {
  return (
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            to={link.href}
            className="text-[#4A4F54] hover:text-[#7A9E7E] transition-colors"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}