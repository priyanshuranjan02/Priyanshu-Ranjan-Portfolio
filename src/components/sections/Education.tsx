import { motion } from "framer-motion";
import {
  GraduationCap,
  School,
  Calendar,
  BookOpen,
  Award,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const educationData = [
  {
    year: "2023 – Present",
    institution: "VIT Bhopal University",
    degree: "B.Tech Computer Science (AI & ML)",
    score: "CGPA: 8.81",
    icon: GraduationCap,
    description:
      "Specializing in Artificial Intelligence & Machine Learning with strong foundations in software engineering and data-driven technologies.",
    coursework: [
      "Machine Learning",
      "Artificial Intelligence",
      "Data Structures & Algorithms",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Engineering Mathematics"
    ],
  },

  {
    year: "2022",
    institution: "R.B.T. Vidyalaya, Deoria",
    degree: "Senior Secondary (CBSE)",
    score: "74%",
    icon: School,
    description:
      "Completed higher secondary education in the Science (Mathematics) stream, strengthening analytical thinking and problem-solving skills.",
  },

  {
    year: "2020",
    institution: "Kendriya Vidyalaya, Deoria",
    degree: "Secondary (CBSE)",
    score: "78.8%",
    icon: School,
    description:
      "Built a strong academic foundation while actively participating in sports and extracurricular activities.",
  },
];

const academicHighlights = [
  {
    title: "CGPA",
    value: "8.81",
  },
  {
    title: "Specialization",
    value: "AI & ML",
  },
  {
    title: "Graduation",
    value: "2027",
  },
  {
    title: "Coursework",
    value: "AI • ML",
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-muted/20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gradient mb-6">
            Education
          </h2>

          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My academic journey, achievements, and the foundation that
            shaped my expertise in Artificial Intelligence, Data Analytics,
            and Full-Stack Development.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2" />

          {educationData.map((edu, index) => {

            const Icon = edu.icon;

            return (

              <motion.div
                key={edu.degree}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -60 : 60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: .8,
                  delay: index * .2,
                }}
                viewport={{ once: true }}
                className={`
                  relative
                  mb-16
                  flex
                  items-center
                  ${
                    index % 2 === 0
                      ? "md:justify-start"
                      : "md:justify-end"
                  }
                `}
              >

                {/* Timeline Dot */}

                <div
                  className="
                    absolute
                    left-6
                    md:left-1/2
                    -translate-x-1/2
                    z-20
                  "
                >
                  <div
                    className="
                      w-14
                      h-14
                      rounded-full
                      bg-card
                      border-4
                      border-primary
                      flex
                      items-center
                      justify-center
                      shadow-lg
                    "
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Card */}

                <Card
                  className={`
                    w-full
                    md:w-[46%]
                    ml-20
                    md:ml-0
                    p-6
                    bg-card
                    border-border
                    hover:border-primary/40
                    hover:-translate-y-2
                    hover:shadow-[0_0_30px_rgba(59,130,246,.18)]
                    transition-all
                    duration-300
                  `}
                >

                  {/* Year */}

                  <div className="flex items-center text-primary font-semibold mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {edu.year}
                  </div>

                  <h3 className="text-2xl font-bold text-foreground">
                    {edu.degree}
                  </h3>

                  <p className="text-primary font-medium mt-2">
                    {edu.institution}
                  </p>

                  <div className="inline-flex mt-4 px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                    {edu.score}
                  </div>

                  <p className="mt-5 text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                                    {/* Relevant Coursework (Only for B.Tech) */}
                  {edu.coursework && (
                    <div className="mt-6">
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <h4 className="font-semibold text-foreground">
                          Relevant Coursework
                        </h4>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="
                              px-3
                              py-1
                              rounded-full
                              bg-primary/10
                              text-primary
                              text-sm
                              font-medium
                              border
                              border-primary/20
                              hover:bg-primary
                              hover:text-primary-foreground
                              transition-all
                              duration-300
                              cursor-default
                            "
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Academic Snapshot */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Academic Snapshot
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {academicHighlights.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
              >
                <Card
                  className="
                    p-6
                    text-center
                    bg-card
                    border-border
                    hover:border-primary/40
                    hover:shadow-[0_0_30px_rgba(59,130,246,.18)]
                    transition-all
                    duration-300
                    h-full
                  "
                >
                  <Award className="w-8 h-8 text-primary mx-auto mb-4" />

                  <h4 className="text-3xl font-bold text-primary mb-2">
                    {item.value}
                  </h4>

                  <p className="text-muted-foreground font-medium">
                    {item.title}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}