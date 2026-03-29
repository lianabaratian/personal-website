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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f472b6 0%, #9ca3af 45%, #000000 100%)' }}>

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
            className="text-lg md:text-xl text-pink-700 mb-4" style={{ fontFamily: "'Pacifico', cursive" }}
          >
            Welcome to my world, make yourself at home :&gt;
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl mb-6 text-black" style={{ fontFamily: "'Pacifico', cursive" }}
          >
            <span className="block text-base md:text-lg font-light mb-1">I'm</span>
            Liana Baratian
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl text-black mb-4">
              Computer Engineering Student &
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg md:text-xl text-black"
            >
              Software Developer & UI/UX Designer
            </motion.p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-black mb-8 max-w-2xl mx-auto leading-relaxed space-y-1"
          >
            I'm that person who opens the laptop "just to check one thing" and is still going three hours later!<br />
            Frontend development is my craft, UI/UX is how I think, and AI is the rabbit hole I fell into and never want to climb out of!<br />
            There's something about building interfaces that can actually see, predict, and learn that makes every project feel like it could be something special. Final year at Bahcesehir University, currently interning at NetworkX.ai and just getting started...
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
          className="flex flex-col items-center gap-2 text-black hover:text-black/70"
        >
          <span className="text-sm text-pink-700" style={{ fontFamily: "'Pacifico', cursive" }}>Scroll Down</span>
          <ChevronDown size={20} />
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;