import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-accent">
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 lg:py-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">

          {/* Brand Section */}
          <div className="md:w-1/3">
            <h3 className="font-display text-3xl font-light mb-6">Aurtus <br /> Hotels</h3>
            <p className="text-sm text-foreground/60 leading-relaxed font-sans max-w-xs">
              A paradigm shift in luxury hospitality. Redefining elegance through purposeful design and instinctual service.
            </p>
          </div>

          <div className="md:w-2/3 flex flex-col sm:flex-row justify-between gap-12 sm:gap-6 w-full">
            {/* Contact Information */}
            <div className="flex flex-col gap-6 w-full sm:w-1/2">
              <h4 className="font-mono text-xs uppercase tracking-widest text-accent-dark">Contact</h4>
              <div className="space-y-4 text-sm font-sans">
                <div className="flex flex-col gap-1 border-b border-accent pb-2">
                  <span className="text-foreground/50">Office Hours</span>
                  <span className="text-foreground">Mon - Fri / 09:00 - 18:00</span>
                </div>
                <div className="flex flex-col gap-1 border-b border-accent pb-2">
                  <span className="text-foreground/50">Direct Line</span>
                  <a href="mailto:reservations@aurtushotels.com" className="text-foreground hover:opacity-50 transition-opacity">
                    reservations@aurtushotels.com
                  </a>
                </div>
                <div className="flex flex-col gap-1 border-b border-accent pb-2">
                  <span className="text-foreground/50">Location</span>
                  <span className="text-foreground">Unveiling Soon</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-6 w-full sm:w-1/3">
              <h4 className="font-mono text-xs uppercase tracking-widest text-accent-dark">Index</h4>
              <ul className="space-y-3 text-sm font-sans flex flex-col">
                <li>
                  <a href="#facilities" className="text-foreground hover:opacity-50 transition-opacity flex items-center gap-2">
                    <span className="w-4 h-px bg-foreground"></span> Experience
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-foreground hover:opacity-50 transition-opacity flex items-center gap-2">
                    <span className="w-4 h-px bg-foreground"></span> Reach Out
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground hover:opacity-50 transition-opacity flex items-center gap-2">
                    <span className="w-4 h-px bg-foreground"></span> Legal
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar Container */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-accent pt-8 gap-6">
          <div className="text-xs text-foreground/50 font-sans">
            <p>&copy; {new Date().getFullYear()} Aurtus Hotels. All rights reserved.</p>
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
