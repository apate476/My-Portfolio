import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#1a0b2e]/50 border-t border-purple-500/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/60"
          >
            © 2024 Arya Patel. All rights reserved.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            <a
              href="https://github.com/apate476"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/patel-arya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-white/60 hover:text-white transition-colors"
            >
              Email
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
