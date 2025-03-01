'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ success: false, error: false });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
      setFormStatus({ success: false, error: true });
      return;
    }

    emailjs
      .send(
        'Portfolio_SaiPriya', // Replace with your EmailJS service ID
        'template_2noitvh', // Replace with your EmailJS template ID
        {
          email: formData.email,
          message: formData.message,
        },
        'rKVlFZsqV8YpIlg-j' // Replace with your EmailJS user ID
      )
      .then(
        () => {
          setFormStatus({ success: true, error: false });
          setFormData({ email: '', message: '' });
        },
        (error) => {
          console.error('Email sending failed:', error);
          setFormStatus({ success: false, error: true });
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20"
      style={{
        backgroundColor: '#000000', // Solid black background
      }}
    >
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold mb-6 text-white">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-4 mb-4 rounded-lg bg-white text-black shadow-lg focus:outline-none focus:ring-2 focus:ring-silver-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-4 mb-4 rounded-lg bg-white text-black shadow-lg focus:outline-none focus:ring-2 focus:ring-silver-400"
            rows={5}
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 p-4 rounded-lg text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Send Message
          </button>
        </form>

        {/* Display success or error message */}
        {formStatus.success && (
          <p className="mt-4 text-green-500">Message sent successfully!</p>
        )}
        {formStatus.error && (
          <p className="mt-4 text-red-500">Failed to send message. Please try again.</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
