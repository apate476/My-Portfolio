import { motion, useScroll } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import avatar from "../assets/mypic.webp";
import resume from "/Newtech_copy.pdf";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [active, setActive] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("none");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
      const direction = latest > lastScrollY.current ? "down" : "up";
      setScrollDirection(latest > 50 ? direction : "none");
      lastScrollY.current = latest;
    });
  }, [scrollY]);

  const handleScroll = (section) => {
    setActive(section);
    setIsMenuOpen(false); // Close mobile menu when navigating
    document.querySelector(`#${section}`).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{
        y: 0,
        transition: { duration: 0.3 },
      }}
      className={`fixed top-0 left-0 right-0 w-screen max-w-[100vw] backdrop-blur-md ${
        isScrolled ? "bg-[#2a1352]/50" : "bg-[#1f0f37]/40"
      } border-b border-[#6b21a8]/30 z-[100] transition-colors duration-300`}
    >
      <div className="w-full mx-auto px-4 py-3 md:px-12 md:py-3 flex justify-between items-center relative">
        {/* Scroll Direction Indicator - Just the line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5">
          <motion.div
            className="h-full bg-purple-400"
            initial={{ width: "0%" }}
            animate={{ width: scrollDirection === "down" ? "100%" : "0%" }}
            transition={{ duration: 0.2 }}
          />
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 md:gap-8">
          <motion.a
            href="https://github.com/apate476"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-white/80 hover:text-white"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/patel-arya"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-white/80 hover:text-white"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </motion.a>
        </div>

        {/* Mobile Avatar */}
        <div className="md:hidden">
          <motion.img
            src={avatar}
            alt="Avatar"
            className="w-14 h-14 rounded-full border-2 border-purple-500/30"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          />
        </div>

        {/* Main Navigation */}
        <div className="hidden md:flex items-center gap-16">
          {/* Left Links */}
          <div className="flex gap-12">
            {["about", "skills"].map((item) => (
              <motion.div
                key={item}
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.a
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item);
                  }}
                  className="text-[#e9d5ff] hover:text-white transition-colors capitalize text-lg"
                >
                  {item}
                </motion.a>
                {active === item && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#d8b4fe]"
                    layoutId="underline"
                    transition={{ type: "spring", bounce: 0.25 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Avatar Logo */}
          <motion.img
            src={avatar}
            alt="Avatar"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-purple-500/30"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          />

          {/* Right Links */}
          <div className="flex gap-12">
            {["projects", "contact"].map((item) => (
              <motion.div
                key={item}
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.a
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item);
                  }}
                  className="text-[#e9d5ff] hover:text-white transition-colors capitalize text-lg"
                >
                  {item}
                </motion.a>
                {active === item && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#d8b4fe]"
                    layoutId="underline"
                    transition={{ type: "spring", bounce: 0.25 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Resume Button */}
        <div className="hidden md:flex">
          <motion.a
            href={resume}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-full bg-purple-500/20 text-white border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 relative z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-[3.5rem] bg-[#2a1352]/95 backdrop-blur-md md:hidden min-h-[calc(100vh-3.5rem)] w-screen max-w-[100vw] overflow-hidden"
            style={{ touchAction: "none" }}
          >
            <div className="flex flex-col items-center justify-center h-full py-8 space-y-8 px-6">
              {["about", "skills"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item);
                    setIsMenuOpen(false);
                  }}
                  className="text-[#e9d5ff] hover:text-white transition-colors capitalize text-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}

              {["projects", "contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item);
                    setIsMenuOpen(false);
                  }}
                  className="text-[#e9d5ff] hover:text-white transition-colors capitalize text-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                href="/resume"
                className="mt-2 px-6 py-2 rounded-full bg-purple-500/20 text-white border border-purple-500/30 hover:bg-purple-500/30 transition-colors text-lg"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
