import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#1a0000] via-[#2d0a0a] to-[#1a0000]">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-primary mb-4"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
          >
            Liana Baratian
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4">
              Computer Engineering Student &
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg md:text-xl text-primary"
            >
              Software Developer & UI/UX Designer
            </motion.p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about AI, computer vision, and building intuitive digital experiences.
            Graduating in July 2026 from Bahcesehir University, with hands-on projects spanning
            deep learning, full-stack development, and UI/UX design.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={scrollToAbout}
              className="group relative overflow-hidden"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="relative z-10"
              >
                View My Work
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-primary/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group"
            >
              <motion.span whileHover={{ scale: 1.05 }}>
                Contact Me
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Button
          variant="ghost"
          size="sm"
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground"
        >
          <span className="text-sm">Scroll Down</span>
          <ChevronDown size={20} />
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;