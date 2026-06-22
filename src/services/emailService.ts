import emailjs from '@emailjs/browser';

// EmailJS configuration from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * Initialize EmailJS with public key
 * This should be called once when the app starts
 */
export const initEmailJS = () => {
   if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
   }
};

/**
 * Send email using EmailJS
 * @param formData - Contact form data
 * @returns Promise with response
 */
export const sendEmail = async (formData: {
   name: string;
   email: string;
   subject: string;
   message: string;
}): Promise<{ success: boolean; message: string }> => {
   // Check if EmailJS is configured
   if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      return {
         success: false,
         message: 'Email service not configured. Please set up EmailJS credentials.',
      };
   }

   try {
      const response = await emailjs.send(
         EMAILJS_SERVICE_ID,
         EMAILJS_TEMPLATE_ID,
         {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: 'Shivam Singh Chauhan',
            reply_to: formData.email,
         }
      );

      if (response.status === 200) {
         return {
            success: true,
            message: 'Email sent successfully! I\'ll get back to you soon.',
         };
      } else {
         return {
            success: false,
            message: 'Failed to send email. Please try again.',
         };
      }
   } catch (error) {
      console.error('Email send error:', error);
      return {
         success: false,
         message: 'Failed to send email. Please try again later.',
      };
   }
};

