import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import aadharInsightsImage from "@/assets/AadhaarInsights_Logo.jpeg";
import swayamSaarthiImage from "@/assets/SwayamSaarthi-Logo.png";
import healthBotImage from "@/assets/HealthBotLogo.jpeg";

const projects = [
  {
    title: "AI HealthBot – AI Symptom Assessment Platform",
      type: "Full-Stack AI Healthcare Project ",
      duration: "Jan 2026 - Mar 2026",
      description: "Developed an AI-powered multilingual healthcare companion that assists users with symptom assessment, preliminary health guidance, and intelligent triage. The platform integrates modern AI capabilities with a secure full-stack architecture to provide an accessible healthcare support experience.",
      features: [
        "AI-powered 9-step symptom assessment with 3-level risk triage using Gemini 2.5 Pro.",
        "Developed a multilingual full-stack platform featuring 12 screens, 30+ reusable React components, secure authentication, health history, NGO analytics, and PDF reports. ",
        "Built a scalable cloud-native architecture with Supabase Edge Functions, AI recommendations, and 2–5 second response times.",
      ],
      technologies: ["React", "TypeScript", "Node.js", "Supabase", "Gemini 2.5 Pro", "JWT", "Tailwind CSS"],
      image: healthBotImage,
      githubUrl: "https://github.com/priyanshuranjan02/AI-HealthBot-Companion",
      ExternalLink: "https://ai-health-bot-companion.vercel.app/",
      snapshot: [
      { value: "12", label: "Screens" },
      { value: "30+", label: "React Components" },
      { value: "2–5s", label: "AI Response" },
    ],
  },
  {
    title: "Aadhaar Insights Analytics Platform",
      type: "Data Analytics & Business Intelligence Platform",
      duration: "Jun 2026 - Jul 2026",
      description: "Built a large-scale analytics platform for exploring UIDAI enrolment and demographic update datasets. Performed end-to-end data preprocessing, exploratory data analysis, visualization, and dashboard development to uncover trends, demographic insights, and anomalies.",
      features: [
      "Processed 3.37M+ Aadhaar records from 3 official UIDAI datasets, generating insights across 57 states and 964 districts.",
      "Built a 9-page analytics platform featuring Power BI dashboards, KPI monitoring, anomaly detection, trend analysis, and automated recommendations.",
      "Developed and benchmarked 3 forecasting models (Baseline, Linear Regression, and Random Forest) for predictive analysis of Aadhaar enrolment and update trends."
    ],
      technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "RandomForest", "Linear Regression", "Power BI", "Plotly", "Streamlit"],
      image: aadharInsightsImage,
      githubUrl: "https://github.com/priyanshuranjan02/Aadhaar-Insights-Analytics-Platform",
      ExternalLink: "https://aadhaar-insights.streamlit.app/",
      snapshot: [
      { value: "3.37M+", label: "Records" },
      { value: "57", label: "States" },
      { value: "964", label: "Districts" },
    ],
  },
  {
    title: "Swayam Saarthi",
      type: "Full-Stack MERN Platform",
      duration: "December 2025 – July 2026",
      description: "Developed a reverse ride-hailing platform where users request rides and nearby drivers compete through a bidding workflow. The platform provides secure authentication, role-based dashboards, booking lifecycle management, and real-time driver interaction.",
      features: [
        "Developed a full-stack reverse ride-hailing platform with 25+ React pages, 35+ REST APIs, 6 MongoDB collections, and 3 role-based portals (User, Driver, Admin).",
        "Implemented a 5-stage booking lifecycle with JWT authentication, RBAC, and responsive dashboards for seamless user and driver experiences.",
        "Built a scalable MERN architecture using 40+ reusable React components, Socket.IO real-time communication, and modular backend services for booking and ride management."
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "OpenStreetMap", "JWT"],
      image: swayamSaarthiImage,
      githubUrl: "https://github.com/priyanshuranjan02/Swayam-Saarthi",
      ExternalLink: "https://swayam-saarthi.vercel.app/",
      snapshot: [
      { value: "25+", label: "React Pages" },
      { value: "35+", label: "REST APIs" },
      { value: "6", label: "MongoDB Collections" },
    ],
  }
];


