import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const charterData = [
  {
    title: "Executive Charters",
    description:
      "Ideal for corporate travel, ensuring you and your team arrive refreshed, on schedule, and ready for business.",
    points: [
      "Confidentiality & Privacy",
      "Flexible Scheduling",
      "Access to More Airports",
      "Onboard Connectivity",
    ],
    buttonText: "Inquire Now",
    buttonLink: "/contacts",
  },
  {
    title: "Leisure Charters",
    description:
      "Perfect for family vacations, special events, or exclusive getaways to your dream destinations.",
    points: [
      "Personalized Itineraries",
      "Luxurious Comfort",
      "Pet-Friendly Options",
      "Catering to Your Taste",
    ],
    buttonText: "Plan Your Trip",
    buttonLink: "/contacts",
  },
  {
    title: "Cargo Charters",
    description:
      "Reliable and efficient solutions for time-sensitive, valuable, or specialized cargo shipments worldwide.",
    points: [
      "Urgent Deliveries",
      "Oversized Cargo Transport",
      "Secure Handling",
      "Global Network Access",
    ],
    buttonText: "Request Quote",
    buttonAction: () =>
      alert("Inquiry action for Cargo Charter triggered!"),
  },
  {
    title: "Emergency Charters",
    description:
      "Rapid response for critical situations, including medical evacuations and urgent humanitarian aid flights.",
    points: [
      "24/7 Availability",
      "Medical Equipment Onboard",
      "Experienced Medical Staff",
      "Global Reach for Emergencies",
    ],
    buttonText: "Contact Emergency",
    buttonLink: "tel:+",
  },
];

const Charters = () => {
  return (
    <>
      <title>Charters - Air Lines International</title>

      <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-sky-100 text-gray-800 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-[-8rem] left-[-5rem] w-[25rem] h-[25rem] bg-sky-200 rounded-full blur-3xl opacity-25"></div>
        <div className="absolute bottom-[-8rem] right-[-5rem] w-[25rem] h-[25rem] bg-sky-300 rounded-full blur-3xl opacity-25"></div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center py-20 px-6 relative z-10"
        >
          <h2 className="text-5xl font-extrabold text-sky-800 mb-5 tracking-tight">
            Private Charter Services
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Experience the ultimate in flexibility, privacy, and luxury with
            Air Lines International’s bespoke charter services. From corporate
            trips to family vacations, our team ensures a seamless travel
            experience tailored to your needs.
          </p>
        </motion.div>

        {/* Charter Cards */}
        <div className="relative z-10 px-8 md:px-16 lg:px-32 pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {charterData.map((charter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{
                scale: 1.03,
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl border border-sky-100 hover:border-sky-300 transition-all duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold text-sky-800 mb-3">
                  {charter.title}
                </h3>
                <p className="text-gray-600 mb-4">{charter.description}</p>
                <ul className="text-gray-500 space-y-2 text-sm mb-6">
                  {charter.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>

              {/* Buttons – Keep original color */}
              {charter.buttonLink ? (
                <Link to={charter.buttonLink} className="button">
                  {charter.buttonText}
                </Link>
              ) : (
                <button
                  onClick={charter.buttonAction}
                  className="button"
                >
                  {charter.buttonText}
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center pb-16 px-6 relative z-10"
        >
          <p className="max-w-2xl mx-auto text-gray-600">
            For personalized assistance and to arrange your next private flight,
            please contact our charter specialists today.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Charters;
