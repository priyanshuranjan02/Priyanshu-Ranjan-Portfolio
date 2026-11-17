import { motion } from "framer-motion";
import {
  Calendar,
  Award,
  Trophy,
  Medal,
  Cpu,
  FileText,
  ExternalLink,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import reportPdf from "@/assets/VITB Experiential Learning Report (23BAI10691).pdf";

import {
  SiAmazonwebservices,
  SiOracle,
  SiCoursera,
} from "react-icons/si";

/* ============================
   EXPERIENCE
============================ */

const experiences = [
  {
    role: "Experiential Learning Program",
    organization: "VIT Bhopal University",
    subtitle: "Industry Technical Training",
    period: "Oct – Nov 2025",

    icon: Cpu,

    highlights: [
      "Built and programmed a 4WD IoT Smart Robot using Raspberry Pi Pico and ESP8266.",
      "Integrated ultrasonic sensors, DC motors, and motor drivers for autonomous movement.",
      "Implemented wireless communication and automation logic.",
      "Performed embedded software debugging and hardware troubleshooting.",
      "Successfully demonstrated a working IoT prototype during the industry program.",
    ],

    techStack: [
      "Raspberry Pi Pico",
      "ESP8266",
      "MicroPython",
      "IoT",
      "Embedded Systems",
      "UART",
      "Motor Driver",
    ],

    stats: [
      {
        value: "2 Weeks",
        label: "Duration",
      },
      {
        value: "IoT",
        label: "Domain",
      },
      {
        value: "4WD Robot",
        label: "Prototype",
      },
      {
        value: "ESP8266",
        label: "Platform",
      },
    ],

    reportLink: reportPdf,
  },
];

/* ============================
   ACHIEVEMENTS
============================ */

const achievements = [
  {
    title: "TCS CodeVita 2025",
    organizer: "Tata Consultancy Services",
    year: "2025",
    description:
      "Qualified both rounds of TCS CodeVita, demonstrating strong competitive programming and problem-solving skills.",
    highlight: "AIR 9353 • AIR 1206",
    icon: Trophy,
  },

  {
    title: "AI/ML Internship",
    organizer: "MPOnline Limited",
    year: "2026",
    description:
      "Successfully completed an internship in AI/ML at MPOnline Limited, gaining practical exposure to artificial intelligence and machine learning applications.",
    highlight: "20 May – 31 July 2026",
    icon: Medal,
  },

  {
    title: "Advanced Software Eng & Dev Internship",
    organizer: "MPOnline Limited",
    year: "2026",
    description:
      "Successfully completed an internship in Advanced Software Eng and Dev at MPOnline, gaining hands-on experience in software development.",
    highlight: "20 May – 31 July 2026",
    icon: Award,
  },

  {
    title: "Google Cloud Arcade Facilitator Program",
    organizer: "Google Cloud Skills Boost",
    year: "2025",
    description:
      "Completed hands-on Google Cloud labs and AI learning paths through the official Arcade Facilitator Program.",
    highlight: "Multiple Skill Badges",
    icon: Award,
  },
];

/* ============================
   CERTIFICATIONS
============================ */

const certifications = [
  {
    title: "Oracle OCI Data Science Professional",
    provider: "Oracle",
    icon: SiOracle,
    color: "#F80000",
    year: 2025,
    description: "Validates expertise in Oracle Cloud Infrastructure, machine learning workflows, data preparation, model training, deployment, and cloud-based data science solutions.",
    link: "https://drive.google.com/file/d/1G1LONmntI9R338BRQb-fikDHeLD75EAp/view?usp=sharing",
  },

  {
    title: "Applied Machine Learning in Python",
    provider: "Coursera",
    icon: SiCoursera,
    color: "#0056D2",
    year: 2025,
    description: "Gained practical experience building machine learning models using Scikit-learn, NumPy, and Pandas, covering classification, regression, model evaluation, and feature engineering.",
    link: "https://drive.google.com/file/d/1oGPX2QN48P9VSdACxRIXUNeWYFOdmFct/view?usp=sharing",
  },

  {
    title: "Introduction to IoT",
    provider: "NPTEL",
    icon: Award,
    color: "#22C55E",
    year: 2026,
    description:
      "Learned IoT architecture, sensors, embedded systems, communication protocols, and smart connected devices through a 12-week NPTEL course, earning Elite certification with an 87% score.",
    link: "https://drive.google.com/file/d/1iF6pceq-Rv91zNd7zknOPCKhewg4ca8i/view?usp=drive_link",
  },

  {
    title: "Oracle Agentic AI Certified Foundations Associate",
    provider: "Oracle",
    icon: SiOracle,
    color: "#F80000",
    year: 2026,
    description: "Demonstrates foundational knowledge of Agentic AI, AI agents, prompt engineering, orchestration, and modern AI application concepts using Oracle AI technologies.",
    link: "https://drive.google.com/file/d/1o2nLUR0KUuxOugziuVof8EXjJbf3Dkzo/view?usp=drive_link",
  },

  {
    title: "AWS Technical Essentials",
    provider: "Amazon Web Services",
    icon: SiAmazonwebservices,
    color: "#FF9900",
    year: 2025,
    description: "Acquired hands-on knowledge of AWS core services, cloud computing fundamentals, storage, networking, security, and cloud deployment best practices.",
    link: "https://drive.google.com/file/d/15X-DdfwqxuIUoy5V5b5rbC0IWnYnpIkW/view?usp=sharing",
  },

  {
    title: "Graph Camp",
    provider: "Algo University",
    icon: Award,
    color: "#00d9ff",
    year: 2026,
    description: "Successfully completed an advanced Graph Theory Programming Camp under Codeforces Master mentorship, solving 17 advanced graph algorithm problems to strengthen competitive programming skills.",
    link: "https://drive.google.com/file/d/1ThEfiJVV9KCGXezOByvPi9BOCEmAQhmZ/view?usp=drive_link",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gradient mb-6">
            Experience & Achievements
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My industry experience and notable achievements in academics and competitions
          </p>
        </motion.div>

        {/* Experience Section */}
        {/* ================= EXPERIENCE ================= */}

        <div className="mb-20">
          
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground mb-10"
          >
            Technical Experience
          </motion.h3>
          
          {experiences.map((exp, index) => {
          
            const Icon = exp.icon;
          
            return (
            
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .8 }}
                viewport={{ once: true }}
              >
              
                <Card
                  className="
                  p-8
                  bg-card
                  border-border
                  hover:border-primary/40
                  hover:-translate-y-2
                  hover:shadow-[0_0_35px_rgba(59,130,246,.18)]
                  transition-all
                  duration-300
                "
                >
                
                  {/* Header */}
            
                  <div className="flex items-start gap-6">
            
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            
                      <Icon className="w-8 h-8 text-primary" />
            
                    </div>
            
                    <div className="flex-1">
            
                      <h4 className="text-2xl font-bold text-foreground">
                        {exp.role}
                      </h4>
            
                      <p className="text-primary font-semibold mt-1">
                        {exp.organization}
                      </p>
            
                      <p className="text-muted-foreground mt-1">
                        {exp.subtitle}
                      </p>
            
                      <div className="flex flex-wrap gap-3 mt-4">
            
                        <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-semibold text-primary">
            
                          <Calendar className="w-4 h-4 mr-2" />
            
                          {exp.period}
            
                        </span>
            
                        <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-semibold text-primary">
            
                          Embedded Systems
            
                        </span>
            
                      </div>
            
                    </div>
            
                  </div>
            
                  {/* Divider */}
            
                  <div className="h-px bg-border my-8" />
            
                  {/* Key Highlights */}
            
                  <div>
            
                    <h5 className="text-lg font-semibold mb-5">
                      Key Highlights
                    </h5>
            
                    <ul className="space-y-4">
            
                      {exp.highlights.map((item) => (
                      
                        <li
                          key={item}
                          className="flex items-start"
                        >
                        
                          <div className="w-2.5 h-2.5 rounded-full bg-primary mt-2.5 mr-4 flex-shrink-0" />
                      
                          <span className="text-muted-foreground leading-relaxed">
                            {item}
                          </span>
                      
                        </li>
        
                      ))}
        
                    </ul>
                    
                  </div>
                    
                  {/* Divider */}
                    
                  <div className="h-px bg-border my-8" />
                    
                  {/* Tech Stack */}
                    
                  <div>
                    
                    <h5 className="text-lg font-semibold mb-4">
                      Tech Stack
                    </h5>
                    
                    <div className="flex flex-wrap gap-3">
                    
                      {exp.techStack.map((tech) => (
                      
                        <span
                          key={tech}
                          className="
                          px-3
                          py-1.5
                          rounded-full
                          bg-primary/10
                          border
                          border-primary/20
                          text-primary
                          text-sm
                          font-medium
                          hover:bg-primary
                          hover:text-primary-foreground
                          transition-all
                          duration-300
                        "
                        >
                          {tech}
                        </span>
        
                      ))}
        
                    </div>
                    
                  </div>
                    
                  {/* Statistics */}
                    
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
                    
                    {exp.stats.map((stat) => (
                    
                      <div
                        key={stat.label}
                        className="
                        rounded-xl
                        bg-background/40
                        border
                        border-border
                        p-5
                        text-center
                        hover:border-primary/40
                        hover:bg-primary/5
                        transition-all
                      "
                      >
                      
                        <h4 className="text-xl font-bold text-primary">
                    
                          {stat.value}
                    
                        </h4>
                    
                        <p className="text-sm text-muted-foreground mt-2">
                    
                          {stat.label}
                    
                        </p>
                    
                      </div>
        
                    ))}
        
                  </div>
                  
                  {/* Report */}
                  
                  <div className="mt-10">
                  
                    <a
                      href={exp.reportLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      inline-flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-lg
                      bg-primary
                      text-primary-foreground
                      font-medium
                      hover:opacity-90
                      transition-all
                    "
                    >
                    
                      <FileText className="w-5 h-5" />
                  
                      Industry Report
                  
                      <ExternalLink className="w-4 h-4" />
                  
                    </a>
                  
                  </div>
                  
                </Card>
                  
              </motion.div>
        
            );
          
          })}
        
        </div>

        {/* Achievements Section */}
        {/* ================= ACHIEVEMENTS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <h3 className="text-3xl font-bold text-center text-foreground mb-3">
            Achievements
          </h3>

          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Competitive programming, cloud learning, and academic accomplishments that
            reflect my passion for continuous learning and problem solving.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, index) => {
            
              const Icon = item.icon;
            
              return (
              
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: .6,
                    delay: index * .15,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="group"
                >
                
                  <Card
                    className="
                      h-full
                      p-7
                      bg-card
                      border-border
                      hover:border-primary/40
                      hover:shadow-[0_0_35px_rgba(59,130,246,.18)]
                      transition-all
                      duration-300
                      text-center
                    "
                  >
                  
                    {/* Icon */}
                
                    <div
                      className="
                        w-16
                        h-16
                        mx-auto
                        mb-6
                        rounded-full
                        bg-primary/10
                        flex
                        items-center
                        justify-center
                        group-hover:scale-110
                        transition-transform
                        duration-300
                      "
                    >
                    
                      <Icon className="w-8 h-8 text-primary" />
                
                    </div>
                
                    {/* Title */}
                
                    <h4 className="text-xl font-bold text-foreground mb-2">
                
                      {item.title}
                
                    </h4>
                
                    {/* Organizer */}
                
                    <p className="text-primary font-medium mb-4">
                
                      {item.organizer}
                
                    </p>
                
                    {/* Description */}
                
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                
                      {item.description}
                
                    </p>
                
                    {/* Highlight */}
                
                    <div className="mb-5">
                
                      <span
                        className="
                          inline-flex
                          items-center
                          rounded-full
                          border
                          border-primary/20
                          bg-primary/10
                          px-4
                          py-2
                          text-xs
                          font-semibold
                          text-primary
                        "
                      >
                      
                        {item.highlight}
                
                      </span>
                
                    </div>
                
                    {/* Year */}
                
                    <div
                      className="
                        inline-flex
                        rounded-full
                        bg-background
                        border
                        border-border
                        px-3
                        py-1
                        text-xs
                        font-semibold
                        text-muted-foreground
                      "
                    >
                    
                      {item.year}
                
                    </div>
                
                  </Card>
                
                </motion.div>

              );
            
            })}

          </div>
          
        </motion.div>


        {/* Certifications */}
        {/* ================= CERTIFICATIONS ================= */}

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mt-24"
>

  <h3 className="text-3xl font-bold text-center text-foreground mb-3">
    Certifications
  </h3>

  <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
    Industry-recognized certifications that validate my expertise in Machine
    Learning, Cloud Computing, and Data Science.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    {certifications.map((cert, index) => {

      const Icon = cert.icon;

      return (

        <motion.div
          key={cert.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: .6,
            delay: index * .15,
          }}
          viewport={{ once: true }}
          whileHover={{
            y: -8,
          }}
          className="group"
        >

          <Card
            className="
              relative
              overflow-hidden
              p-7
              h-full
              bg-card
              border-border
              hover:border-primary/40
              hover:shadow-[0_0_35px_rgba(59,130,246,.18)]
              transition-all
              duration-300
            "
          >

            {/* View Certificate */}

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                absolute
                top-5
                right-5
                text-muted-foreground
                hover:text-primary
                transition-colors
              "
            >
              <ExternalLink className="w-5 h-5" />
            </a>

            <div className="flex items-start gap-5">

              {/* Icon */}

              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  group-hover:scale-110
                  group-hover:rotate-6
                  transition-all
                  duration-300
                "
                style={{
                  backgroundColor: `${cert.color}20`,
                }}
              >

                <Icon
                  className="w-9 h-9"
                  style={{
                    color: cert.color,
                  }}
                />

              </div>

              {/* Text */}

              <div className="flex-1">

                <h4 className="text-xl font-bold text-foreground">

                  {cert.title}

                </h4>

                <p className="text-primary font-semibold mt-1">

                  {cert.provider}

                </p>

                <p className="text-sm text-muted-foreground leading-relaxed mt-3">

                  {cert.description}

                </p>

                <div className="flex items-center justify-between mt-6">

                  <span
                    className="
                      inline-flex
                      rounded-full
                      bg-primary/10
                      border
                      border-primary/20
                      px-3
                      py-1
                      text-xs
                      font-semibold
                      text-primary
                    "
                  >

                    {cert.year}

                  </span>

                  <span
                    className="
                      text-sm
                      font-medium
                      text-primary
                      group-hover:translate-x-1
                      transition-transform
                    "
                  >
                    View Certificate →
                  </span>

                </div>

              </div>

            </div>

            {/* Glow */}

            <div
              className="
                absolute
                inset-0
                rounded-lg
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-300
                pointer-events-none
              "
              style={{
                boxShadow: `0 0 35px ${cert.color}55`,
              }}
            />

          </Card>

        </motion.div>

      );

    })}

  </div>

</motion.div>

</div>

</section>

);
}