export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gradient mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work in machine learning, data engineering, and modern web technologies.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -4 }}
              className="group w-full"
            >
              <Card
                className="
                  overflow-hidden
                  bg-card
                  border-border
                  shadow-lg
                  hover:shadow-purple
                  transition-all
                  duration-500
                "
              >
                <div className="grid lg:grid-cols-[280px_1fr] gap-0">
          
                  {/* =========================
                      PROJECT VISUAL + SNAPSHOT
                  ========================= */}
                  <div className="relative flex flex-col items-center p-5 lg:p-6">
                  
                    {/* Project Image */}
                    <div
                      className="
                        relative
                        w-full
                        max-w-[280px]
                        aspect-[4/3]
                        overflow-hidden
                        rounded-2xl
                        border
                        border-border
                        bg-gradient-to-br
                        from-primary/10
                        to-primary/5
                        shadow-lg
                        transition-all
                        duration-500
                        group-hover:border-primary/40
                        group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]
                      "
                    >
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="
                          absolute
                          inset-0
                          w-full
                          h-full
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-105
                        "
                      />

                      {/* Subtle overlay */}
                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-black/30
                          via-transparent
                          to-transparent
                        "
                      />

                      {/* Status */}
                      {/* {project.features && (
                        <div className="absolute top-3 left-3">
                          <Badge
                            variant={
                              project.status === "Completed"
                                ? "default"
                                : "secondary"
                            }
                            className="
                              rounded-full
                              px-3
                              py-1
                              text-xs
                              shadow-lg
                              backdrop-blur-md
                            "
                          >
                            {project.status}
                          </Badge>
                        </div>
                      )} */}

                      {/* Project Number */}
                      <div
                        className="
                          absolute
                          bottom-3
                          left-3
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          bg-black/55
                          border
                          border-white/20
                          text-xs
                          font-bold
                          text-white
                          backdrop-blur-md
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                    
                    
                    {/* =========================
                        PROJECT SNAPSHOT
                    ========================= */}
                    {project.snapshot && (
                      <div className="w-full max-w-[280px] mt-4">
                      
                        <p
                          className="
                            mb-2
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.18em]
                            text-muted-foreground
                          "
                        >
                          Project Snapshot
                        </p>
                    
                        <div className="grid grid-cols-3 gap-2">
                          {project.snapshot.map((metric, metricIndex) => (
                            <motion.div
                              key={metricIndex}
                              whileHover={{ y: -2 }}
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                              }}
                              className="
                                rounded-xl
                                border
                                border-primary/10
                                bg-primary/[0.04]
                                px-2
                                py-3
                                text-center
                                transition-all
                                duration-300
                                hover:border-primary/30
                                hover:bg-primary/[0.08]
                              "
                            >
                              <p
                                className="
                                  text-lg
                                  font-bold
                                  leading-none
                                  text-primary
                                "
                              >
                                {metric.value}
                              </p>
                            
                              <p
                                className="
                                  mt-1.5
                                  text-[9px]
                                  font-medium
                                  leading-tight
                                  text-muted-foreground
                                "
                              >
                                {metric.label}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                        
                        
                        {/* =========================
                            PROJECT ACTIONS
                        ========================= */}
                        <div className="mt-4 flex flex-col gap-2">
                        
                          {/* View Code */}
                          <Button
                            variant="outline"
                            size="sm"
                            className="
                              w-full
                              h-10
                              border-primary/50
                              text-primary
                              hover:bg-primary
                              hover:text-primary-foreground
                              transition-all
                              duration-300
                            "
                            asChild
                          >
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              View Code
                            </a>
                          </Button>
                        
                        
                          {/* Live Demo */}
                          <Button
                            size="sm"
                            className="
                              w-full
                              h-10
                              bg-primary
                              hover:bg-primary/90
                              text-primary-foreground
                              shadow-lg
                              hover:shadow-purple
                              transition-all
                              duration-300
                            "
                            asChild
                          >
                            <a
                              href={project.ExternalLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        
                        </div>
                        
                      </div>
                    )}

                  </div>
                  
                  
                  {/* =========================
                      PROJECT CONTENT
                  ========================= */}
                  <div className="flex flex-col p-6 lg:p-7">
                  
                    {/* Title */}
                    <h3
                      className="
                        text-2xl
                        lg:text-3xl
                        font-bold
                        text-foreground
                        mb-2
                        group-hover:text-primary
                        transition-colors
                        duration-300
                      "
                    >
                      {project.title}
                    </h3>
                  
                  
                    {/* Type */}
                    <p className="text-sm font-semibold text-primary mb-1">
                      {project.type}
                    </p>
                  
                  
                    {/* Duration */}
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.duration}
                    </p>
                  
                  
                    {/* Description */}
                    <p
                      className="
                        text-muted-foreground
                        leading-relaxed
                        mb-5
                      "
                    >
                      {project.description}
                    </p>
                  
                  
                    {/* Key Features */}
                    <div className="mb-5">
                  
                      <p className="font-semibold text-foreground mb-2">
                        Key Features
                      </p>
                  
                      <ul className="space-y-2">
                  
                        {project.features.map((feature, i) => (
                          <li
                            key={i}
                            className="
                              flex
                              gap-2
                              text-sm
                              text-muted-foreground
                              leading-relaxed
                            "
                          >
                            <span className="text-primary mt-0.5">
                              •
                            </span>
                        
                            <span>
                              {feature}
                            </span>
                          </li>
                        ))}

                      </ul>
                      
                    </div>
                      
                      
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="
                            text-xs
                            px-3
                            py-1
                            bg-primary/10
                            text-primary
                            border
                            border-primary/10
                            hover:bg-primary
                            hover:text-primary-foreground
                            transition-all
                            duration-300
                          "
                        >
                          {tech}
                        </Badge>
                      ))}

                    </div>
                    
                  </div>
                    
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            asChild
          >
            <a href="https://github.com/priyanshuranjan02?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}