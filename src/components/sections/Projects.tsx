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
      status: "Completed",
      image: healthBotImage,
      githubUrl: "https://github.com/priyanshuranjan02/AI-HealthBot-Companion",
      ExternalLink: "https://ai-health-bot-companion.vercel.app/"
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
      technologies: ["Python", "Pandas", "NumPy", "Plotly", "Matplotlib", "Scikit-Learn", "RandomForest", "Linear Regression", "Power BI"],
      status: "Completed",
      image: aadharInsightsImage,
      githubUrl: "https://github.com/priyanshuranjan02/Aadhaar-Insights-Analytics-Platform",
      ExternalLink: "https://aadhaar-insights.streamlit.app/"
  },
  {
    title: "Swayam Saarthi",
      type: "Full-Stack MERN Platform",
      duration: "December 2025 – Ongoing",
      description: "Developed a reverse ride-hailing platform where users request rides and nearby drivers compete through a bidding workflow. The platform provides secure authentication, role-based dashboards, booking lifecycle management, and real-time driver interaction.",
      features: [
        "Developed a full-stack reverse ride-hailing platform with 15 React pages, 28+ REST APIs, 5 MongoDB collections, and 3 role-based portals (User, Driver, Admin).",
        "Implemented a 5-stage booking lifecycle with JWT authentication, RBAC, and responsive dashboards for seamless user and driver experiences.",
        "Built a scalable MERN architecture using 20+ reusable React components, Socket.IO real-time communication, and modular backend services for booking and ride management."
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Google Maps API", "JWT"],
      status: "In Development",
      image: swayamSaarthiImage,
    githubUrl: "https://github.com/priyanshuranjan02/Swayam-Saarthi"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="overflow-hidden bg-card border-border shadow-lg hover:shadow-purple transition-all duration-500 h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/20 to-primary/5">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {project.features && (
                    <div className="absolute top-4 left-4">
                      {/* <Badge className="bg-primary text-primary-foreground">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge> */}
                      <Badge 
                        variant={project.status === "Completed" ? "default" : "secondary"}
                        className="px-3 py-1"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Type */}
                  <p className="text-sm font-medium text-primary mb-1">
                    {project.type}
                  </p>

                  {/* Duration */}
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.duration}
                  </p>

                  {/* Project Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  {/* Key Features */}
                  <div className="mb-4">
                    <p className="font-semibold text-foreground mb-2">
                      Key Features:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary">•</span>
                          {feature}
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
                        className="text-xs bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-purple transition-all duration-300"
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