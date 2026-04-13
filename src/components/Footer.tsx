import { Phone, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0F1C2E] text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-3 mb-5">
              <svg width="36" height="36" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="footerDropGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#4FC3F7" />
                    <stop offset="100%" stopColor="#1DA1F2" />
                  </linearGradient>
                </defs>
                <path d="M50 10 C50 10, 20 50, 20 65 C20 82, 33 95, 50 95 C67 95, 80 82, 80 65 C80 50, 50 10, 50 10Z" fill="url(#footerDropGrad)" />
                <ellipse cx="38" cy="55" rx="6" ry="10" fill="white" opacity="0.3" transform="rotate(-15 38 55)" />
              </svg>
              <div>
                <span className="text-xl font-extrabold text-white font-[family-name:var(--font-display)]">Mayan Plumbing</span>
                <span className="block text-xs font-semibold text-[#4FC3F7] tracking-wider uppercase">Inc.</span>
              </div>
            </a>
            <p className="text-sm leading-relaxed mb-5 text-slate-500">
              Fast, honest, professional plumbing service in North York and the Greater Toronto Area. Fair pricing, clean work, and dependable communication on every call.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm tracking-wider uppercase font-[family-name:var(--font-display)]">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#' },
                { name: 'Services', href: '#services' },
                { name: 'About Us', href: '#about' },
                { name: 'Reviews', href: '#testimonials' },
                { name: 'Contact', href: '#contact' },
              ].map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-[#4FC3F7] transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm tracking-wider uppercase font-[family-name:var(--font-display)]">Services</h4>
            <ul className="space-y-3">
              {[
                'Emergency Plumbing',
                'Drain Services',
                'Leak Repairs',
                'Toilet Repairs',
                'Kitchen & Bath Plumbing',
              ].map(service => (
                <li key={service}>
                  <a href="#services" className="text-sm hover:text-[#4FC3F7] transition-colors">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm tracking-wider uppercase font-[family-name:var(--font-display)]">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#4FC3F7] mt-0.5 shrink-0" />
                <a href="tel:+16478038974" className="text-sm hover:text-[#4FC3F7] transition-colors font-medium">
                  647-803-8974
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#4FC3F7] mt-0.5 shrink-0" />
                <span className="text-sm">
                  150 Neptune Dr<br />
                  North York, ON M6A 1X4
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-[#4FC3F7] mt-0.5 shrink-0" />
                <div className="text-sm">
                  <p>Mon–Thu: 8 AM – 6 PM</p>
                  <p>Fri: 8 AM – 2 PM</p>
                  <p>Sat–Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Mayan Plumbing Inc. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Proudly serving North York & the Greater Toronto Area
          </p>
        </div>
      </div>
    </footer>
  );
}
