// ContactForm.jsx
import React, { useState } from "react";
import "./Parallax.css";

export default function ContactForm() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    // We don't prevent default because we want the form to submit normally
    // through the Cloudflare Pages static forms handler
    
    // But we can add some UI feedback
    setIsSubmitting(true);
    setSubmitError(null);
    
    // The actual form submission is handled by Cloudflare Pages
    // This is just for UI feedback
    setTimeout(() => {
      // If we're still on this page after 3 seconds, show an error
      // (we should have been redirected by then)
      setSubmitError("Form submission is taking longer than expected. Please try again.");
      setIsSubmitting(false);
    }, 3000);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 transform transition-all duration-500 hover:shadow-2xl">
      <h3 className="text-2xl font-bold text-[#0a3b5b] mb-6">Contact Us</h3>

      {submitError && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {submitError}
        </div>
      )}

      <form
        data-static-form-name="contact"
        method="POST"
        className="space-y-6"
        onSubmit={handleSubmit}
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
          disabled={isSubmitting}
          className={`w-full py-3 px-4 bg-[#0a3b5b] text-white font-medium rounded-md transition-all ${
            isSubmitting
              ? "opacity-75 cursor-not-allowed"
              : "hover:bg-blue-700 hover:scale-105"
          }`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
