import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

import { ThemeProvider } from "@/contexts/ThemeContext";
import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";


/* =========================================================
   BACKGROUND PARTICLES
========================================================= */

const particles = [
  { left: "8%", top: "16%", size: 3, delay: 0 },
  { left: "18%", top: "38%", size: 2, delay: 1.5 },
  { left: "29%", top: "12%", size: 2, delay: 3 },
  { left: "41%", top: "28%", size: 3, delay: 2 },
  { left: "52%", top: "14%", size: 2, delay: 4 },
  { left: "64%", top: "34%", size: 3, delay: 1 },
  { left: "76%", top: "18%", size: 2, delay: 2.5 },
  { left: "88%", top: "42%", size: 3, delay: 4.5 },

  { left: "12%", top: "58%", size: 2, delay: 2 },
  { left: "24%", top: "72%", size: 3, delay: 4 },
  { left: "36%", top: "54%", size: 2, delay: 1 },
  { left: "48%", top: "82%", size: 3, delay: 3.5 },
  { left: "59%", top: "62%", size: 2, delay: 2.5 },
  { left: "71%", top: "78%", size: 3, delay: 0.5 },
  { left: "83%", top: "60%", size: 2, delay: 3 },
  { left: "94%", top: "84%", size: 3, delay: 1.5 },
];


/* =========================================================
   AMBIENT BACKGROUND
========================================================= */

function AmbientBackground() {
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const smoothX = useSpring(mouseX, {
    stiffness: 40,
    damping: 25,
    mass: 0.8,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 40,
    damping: 25,
    mass: 0.8,
  });

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set((event.clientX / window.innerWidth) * 100);
      mouseY.set((event.clientY / window.innerHeight) * 100);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY, shouldReduceMotion]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >

      {/* =====================================================
          LARGE AMBIENT BLUE GLOW
      ===================================================== */}

      <motion.div
        className="ambient-orb ambient-orb-blue"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 80, -40, 0],
                y: [0, -50, 40, 0],
                scale: [1, 1.08, 0.96, 1],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          CYAN GLOW
      ===================================================== */}

      <motion.div
        className="ambient-orb ambient-orb-cyan"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -70, 40, 0],
                y: [0, 50, -30, 0],
                scale: [1, 0.94, 1.06, 1],
              }
        }
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          SOFT LIGHT-BLUE ORB
      ===================================================== */}

      <motion.div
        className="ambient-orb ambient-orb-sky"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 50, -60, 0],
                y: [0, 40, -50, 0],
              }
        }
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          MOUSE FOLLOWING BLUE GLOW
      ===================================================== */}

      {!shouldReduceMotion && (
        <motion.div
          className="cursor-glow"
          style={{
            left: smoothX,
            top: smoothY,
          }}
        />
      )}

      {/* =====================================================
          FLOATING PARTICLES
      ===================================================== */}

      <div className="absolute inset-0">
        {particles.map((particle, index) => (
          <motion.span
            key={index}
            className="ambient-particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
            }}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, -12, 0, 10, 0],
                    opacity: [0.15, 0.5, 0.2, 0.4, 0.15],
                    scale: [1, 1.3, 0.9, 1.15, 1],
                  }
            }
            transition={{
              duration: 7,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* =====================================================
          VERY SUBTLE GRID
      ===================================================== */}

      <div className="ambient-grid" />

      {/* =====================================================
          TOP / BOTTOM VIGNETTE
      ===================================================== */}

      <div className="ambient-vignette" />

    </div>
  );
}


/* =========================================================
   MAIN PAGE
========================================================= */

const Index = () => {
  return (
    <ThemeProvider>

      <div
        className="relative min-h-screen overflow-x-clip bg-background text-foreground"
      >

        {/* Global animated background */}
        <AmbientBackground />

        {/* Main website content */}
        <div className="relative z-10">

          <Navbar />

          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Education />
            <Experience />
            <Contact />
          </main>

        </div>

        {/* Theme toggle stays above background */}
        <div className="relative z-50">
          <ThemeToggle />
        </div>

      </div>

    </ThemeProvider>
  );
};

export default Index;