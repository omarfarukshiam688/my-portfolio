import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Cpu, Terminal } from 'lucide-react';

interface Skill {
  name: string;
  level: number; // percentage
}

interface SkillCategory {
  id: 'frontend' | 'ai' | 'devtools';
  label: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend Engineering',
    icon: <Code size={18} />,
    skills: [
      { name: 'HTML & Semantic Structure', level: 92 },
      { name: 'CSS & Responsive Design', level: 88 },
      { name: 'Tailwind CSS', level: 78 },
      { name: 'JavaScript (ES6+)', level: 82 },
      { name: 'React Development', level: 75 },
      { name: 'TypeScript (AI-Assisted)', level: 68 },
      { name: 'Framer Motion (AI-Assisted)', level: 65 },
      { name: 'API Integration (AI-Assisted)', level: 65 },
    ],
  },
  {
    id: 'ai',
    label: 'AI-Augmented Development',
    icon: <Cpu size={18} />,
    skills: [
      { name: 'AI Coding Workflows', level: 95 },
      { name: 'Cline', level: 95 },
      { name: 'GitHub Copilot', level: 90 },
      { name: 'OpenCode / Codex', level: 90 },
      { name: 'v0 & Lovable', level: 92 },
      { name: 'Gemini CLI', level: 88 },
      { name: 'Roo Code / Kilo Code', level: 86 },
      { name: 'Rapid AI Prototyping', level: 94 },
    ],
  },
  {
    id: 'devtools',
    label: 'Development & Tools',
    icon: <Terminal size={18} />,
    skills: [
      { name: 'Git & Version Control', level: 78 },
      { name: 'VS Code Workflow', level: 90 },
      { name: 'GitHub Collaboration', level: 82 },
      { name: 'Figma (AI-Assisted UI Workflow)', level: 72 },
      { name: 'Deployment (Vercel / Netlify / Render)', level: 85 },
      { name: 'Agile Development Basics', level: 65 },
      { name: 'Prompt Engineering', level: 92 },
      { name: 'Continuous Learning', level: 98 },
    ],
  },
];

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'frontend' | 'ai' | 'devtools'>('frontend');

  const activeCategory = skillCategories.find((cat) => cat.id === activeTab)!;

  return (
    <section 
      id="skills" 
      className="py-24 bg-white dark:bg-slate-900 border-y border-slate-200/50 dark:border-slate-700/50 text-slate-800 dark:text-slate-100 relative overflow-hidden transition-colors duration-300"
    >
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-brand-primary/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <motion.p 
            className="text-xs font-bold tracking-widest text-brand-primary uppercase"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            Capabilities
          </motion.p>
          <motion.h2 
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p 
            className="text-slate-500 dark:text-slate-400 text-sm sm:text-base"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Building modern web applications from planning and design to deployment, continuous improvements, and real-world product iteration using modern frontend technologies and AI-assisted workflows.
          </motion.p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-slate-100 dark:bg-slate-950 p-1.5 rounded-full border border-slate-200/50 dark:border-slate-700/50 max-w-full overflow-x-auto gap-1">
            {skillCategories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`relative flex items-center space-x-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap focus:outline-none ${
                    isActive 
                      ? 'text-white' 
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeSkillTab"
                      className="absolute inset-0 bg-gradient-to-r from-brand-primary to-purple-600 rounded-full z-0"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{cat.icon}</span>
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills List Grid */}
        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg dark-card-glow min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            >
              {activeCategory.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-slate-700 dark:text-slate-200">{skill.name}</span>
                    <span className="text-brand-primary">{skill.level}%</span>
                  </div>
                  
                  {/* Skill level background track */}
                  <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-300/20 dark:border-slate-700/30">
                    {/* Animated skill fill */}
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-brand-primary to-purple-600"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Skills;
