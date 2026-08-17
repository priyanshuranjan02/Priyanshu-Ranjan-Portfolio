// import { motion } from 'framer-motion';
// import { Download, Github, Linkedin, Mail } from 'lucide-react';
// import { TypingAnimation } from '@/components/TypingAnimation';
// import { ParticleBackground } from '@/components/Particles';
// import { Button } from '@/components/ui/button';
// import profileImage from '@/assets/my-profileImage.png';
// import resumePdf from "@/assets/Priyanshu Ranjan - Resume.pdf";
// import { GraduationCap, FolderKanban, Database } from "lucide-react";
// import {
//   FaJava,
//   FaPython,
//   FaReact,
//   FaNodeJs,
//   FaAws,
// } from "react-icons/fa";

// import { Brain } from "lucide-react";

// const typingTexts = [
//   'Building AI Applications',
//   'Developing Full-Stack Platforms',
//   'Analyzing Real-World Data',
//   'Learning Cloud Technologies',
//   'Solving Real-World Problems'
// ];

// const techStack = [
//   {
//     name: "Java",
//     icon: FaJava,
//     color: "#F89820",
//     className: "-top-2 left-1/2 -translate-x-1/2",
//     delay: "0s",
//   },
//   {
//     name: "Python",
//     icon: FaPython,
//     color: "#3776AB",
//     className: "top-24 -left-10",
//     delay: "1s",
//   },
//   {
//     name: "React",
//     icon: FaReact,
//     color: "#61DAFB",
//     className: "top-24 -right-10",
//     delay: "2s",
//   },
//   {
//     name: "AI",
//     icon: Brain,
//     color: "#8B5CF6",
//     className: "bottom-28 -left-8",
//     delay: "3s",
//   },
//   {
//     name: "Node.js",
//     icon: FaNodeJs,
//     color: "#68A063",
//     className: "bottom-28 -right-10",
//     delay: "1.5s",
//   },
//   {
//     name: "AWS",
//     icon: FaAws,
//     color: "#FF9900",
//     className: "-bottom-2 left-1/2 -translate-x-1/2",
//     delay: "2.5s",
//   },
// ];

// export function Hero() {
//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       <ParticleBackground />
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
//         {/* Profile Image */}
//         {/* Profile Image */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
//           className="flex justify-center mb-10"
//                 >
//           <motion.div
//             className="relative floating w-[420px] h-[420px] flex items-center justify-center"
//             animate={{
//               y: [0, -10, 0],
//             }}
//             transition={{
//               duration: 6,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           >
//             {/* Blue Glow */}
//             <div className="absolute inset-0 w-80 h-80 rounded-full bg-cyan-500/20 blur-[80px] -z-20" />
          
//             {/* Purple Glow */}
//             <div className="absolute inset-0 w-72 h-72 rounded-full bg-violet-500/20 blur-[80px] translate-x-10 translate-y-10 -z-20" />
          
//             {/* Floating Tech Chips */}
//             {techStack.map((tech) => {
//             const Icon = tech.icon;

//             return (
//               <motion.div
//                 key={tech.name}
//                   className={`tech-chip absolute ${tech.className}`}
//                   style={{ animationDelay: tech.delay }}
//                   animate={{ y: [0, -6, 0] }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                     delay: parseFloat(tech.delay),
//                 }}
//                 whileHover={{
//                     scale: 1.1,
//                 }}
//               >
//                   <Icon
//                     size={18}
//                     color={tech.color}
//                   />

//                 <span>{tech.name}</span>
//               </motion.div>
//             );
//           })}

//         {/* Animated Ring */}
//           <motion.div
//           whileHover={{ scale: 1.04 }}
//           transition={{ type: "spring" }}
//           className="gradient-ring"
//           >
//             <img
//               src={profileImage}
//               alt="Priyanshu Ranjan"
//             className="rounded-full w-full h-full object-cover"
//             />
//         </motion.div>
//           </motion.div>
//         </motion.div>

