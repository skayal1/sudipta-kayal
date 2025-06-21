import React from 'react';
import { CheckCircle } from 'lucide-react';

const MessageSent: React.FC = () => (
  <section className="min-h-screen flex items-center justify-center bg-slate-900/80">
    <div className="bg-slate-800/70 border border-slate-700/50 rounded-2xl p-10 flex flex-col items-center shadow-lg">
      <CheckCircle size={64} className="text-green-400 mb-6" />
      <h1 className="text-3xl font-bold text-white mb-4 text-center">
        Your message sent successfully!
      </h1>
      <p className="text-gray-300 text-center mb-6">
        Thank you for reaching out. I will get back to you soon.
      </p>
      <a
        href="/"
        className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform"
      >
        Back to Home
      </a>
    </div>
  </section>
);

export default MessageSent;