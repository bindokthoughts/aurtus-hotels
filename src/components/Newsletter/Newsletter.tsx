'use client';

import { useState, FormEvent } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors?.email) {
          setErrorMessage(data.errors.email);
        } else {
          setErrorMessage('Failed to subscribe. Please try again.');
        }
        setSubmitStatus('error');
      } else {
        setSubmitStatus('success');
        setEmail('');
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubmitStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-900 py-20 px-4 md:py-24" id="newsletter">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
          Stay Informed
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Be the first to receive updates about our grand opening and exclusive offers.
        </p>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-sm border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-amber-600 text-white rounded-sm hover:bg-amber-700 transition-colors duration-300 disabled:bg-amber-800 disabled:cursor-not-allowed font-medium whitespace-nowrap"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mt-4 p-3 bg-green-900/50 border border-green-700 rounded-sm">
              <p className="text-green-200 text-sm">
                Successfully subscribed! Check your inbox for confirmation.
              </p>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mt-4 p-3 bg-red-900/50 border border-red-700 rounded-sm">
              <p className="text-red-200 text-sm">
                {errorMessage || 'Something went wrong. Please try again.'}
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
