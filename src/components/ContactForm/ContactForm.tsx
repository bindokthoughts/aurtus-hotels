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
  const [focused, setFocused] = useState<Record<string, boolean>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFocus = (name: string) => {
    setFocused((prev) => ({ ...prev, [name]: true }));
  };

  const handleBlur = (name: string) => {
    setFocused((prev) => ({ ...prev, [name]: false }));
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
    <section className="relative bg-white py-24 px-4 md:py-32 overflow-hidden" id="contact">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />

      <div className="mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 text-sm font-medium tracking-wider uppercase rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We're here to make your stay unforgettable. Reach out to us for inquiries, reservations, or special requests.
          </p>
          <div className="mt-6 w-24 h-1 bg-linear-to-r from-transparent via-amber-600 to-transparent mx-auto" />
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field with Floating Label */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={() => handleBlur('name')}
                className={`peer w-full px-6 py-4 border-2 rounded-xl bg-gray-50 focus:bg-white transition-all duration-300 outline-none ${
                  errors.name 
                    ? 'border-red-500 focus:border-red-600' 
                    : 'border-gray-200 focus:border-amber-500'
                }`}
                placeholder=" "
              />
              <label
                htmlFor="name"
                className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                  formData.name || focused.name
                    ? '-top-3 text-sm bg-white px-2'
                    : 'top-4 text-base'
                } ${
                  errors.name
                    ? 'text-red-600'
                    : focused.name
                    ? 'text-amber-600'
                    : 'text-gray-500'
                }`}
              >
                Your Name <span className="text-amber-600">*</span>
              </label>
              {errors.name && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <span>⚠</span> {errors.name}
                </p>
              )}
            </div>

            {/* Email Field with Floating Label */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
                className={`peer w-full px-6 py-4 border-2 rounded-xl bg-gray-50 focus:bg-white transition-all duration-300 outline-none ${
                  errors.email 
                    ? 'border-red-500 focus:border-red-600' 
                    : 'border-gray-200 focus:border-amber-500'
                }`}
                placeholder=" "
              />
              <label
                htmlFor="email"
                className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                  formData.email || focused.email
                    ? '-top-3 text-sm bg-white px-2'
                    : 'top-4 text-base'
                } ${
                  errors.email
                    ? 'text-red-600'
                    : focused.email
                    ? 'text-amber-600'
                    : 'text-gray-500'
                }`}
              >
                Email Address <span className="text-amber-600">*</span>
              </label>
              {errors.email && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <span>⚠</span> {errors.email}
                </p>
              )}
            </div>

            {/* Phone Field with Floating Label */}
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => handleFocus('phone')}
                onBlur={() => handleBlur('phone')}
                className={`peer w-full px-6 py-4 border-2 rounded-xl bg-gray-50 focus:bg-white transition-all duration-300 outline-none ${
                  errors.phone 
                    ? 'border-red-500 focus:border-red-600' 
                    : 'border-gray-200 focus:border-amber-500'
                }`}
                placeholder=" "
              />
              <label
                htmlFor="phone"
                className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                  formData.phone || focused.phone
                    ? '-top-3 text-sm bg-white px-2'
                    : 'top-4 text-base'
                } ${
                  errors.phone
                    ? 'text-red-600'
                    : focused.phone
                    ? 'text-amber-600'
                    : 'text-gray-500'
                }`}
              >
                Phone Number <span className="text-gray-400 text-xs">(Optional)</span>
              </label>
              {errors.phone && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <span>⚠</span> {errors.phone}
                </p>
              )}
            </div>

            {/* Message Field with Floating Label */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={() => handleBlur('message')}
                rows={6}
                className={`peer w-full px-6 py-4 border-2 rounded-xl bg-gray-50 focus:bg-white transition-all duration-300 outline-none resize-none ${
                  errors.message 
                    ? 'border-red-500 focus:border-red-600' 
                    : 'border-gray-200 focus:border-amber-500'
                }`}
                placeholder=" "
              />
              <label
                htmlFor="message"
                className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                  formData.message || focused.message
                    ? '-top-3 text-sm bg-white px-2'
                    : 'top-4 text-base'
                } ${
                  errors.message
                    ? 'text-red-600'
                    : focused.message
                    ? 'text-amber-600'
                    : 'text-gray-500'
                }`}
              >
                Your Message <span className="text-amber-600">*</span>
              </label>
              {errors.message && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <span>⚠</span> {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full bg-linear-to-r from-amber-600 to-amber-700 text-white py-5 px-8 rounded-xl font-medium tracking-wider uppercase overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-600/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-amber-700 to-amber-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-5 bg-green-50 border-2 border-green-200 rounded-xl flex items-start gap-3 animate-[fadeIn_0.3s_ease-out]">
                <span className="text-2xl">✓</span>
                <div>
                  <p className="text-green-800 font-medium">Message sent successfully!</p>
                  <p className="text-green-700 text-sm mt-1">We'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-5 bg-red-50 border-2 border-red-200 rounded-xl flex items-start gap-3 animate-[fadeIn_0.3s_ease-out]">
                <span className="text-2xl">✕</span>
                <div>
                  <p className="text-red-800 font-medium">Something went wrong</p>
                  <p className="text-red-700 text-sm mt-1">Please try again or contact us directly.</p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
