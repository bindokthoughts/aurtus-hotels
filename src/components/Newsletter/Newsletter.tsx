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
    <section className="bg-foreground py-32 px-6 md:px-12 lg:px-24" id="newsletter">
      <div className="mx-auto max-w-4xl text-center flex flex-col items-center">

        <p className="text-sm tracking-widest uppercase text-background/60 font-medium mb-6">
          The Waitlist
        </p>

        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-background mb-8 leading-none tracking-tighter">
          Priority Access.
        </h2>

        <p className="text-lg text-background/70 mb-16 max-w-xl font-sans font-light">
          Register your interest to receive exclusive pre-launch updates and inaugural offers directly to your inbox.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto relative">
          <div className="flex flex-col sm:flex-row items-end gap-6 border-b border-background/20 focus-within:border-background transition-colors pb-2">

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full bg-transparent text-xl md:text-2xl text-background placeholder:text-background/30 focus:outline-none transition-colors border-none py-2 font-display"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="pb-2 text-background hover:opacity-70 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed uppercase tracking-widest text-sm font-medium whitespace-nowrap"
            >
              {isSubmitting ? 'Joining...' : 'Join List'}
            </button>
          </div>

          {/* Messages positioned absolute to avoid layout shift */}
          <div className="absolute top-full mt-4 left-0 w-full text-left">
            {submitStatus === 'success' && (
              <p className="text-sm text-background/70 font-sans animate-pulse">
                Successfully subscribed. Awaiting next steps.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-sm text-red-400 font-sans">
                {errorMessage || 'Something went wrong. Please try again.'}
              </p>
            )}
          </div>
        </form>

      </div>
    </section>
  );
}
