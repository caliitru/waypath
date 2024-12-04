import React from 'react';
import { LegalLayout } from '../../components/legal/LegalLayout';

export function Security() {
  return (
    <LegalLayout
      title="Security"
      subtitle="How we protect your data and maintain security"
      lastUpdated="March 15, 2024"
    >
      <h2>Our Security Commitment</h2>
      <p>
        At Pathway Credit, protecting your sensitive information is our top priority. We employ
        industry-leading security measures and best practices to ensure your data remains safe
        and confidential.
      </p>

      <h2>Data Protection Measures</h2>
      <h3>Encryption</h3>
      <p>
        We implement strong encryption protocols:
      </p>
      <ul>
        <li>256-bit SSL/TLS encryption for all data transmission</li>
        <li>AES-256 encryption for stored data</li>
        <li>End-to-end encryption for sensitive communications</li>
        <li>Secure key management and rotation</li>
      </ul>

      <h3>Access Controls</h3>
      <p>
        We maintain strict access controls:
      </p>
      <ul>
        <li>Multi-factor authentication (MFA)</li>
        <li>Role-based access control (RBAC)</li>
        <li>Regular access reviews and audits</li>
        <li>Automated session management</li>
      </ul>

      <h2>Infrastructure Security</h2>
      <p>
        Our infrastructure is protected by:
      </p>
      <ul>
        <li>Advanced firewalls and intrusion detection</li>
        <li>24/7 security monitoring</li>
        <li>Regular security patches and updates</li>
        <li>Redundant backup systems</li>
        <li>Disaster recovery procedures</li>
      </ul>

      <h2>Compliance and Certifications</h2>
      <p>
        We maintain compliance with:
      </p>
      <ul>
        <li>PCI DSS for payment processing</li>
        <li>SOC 2 Type II certification</li>
        <li>GDPR and CCPA requirements</li>
        <li>Industry security standards</li>
      </ul>

      <h2>Employee Security</h2>
      <p>
        Our team follows strict security protocols:
      </p>
      <ul>
        <li>Background checks for all employees</li>
        <li>Regular security training</li>
        <li>Confidentiality agreements</li>
        <li>Security awareness programs</li>
      </ul>

      <h2>Incident Response</h2>
      <p>
        Our incident response plan includes:
      </p>
      <ul>
        <li>24/7 incident response team</li>
        <li>Automated threat detection</li>
        <li>Regular incident response drills</li>
        <li>Customer notification procedures</li>
      </ul>

      <h2>Security Best Practices</h2>
      <p>
        We recommend users follow these security practices:
      </p>
      <ul>
        <li>Use strong, unique passwords</li>
        <li>Enable two-factor authentication</li>
        <li>Regularly monitor account activity</li>
        <li>Report suspicious activity immediately</li>
      </ul>

      <h2>Contact Security Team</h2>
      <p>
        For security concerns or to report incidents:
      </p>
      <p>
        Email: security@pathwaycredit.com<br />
        Phone: 1-800-PATHWAY (Security Team)<br />
        Emergency: Available 24/7 for critical security issues
      </p>
    </LegalLayout>
  );
}