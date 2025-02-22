import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    message: "",
    isError: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ message: "", isError: false });

    emailjs
      .sendForm(
        "service_kd4rbct",
        "template_vvxavvm",
        form.current,
        "beo2LT-NuHcZHRGtm"
      )
      .then((result) => {
        console.log("SUCCESS!", result.text);
        setSubmitStatus({
          message: "Message sent successfully!",
          isError: false,
        });
        form.current.reset();
      })
      .catch((error) => {
        console.error("FAILED...", error.text);
        setSubmitStatus({
          message: "Failed to send message. Please try again.",
          isError: true,
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <div className="relative mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-center mb-4 text-white"
          >
            <span>Contact Me</span>
          </motion.h2>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px]" />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "150px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mt-1"
          />
        </div>

        <motion.form
          ref={form}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-white mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-500 backdrop-blur-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-500 backdrop-blur-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-white mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-500 backdrop-blur-sm resize-none"
              required
            ></textarea>
          </div>

          {submitStatus.message && (
            <div
              className={`text-center ${
                submitStatus.isError ? "text-red-400" : "text-green-400"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 rounded-lg bg-purple-500/20 text-purple-200 hover:bg-purple-500/30 transition-all duration-300 backdrop-blur-sm disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
