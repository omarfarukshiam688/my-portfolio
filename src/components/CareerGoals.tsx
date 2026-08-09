import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Monitor, Cpu, Wallet } from 'lucide-react';

interface GoalItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
}

const goals: GoalItem[] = [
  {
    title: 'Help Brands Grow with Strategy & Creativity',
    description: 'Providing tailored digital solutions that merge visual design, search visibility, conversion-optimized funnels, and clean software architecture.',
    icon: <TrendingUp size={24} />,
    accent: 'bg-brand-primary/10 text-brand-primary border-brand-primary/20',
  },
  {
    title: 'Build High-Quality Frontend Products',
    description: 'Create fast, responsive, and visually polished web applications that deliver excellent user experiences and solve real business problems.',
    icon: <Monitor size={24} />,
    accent: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  },
  {
    title: 'Master AI-Powered Development',
    description: 'Leverage AI coding agents and modern development tools to build better software faster while continuously improving my frontend engineering skills.',
    icon: <Cpu size={24} />,
    accent: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
  },
  {
    title: 'Achieve Financial Freedom Through Technology',
    description: 'Build valuable digital skills, work with international clients, and create digital products that generate long-term income and financial independence.',
    icon: <Wallet size={24} />,
    accent: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 120,
      damping: 18,
    }
  },
};

const CareerGoals: React.FC = () => {
  return (
    <section 
      id="goals" 
      className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 relative overflow-hidden transition-colors duration-300"
    >
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

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
            Vision
          </motion.p>
          <motion.h2 
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Career Goals
          </motion.h2>
          <motion.p 
            className="text-slate-500 dark:text-slate-400 text-sm sm:text-base"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Clear milestones directing my professional efforts, technology investments, and entrepreneurial pursuits.
          </motion.p>
        </div>

        {/* Goals Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {goals.map((goal) => (
            <motion.div
              key={goal.title}
              variants={cardVariants}
              className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-white/14 p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-5 transition-all duration-300 relative group overflow-hidden dark-card-glow goal-card"
            >
              {/* Highlight background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Goal Icon */}
              <div className={`p-3 rounded-xl border flex-shrink-0 ${goal.accent} transition-transform group-hover:scale-110`}>
                {goal.icon}
              </div>

              {/* Goal Content */}
              <div className="space-y-2 relative z-10">
                <h3 className="text-lg font-bold group-hover:text-brand-primary transition-colors duration-300">
                  {goal.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {goal.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Slogan Banner directly from the bottom left of the image */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-brand-primary to-purple-600 p-8 rounded-3xl text-center text-white shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle light leak effects */}
          <div className="absolute -top-10 -left-10 w-[200px] h-[200px] bg-white/10 rounded-full blur-[40px]" />
          <div className="absolute -bottom-10 -right-10 w-[200px] h-[200px] bg-purple-400/20 rounded-full blur-[40px]" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-200">Personal Philosophy</p>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-wide uppercase">
              DON'T BE THE SAME. BE BETTER!
            </h3>
            <p className="text-sm text-slate-100 max-w-lg mx-auto">
              Aligning daily action, structured work, and lifelong learning to unlock complete autonomy and build lasting digital products.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CareerGoals;
