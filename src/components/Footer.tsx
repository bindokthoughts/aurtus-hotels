import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="font-serif text-2xl text-white mb-4">Aurtus Hotels</h3>
            <p className="text-gray-400 leading-relaxed">
              A new standard in luxury hospitality, coming soon to redefine your expectations.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wide">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <p className="text-gray-400">
                <span className="block font-medium text-gray-300">Office Hours</span>
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-gray-400">
                <span className="block font-medium text-gray-300">Email</span>
                reservations@aurtushotels.com
              </p>
              <p className="text-gray-400">
                <span className="block font-medium text-gray-300">Address</span>
                Coming Soon
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#facilities" className="text-gray-400 hover:text-amber-600 transition-colors">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-amber-600 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#newsletter" className="text-gray-400 hover:text-amber-600 transition-colors">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
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
