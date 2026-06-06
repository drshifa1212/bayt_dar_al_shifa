import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const contactItems = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 012-3456',
    href: 'tel:+15550123456',
    color: 'bg-lilac-100 text-lilac-700 dark:bg-lilac-900/30 dark:text-lilac-300',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'drshifa@physio.clinic',
    href: 'mailto:drshifa@physio.clinic',
    color: 'bg-aqua-100 text-aqua-700 dark:bg-aqua-900/30 dark:text-aqua-300',
  },
  {
    icon: MapPin,
    label: 'Clinic Address',
    value: '123 Wellness Avenue, Health City, HC 10001',
    href: 'https://maps.google.com',
    color: 'bg-mint-100 text-mint-700 dark:bg-mint-900/30 dark:text-mint-300',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon–Sat: 9 AM – 7 PM',
    href: null,
    color: 'bg-peach-100 text-peach-700 dark:bg-peach-900/30 dark:text-peach-300',
  },
];

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:text-pink-500' },
  { icon: Facebook, label: 'Facebook', href: '#', color: 'hover:text-blue-600' },
  { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-sky-500' },
  { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-700' },
];

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="contact" ref={ref} className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute -bottom-20 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 dark:opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C7F0F7, transparent)' }} />
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-15 dark:opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D8C4F2, transparent)' }} />

      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-inter font-semibold tracking-widest uppercase bg-aqua-100 dark:bg-aqua-900/30 text-aqua-700 dark:text-aqua-300 mb-4">
            Get in Touch
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            We're Here{' '}
            <span className="bg-gradient-to-r from-aqua-500 to-lilac-500 bg-clip-text text-transparent italic">
              For You
            </span>
          </h2>
          <p className="font-inter text-gray-500 dark:text-gray-400 max-w-lg mx-auto text-lg">
            Reach out to Dr. Shifa's clinic — we're always ready to help you start your healing journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-4 mb-8">
              {contactItems.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-inter text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="font-inter font-medium text-gray-800 dark:text-gray-200 hover:text-lilac-600 dark:hover:text-lilac-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-inter font-medium text-gray-800 dark:text-gray-200">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="font-inter text-sm text-gray-500 dark:text-gray-400 mb-4">Follow Dr. Shifa</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className={`w-11 h-11 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${s.color}`}
                  >
                    <s.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 h-[420px]"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <iframe
              title="Dr. Shifa Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095919514!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1677529547100!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
