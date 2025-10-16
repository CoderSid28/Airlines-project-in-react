import React from "react";
import { motion } from "framer-motion";

const Safety = () => {
  return (
    <>
      <title>Safety - Air Lines International</title>

      <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-sky-100 text-gray-800 relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute top-[-10rem] left-[-5rem] w-[25rem] h-[25rem] bg-sky-200 rounded-full blur-3xl opacity-25"></div>
        <div className="absolute bottom-[-10rem] right-[-5rem] w-[25rem] h-[25rem] bg-sky-300 rounded-full blur-3xl opacity-25"></div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-20 px-6 relative z-10"
        >
          <h2 className="text-5xl font-extrabold text-sky-800 mb-5 tracking-tight">
            Our Commitment to Safety
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            At Air Lines International, safety is the foundation of everything
            we do. We strive to exceed global aviation safety standards — ensuring
            every flight is secure, reliable, and worry-free.
          </p>
        </motion.header>

        {/* Main Safety Content */}
        <section className="px-8 md:px-16 lg:px-32 pb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-white/70 shadow-xl border border-white/30 rounded-3xl p-10"
          >
            <h3 className="text-3xl font-semibold text-sky-700 mb-6">
              Key Pillars of Our Safety Program
            </h3>

            <ul className="space-y-6 text-gray-700 leading-relaxed">
              <motion.li
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <strong className="text-sky-700">Rigorous Pilot Training:</strong>{" "}
                Our pilots undergo extensive simulator sessions, emergency drills,
                and weather management programs to ensure top-tier readiness.
              </motion.li>

              <motion.li
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <strong className="text-sky-700">Aircraft Maintenance Excellence:</strong>{" "}
                Our fleet is serviced by certified engineers who perform
                detailed inspections and proactive maintenance.
              </motion.li>

              <motion.li
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <strong className="text-sky-700">Advanced Avionics & Technology:</strong>{" "}
                We integrate next-gen avionics for enhanced navigation, real-time
                monitoring, and communication.
              </motion.li>

              <motion.li
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <strong className="text-sky-700">Continuous Improvement:</strong>{" "}
                Through rigorous audits and data-driven safety analysis, we
                identify potential risks and act before they emerge.
              </motion.li>

              <motion.li
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <strong className="text-sky-700">Emergency Preparedness:</strong>{" "}
                Our crew is expertly trained in first aid, evacuation, and
                emergency coordination to ensure complete readiness.
              </motion.li>

              <motion.li
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <strong className="text-sky-700">Health & Hygiene Protocols:</strong>{" "}
                From cabin sterilization to contactless boarding, our standards
                ensure passenger wellbeing at every step.
              </motion.li>
            </ul>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="mt-10 text-gray-700 text-lg"
            >
              Your trust is our most valued asset. At Air Lines International, we’re
              committed to ensuring your journey is not only comfortable — but
              exceptionally safe.
            </motion.p>
          </motion.div>
        </section>

        {/* Closing Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center pb-20 px-6 relative z-10"
        >
          <h3 className="text-2xl font-semibold text-sky-800 mb-4">
            ✈️ Safety Beyond Standards
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            Every flight is guided by our philosophy of continuous vigilance,
            innovation, and care.  
            Because at Air Lines International — your safety always comes first.
          </p>
        </motion.section>
      </div>
    </>
  );
};

export default Safety;
