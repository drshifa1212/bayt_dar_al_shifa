import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

type FormData = {
  name: string;
  phone: string;
  email: string;
  concern: string;
  date: string;
  message: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

const concerns = [
  'Back & Neck Pain',
  'Sports Injury',
  'Post-Surgery Recovery',
  'Posture Correction',
  'Joint Pain',
  'Elderly Mobility',
  'Other',
];

function validate(data: FormData): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = 'Name is required';
  if (!data.phone.trim() || !/^\+?[\d\s\-()]{7,}$/.test(data.phone)) errors.phone = 'Valid phone required';
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Valid email required';
  if (!data.concern) errors.concern = 'Please select a concern';
  if (!data.date) errors.date = 'Date is required';
  return errors;
}

export default function Booking() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    concern: '',
    date: '',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus('submitting');
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('success');
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" ref={ref} className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-3xl opacity-15 dark:opacity-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #D8C4F2, #C7F0F7)' }} />

      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-inter font-semibold tracking-widest uppercase bg-lilac-100 dark:bg-lilac-900/30 text-lilac-700 dark:text-lilac-300 mb-4">
              Appointments
            </span>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Book Your{' '}
              <span className="bg-gradient-to-r from-lilac-500 to-aqua-400 bg-clip-text text-transparent italic">
                Session
              </span>
            </h2>
            <p className="font-inter text-gray-500 dark:text-gray-400 text-lg">
              Take the first step toward a pain-free, healthier life today.
            </p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 p-8 sm:p-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #D8C4F2, transparent)' }} />

            {status === 'success' ? (
              <motion.div
                className="flex flex-col items-center justify-center py-12 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <motion.div
                  className="w-20 h-20 rounded-full bg-mint-100 dark:bg-mint-900/30 flex items-center justify-center mb-6"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="w-10 h-10 text-mint-600 dark:text-mint-400" />
                </motion.div>
                <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white mb-3">Appointment Requested!</h3>
                <p className="font-inter text-gray-500 dark:text-gray-400 max-w-sm">
                  Thank you, <strong>{form.name}</strong>! We'll confirm your appointment within 24 hours via email or phone.
                </p>
                <button
                  onClick={() => { setStatus('idle'); setForm({ name: '', phone: '', email: '', concern: '', date: '', message: '' }); }}
                  className="mt-8 btn-secondary dark:text-gray-200"
                >
                  Book Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Full Name" error={errors.name}>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`form-input ${errors.name ? 'border-red-400 focus:ring-red-300' : ''}`}
                    />
                  </Field>
                  <Field label="Phone Number" error={errors.phone}>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className={`form-input ${errors.phone ? 'border-red-400 focus:ring-red-300' : ''}`}
                    />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Email Address" error={errors.email}>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={`form-input ${errors.email ? 'border-red-400 focus:ring-red-300' : ''}`}
                    />
                  </Field>
                  <Field label="Preferred Date" error={errors.date}>
                    <input
                      type="date"
                      min={today}
                      value={form.date}
                      onChange={(e) => handleChange('date', e.target.value)}
                      className={`form-input ${errors.date ? 'border-red-400 focus:ring-red-300' : ''}`}
                    />
                  </Field>
                </div>

                <Field label="Primary Concern" error={errors.concern}>
                  <select
                    value={form.concern}
                    onChange={(e) => handleChange('concern', e.target.value)}
                    className={`form-input ${errors.concern ? 'border-red-400 focus:ring-red-300' : ''}`}
                  >
                    <option value="">Select your concern</option>
                    {concerns.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </Field>

                <Field label="Additional Details (optional)">
                  <textarea
                    rows={3}
                    placeholder="Tell us more about your condition or any specific concerns..."
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className="form-input resize-none"
                  />
                </Field>

                <motion.button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 text-base"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Request Appointment
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block font-inter text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
        {label}
      </label>
      {children}
      {error && (
        <motion.p
          className="flex items-center gap-1 mt-1.5 text-xs text-red-500 font-inter"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AlertCircle className="w-3.5 h-3.5" />
          {error}
        </motion.p>
      )}
    </div>
  );
}
