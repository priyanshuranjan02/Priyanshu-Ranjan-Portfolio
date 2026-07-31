import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { TypingAnimation } from '@/components/TypingAnimation';
import { ParticleBackground } from '@/components/Particles';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/my-profileImage.png';
import resumePdf from "@/assets/Priyanshu Ranjan - Resume.pdf";
import { GraduationCap, FolderKanban, Database } from "lucide-react";
import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaAws,
} from "react-icons/fa";

import { Brain } from "lucide-react";

const typingTexts = [
  'Building AI Applications',
  'Developing Full-Stack Platforms',
  'Analyzing Real-World Data',
  'Learning Cloud Technologies',
  'Solving Real-World Problems'
];

const techStack = [
  {
    name: "Java",
    icon: FaJava,
    color: "#F89820",
    className: "-top-2 left-1/2 -translate-x-1/2",
    delay: "0s",
  },
  {
    name: "Python",
    icon: FaPython,
    color: "#3776AB",
    className: "top-24 -left-10",
    delay: "1s",
  },
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
    className: "top-24 -right-10",
    delay: "2s",
  },
  {
    name: "AI",
    icon: Brain,
    color: "#8B5CF6",
    className: "bottom-28 -left-8",
    delay: "3s",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#68A063",
    className: "bottom-28 -right-10",
    delay: "1.5s",
  },
  {
    name: "AWS",
    icon: FaAws,
    color: "#FF9900",
    className: "-bottom-2 left-1/2 -translate-x-1/2",
    delay: "2.5s",
  },
];

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ParticleBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        {/* Profile Image */}
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-10"
                >
          <motion.div
            className="relative floating w-[420px] h-[420px] flex items-center justify-center"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Blue Glow */}
            <div className="absolute inset-0 w-80 h-80 rounded-full bg-cyan-500/20 blur-[80px] -z-20" />
          
            {/* Purple Glow */}
            <div className="absolute inset-0 w-72 h-72 rounded-full bg-violet-500/20 blur-[80px] translate-x-10 translate-y-10 -z-20" />
          
            {/* Floating Tech Chips */}
            {techStack.map((tech) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.name}
                  className={`tech-chip absolute ${tech.className}`}
                  style={{ animationDelay: tech.delay }}
                  animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                    delay: parseFloat(tech.delay),
                }}
                whileHover={{
                    scale: 1.1,
                }}
              >
                  <Icon
                    size={18}
                    color={tech.color}
                  />

                <span>{tech.name}</span>
              </motion.div>
            );
          })}

        {/* Animated Ring */}
          <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring" }}
          className="gradient-ring"
          >
            <img
              src={profileImage}
              alt="Priyanshu Ranjan"
            className="rounded-full w-full h-full object-cover"
            />
        </motion.div>
          </motion.div>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-montserrat text-gradient mb-4">
            Priyanshu Ranjan
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
            Aspiring Data Analyst | Full Stack AI Developer
          </h2>
          
          {/* Typing Animation */}
          <div className="text-lg md:text-xl text-primary font-medium h-8">
            <TypingAnimation texts={typingTexts} />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          Hi, I'm Priyanshu — CSE undergrad specializing in AI & ML at VIT Bhopal. 
          I build scalable full-stack applications, AI-powered solutions, and data-driven analytics platforms using Java, Python, React, Node.js, SQL, Machine Learning, and Cloud Technologies. Passionate about solving real-world problems through intelligent software and data.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium shadow-purple hover:shadow-glow transition-all duration-300"
            asChild
          >
            <a href={resumePdf} download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
          
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              asChild
            >
              <a href="https://github.com/priyanshuranjan02" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              asChild
            >
              <a href="https://www.linkedin.com/in/priyanshu-ranjan-74170a227" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* CGPA */}
          <div className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <GraduationCap className="h-8 w-8 text-cyan-400 mb-4 transition-transform duration-300 group-hover:rotate-6" />

            <h3 className="text-4xl font-bold text-white">8.75</h3>
            <p className="mt-2 text-lg font-medium text-cyan-300">CGPA</p>
            <p className="text-sm text-gray-400">Academic Performance</p>
          </div>

          {/* Projects */}
          <div className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <FolderKanban className="h-8 w-8 text-cyan-400 mb-4 transition-transform duration-300 group-hover:rotate-6" />

            <h3 className="text-4xl font-bold text-white">3+</h3>
            <p className="mt-2 text-lg font-medium text-cyan-300">
              Production Projects
            </p>
            <p className="text-sm text-gray-400">
              AI • Full Stack • Analytics
            </p>
          </div>

          {/* Analytics */}
          <div className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <Database className="h-8 w-8 text-cyan-400 mb-4 transition-transform duration-300 group-hover:rotate-6" />

            <h3 className="text-4xl font-bold text-white">3.37M+</h3>
            <p className="mt-2 text-lg font-medium text-cyan-300">
              UIDAI Records
            </p>
            <p className="text-sm text-gray-400">
              Data Analytics Platform
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}