import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import {
  Brain,
  Database,
  Target,
  Code2,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A brief introduction to who I am, what I do, and where I’m heading...
          </p>
        </motion.div>

        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <Card className="relative p-8 md:p-10 bg-card border border-border shadow-blue hover:shadow-glow transition-all duration-500">

            {/* Glow Border */}
            <div className="absolute inset-0 rounded-lg pointer-events-none bg-gradient-to-r from-primary/20 via-transparent to-accent/20 opacity-0 hover:opacity-100 transition-opacity duration-500" />

            <div className="relative space-y-8">

              {/* Intro */}
              <div className="space-y-8">

              <p className="text-lg leading-relaxed text-foreground">
              I'm a <span className="text-primary font-semibold">Computer Science (AI & ML) undergraduate</span> at
              <span className="text-primary font-semibold"> VIT Bhopal University</span> with a passion for building
              AI-powered applications, scalable full-stack systems, and data-driven analytics solutions.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
              My interests lie at the intersection of
              <span className="text-primary font-medium"> Artificial Intelligence</span>,
              <span className="text-primary font-medium"> Full-Stack Development</span>, and
              <span className="text-primary font-medium"> Data Analytics</span>, where I enjoy transforming ideas and data into practical software products.
              </p>

              </div>

              {/* Highlights */}
              <div className="grid md:grid-cols-2 gap-6 mt-10">

                {/* What I Build */}
                <Card className="p-6 bg-background/30 border-border hover:border-primary/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,.18)] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Code2 className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">What I Build</h3>
                  </div>

                  <ul className="space-y-3 text-muted-foreground">
                    <li>• AI-powered Applications</li>
                    <li>• Scalable Full-Stack Platforms</li>
                    <li>• Data Analytics Dashboards</li>
                    <li>• REST APIs & Backend Services</li>
                    <li>• Cloud-enabled Software Solutions</li>
                  </ul>
                </Card>

                {/* Core Expertise */}
                <Card className="p-6 bg-background/30 border-border hover:border-primary/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,.18)] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Brain className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Core Expertise</h3>
                  </div>

                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Java & Python</li>
                    <li>• React & Node.js</li>
                    <li>• SQL & MongoDB</li>
                    <li>• Machine Learning</li>
                    <li>• Cloud Technologies</li>
                  </ul>
                </Card>

              </div>

              {/* Goal */}
              <Card className="p-6 bg-background/30 border-border hover:border-primary/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,.18)] transition-all duration-300">

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <BriefcaseBusiness className="w-6 h-6 text-primary" />
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold mb-3">
                      Career Goal
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">

                      Seeking opportunities in
                      <span className="text-foreground font-semibold">
                        {" "}Data Analytics, Full-Stack Development,
                        and AI/ML Engineering{" "}
                      </span>
                      where I can contribute to impactful products,
                      solve real-world problems,
                      and continue growing as a software engineer.

                    </p>

                  </div>

                </div>

              </Card>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}