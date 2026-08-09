import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journey from './components/Journey';
import CareerGoals from './components/CareerGoals';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col w-full overflow-x-hidden selection:bg-brand-primary/30 selection:text-slate-900 dark:selection:text-white bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
        
        {/* Dark mode animated ambient gradient */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden hidden dark:block">
          <div className="dark-ambient-gradient absolute -top-[40%] -left-[20%] w-[140%] h-[140%] opacity-[0.035]">
            <div className="absolute top-[20%] left-[30%] w-[500px] h-[500px] bg-brand-primary/40 rounded-full blur-[120px]" />
            <div className="absolute top-[50%] right-[20%] w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-[140px]" />
            <div className="absolute bottom-[20%] left-[40%] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px]" />
          </div>
        </div>

        {/* Navigation Header */}
        <Navbar />

        {/* Portfolio Sections */}
        <main className="flex-grow relative z-10">
          {/* Hero Section */}
          <Hero />

          {/* Journey (Timeline) */}
          <Journey />

          {/* Career Goals */}
          <CareerGoals />

          {/* Skills */}
          <Skills />

          {/* Projects Showcase */}
          <Projects />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer Signature */}
        <Footer />
        
      </div>
    </ThemeProvider>
  );
}

export default App;
