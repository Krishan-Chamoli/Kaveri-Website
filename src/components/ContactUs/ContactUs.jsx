import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ref, push } from "firebase/database";
import { database } from "../../firebase";
import "./ContactUs.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaLinkedinIn, FaCheck } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

// REPLACE THESE WITH YOUR CLOUDINARY DETAILS
const CLOUDINARY_UPLOAD_PRESET = "kaveri_ContactUs"; // Create an unsigned upload preset in Cloudinary settings
const CLOUDINARY_CLOUD_NAME = "dvxelpszj"; // Your Cloudinary cloud name

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "general",
    message: "",
    attachment: null, // Store the file object here
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isUploading, setIsUploading] = useState(false); // Loading state for upload

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFormData({
        ...formData,
        attachment: e.target.files[0],
      });
    }
  };

  const uploadToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    data.append("cloud_name", CLOUDINARY_CLOUD_NAME);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`, // Changed to generic upload (auto-detect type)
        {
          method: "POST",
          body: data,
        }
      );
      const resData = await response.json();
      return resData.secure_url;
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);

    try {
      let attachmentUrl = "";

      // Upload file if selected
      if (formData.attachment) {
        if (CLOUDINARY_UPLOAD_PRESET === "YOUR_UPLOAD_PRESET" || CLOUDINARY_CLOUD_NAME === "YOUR_CLOUD_NAME") {
          alert("Please set your Cloudinary Cloud Name and Upload Preset in the code.");
          setIsUploading(false);
          return;
        }
        attachmentUrl = await uploadToCloudinary(formData.attachment);
      }

      const enquiriesRef = ref(database, 'enquiries');
      await push(enquiriesRef, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        subject: formData.subject,
        message: formData.message,
        attachmentUrl: attachmentUrl, // Save the URL
        submittedAt: new Date().toISOString()
      });

      // Show success animation
      setIsSubmitted(true);

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        subject: "general",
        message: "",
        attachment: null,
      });
      // Reset file input manually if needed (controlled input implies managing value, but file inputs are tricky. We leave it for now or reset via key if needed)

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="contact-us-container">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#BB2929] font-KuraleRegular text-xs md:text-sm font-semibold uppercase tracking-[0.15em] mb-4 md:mb-4"
        >
          Get in Touch
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col mb-12 md:mb-14 items-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl !font-KuraleRegular text-black leading-[0.95] tracking-tight">
            <span className="block">Contact Us</span>
          </h1>
        </motion.div>
      </div>

      <div className="contact-us-wrapper">
        {/* Left Panel - Contact Information */}
        <div className="contact-info-panel">
          <div className="contact-info-content">
            <h2 className="contact-title">Contact Information</h2>
            <p className="contact-subtitle">Say something to start a live chat!</p>

            <div className="contact-details">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+91 9971114982</span>
              </div>

              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>info@kaveriglobal.com</span>
              </div>

              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Khasra No. 42, Harpla Sikri Road,Sikri Industrial Area, Faridabad - 121004,Haryana, India</span>
              </div>
            </div>

            <div className="social-icons">
              <a href="https://www.facebook.com/kaveriglobalengineering" className="social-icon" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/kaveriglobalengineering" className="social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/kaveri-global-engineering/" className="social-icon" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://www.youtube.com/@KaveriGlobalEngineering" className="social-icon" aria-label="LinkedIn">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="decorative-circles">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
          </div>
        </div>

        {/* Right Panel - Contact Form */}
        <div className="contact-form-panel relative overflow-hidden">
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm p-8 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-20 h-20 bg-[#BB2929] rounded-full flex items-center justify-center mb-6 shadow-lg"
                >
                  <FaCheck className="text-white text-4xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-6">Thank you for contacting us. We will get back to you shortly.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 bg-[#BB2929] text-white rounded-full hover:bg-[#a02323] transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="subject-label">Select Subject?</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="subject"
                    value="general enquiry"
                    checked={formData.subject === "general enquiry"}
                    onChange={handleChange}
                  />
                  <span className="radio-custom"></span>
                  General Enquiry
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="subject"
                    value="product Enquiry"
                    checked={formData.subject === "product Enquiry"}
                    onChange={handleChange}
                  />
                  <span className="radio-custom"></span>
                  Product Enquiry
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="subject"
                    value="job enquiry"
                    checked={formData.subject === "job enquiry"}
                    onChange={handleChange}
                  />
                  <span className="radio-custom"></span>
                  Job Enquiry
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="subject"
                    value="Support"
                    checked={formData.subject === "Support"}
                    onChange={handleChange}
                  />
                  <span className="radio-custom"></span>
                  Support
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="attachment">Attachment (Optional)</label>
              <input
                type="file"
                id="attachment"
                name="attachment"
                onChange={handleFileChange}
                className="pt-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message.."
                rows="4"
                required
              ></textarea>
            </div>

            <div className="form-submit">
              <button type="submit" className="submit-button" disabled={isUploading}>
                {isUploading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
