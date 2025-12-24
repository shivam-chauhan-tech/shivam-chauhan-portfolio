import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ANIMATION_VARIANTS, SECTION_IDS } from '@/config/constants';
import { sendEmail } from '@/services/emailService';
import profileData from '@/data/profile.json';
import type { Profile, ContactFormData } from '@/types';

const profile = profileData as Profile;

/**
 * Contact section component
 * Contact form with EmailJS integration
 */
export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: 'idle', message: '' });

    try {
      const result = await sendEmail(formData);
      
      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send email. Please try again or email me directly.',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus({ type: 'idle', message: '' }), 8000);
    }
  };

  return (
    <section id={SECTION_IDS.CONTACT} className="section-padding scroll-mt-[50px]">
      {/* Section Header */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={ANIMATION_VARIANTS.fadeIn}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="section-title">Get In Touch</h2>
      </motion.div>

      <div className="max-w-2xl">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.slideUp}
        >
          <div className="card">
            {/* Email CTA */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
                <Mail size={20} />
                <a href={`mailto:${profile.email}`} className="font-medium">
                  {profile.email}
                </a>
              </div>
              <p className="text-dark-muted text-base">
                Feel free to reach out for collaborations or just a friendly hello
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:border-primary focus:outline-none transition-colors text-dark-text"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:border-primary focus:outline-none transition-colors text-dark-text"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:border-primary focus:outline-none transition-colors text-dark-text"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:border-primary focus:outline-none transition-colors resize-none text-dark-text"
                  placeholder="Your message..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-600 disabled:opacity-50 text-white py-3 px-6 rounded-lg font-medium transition-all duration-500 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {submitStatus.type === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500 text-green-400 rounded-lg text-center">
                  {submitStatus.message}
                </div>
              )}
              {submitStatus.type === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500 text-red-400 rounded-lg text-center">
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

