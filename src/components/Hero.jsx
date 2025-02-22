import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import resume from "/Newtech_copy.pdf";

export default function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: true,
          background: {
            opacity: 0,
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            color: {
              value: "#ffffff",
            },
            opacity: {
              value: 0.5,
              random: false,
            },
            size: {
              value: 2,
              random: true,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "out",
              },
            },
            links: {
              enable: true,
              distance: 180,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 200,
                links: {
                  opacity: 0.8,
                },
              },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent" />

      {/* Main content */}
      <div className="container mx-auto px-4 text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-8xl font-bold tracking-tight mb-6"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
            Arya Patel
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-4xl text-purple-200/90 font-light mb-12"
        >
          Full Stack Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="space-y-12"
        >
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Crafting elegant solutions through code. Specialized in building
            modern web applications with cutting-edge technologies.
          </p>

          <div className="flex justify-center">
            <motion.a
              href={resume}
              download="Arya_Patel_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-white text-purple-900 font-medium
                       hover:bg-white/90 transition-all duration-300"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full mx-auto" />
        </div>
      </motion.div>
    </section>
  );
}
