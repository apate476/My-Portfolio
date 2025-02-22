import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="relative mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold text-center"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-white to-purple-200">
            Featured Projects
          </span>
        </motion.h2>
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px]" />
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "150px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mt-4"
        />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500/20 via-white/10 to-purple-500/20" />

        {/* Project cards */}
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative mb-16 ${
              index % 2 === 0
                ? "pr-8 md:ml-auto md:mr-[50%]"
                : "pl-8 md:mr-auto md:ml-[50%]"
            }`}
          >
            {/* Project card */}
            <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white/90 mb-2">
                {project.title}
              </h3>
              <h4 className="text-lg text-purple-300 mb-4">{project.role}</h4>
              <p className="text-white/70 mb-4">{project.description}</p>
              <ul className="list-disc list-inside text-white/60 space-y-2">
                {project.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
              <div className="mt-6 flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full bg-purple-500/20 text-purple-200 hover:bg-purple-500/30 transition-all duration-300 flex items-center gap-2"
                >
                  <span>View Live</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full bg-white/10 text-white/90 hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                >
                  <span>GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
