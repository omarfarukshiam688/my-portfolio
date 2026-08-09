import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Zap, Layers, Target } from 'lucide-react';

interface JourneyItem {
  stage: 'LEARNING' | 'GROWING' | 'BUILDING' | 'FUTURE GOAL';
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  color: string;
}

const journeyItems: JourneyItem[] = [
  {
    stage: 'LEARNING',
    title: 'HTML & CSS Foundations',
    description: 'Started learning semantic HTML, modern CSS, responsive layouts, Flexbox, Grid, typography, spacing, and building static webpages.',
    details: ['Semantic HTML', 'CSS Fundamentals', 'Flexbox', 'CSS Grid', 'Responsive Design', 'UI Layout'],
    icon: <BookOpen size={22} />,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    stage: 'GROWING',
    title: 'JavaScript Development',
    description: 'Learned modern JavaScript, DOM manipulation, ES6+, array methods, asynchronous programming, API integration, and problem solving.',
    details: ['ES6+', 'DOM', 'Async JavaScript', 'Fetch API', 'Array Methods', 'Modern JS'],
    icon: <Code size={22} />,
    color: 'from-brand-primary to-purple-500',
  },
  {
    stage: 'BUILDING',
    title: 'React & Frontend Engineering',
    description: 'Building modern frontend applications using React, reusable components, state management, routing, and scalable project structures.',
    details: ['React', 'Components', 'Hooks', 'Routing', 'State Management', 'Reusable UI'],
    icon: <Zap size={22} />,
    color: 'from-purple-500 to-pink-500',
  },
  {
    stage: 'BUILDING',
    title: 'AI-Accelerated Development',
    description: 'Using AI coding agents and modern development tools to transform ideas into polished frontend applications while continuously deepening my React knowledge through real-world project building.',
    details: ['AI Coding Agents', 'Cline Workflow', 'React Projects', 'Frontend Implementation', 'UI Engineering', 'Rapid Development'],
    icon: <Layers size={22} />,
    color: 'from-pink-500 to-rose-500',
  },
  {
    stage: 'FUTURE GOAL',
    title: 'Freelancing & Product Building',
    description: 'Preparing to build professional frontend projects, work with clients, and eventually grow into creating digital products and businesses.',
    details: ['Client Projects', 'Portfolio', 'Freelancing', 'UI/UX', 'Product Thinking', 'Continuous Learning'],
    icon: <Target size={22} />,
    color: 'from-amber-500 to-orange-500',
  },
];

const Journey: React.FC = () => {
  return (
    <section 
      id="journey" 
      className="py-24 bg-white dark:bg-slate-900 border-y border-slate-200/50 dark:border-slate-700/50 text-slate-800 dark:text-slate-100 relative overflow-hidden transition-colors duration-300"
    >
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-brand-primary/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-pink-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <motion.p 
            className="text-xs font-bold tracking-widest text-brand-primary uppercase"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            Evolution
          </motion.p>
          <motion.h2 
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My Journey
          </motion.h2>
          <motion.p 
            className="text-slate-500 dark:text-slate-400 text-sm sm:text-base"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A structured path of learning, growth, and building modern frontend web experiences.
          </motion.p>
        </div>

        {/* Timeline container */}
        <div className="relative md:ml-12 lg:ml-24">
          
          {/* Vertical line connector (desktop only, fades in on view) */}
          <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-700 z-0 hidden md:block" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {journeyItems.map((item, idx) => {
              return (
                <div key={item.stage} className="relative z-10 flex flex-col md:flex-row items-start md:space-x-8">
                   
                  {/* Timeline icon indicator */}
                  <motion.div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-tr ${item.color} text-white shadow-lg`}
                    initial={{ scale: 0.85, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: idx * 0.08 }}
                  >
                    {item.icon}
                  </motion.div>

                  {/* Journey Content Card */}
                  <motion.div 
                    className="mt-4 md:mt-0 flex-grow bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:border-brand-primary/40 dark:hover:border-brand-primary/40 shadow-md dark-card-glow transition-all duration-300 w-full group"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.08 }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className={`text-xs font-bold tracking-widest px-2.5 py-1 rounded-md bg-gradient-to-r ${item.color} text-white uppercase`}>
                        {item.stage}
                      </span>
                      <span className="text-xs text-slate-400 dark:text-slate-500 font-semibold font-mono">
                        Phase 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-brand-primary transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="border-t border-slate-200/50 dark:border-slate-700/50 pt-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                        Key Areas
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.details.map((detail) => (
                          <span 
                            key={detail} 
                            className="text-xs font-medium px-3 py-1 rounded-full bg-slate-200/50 dark:bg-slate-800 border border-slate-300/30 dark:border-slate-700/30 text-slate-700 dark:text-slate-200"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Journey;
