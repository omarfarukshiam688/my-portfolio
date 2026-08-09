import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import shiamHeroFallback from '../assets/shiam-hero.jpg';

const HERO_IMAGE = '/shiam-hero.jpg';

const PARTICLE_COUNT = 30;

const Hero: React.FC = () => {
  const [heroImg, setHeroImg] = useState(HERO_IMAGE);

  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 6,
        duration: Math.random() * 4 + 6,
        opacity: Math.random() * 0.4 + 0.1,
      })),
    []
  );

  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center pt-28 pb-6 lg:pt-36 lg:pb-10 overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-500"
    >
      {/* ─── BACKGROUND LAYERS ─────────────────────────────────────── */}

      {/* Large radial gradient — light mode */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700 dark:opacity-0 opacity-100"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 75% 50%, rgba(124,58,237,0.09) 0%, rgba(96,165,250,0.06) 40%, transparent 70%)',
        }}
      />

      {/* Large radial gradient — dark mode */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700 opacity-0 dark:opacity-100"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 72% 50%, rgba(99,102,241,0.22) 0%, rgba(59,130,246,0.12) 35%, rgba(15,23,42,0) 70%)',
        }}
      />

      {/* Animated gradient shift layer */}
      <div
        className="hero-gradient-drift absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 65% 45%, rgba(168,85,247,0.07) 0%, transparent 60%)',
        }}
      />

      {/* Soft concentric circular rings behind portrait */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Light mode rings */}
        <div className="dark:hidden absolute right-[10%] top-1/2 -translate-y-1/2">
          {[520, 420, 320, 220, 140, 60].map((size, i) => (
            <div
              key={i}
              className="hero-ring absolute rounded-full border border-purple-200/30"
              style={{
                width: size,
                height: size,
                right: -size / 2,
                top: '50%',
                marginTop: -size / 2,
                animationDelay: `${i * -3}s`,
              }}
            />
          ))}
        </div>
        {/* Dark mode rings */}
        <div className="hidden dark:block absolute right-[10%] top-1/2 -translate-y-1/2">
          {[520, 420, 320, 220, 140, 60].map((size, i) => (
            <div
              key={i}
              className="hero-ring-dark absolute rounded-full border border-purple-500/15"
              style={{
                width: size,
                height: size,
                right: -size / 2,
                top: '50%',
                marginTop: -size / 2,
                animationDelay: `${i * -3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="hero-particle absolute rounded-full bg-purple-400 dark:bg-purple-300"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [p.opacity, p.opacity * 0.3, p.opacity],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Subtle noise texture */}
      <div className="hero-noise-texture absolute inset-0 z-[1] pointer-events-none" />

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-[0.015] dark:opacity-[0.03] z-0 pointer-events-none" />

      {/* ─── MAIN CONTENT ─────────────────────────────────────────── */}

      {/* Grid: text content only */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4">
          <div className="lg:col-span-5 flex flex-col justify-center text-left space-y-5 lg:space-y-6 xl:pr-8">
            {/* Small badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 dark:bg-brand-primary/15 text-brand-primary dark:text-brand-primary text-xs font-semibold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                AI-Augmented Frontend Developer
              </span>
            </motion.div>

            {/* Large heading */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-[4.2rem] xl:text-[5rem] font-extrabold tracking-tight leading-[1.05]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Hi, I'm{' '}
              <span className="text-gradient">Shiam</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-[560px] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              Building modern digital experiences with clean code, thoughtful design, and AI-powered development workflows.
            </motion.p>

            {/* Short description */}
            <motion.p
              className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-[560px] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I build responsive, high-performance web applications with React and modern frontend technologies. I transform ideas into clean, intuitive interfaces while sharpening my skills through real projects and AI-assisted workflows. I care deeply about performance, accessibility, and clean engineering that scales gracefully.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-brand-primary to-purple-600 text-white font-semibold shadow-lg shadow-brand-primary/25 hover:shadow-xl hover:shadow-brand-primary/30 hover:brightness-110 hover:-translate-y-[2px] hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:ring-offset-2 transition-all duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] flex items-center space-x-2 group"
              >
                <span>View Projects</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]" />
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/40 backdrop-blur-sm text-slate-800 dark:text-slate-100 font-semibold hover:border-slate-300 dark:hover:border-slate-600 hover:bg-white/90 dark:hover:bg-slate-800/60 hover:-translate-y-[2px] hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:ring-offset-2 transition-all duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              >
                Let's Talk
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Portrait — independent of grid, positioned relative to Hero section */}
      <div className="absolute bottom-0 right-4 lg:right-16 pointer-events-none">
        {/* Ambient glow */}
        <div className="absolute -inset-16 lg:-inset-24 bg-gradient-to-tr from-brand-primary/20 via-purple-500/15 to-cyan-400/10 dark:from-brand-primary/30 dark:via-purple-500/20 dark:to-cyan-500/10 rounded-full blur-[140px] opacity-70 dark:opacity-80 pointer-events-none" />

        {/* Portrait image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.25 }}
        >
          <img
            src={heroImg}
            alt="Shiam — Frontend Developer"
            className="hero-cutout w-[180px] sm:w-[220px] md:w-[260px] lg:w-[365px] xl:w-[405px] h-auto object-bottom select-none"
            onError={() => setHeroImg(shiamHeroFallback)}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

