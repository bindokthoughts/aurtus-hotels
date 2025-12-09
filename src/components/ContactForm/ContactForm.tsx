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
    // Clear error for this field when user starts typing
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
        // Reset success message after 5 seconds
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
    <section className="bg-white py-20 px-4 md:py-32" id="contact">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
            Get in Touch
          </h2>
          <div className="w-24 h-px bg-amber-600 mx-auto mb-6" />
          <p className="text-gray-600 text-lg">
            Interested in learning more? We would be delighted to hear from you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-900 mb-2"
            >
              Name <span className="text-amber-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all`}
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900 mb-2"
            >
              Email <span className="text-amber-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-900 mb-2"
            >
              Phone <span className="text-gray-400 text-xs">(Optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              } rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all`}
              placeholder="+1 (555) 123-4567"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-900 mb-2"
            >
              Message <span className="text-amber-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`w-full px-4 py-3 border ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              } rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all resize-none`}
              placeholder="Tell us about your inquiry..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-900 text-white py-4 px-8 rounded-sm hover:bg-gray-800 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium tracking-wide"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-sm">
              <p className="text-green-800 text-center">
                Thank you for your message! We will be in touch shortly.
              </p>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-sm">
              <p className="text-red-800 text-center">
                Something went wrong. Please try again later.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
