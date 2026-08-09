import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import Toast from './Toast';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setToast(null);

    if (!name || !email || !subject || !message) {
      setError('Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name,
          email,
          phone: phone || 'Not provided',
          subject,
          message,
          to_email: 'omarfarukshiam688@gmail.com'
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      triggerConfetti();
      setToast({
        message: "✅ Your message has been sent successfully. I'll get back to you as soon as possible.",
        type: 'success'
      });

      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    } catch (err) {
      setToast({
        message: '❌ Something went wrong. Please try again later.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200/50 dark:border-slate-700/50 text-slate-800 dark:text-slate-100 relative overflow-hidden transition-colors duration-300"
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-brand-primary/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <motion.p 
            className="text-xs font-bold tracking-widest text-brand-primary uppercase"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            Connection
          </motion.p>
          <motion.h2 
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let's Collaborate
          </motion.h2>
          <motion.p 
            className="text-slate-500 dark:text-slate-400 text-sm sm:text-base"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have a project idea, need a frontend developer, or just want to connect? Feel free to reach out—I'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold tracking-tight">Contact Information</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Feel free to reach out via email or connect with me on social platforms. I typically respond within 24 business hours.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center space-x-4 bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200/50 dark:border-slate-700/50 dark-card-glow">
                <div className="p-3 bg-brand-primary/10 text-brand-primary border border-brand-primary/20 rounded-lg">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase">Email Me</p>
                  <a href="mailto:omarfarukshiam688@gmail.com" className="text-sm font-semibold hover:underline text-slate-700 dark:text-slate-200">omarfarukshiam688@gmail.com</a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4 bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200/50 dark:border-slate-700/50 dark-card-glow">
                <div className="p-3 bg-purple-500/10 text-purple-500 border border-purple-500/20 rounded-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase">Location</p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">Cumilla, Bangladesh</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4 bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200/50 dark:border-slate-700/50 dark-card-glow">
                <div className="p-3 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-lg">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase">Call / WhatsApp</p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">+880 1615-158383</p>
                </div>
              </div>
            </div>

            {/* Bottom Slogan */}
            <div className="pt-4 border-t border-slate-200/50 dark:border-slate-700/50 hidden lg:block">
              <p className="text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">Brand Motto</p>
              <p className="text-sm italic font-medium text-slate-500 mt-1 dark:text-slate-300">"Clean code. Faster webs. Better UX."</p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg dark-card-glow relative min-h-[460px] flex items-center">
              
              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-6 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                
                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-xs font-semibold text-center">
                    {error}
                  </div>
                )}

                {/* Name Input */}
                <div className="relative group">
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder=" "
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3.5 text-sm outline-none transition-colors focus:border-brand-primary group-hover:border-slate-400 dark:group-hover:border-slate-600 placeholder-transparent peer text-slate-800 dark:text-white"
                    id="form-name"
                  />
                  <label 
                    htmlFor="form-name"
                    className="absolute left-4 top-3.5 text-sm font-semibold text-slate-500 dark:text-slate-400 pointer-events-none transition-all duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-brand-primary bg-slate-50 dark:bg-slate-900 px-1"
                  >
                    Your Name
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=" "
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3.5 text-sm outline-none transition-colors focus:border-brand-primary group-hover:border-slate-400 dark:group-hover:border-slate-600 placeholder-transparent peer text-slate-800 dark:text-white"
                    id="form-email"
                  />
                  <label 
                    htmlFor="form-email"
                    className="absolute left-4 top-3.5 text-sm font-semibold text-slate-500 dark:text-slate-400 pointer-events-none transition-all duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-brand-primary bg-slate-50 dark:bg-slate-900 px-1"
                  >
                    Email Address
                  </label>
                </div>

                {/* Phone Input */}
                <div className="relative group">
                  <input 
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number (Optional)"
                    autoComplete="tel"
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3.5 text-sm outline-none transition-colors focus:border-brand-primary group-hover:border-slate-400 dark:group-hover:border-slate-600 placeholder-slate-400 dark:placeholder-slate-500 peer text-slate-800 dark:text-white"
                    id="form-phone"
                  />
                  <label 
                    htmlFor="form-phone"
                    className="absolute left-4 top-3.5 text-sm font-semibold text-slate-500 dark:text-slate-400 pointer-events-none transition-all duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-brand-primary bg-slate-50 dark:bg-slate-900 px-1"
                  >
                    Phone Number (Optional)
                  </label>
                </div>

                {/* Subject Input */}
                <div className="relative group">
                  <input 
                    type="text" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder=" "
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3.5 text-sm outline-none transition-colors focus:border-brand-primary group-hover:border-slate-400 dark:group-hover:border-slate-600 placeholder-transparent peer text-slate-800 dark:text-white"
                    id="form-subject"
                  />
                  <label 
                    htmlFor="form-subject"
                    className="absolute left-4 top-3.5 text-sm font-semibold text-slate-500 dark:text-slate-400 pointer-events-none transition-all duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-brand-primary bg-slate-50 dark:bg-slate-900 px-1"
                  >
                    Subject
                  </label>
                </div>

                {/* Message Input */}
                <div className="relative group">
                  <textarea 
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder=" "
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3.5 text-sm outline-none transition-colors focus:border-brand-primary group-hover:border-slate-400 dark:group-hover:border-slate-600 placeholder-transparent peer min-h-[120px] text-slate-800 dark:text-white"
                    id="form-message"
                  />
                  <label 
                    htmlFor="form-message"
                    className="absolute left-4 top-3.5 text-sm font-semibold text-slate-500 dark:text-slate-400 pointer-events-none transition-all duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-brand-primary bg-slate-50 dark:bg-slate-900 px-1"
                  >
                    Your Message
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-gradient-to-r from-brand-primary to-purple-600 hover:from-brand-primary hover:to-purple-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-primary/25 active:scale-[0.99] disabled:opacity-50 transition-all flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

              </motion.form>

            </div>
          </div>

        </div>

      </div>

      <AnimatePresence>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
