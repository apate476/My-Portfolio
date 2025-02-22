import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-12 sm:py-20 relative">
      <div className="container mx-auto px-4">
        <div className="relative mb-8 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-white"
          >
            <span>Skills & Technologies</span>
          </motion.h2>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px]" />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "150px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mt-1"
          />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-6 max-w-3xl mx-auto">
          {[
            {
              name: "JavaScript",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            },
            {
              name: "React",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
              name: "Node.js",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            },
            {
              name: "Express",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            },
            {
              name: "PostgreSQL",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            },
            {
              name: "MySQL",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            },
            {
              name: "Git",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            },
          ].map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center p-5 sm:p-4 bg-white/5 rounded-lg backdrop-blur-sm mx-auto w-full max-w-[180px] sm:max-w-[150px]"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className={`w-12 h-12 sm:w-12 sm:h-12 mb-3 ${
                  skill.name === "Express" ? "brightness-200 invert" : ""
                } ${skill.name === "AWS" ? "brightness-0 invert" : ""}`}
              />
              <span className="text-white/80 text-base sm:text-sm">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="mt-12 sm:mt-20">
          <div className="relative mb-6 sm:mb-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl font-medium mb-4 text-center text-white"
            >
              Currently Learning
            </motion.h3>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mt-1"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Python",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
              },
              {
                name: "Java",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
              },
              {
                name: "AWS",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
              },
            ].map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center p-5 bg-purple-500/10 rounded-lg backdrop-blur-sm w-[140px] sm:w-[120px]"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className={`w-12 h-12 sm:w-12 sm:h-12 mb-3 ${
                    skill.name === "AWS" ? "brightness-0 invert" : ""
                  }`}
                />
                <span className="text-white/80 text-base sm:text-sm text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
