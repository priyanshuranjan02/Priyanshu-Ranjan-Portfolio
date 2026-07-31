import { motion } from 'framer-motion';
import { 
  SiPython, 
  SiCplusplus, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiFlask,
  SiMongodb,
  SiAmazonwebservices,
  SiGooglecloud,
  SiFirebase, 
  SiMysql,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiHtml5,
  SiCss3,
  SiGithub
} from 'react-icons/si';
import { Coffee } from 'lucide-react';
import { Card } from '@/components/ui/card';

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Java", icon: Coffee, color: "#ED8B00" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "SQL", icon: SiMysql, color: "#4479A1" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
    ],
  },

  {
    title: "Full-Stack Development",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },

  {
    title: "AI & Data Analytics",
    skills: [
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#4DABCF" },
      { name: "Power BI / Tableau", icon: SiGooglecloud, color: "#F2C811" },
    ],
  },

  {
    title: "Cloud • Database • Tools",
    skills: [
      { name: "Supabase", icon: SiFirebase, color: "#3ECF8E" },
      { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
      { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Git & GitHub", icon: SiGithub, color: "#ffffff" },
    ],
  },
];

const coreSkills = [
  "Java",
  "Python",
  "React",
  "Node.js",
  "Machine Learning",
  "Data Analytics",
  "MongoDB",
  "SQL",
];

export function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gradient mb-6">
            Technical Skills
          </h2>

          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Technologies, frameworks, and tools I use to build AI-powered
            applications, scalable full-stack systems, and data analytics
            solutions.
          </p>
        </motion.div>

        {/* Core Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-center text-2xl font-bold text-foreground mb-6">
            Core Technologies
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {coreSkills.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="
                  px-5
                  py-2.5
                  rounded-full
                  border
                  border-primary/30
                  bg-primary/5
                  text-primary
                  font-semibold
                  hover:bg-primary
                  hover:text-primary-foreground
                  hover:border-primary
                  hover:shadow-[0_0_20px_rgba(59,130,246,.35)]
                  transition-all
                  duration-300
                  cursor-default
                "
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: categoryIndex * 0.2,
              }}
              viewport={{ once: true }}
            >
              <Card
                className="
                  p-6
                  bg-card
                  border-border
                  shadow-lg
                  hover:-translate-y-2
                  hover:border-primary/40
                  hover:shadow-[0_0_35px_rgba(59,130,246,.18)]
                  transition-all
                  duration-300
                  h-full
                "
              >
                <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay:
                            categoryIndex * 0.2 + skillIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                          scale: 1.05,
                          y: -5,
                        }}
                        className="group"
                      >
                        <div
                          className="
                            flex
                            flex-col
                            items-center
                            p-4
                            rounded-xl
                            bg-background/40
                            border
                            border-transparent
                            hover:bg-primary/5
                            hover:border-primary/30
                            transition-all
                            duration-300
                            cursor-pointer
                          "
                        >
                          <Icon
                            className="w-14 h-14 mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                            style={{ color: skill.color }}
                          />

                          <span className="text-sm font-medium text-center text-foreground">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}