//         {/* Name and Title */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="mb-6"
//         >
//           <h1 className="text-5xl md:text-7xl font-bold font-montserrat text-gradient mb-4">
//             Priyanshu Ranjan
//           </h1>
//           <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
//             Aspiring Data Analyst | Full Stack AI Developer
//           </h2>
          
//           {/* Typing Animation */}
//           <div className="text-lg md:text-xl text-primary font-medium h-8">
//             <TypingAnimation texts={typingTexts} />
//           </div>
//         </motion.div>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed"
//         >
//           Hi, I'm Priyanshu — CSE undergrad specializing in AI & ML at VIT Bhopal. 
//           I build scalable full-stack applications, AI-powered solutions, and data-driven analytics platforms using Java, Python, React, Node.js, SQL, Machine Learning, and Cloud Technologies. Passionate about solving real-world problems through intelligent software and data.
//         </motion.p>

//         {/* Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//           className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
//         >
//           <Button
//             size="lg"
//             className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium shadow-purple hover:shadow-glow transition-all duration-300"
//             asChild
//           >
//             <a href={resumePdf} download>
//               <Download className="mr-2 h-5 w-5" />
//               Download Resume
//             </a>
//           </Button>
          
//           <div className="flex gap-4">
//             <Button
//               variant="outline"
//               size="lg"
//               className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
//               asChild
//             >
//               <a href="https://github.com/priyanshuranjan02" target="_blank" rel="noopener noreferrer">
//                 <Github className="mr-2 h-5 w-5" />
//                 GitHub
//               </a>
//             </Button>
            
//             <Button
//               variant="outline"
//               size="lg"
//               className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
//               asChild
//             >
//               <a href="https://www.linkedin.com/in/priyanshu-ranjan-74170a227" target="_blank" rel="noopener noreferrer">
//                 <Linkedin className="mr-2 h-5 w-5" />
//                 LinkedIn
//               </a>
//             </Button>
//           </div>
//         </motion.div>

//         <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
//           {/* CGPA */}
//           <div className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]">
//             <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

//             <GraduationCap className="h-8 w-8 text-cyan-400 mb-4 transition-transform duration-300 group-hover:rotate-6" />

//             <h3 className="text-4xl font-bold text-white">8.75</h3>
//             <p className="mt-2 text-lg font-medium text-cyan-300">CGPA</p>
//             <p className="text-sm text-gray-400">Academic Performance</p>
//           </div>

//           {/* Projects */}
//           <div className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]">
//             <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

//             <FolderKanban className="h-8 w-8 text-cyan-400 mb-4 transition-transform duration-300 group-hover:rotate-6" />

//             <h3 className="text-4xl font-bold text-white">3+</h3>
//             <p className="mt-2 text-lg font-medium text-cyan-300">
//               Production Projects
//             </p>
//             <p className="text-sm text-gray-400">
//               AI • Full Stack • Analytics
//             </p>
//           </div>

//           {/* Analytics */}
//           <div className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]">
//             <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

//             <Database className="h-8 w-8 text-cyan-400 mb-4 transition-transform duration-300 group-hover:rotate-6" />

