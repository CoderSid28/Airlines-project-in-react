import React from "react";
import { motion } from "framer-motion";

const Contacts = () => {
  const handleActionClick = (e) => {
    e.preventDefault();
    alert("Action Triggered: This would submit the form or navigate.");
  };

  return (
    <>
      <title>Contact Us - Air Lines International</title>

      <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-sky-50 text-gray-800 relative overflow-hidden">
        {/* Background floating gradient orbs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-sky-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-sky-300 rounded-full blur-3xl opacity-30"></div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-20 px-6 relative z-10"
        >
          <h2 className="text-5xl font-extrabold text-sky-800 mb-5 tracking-tight">
            Contact Air Lines International
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Our global support team is ready to help you 24/7. Reach out for
            booking assistance, flight updates, or feedback — we’d love to hear
            from you.
          </p>
        </motion.header>

        {/* Contact Info + Map Section */}
        <section className="grid md:grid-cols-2 gap-10 px-8 md:px-16 lg:px-32 pb-20 relative z-10">
          {/* Info Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-white/70 border border-white/30 shadow-lg rounded-3xl p-10"
          >
            <h3 className="text-3xl font-semibold text-sky-700 mb-6">
              Our Office
            </h3>

            <ul className="space-y-5 text-gray-700">
              <li className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+1234567890"
                    className="text-sky-600 hover:underline"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">📧</span>
                <div>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@airlinesinternational.com"
                    className="text-sky-600 hover:underline"
                  >
                    info@airlinesinternational.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <strong>Address:</strong> 456 Aviation Blvd, Skyport City, AZ
                  98765, USA
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">⏰</span>
                <div>
                  <strong>Hours:</strong> Mon–Fri: 9:00 AM–6:00 PM (GMT)
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Map Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="backdrop-blur-xl bg-white/70 border border-white/30 shadow-lg rounded-3xl p-10 flex flex-col"
          >
            <h3 className="text-3xl font-semibold text-sky-700 mb-6">
              Our Location
            </h3>
            <img
              src="https://p.urbanpro.com/tv-prod/member/photo/4400855-medium190ap.png"
              alt="Office location map"
              className="w-full rounded-2xl shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            />
            <p className="text-sm text-gray-500 mt-4">
              Find us at our Skyport City headquarters — or contact us for
              detailed directions.
            </p>
          </motion.div>
        </section>

        {/* Contact Form */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 bg-gradient-to-r from-sky-100 to-sky-50 py-20 px-8 md:px-16 lg:px-48"
        >
          <div className="bg-white/80 backdrop-blur-xl p-12 rounded-3xl shadow-xl border border-white/40">
            <h3 className="text-3xl font-bold text-center text-sky-800 mb-10">
              Send Us a Message
            </h3>

            <form
              onSubmit={handleActionClick}
              method="POST"
              className="space-y-6 max-w-2xl mx-auto"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john.doe@example.com"
                  className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="General Inquiry"
                  className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  placeholder="Type your message here..."
                  className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
                ></textarea>
              </div>

              {/* ✅ Button using your older styling */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-center"
              >
                <button type="submit" className="button">
                  ✈️ Send Message
                </button>
              </motion.div>
            </form>
          </div>
        </motion.section>

        {/* Info Tip */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center py-16 bg-white relative z-10"
        >
          <h3 className="text-2xl font-semibold text-sky-700 mb-4">
            💡 Did You Know?
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg px-4">
            The first intercontinental flight took place in 1919! Today, millions
            of travelers connect across the globe daily — and we make sure every
            connection feels effortless.
          </p>
        </motion.section>
      </div>
    </>
  );
};

export default Contacts;
