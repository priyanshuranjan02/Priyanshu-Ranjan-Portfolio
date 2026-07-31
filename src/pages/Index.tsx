import { ThemeProvider } from '@/contexts/ThemeContext';
import { Navbar } from '@/components/Navbar';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Education } from '@/components/sections/Education';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
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
        
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default Index;
