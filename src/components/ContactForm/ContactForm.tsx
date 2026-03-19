'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setSubmitStatus('error');
        }
      } else {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-background py-24 md:py-32 px-6 md:px-12 lg:px-24" id="contact">
      <div className="mx-auto max-w-6xl flex flex-col lg:flex-row gap-16 lg:gap-24">

        {/* Header Section */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <p className="text-sm tracking-widest uppercase text-accent-dark font-medium mb-6">
            Reservations
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-8 leading-none tracking-tight">
            Secure Your <br /> Invitation.
          </h2>
          <p className="text-base text-foreground/70 leading-relaxed font-sans max-w-md">
            Submit your details to express interest. Our team will contact you to finalize your bespoke experience.
          </p>
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* Name Field */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name *"
                className={`w-full bg-transparent border-b pb-4 text-xl md:text-2xl text-foreground font-light placeholder:text-foreground/30 focus:outline-none transition-colors rounded-none ${errors.name
                    ? 'border-red-500'
                    : 'border-accent focus:border-foreground'
                  }`}
              />
              {errors.name && (
                <p className="absolute -bottom-6 left-0 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                className={`w-full bg-transparent border-b pb-4 text-xl md:text-2xl text-foreground font-light placeholder:text-foreground/30 focus:outline-none transition-colors rounded-none ${errors.email
                    ? 'border-red-500'
                    : 'border-accent focus:border-foreground'
                  }`}
              />
              {errors.email && (
                <p className="absolute -bottom-6 left-0 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Phone Field */}
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone (Optional)"
                className={`w-full bg-transparent border-b pb-4 text-xl md:text-2xl text-foreground font-light placeholder:text-foreground/30 focus:outline-none transition-colors rounded-none ${errors.phone
                    ? 'border-red-500'
                    : 'border-accent focus:border-foreground'
                  }`}
              />
              {errors.phone && (
                <p className="absolute -bottom-6 left-0 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>

            {/* Message Field */}
            <div className="relative pt-4">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Inquiry Details *"
                rows={1}
                className={`w-full bg-transparent border-b pb-4 text-xl md:text-2xl text-foreground font-light placeholder:text-foreground/30 focus:outline-none transition-colors resize-none overflow-hidden rounded-none ${errors.message
                    ? 'border-red-500'
                    : 'border-accent focus:border-foreground'
                  }`}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = 'auto';
                  target.style.height = target.scrollHeight + 'px';
                }}
              />
              {errors.message && (
                <p className="absolute -bottom-6 left-0 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-8 flex items-center justify-between">

              {/* Status Messages inline */}
              <div className="flex-1">
                {submitStatus === 'success' && (
                  <p className="text-sm text-foreground/70 font-sans animate-pulse">Request received. Expect our reply shortly.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-sm text-red-500 font-sans">An error occurred. Please try again.</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center gap-4 text-foreground hover:opacity-70 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <span className="text-sm font-medium uppercase tracking-widest">
                  {isSubmitting ? 'Sending' : 'Submit'}
                </span>
                <div className="w-12 h-12 rounded-full border border-foreground flex items-center justify-center transition-transform duration-300 group-hover:bg-foreground group-hover:text-background">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:rotate-45">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
