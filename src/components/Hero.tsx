import { motion } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const roles = ['Frontend Developer', 'UI/UX Designer', 'AI Enthusiast'];

const Hero = () => {
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
      {/* Subtle background glow — adapts to dark/light */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-pink-400/10 dark:bg-pink-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-pink-300/5 dark:bg-pink-400/5 blur-2xl" />
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

        {/* Role tags */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {roles.map((role) => (
            <span
              key={role}
              className="px-3 py-1 rounded-full text-xs font-medium border border-pink-500/30 bg-pink-500/10 text-pink-500 dark:text-pink-400"
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-12"
        >
          Final year Computer Engineering student at Bahcesehir University.
          I build interfaces that see, predict, and learn —
          currently interning at&nbsp;<span className="text-foreground font-medium">NetworkX.ai</span>.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <Button
            size="lg"
            onClick={() => scrollTo('projects')}
            className="group w-full sm:w-auto"
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
