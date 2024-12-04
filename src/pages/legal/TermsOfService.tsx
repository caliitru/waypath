import React from 'react';
import { LegalLayout } from '../../components/legal/LegalLayout';

export function TermsOfService() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="The rules and guidelines for using our services"
      lastUpdated="March 15, 2024"
    >
      <h2>Agreement to Terms</h2>
      <p>
        By accessing or using Pathway Credit's services, you agree to be bound by these Terms of Service
        and all applicable laws and regulations. If you disagree with any part of these terms, you may
        not use our services.
      </p>

      <h2>Service Description</h2>
      <p>
        Pathway Credit provides credit repair services, including:
      </p>
      <ul>
        <li>Credit report analysis and monitoring</li>
        <li>Dispute filing and tracking</li>
        <li>Credit education and resources</li>
        <li>Personal credit coaching</li>
      </ul>

      <h2>User Responsibilities</h2>
      <p>
        As a user of our services, you agree to:
      </p>
      <ul>
        <li>Provide accurate and complete information</li>
        <li>Maintain the security of your account credentials</li>
        <li>Use the services only for lawful purposes</li>
        <li>Not misrepresent your identity or information</li>
        <li>Comply with all applicable laws and regulations</li>
      </ul>

      <h2>Subscription and Billing</h2>
      <p>
        Our service terms include:
      </p>
      <ul>
        <li>Monthly subscription fees based on selected plan</li>
        <li>Automatic renewal unless cancelled</li>
        <li>No long-term contracts required</li>
        <li>Cancellation available at any time</li>
      </ul>

      <h2>Limitation of Liability</h2>
      <p>
        Pathway Credit is not liable for:
      </p>
      <ul>
        <li>Actions of credit bureaus or creditors</li>
        <li>Accuracy of third-party information</li>
        <li>Service interruptions or technical issues</li>
        <li>Indirect or consequential damages</li>
      </ul>

      <h2>Intellectual Property</h2>
      <p>
        All content, features, and functionality of our services are owned by Pathway Credit and
        protected by intellectual property laws. Users may not copy, modify, or distribute our
        content without permission.
      </p>

      <h2>Termination</h2>
      <p>
        We reserve the right to:
      </p>
      <ul>
        <li>Terminate or suspend accounts</li>
        <li>Modify or discontinue services</li>
        <li>Change terms with notice</li>
        <li>Refuse service to anyone</li>
      </ul>

      <h2>Governing Law</h2>
      <p>
        These terms are governed by and construed in accordance with the laws of the United States.
        Any disputes shall be resolved in the appropriate courts within our jurisdiction.
      </p>

      <h2>Contact Information</h2>
      <p>
        For questions about these Terms of Service, please contact us at:
      </p>
      <p>
        Email: legal@pathwaycredit.com<br />
        Phone: 1-800-PATHWAY<br />
        Address: 123 Credit Street, Financial District
      </p>
    </LegalLayout>
  );
}