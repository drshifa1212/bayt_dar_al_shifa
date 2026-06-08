import { Heart, Instagram, Facebook, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'About Dr. Shifa', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-choose' },
  { label: 'Recovery Journey', href: '#recovery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Health Tips', href: '#blog' },
];

const services = [
  'Physiotherapy Consultation',
  'Sports Injury Rehab',
  'Post-Surgery Recovery',
  'Back & Neck Treatment',
  'Posture Correction',
  'Elderly Mobility Care',
];

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const handleNav = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-lilac-400 to-aqua-400 flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="white" />
              </div>
              <div>
                <span className="font-playfair font-bold text-xl text-white">Dr. Shifa</span>
                <p className="text-[10px] text-gray-500 tracking-widest uppercase leading-none">Physiotherapy</p>
              </div>
            </div>
            <p className="font-inter text-sm text-gray-400 leading-relaxed mb-6">
              Healing Movement. Restoring Life. — Expert physiotherapy care for a pain-free, active life.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-lilac-600 transition-all duration-200"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handleNav(l.href)}
                    className="font-inter text-sm text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-1 group"
                  >
                    <span className="w-4 h-0.5 bg-lilac-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair font-semibold text-white mb-5">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="font-inter text-sm text-gray-400">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair font-semibold text-white mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-lilac-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+15550123456" className="font-inter text-sm text-gray-400 hover:text-white transition-colors">
                  +1 (555) 012-3456
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-aqua-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:drshifa@physio.clinic" className="font-inter text-sm text-gray-400 hover:text-white transition-colors">
                  drshifa@physio.clinic
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-mint-400 flex-shrink-0 mt-0.5" />
                <span className="font-inter text-sm text-gray-400">
                  123 Wellness Avenue,<br />Health City, HC 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="font-inter text-xs text-gray-500">
            © {new Date().getFullYear()} Dr. Shifa Physiotherapy Clinic. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((l) => (
              <a key={l} href="#" className="font-inter text-xs text-gray-500 hover:text-gray-300 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
