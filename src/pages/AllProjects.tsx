import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Brain,
  BarChart3,
  Code2,
  Database,
  ExternalLink,
  Github,
  Layers3,
  Sparkles,
} from "lucide-react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import healthBotImage from "@/assets/HealthBotLogo.jpeg";
import aadhaarImage from "@/assets/AadhaarInsights_Logo.jpeg";
import swayamSaarthiImage from "@/assets/SwayamSaarthi-Logo.png";

type ProjectCategory = "AI / ML" | "Data Analytics" | "Full Stack";
type Project = {
  title: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  docs?: string;
  image?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "AI HealthBot – AI Symptom Assessment Platform",
    category: "AI / ML",
    description:
      "A multilingual healthcare companion for structured symptom assessment, preliminary guidance and risk-based triage, with secure user and NGO workflows.",
    technologies: ["React", "TypeScript", "Supabase", "Gemini 2.5 Pro", "JWT"],
    github: "https://github.com/priyanshuranjan02/AI-HealthBot-Companion",
    demo: "https://ai-health-bot-companion.vercel.app/",
    image: healthBotImage,
    featured: true,
  },
  {
    title: "Aadhaar Insights Analytics Platform",
    category: "Data Analytics",
    description:
      "An end-to-end public-data analytics platform for Aadhaar enrolment and update datasets, combining interactive dashboards, regional analysis, forecasting and anomaly detection.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Plotly", "Power BI"],
    github: "https://github.com/priyanshuranjan02/Aadhaar-Insights-Analytics-Platform",
    demo: "https://aadhaar-insights.streamlit.app/",
    image: aadhaarImage,
    featured: true,
  },
  {
    title: "Swayam Saarthi",
    category: "Full Stack",
    description:
      "A reverse ride-hailing platform where users request rides and drivers respond to booking requests, supported by role-based portals and real-time ride updates.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Socket.IO"],
    github: "https://github.com/priyanshuranjan02/Swayam-Saarthi",
    demo: "https://swayam-saarthi.vercel.app/",
    image: swayamSaarthiImage,
    featured: true,
  },
  {
    title: "AI-Powered Smart Retail & Customer Intelligence",
    category: "AI / ML",
    description:
      "A smart-retail application combining computer vision for face and product workflows, NLP sentiment analysis, a hybrid FAQ chatbot, and a FastAPI gateway behind a React dashboard.",
    technologies: ["Python", "OpenCV", "MobileNetV2", "TF-IDF", "FastAPI", "React", "Docker"],
    github: "https://github.com/priyanshuranjan02/AI-Smart-Retail-Customer-Intelligence-Platform",
    demo: "https://ai-smart-retail-customer-intelligence.vercel.app/",
    docs: "https://ai-smart-retail-customer-intelligence.onrender.com/docs",
  },
  {
    title: "Smart Retail Analytics & Recommendation Warehouse",
    category: "Data Analytics",
    description:
      "A retail intelligence warehouse built from the UCI Online Retail transactions, with data cleaning, a SQLite star schema, OLAP analysis, RFM customer clustering and Apriori basket recommendations.",
    technologies: ["Python", "SQLite", "Pandas", "Scikit-learn", "Apriori", "Streamlit", "Plotly"],
    github: "https://github.com/priyanshuranjan02/Smart-Retail-And-Recommendation-System",
    demo: "https://smart-retail-analytics-warehouse.streamlit.app/",
    image: "https://raw.githubusercontent.com/priyanshuranjan02/Smart-Retail-And-Recommendation-System/main/reports/figures/screenshots/dashboard_executive_overview.png",
  },
  {
    title: "Aurelia Library Management System",
    category: "Full Stack",
    description:
      "A role-based library workspace for book catalogues, readers, staff and circulation, with secure sessions, BCrypt password hashing, CSRF protection and transactional operations.",
    technologies: ["Java 21", "Spring Boot 3.5", "Spring Security", "MySQL", "Flyway", "JavaScript"],
    github: "https://github.com/priyanshuranjan02/Aurelia-Library",
    demo: "https://aurelia-library-management.onrender.com",
    image: "https://raw.githubusercontent.com/priyanshuranjan02/Aurelia-Library/main/screenshots/current/overview-dashboard.png",
  },
  {
    title: "Customer Churn Prediction Platform",
    category: "AI / ML",
    description:
      "An explainable churn-prediction application that benchmarks machine-learning models and returns churn probability, risk category, customer-level SHAP explanations and retention suggestions.",
    technologies: ["Python", "XGBoost", "SHAP", "Scikit-learn", "FastAPI", "Streamlit", "Tableau"],
    github: "https://github.com/priyanshuranjan02/Customer-Churn-Prediction-Project",
    demo: "https://customer-churn-predict-model02.streamlit.app/",
    docs: "https://customer-churn-prediction-project-tf60.onrender.com/docs",
  },
];

