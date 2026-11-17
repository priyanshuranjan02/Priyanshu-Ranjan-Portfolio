// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X } from 'lucide-react';
// import profileImage from '@/assets/my-profileImage.png';
// import { ThemeToggle } from "@/components/ThemeToggle";


// const navItems = [
//   { name: 'Home', href: '#home' },
//   { name: 'About', href: '#about' },
//   { name: 'Education', href: '#education' },
//   { name: 'Skills', href: '#skills' },
//   { name: 'Projects', href: '#projects' },
//   { name: 'Experience', href: '#experience' },
//   { name: 'Contact', href: '#contact' }
// ];

// export function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100);
      
//       // Update active section based on scroll position
//       const sections = navItems.map(item => item.href.slice(1));
//       const scrollPosition = window.scrollY + 100;
      
//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const offsetTop = element.offsetTop;
//           const offsetHeight = element.offsetHeight;
          
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href);
//     element?.scrollIntoView({ behavior: 'smooth' });
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled 
//           ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-lg' 
//           : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo with profile image */}
//           <motion.div 
//             className="flex items-center space-x-3"
//             whileHover={{ scale: 1.05 }}
//           >
//             <motion.img
//               src={profileImage}
//               alt="Shrish"
//               className="w-12 h-12 rounded-full object-cover border-2 border-primary"
//             />
//             <motion.span 
//               className="text-xl font-bold font-montserrat text-gradient"
//             >
//               Priyanshu Ranjan
//             </motion.span>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="flex items-center space-x-8">
//               {navItems.map((item) => (
//                 <motion.button
//                   key={item.name}
//                   onClick={() => scrollToSection(item.href)}
//                   className={`px-3 py-2 text-sm font-medium transition-colors relative ${
//                     activeSection === item.href.slice(1)
//                       ? 'text-primary'
//                       : 'text-muted-foreground hover:text-foreground'
//                   }`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {item.name}
//                   {activeSection === item.href.slice(1) && (
//                     <motion.div
//                       className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
//                       layoutId="activeSection"
//                       initial={false}
//                       transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                     />
//                   )}
//                 </motion.button>
//               ))}
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <motion.button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="text-foreground hover:text-primary transition-colors"
//               whileTap={{ scale: 0.95 }}
//             >
//               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </motion.button>
//           </div>
//         </div>
//       </div>

      
//       {/* Mobile Navigation */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
//           >
//             <div className="px-4 py-6 space-y-4">
//               {navItems.map((item, index) => (
//                 <motion.button
//                   key={item.name}
//                   onClick={() => scrollToSection(item.href)}
//                   className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${
//                     activeSection === item.href.slice(1)
//                       ? 'text-primary bg-primary/10'
//                       : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
//                   } rounded-lg`}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {item.name}
//                 </motion.button>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }


import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImage from '@/assets/my-profileImage.png';
import { ResumeDropdown } from '@/components/ResumeDropdown';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const y = window.scrollY + 140;
      for (const item of navItems) {
        const el = document.getElementById(item.href.slice(1));
        if (el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActiveSection(item.href.slice(1));
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        aria-label="Primary"
        className={`transition-all duration-300 ${
          isScrolled
            ? 'border-b border-white/10 bg-slate-950/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          {/* Brand */}
          <button
            type="button"
            onClick={() => scrollToSection('#home')}
            className="flex min-w-0 items-center gap-3 text-left"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-violet-500 p-[2px]">
              <img
                src={profileImage}
                alt="Priyanshu Ranjan"
                className="h-full w-full rounded-full bg-slate-950 object-cover"
              />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-bold text-white sm:text-base">
                Priyanshu Ranjan
              </span>
              <span className="hidden text-[11px] font-medium text-slate-400 sm:block">
                AI/ML • Full-Stack • Analytics
              </span>
            </span>
          </button>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md lg:flex">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <li key={item.name}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(item.href)}
                      aria-current={isActive ? 'true' : undefined}
                      className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                        isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                          className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                        />
                      )}
                      {item.name}
                    </button>
                  </li>
                );
              })}
            </ul>

            <ResumeDropdown variant="navbar" />

            {/* <ThemeToggle />

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 lg:hidden"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button> */}
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl lg:hidden"
            >
              <ul className="space-y-1 px-4 py-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(item.href)}
                      className={`w-full rounded-xl px-4 py-3 text-left text-base font-medium transition-colors ${
                        activeSection === item.href.slice(1)
                          ? 'bg-blue-500/15 text-blue-300'
                          : 'text-slate-400 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
                <li>
                  <ResumeDropdown variant="mobile" />
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

export default Navbar;