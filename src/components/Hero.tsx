import { motion } from 'motion/react';
import { ChevronDown, ArrowRight, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

const roles = ['Frontend Developer', 'Computer Vision', 'AI Engineer'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background — richer glow + subtle grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgb(236 72 153) 1px, transparent 1px), linear-gradient(to bottom, rgb(236 72 153) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Main glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-pink-500/12 blur-[120px]" />
        {/* Secondary glow */}
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-pink-400/8 blur-3xl" />
        {/* Top-left accent */}
        <div className="absolute top-16 left-16 w-48 h-48 rounded-full bg-pink-600/6 blur-2xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 text-center py-24">

        {/* Greeting label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-[0.2em] uppercase text-pink-500 mb-5"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-5xl sm:text-7xl lg:text-8xl text-foreground leading-tight mb-8"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          Liana Baratian
        </motion.h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center mb-10 h-8"
        >
          <span className="px-4 py-1 rounded-full text-sm font-medium border border-pink-500/30 bg-pink-500/10 text-pink-400 inline-flex items-center gap-1">
            {displayed}
            <span className="inline-block w-[2px] h-4 bg-pink-400 ml-0.5 animate-pulse" />
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10"
        >
          Final year Computer Engineering student at Bahcesehir University.
          I build interfaces that see, predict, and learn,
          currently interning at&nbsp;<span className="text-foreground font-medium">NetworkX.ai</span>.
        </motion.p>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="flex justify-center gap-4 mb-10"
        >
          <a
            href="https://github.com/lianabaratian"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-pink-400 transition-colors border border-border hover:border-pink-500/40 rounded-full px-4 py-2"
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lianabaratian/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-pink-400 transition-colors border border-border hover:border-pink-500/40 rounded-full px-4 py-2"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <Button
            size="lg"
            onClick={() => scrollTo('projects')}
            className="group w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white border-0"
          >
            View My Work
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto"
          >
            Contact Me
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-pink-500 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} />
      </motion.button>
    </section>
  );
};

export default Hero;