const filters = ["All", "AI / ML", "Data Analytics", "Full Stack"] as const;
type Filter = (typeof filters)[number];

function ProjectVisual({ project }: { project: Project }) {
  const [hasImageError, setHasImageError] = useState(false);
  const VisualIcon =
    project.category === "AI / ML"
      ? Brain
      : project.category === "Data Analytics"
        ? BarChart3
        : Code2;

  if (project.image && !hasImageError) {
    return (
      <img
        src={project.image}
        alt={`${project.title} preview`}
        loading="lazy"
        onError={() => setHasImageError(true)}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/15 via-primary/5 to-accent/10">
      <VisualIcon className="h-16 w-16 text-primary/70" aria-hidden="true" />
    </div>
  );
}

function ProjectsContent() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const visibleProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <header className="mb-14 flex items-center justify-between gap-4">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to portfolio
          </Link>
          <ThemeToggle />
        </header>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <Badge variant="secondary" className="mb-5 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-primary">
            <Sparkles className="mr-2 h-3.5 w-3.5" aria-hidden="true" />
            Project portfolio
          </Badge>
          <h1 className="mb-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            All <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            A broader look at the applications, analytics platforms and machine-learning projects I have built.
            Explore by domain, then open the source repository or live application.
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Filter projects by category">
          {filters.map((filter) => {
            const selected = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                aria-pressed={selected}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                  selected
                    ? "border-primary bg-primary text-primary-foreground shadow-blue"
                    : "border-border bg-card/70 text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {filter}
                <span className="ml-2 text-xs opacity-75">
                  {filter === "All" ? projects.length : projects.filter((project) => project.category === filter).length}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              layout
              className="group h-full"
            >
              <Card className="flex h-full flex-col overflow-hidden border-border bg-card/85 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-blue">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted/50">
                  <ProjectVisual project={project} />
                  <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                    <Badge className="border border-white/20 bg-slate-950/75 text-slate-50 backdrop-blur">
                      {project.category}
                    </Badge>
                    {project.featured && (
                      <Badge className="border border-cyan-300/30 bg-cyan-500/90 text-slate-950">
                        Featured
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h2 className="mb-3 text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </h2>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <Badge key={technology} variant="secondary" className="border border-primary/10 bg-primary/[0.06] text-xs font-medium text-muted-foreground">
                        {technology}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                        GitHub
                        <ArrowUpRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </Button>
                    {project.demo && (
                      <Button asChild size="sm" className="flex-1">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.docs && (
                      <Button asChild size="sm" variant="secondary" className="w-full">
                        <a href={project.docs} target="_blank" rel="noopener noreferrer">
                          <Layers3 className="mr-2 h-4 w-4" aria-hidden="true" />
                          API Docs
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="mb-4 text-sm text-muted-foreground">
            Looking for something else? Visit my GitHub profile for additional repositories.
          </p>
          <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground">
            <a href="https://github.com/priyanshuranjan02?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Database className="mr-2 h-4 w-4" aria-hidden="true" />
              Browse GitHub repositories
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>

        <footer className="mt-16 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <Link to="/" className="font-medium text-primary hover:underline">Priyanshu Ranjan</Link>
          <span> · Project portfolio</span>
        </footer>
      </div>
    </div>
  );
}

export default function AllProjects() {
  return (
    <ThemeProvider>
      <ProjectsContent />
    </ThemeProvider>
  );
}
