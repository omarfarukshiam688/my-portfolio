import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';

const Github = (props: React.SVGProps<SVGSVGElement> & { size?: number }) => {
  const { size = 24, ...rest } = props;
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...rest}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
};

interface Project {
  title: string;
  category: 'frontend' | 'fullstack' | 'in-progress';
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  status?: 'live' | 'coming-soon';
}

const projects: Project[] = [
  {
    title: 'Amar Shopno',
    category: 'fullstack',
    description: 'A modern homemade food eCommerce platform where customers can explore authentic homemade products, learn about the brand, and place orders through a clean, responsive interface. This project is actively being improved with new features and UI enhancements.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'AI-Assisted Development'],
    image: '/amar-shopno-thumbnail.jpg',
    liveUrl: 'https://amar-shopno-438m.onrender.com',
    status: 'live',
  },
  {
    title: 'More Projects Coming Soon',
    category: 'in-progress',
    description: "I'm continuously building new frontend and full-stack projects. As I complete and polish them, they'll be added here.",
    tags: ['React', 'AI', 'Full Stack', 'UI/UX'],
    image: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
    status: 'coming-soon',
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'fullstack'>('all');

  const filteredProjects = projects.filter(
    (p) => filter === 'all' || p.category === filter
  );

  return (
    <section 
      id="projects" 
      className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 relative overflow-hidden transition-colors duration-300"
    >
      <div className="absolute top-1/3 right-0 w-[350px] h-[350px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <motion.p 
            className="text-xs font-bold tracking-widest text-brand-primary uppercase"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            Showcase
          </motion.p>
          <motion.h2 
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-slate-500 dark:text-slate-400 text-sm sm:text-base"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A collection of real projects documenting my journey as a frontend developer. Every project reflects something I've learned, built, or continue to improve.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex justify-center space-x-2 mb-12">
          {['all', 'frontend', 'fullstack'].map((category) => {
            const isActive = filter === category;
            return (
              <button
                key={category}
                onClick={() => setFilter(category as any)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full border transition-all duration-300 capitalize ${
                  isActive
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-md'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={filter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl overflow-hidden shadow-md group flex flex-col h-full hover:border-brand-primary/50 hover:shadow-lg dark-card-glow-hover transition-all duration-300"
              >
                {/* Image Placeholder with Gradient & Icon */}
                <div 
                  className="w-full aspect-video flex items-center justify-center relative overflow-hidden"
                  style={!project.image.startsWith('linear-gradient') ? {} : { background: project.image }}
                >
                  {!project.image.startsWith('linear-gradient') && (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover absolute inset-0" />
                  )}
                  
                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 bg-black/10 opacity-30 mix-blend-overlay" />
                  
                  {project.image.startsWith('linear-gradient') && (
                    <Layers size={48} className="text-white/40 group-hover:scale-110 transition-transform duration-500" />
                  )}
                  
                  {/* Floating category tag */}
                  <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white text-[10px] tracking-widest font-extrabold uppercase px-2.5 py-1 rounded-md border border-white/10">
                    {project.category}
                  </span>

                  {project.status === 'live' && (
                    <span className="absolute top-4 right-4 bg-green-500/90 text-white text-[10px] tracking-widest font-extrabold uppercase px-2.5 py-1 rounded-md">
                      LIVE PROJECT
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2.5">
                    <h3 className="text-lg sm:text-xl font-bold group-hover:text-brand-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200/30 dark:border-slate-700/40 text-slate-500 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    {project.status === 'coming-soon' ? (
                      <div className="pt-2 border-t border-slate-200/40 dark:border-slate-700/40">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                          Currently Building
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-4 pt-2 border-t border-slate-200/40 dark:border-slate-700/40 text-sm font-semibold">
                        <a 
                          href={project.liveUrl} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1.5 text-slate-700 dark:text-slate-300 hover:text-brand-primary dark:hover:text-brand-primary transition-colors"
                        >
                          <ExternalLink size={15} />
                          <span>Live Demo</span>
                        </a>
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl} 
                            className="flex items-center space-x-1.5 text-slate-700 dark:text-slate-300 hover:text-brand-primary dark:hover:text-brand-primary transition-colors"
                          >
                            <Github size={15} />
                            <span>Codebase</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Projects;
