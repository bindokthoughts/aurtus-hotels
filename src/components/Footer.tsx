'use client';

import SocialLinks from './SocialLinks';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  useGSAP(() => {
    // Footer content animation
    gsap.from('.footer-content > *', {
      scrollTrigger: {
        trigger: '.footer-content',
        start: 'top 85%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    });
  }, []);

  return (
    <footer className="relative bg-gray-950 text-gray-300 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-600/50 to-transparent" />

      {/* Content */}
      <div className="footer-content relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-linear-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center shadow-lg shadow-amber-600/20">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-serif text-3xl text-white">Aurtus Hotels</h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg mb-6 max-w-md">
              A new standard in luxury hospitality. Redefining elegance, comfort, and personalized service.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse" />
              <span>Opening Soon</span>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg tracking-wide flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </h4>
            <div className="space-y-4 text-sm">
              <div>
                <span className="block font-medium text-gray-300 mb-1">Office Hours</span>
                <span className="text-gray-400">Monday - Friday</span>
                <br />
                <span className="text-gray-400">9:00 AM - 6:00 PM</span>
              </div>
              <div>
                <span className="block font-medium text-gray-300 mb-1">Email</span>
                <a href="mailto:reservations@aurtushotels.com" className="text-amber-600 hover:text-amber-500 transition-colors">
                  reservations@aurtushotels.com
                </a>
              </div>
              <div>
                <span className="block font-medium text-gray-300 mb-1">Address</span>
                <span className="text-gray-400">Coming Soon</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg tracking-wide flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#facilities" className="group flex items-center gap-2 text-gray-400 hover:text-amber-600 transition-all">
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Facilities
                </a>
              </li>
              <li>
                <a href="#contact" className="group flex items-center gap-2 text-gray-400 hover:text-amber-600 transition-all">
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Contact
                </a>
              </li>
              <li>
                <a href="#newsletter" className="group flex items-center gap-2 text-gray-400 hover:text-amber-600 transition-all">
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-2 text-gray-400 hover:text-amber-600 transition-all">
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800/50 pt-12 mb-12">
          <SocialLinks />
        </div>

        {/* Copyright */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Aurtus Hotels.</span>
            <span className="text-gray-600">|</span>
            <span className="text-sm text-gray-500">All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
