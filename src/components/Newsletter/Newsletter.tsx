'use client';

import { useState, FormEvent } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useGSAP(() => {
    // Container animation
    gsap.from('.newsletter-container', {
      scrollTrigger: {
        trigger: '.newsletter-container',
        start: 'top 80%',
      },
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });

    // Content stagger animation
    gsap.from('.newsletter-content > *', {
      scrollTrigger: {
        trigger: '.newsletter-content',
        start: 'top 75%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    });

    // Decorative elements animation
    gsap.from('.newsletter-decoration', {
      scrollTrigger: {
        trigger: '.newsletter-container',
        start: 'top 75%',
      },
      scale: 0,
      rotation: 180,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'elastic.out(1, 0.5)',
    });
  }, []);

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
    <section className="newsletter-container relative py-32 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden" id="newsletter">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 50px,
            rgba(212, 175, 55, 0.1) 50px,
            rgba(212, 175, 55, 0.1) 51px
          )`
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="newsletter-decoration absolute top-10 left-10 w-32 h-32 bg-linear-to-br from-amber-600/20 to-amber-700/20 rounded-full blur-3xl" />
      <div className="newsletter-decoration absolute bottom-10 right-10 w-40 h-40 bg-linear-to-br from-amber-500/20 to-amber-800/20 rounded-full blur-3xl" />
      <div className="newsletter-decoration absolute top-1/2 left-1/4 w-24 h-24 bg-linear-to-br from-amber-600/10 to-amber-700/10 rounded-full blur-2xl" />

      {/* Content */}
      <div className="newsletter-content relative max-w-4xl mx-auto px-6 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-linear-to-br from-amber-600 to-amber-700 rounded-2xl shadow-2xl shadow-amber-600/20">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-5xl md:text-6xl mb-6 text-white">
          Stay <span className="bg-linear-to-r from-amber-400 via-amber-500 to-amber-600 text-transparent bg-clip-text">Updated</span>
        </h2>

        {/* Description */}
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Be the first to know when we open our doors. Subscribe to receive exclusive 
          pre-launch offers, special discounts, and insider updates.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="relative">
            {/* Input Container with Glass Morphism */}
            <div className={`flex flex-col sm:flex-row gap-4 p-2 rounded-2xl bg-white/5 backdrop-blur-sm border transition-all duration-300 ${
              isFocused ? 'border-amber-600 shadow-xl shadow-amber-600/20' : 'border-white/10'
            }`}>
              {/* Email Input */}
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-6 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                />
                
                {/* Input Icon */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative group px-8 py-4 bg-linear-to-r from-amber-600 to-amber-700 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-2xl hover:shadow-amber-600/30 hover:scale-[1.02]"
              >
                {/* Button Shimmer Effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Button Content */}
                <span className="relative flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </span>
              </button>
            </div>
          </div>

          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="mt-6 p-4 rounded-xl backdrop-blur-sm border bg-green-500/10 border-green-500/30 text-green-400 transition-all duration-300">
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">Successfully subscribed! Check your inbox for confirmation.</span>
              </div>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mt-6 p-4 rounded-xl backdrop-blur-sm border bg-red-500/10 border-red-500/30 text-red-400 transition-all duration-300">
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">{errorMessage || 'Something went wrong. Please try again.'}</span>
              </div>
            </div>
          )}
        </form>

        {/* Privacy Note */}
        <p className="mt-8 text-sm text-gray-400">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
