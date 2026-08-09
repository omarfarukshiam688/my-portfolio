import { ArrowUp } from 'lucide-react';

const Github = (props: React.SVGProps<SVGSVGElement> & { size?: number }) => {
  const { size = 24, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
};

const Linkedin = (props: React.SVGProps<SVGSVGElement> & { size?: number }) => {
  const { size = 24, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
};

const X = (props: React.SVGProps<SVGSVGElement> & { size?: number }) => {
  const { size = 24, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
};

const Telegram = (props: React.SVGProps<SVGSVGElement> & { size?: number }) => {
  const { size = 24, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.32 8.24c-.575.29-.624.82-.1 1.185l3.38 1.64 1.28 3.82c.18.54.74.82 1.26.64l2.5-1.16 3.34 2.52c.5.38 1.2.12 1.36-.46l2.28-9.64c.2-.86-.5-1.72-1.36-1.94l-17.2-5.56a2.264 2.264 0 0 0 .02-1.24l.6-1.08a2.264 2.264 0 0 1 1.9-1.06l20.38 2.72a2.26 2.26 0 0 1 2.26 2.52 2.26 2.26 0 0 1-1.14 1.72z" />
    </svg>
  );
};

const Whatsapp = (props: React.SVGProps<SVGSVGElement> & { size?: number }) => {
  const { size = 24, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
};

const Facebook = (props: React.SVGProps<SVGSVGElement> & { size?: number }) => {
  const { size = 24, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
};

const socialLinks = [
  {
    name: 'GitHub',
    href: '',
    Icon: Github,
    brandColor: '#181717',
    comingSoon: false,
  },
  {
    name: 'LinkedIn',
    href: '',
    Icon: Linkedin,
    brandColor: '#0A66C2',
    comingSoon: true,
  },
  {
    name: 'X',
    href: '',
    Icon: X,
    brandColor: '#000000',
    comingSoon: false,
  },
  {
    name: 'Telegram',
    href: '',
    Icon: Telegram,
    brandColor: '#26A5E4',
    comingSoon: false,
  },
  {
    name: 'WhatsApp',
    href: '',
    Icon: Whatsapp,
    brandColor: '#25D366',
    comingSoon: false,
  },
  {
    name: 'Facebook',
    href: '',
    Icon: Facebook,
    brandColor: '#1877F2',
    comingSoon: false,
  },
] as const;

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 py-12 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Logo and Slogan */}
        <div className="text-center md:text-left space-y-2">
          <a href="#home" className="text-xl font-bold tracking-widest text-slate-800 dark:text-white uppercase">
            SHIAM<span className="text-brand-primary">.</span>
          </a>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            Clean code. Faster webs. Better UX. • Do Epic Things.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-4">
          {socialLinks.map(({ name, href, Icon, brandColor, comingSoon }) => (
            <a
              key={name}
              href={href || '#'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name}${comingSoon ? ' (Coming Soon)' : ''}`}
              title={comingSoon ? 'Coming Soon' : name}
              onClick={comingSoon ? (e) => e.preventDefault() : undefined}
              className={`group relative overflow-hidden rounded-full border border-slate-200 dark:border-slate-700 p-2 [perspective:400px] ${comingSoon ? 'opacity-60 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}`}
              style={{ '--brand-color': brandColor } as React.CSSProperties}
            >
              <span 
                className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
                style={{ backgroundColor: brandColor }}
              />
              <Icon 
                size={18} 
                className="social-icon-rotate relative z-10 text-slate-700 dark:text-slate-300 group-hover:text-white transition-colors duration-500 ease-in-out"
              />
            </a>
          ))}
        </div>

        <style>{`
          @keyframes social-icon-rotate {
            from { transform: rotateY(0deg); }
            to { transform: rotateY(360deg); }
          }
          .group:hover .social-icon-rotate {
            animation: social-icon-rotate 0.5s ease-in-out;
          }
        `}</style>

        {/* Copyright and Scroll Top */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-right">
            &copy; {new Date().getFullYear()} Shiam. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-brand-primary hover:border-brand-primary/45 hover:scale-110 active:scale-95 transition-all shadow-sm"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