//             <h3 className="text-4xl font-bold text-white">3.37M+</h3>
//             <p className="mt-2 text-lg font-medium text-cyan-300">
//               UIDAI Records
//             </p>
//             <p className="text-sm text-gray-400">
//               Data Analytics Platform
//             </p>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2, duration: 0.8 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         >
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
//           >
//             <motion.div
//               animate={{ y: [0, 12, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="w-1 h-3 bg-primary rounded-full mt-2"
//             />
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Brain, Database, Download, FolderKanban, GraduationCap, Github, Linkedin, Sparkles } from "lucide-react";
import { FaAws, FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa";

// ---- adjust these two to your project ----
import profileImage from "@/assets/my-profileImage.png";
import resumePdf from "@/assets/Priyanshu Ranjan - Resume.pdf";
const resumeUrl = resumePdf;
const links = {
  github: "https://github.com/priyanshuranjan02",
  linkedin: "https://www.linkedin.com/in/priyanshu-ranjan-74170a227",
};
// -----------------------------------------

const typingTexts = [
  "Building AI Applications",
  "Developing Full-Stack Platforms",
  "Analyzing Real-World Data",
  "Learning Cloud Technologies",
  "Solving Real-World Problems",
];

const techChips = [
  { name: "Java", icon: FaJava, color: "#F89820", position: "-top-1 left-1/2 -translate-x-1/2", delay: "0s" },
  { name: "Python", icon: FaPython, color: "#3776AB", position: "top-16 -left-6 sm:-left-12", delay: "1s" },
  { name: "React", icon: FaReact, color: "#61DAFB", position: "top-16 -right-6 sm:-right-12", delay: "2s" },
  { name: "AI", icon: Brain, color: "#A78BFA", position: "bottom-16 -left-4 sm:-left-10", delay: "3s" },
  { name: "Node.js", icon: FaNodeJs, color: "#68A063", position: "bottom-16 -right-4 sm:-right-10", delay: "5s" },
  { name: "AWS", icon: FaAws, color: "#FF9900", position: "-bottom-1 left-1/2 -translate-x-1/2", delay: "2.5s" },
];

const stats = [
  { icon: GraduationCap, value: "8.76", label: "CGPA", caption: "Academic Performance" },
  { icon: FolderKanban, value: "5+", label: "Production Projects", caption: "AI • Full Stack • Analytics" },
  { icon: Database, value: "3.37M+", label: "UIDAI Records", caption: "Data Analytics Platform" },
];

function Typing({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = texts[index] ?? "";

    const t = setTimeout(
      () => {
        if (!deleting && text === full) {
          setDeleting(true);
          return;
        }

        if (deleting && text === "") {
          setDeleting(false);
          setIndex((i) => (i + 1) % texts.length);
          return;
        }

        setText(
          full.substring(
            0,
            text.length + (deleting ? -1 : 1)
          )
        );
      },
      !deleting && text === full
        ? 1800
        : deleting
        ? 40
        : 85
    );

    return () => clearTimeout(t);
  }, [text, deleting, index, texts]);

  return <>{text}</>;
}


