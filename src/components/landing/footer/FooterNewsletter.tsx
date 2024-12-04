import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-2 bg-[#2A2F35] text-[#F7F8F9] placeholder-[#4A4F54] border border-[#2A2F35] rounded-lg focus:outline-none focus:border-[#FF6B35]"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#FF6B35] text-[#F7F8F9] rounded-lg hover:bg-[#FF6B35]/90 transition-colors"
      >
        Subscribe
        <Send className="w-4 h-4" />
      </button>
      <p className="text-xs text-[#4A4F54]">
        By subscribing, you agree to our Privacy Policy and consent to receive updates.
      </p>
    </form>
  );
}