// ContactForm.jsx
import React, { useState } from "react";
import "./Parallax.css";

export default function ContactForm() {
  // Controlled inputs are optional—keep them if you like the UX
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 transform transition-all duration-500 hover:shadow-2xl">
      <h3 className="text-2xl font-bold text-[#0a3b5b] mb-6">Contact Us</h3>

      {/* 👇 The only two attributes you really need */}
      <form
        data-static-form-name="contact"
        method="POST"
        className="space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your.email@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="How can we help you?"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-[#0a3b5b] text-white font-medium rounded-md transition-all hover:bg-blue-700 hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