/* Floating technology chip */
function TechChip({
  tech,
}: {
  tech: {
    name: string;
    icon: React.ElementType;
    color: string;
  };
}) {
  const Icon = tech.icon;

  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.05,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 20,
      }}
      className="
        group
        flex items-center gap-2
        rounded-full
        border border-white/[0.12]
        bg-slate-900/85
        px-5 py-3
        text-sm font-semibold text-white
        backdrop-blur-xl

        shadow-[0_6px_20px_rgba(15,23,42,0.45),0_0_14px_rgba(59,130,246,0.12)]

        transition-all duration-300

        hover:border-cyan-400/70
        hover:bg-slate-800/95
        hover:shadow-[0_8px_25px_rgba(15,23,42,0.5),0_0_28px_rgba(34,211,238,0.28)]
      "
    >
      <Icon
        className="
          h-4 w-4 shrink-0
          transition-all duration-300
          group-hover:scale-110
        "
        style={{
          color: tech.color,
        }}
      />

      <span
        className="
          transition-colors duration-300
          group-hover:text-cyan-300
        "
      >
        {tech.name}
      </span>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Copy */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs font-semibold tracking-[0.16em] uppercase text-slate-300 backdrop-blur"
            >
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06 }}
              className="mt-6 text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-6xl"
            >
              Priyanshu{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                Ranjan
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-4 text-lg font-semibold sm:text-xl"
            >
              Aspiring Data Analyst | Full-Stack Developer | AI/ML Enthusiast
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-3 min-h-8 font-mono text-base text-blue-400 sm:text-lg"
            >
              <Typing texts={typingTexts} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 lg:mx-0"
            >
              Hi, I'm Priyanshu — CSE undergrad specializing in AI &amp; ML at VIT Bhopal. I build scalable
              full-stack applications, AI-powered solutions, and data-driven analytics platforms using Java,
              Python, React, Node.js, SQL, Machine Learning, and Cloud Technologies. Passionate about solving
              real-world problems through intelligent software and data.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <a
                href={resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-3 text-sm font-bold text-white shadow-[0_18px_40px_-22px_#3b82f6] transition-transform hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold transition-colors hover:border-blue-500/50 hover:text-blue-400"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold transition-colors hover:border-blue-500/50 hover:text-blue-400"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Portrait + Floating Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="order-1 flex justify-center lg:order-2"
          >
            <div className="relative h-[340px] w-[340px] sm:h-[460px] sm:w-[460px]">
          
              {/* Subtle Profile Glow */}
              <div className="absolute inset-12 rounded-full bg-blue-500/15 blur-[70px]" />

              <div className="absolute inset-20 rounded-full bg-violet-500/10 blur-[80px]" />
          
              {/* Profile Image */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  inset-[38px]
                  z-10
                  rounded-full
                  bg-[linear-gradient(135deg,#38bdf8,#6366f1,#8b5cf6)]
                  p-[3px]
                  shadow-[0_0_25px_rgba(59,130,246,0.55),0_0_60px_rgba(99,102,241,0.30)]
                "
              >
                <div
                  className="
                    h-full
                    w-full
                    rounded-full
                    bg-slate-950
                    p-[5px]
                    overflow-hidden
                  "
                >
                  <img
                    src={profileImage}
                    alt="Portrait of Priyanshu Ranjan"
                    loading="eager"
                    draggable={false}
                    className="
                      h-full
                      w-full
                      rounded-full
                      object-cover
                      !transform-none
                      [transform:rotate(0deg)]
                    "
                  />
                </div>
              </motion.div>
              
              {/* Java — Top */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-[-12px] z-20 -translate-x-1/2"
              >
                <TechChip tech={techChips[0]} />
              </motion.div>
              
              {/* Python — Upper Left */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
                className="absolute left-[-28px] top-[18%] z-20 sm:left-[-42px]"
              >
                <TechChip tech={techChips[1]} />
              </motion.div>
              
              {/* React — Upper Right */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
                className="absolute right-[-28px] top-[18%] z-20 sm:right-[-42px]"
              >
                <TechChip tech={techChips[2]} />
              </motion.div>
              
              {/* AI — Lower Left */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.1,
                }}
                className="absolute bottom-[23%] left-[-24px] z-20 sm:left-[-38px]"
              >
                <TechChip tech={techChips[3]} />
              </motion.div>
              
              {/* Node.js — Lower Right */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 4.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="absolute bottom-[23%] right-[-24px] z-20 sm:right-[-38px]"
              >
                <TechChip tech={techChips[4]} />
              </motion.div>
              
              {/* AWS — Bottom */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.9,
                }}
                className="absolute bottom-[-14px] left-1/2 z-20 -translate-x-1/2"
              >
                <TechChip tech={techChips[5]} />
              </motion.div>
              
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
          
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + i * 0.1,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="
                  group
                  rounded-2xl
                  border border-white/[0.10]
                  bg-white/5
                  p-6
                  backdrop-blur-xl
              
                  shadow-[0_6px_20px_rgba(15,23,42,0.40)]
              
                  transition-all
                  duration-300
              
                  hover:border-cyan-400/60
                  hover:bg-slate-800/70
                  hover:shadow-[0_8px_25px_rgba(15,23,42,0.45),0_0_28px_rgba(34,211,238,0.22)]
                "
              >
                <div className="flex items-center gap-3">
                  <span
                    className="
                      grid
                      h-10
                      w-10
                      shrink-0
                      place-items-center
                      rounded-xl
                      bg-blue-500/15
                      text-blue-400
              
                      transition-all
                      duration-300
              
                      group-hover:bg-cyan-400/15
                      group-hover:text-cyan-400
                    "
                  >
                    <Icon className="h-5 w-5" />
                  </span>
              
                  <p className="text-3xl font-bold">
                    {stat.value}
                  </p>
                </div>
              
                <p className="mt-4 text-sm font-semibold">
                  {stat.label}
                </p>
              
                <p className="text-sm text-slate-400">
                  {stat.caption}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase transition-colors hover:text-blue-400"
          >
            Scroll
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;