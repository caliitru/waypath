import React from 'react';
import { LegalLayout } from '../../components/legal/LegalLayout';

export function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your information"
      lastUpdated="March 15, 2024"
    >
      <h2>Introduction</h2>
      <p>
        At Pathway Credit, we take your privacy seriously. This Privacy Policy explains how we collect,
        use, disclose, and safeguard your information when you use our credit repair services and website.
      </p>

      <h2>Information We Collect</h2>
      <h3>Personal Information</h3>
      <p>
        We collect information that you provide directly to us, including:
      </p>
      <ul>
        <li>Name, address, and contact information</li>
        <li>Social Security number and date of birth</li>
        <li>Financial information and credit reports</li>
        <li>Account credentials and authentication information</li>
      </ul>

      <h3>Automatically Collected Information</h3>
      <p>
        When you use our website, we automatically collect:
      </p>
      <ul>
        <li>Device and browser information</li>
        <li>IP address and location data</li>
        <li>Usage patterns and preferences</li>
        <li>Cookies and similar tracking technologies</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>
        We use the collected information to:
      </p>
      <ul>
        <li>Provide and improve our credit repair services</li>
        <li>Process disputes and communicate with credit bureaus</li>
        <li>Analyze and enhance our website performance</li>
        <li>Send important updates and marketing communications</li>
        <li>Comply with legal obligations and prevent fraud</li>
      </ul>

      <h2>Information Sharing</h2>
      <p>
        We may share your information with:
      </p>
      <ul>
        <li>Credit bureaus and financial institutions</li>
        <li>Service providers and business partners</li>
        <li>Legal authorities when required by law</li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect your personal information,
        including encryption, access controls, and regular security assessments.
      </p>

      <h2>Your Rights</h2>
      <p>
        You have the right to:
      </p>
      <ul>
        <li>Access your personal information</li>
        <li>Correct inaccurate data</li>
        <li>Request deletion of your information</li>
        <li>Opt-out of marketing communications</li>
        <li>File a complaint with regulatory authorities</li>
      </ul>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or our privacy practices, please contact us at:
      </p>
      <p>
        Email: privacy@pathwaycredit.com<br />
        Phone: 1-800-PATHWAY<br />
        Address: 123 Credit Street, Financial District
      </p>
    </LegalLayout>
  );
}