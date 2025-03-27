"use client";

import React, { useState, FormEvent, ChangeEvent } from 'react';
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentAlt } from 'react-icons/fa';
import { GiPartyPopper } from 'react-icons/gi';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [messageSent, setMessageSent] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'anaol.atinafu-ug@aau.edu.et',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setMessageSent(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Failed to send email:', err);
      setError('Failed to send message. Please try again.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center text-white p-6"
      style={{
        backgroundImage: "url('/infinity.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'linear-gradient(to bottom, indigo-900, purple-800)',
      }}
    >
      <div className="max-w-md w-full rounded-3xl shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-30 p-8 relative overflow-hidden">
        <h2 className="text-4xl font-extrabold mb-8 text-center relative z-10">
          Let's Connect
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2"></span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          {error && <p className="text-red-500">{error}</p>}
          <div>
            <label className="block mb-2 text-lg font-medium">Name</label>
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 pl-10 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your Name"
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium">Email</label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 pl-10 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium">Message</label>
            <div className="relative">
              <FaCommentAlt className="absolute left-3 top-3 text-gray-400" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 pl-10 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            {messageSent && (
              <div className="mt-4 text-center">
                <span className="text-xl font-semibold">Thanks!</span>
                <GiPartyPopper className="inline-block ml-2 text-3xl text-yellow-400" />
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 flex items-center justify-center transition-colors duration-300"
          >
            <FaPaperPlane className="mr-2" />
            Send Message
          </button>
        </form>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-20 blur-3xl rounded-3xl"></div>
      </div>
    </div>
  );
};

export default Contact;