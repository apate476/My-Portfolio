import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <div className="relative mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-center mb-4 text-white"
          >
            <span>About Me</span>
          </motion.h2>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px]" />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "150px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mt-1"
          />
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-white/80">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            I started my journey with a Bachelor's in Psychology, fascinated by
            human behavior and the intricacies of the mind. While studying, I
            discovered my passion for problem-solving and analytical
            thinking—skills that are at the core of both psychology and
            technology.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            During my studies, I found myself drawn to the logical structure of
            coding and the endless possibilities it offers to create solutions
            that impact people's lives. I realized that just as psychology seeks
            to understand and improve human experiences, software engineering
            allows me to build tools and applications that solve real-world
            problems and enhance user experiences.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            This realization led me to pivot towards coding, where I've since
            honed my skills in full-stack development and AI-driven
            technologies. My background in psychology gives me a unique
            perspective on user-centric design and empathy-driven development,
            ensuring that the applications I build are not only functional but
            also intuitive and impactful.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Today, I'm a Master's student in Artificial Intelligence, combining
            my love for problem-solving with cutting-edge technology to create
            scalable, data-driven solutions. My journey from psychology to
            coding has taught me the value of adaptability, continuous learning,
            and the power of technology to transform ideas into reality.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
