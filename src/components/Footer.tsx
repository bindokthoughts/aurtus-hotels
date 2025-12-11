import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="font-serif text-2xl text-white mb-4">Aurtus Hotels</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              A new standard in luxury hospitality. Redefining elegance, comfort, and personalized service.
            </p>
            <p className="text-sm text-amber-600">Opening Soon</p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div>
                <span className="block font-medium text-gray-300">Office Hours</span>
                <span className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</span>
              </div>
              <div>
                <span className="block font-medium text-gray-300">Email</span>
                <a href="mailto:reservations@aurtushotels.com" className="text-amber-600 hover:text-amber-500">
                  reservations@aurtushotels.com
                </a>
              </div>
              <div>
                <span className="block font-medium text-gray-300">Address</span>
                <span className="text-gray-400">Coming Soon</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#facilities" className="text-gray-400 hover:text-amber-600">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-amber-600">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-600">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <SocialLinks />
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Aurtus Hotels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
