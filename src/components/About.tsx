import { motion } from 'motion/react';
import { Code, Users, Lightbulb, Target } from 'lucide-react';
import { Card } from './ui/card';
import { useRef, useEffect } from 'react';

const About = () => {
  const bgVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bgVideoRef.current?.play();
        } else {
          bgVideoRef.current?.pause();
        }
      },
      { threshold: 0.1 }
    );
    if (bgVideoRef.current) observer.observe(bgVideoRef.current);
    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and well-documented code that stands the test of time."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams and contributing to open-source projects and communities."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly learning new technologies and finding creative solutions to complex problems."
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering results and creating meaningful impact through technology."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="relative">

      {/* ── VIDEO BACKGROUND JOURNEY BLOCK ── */}
      <div className="relative overflow-hidden" style={{ minHeight: '90vh', marginTop: '0px' }}>

        {/* Background video */}
        <video
          ref={bgVideoRef}
          src="/room.mp4"
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center center', clipPath: 'inset(0 0 8% 0)' }}
        />

        {/* Gradient: dark on left for readability, fades to transparent on right */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.93) 0%, rgba(0,0,0,0.88) 40%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.05) 100%)'
          }}
        />

        {/* Text content — left half only */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-xl -mt-20"
            >
              <h3 className="text-4xl mb-6 font-bold text-pink-300">My Journey</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  Honestly, wanting to be a Computer Engineer was kind of my dream since I was a teenager<span className="text-white">.</span> I'm not even sure I knew exactly what it meant back then, I just knew it was where I wanted to end up<span className="text-white">.</span>
                </p>
                <p>
                  But first year of university<span className="text-white">?</span> That was rough<span className="text-white">!</span> Everyone around me seemed to already know everything, and I was just trying to survive<span className="text-white">.</span> There were definitely moments where I thought maybe this wasn't for me<span className="text-white">.</span>
                </p>
                <p>
                  I'm glad I didn't listen to that voice though <span className="text-white">:)</span>
                </p>
                <p>
                  Because now, almost at the finish line, something just clicked<span className="text-white">.</span> I know how I think, I know how I learn, and I know what I love building<span className="text-white">.</span> Frontend development turned out to be my thing, it's that sweet spot between making something look beautiful and making it actually work, and I genuinely can't get enough of it<span className="text-white">.</span>
                </p>
                <p>
                  And then there's AI, which honestly feels like a whole other rabbit hole I fell into and never want to climb out of<span className="text-white">.</span> The idea that you can build something that learns, predicts and sees it blows my mind every time<span className="text-white">!</span> I've been exploring computer vision, playing with models, and finding ways to bring AI into the interfaces I build<span className="text-white">.</span> It just adds another layer to everything<span className="text-white">.</span>
                </p>
                <p>
                  Like, I'll sit down at my laptop with no plan and just start building something and suddenly three hours have passed and I'm still going<span className="text-white">.</span> Or I'll be talking to someone completely outside of tech and they'll say something random that gives me an idea I end up spending the whole weekend on<span className="text-white">.</span>
                </p>
                <p>
                  That's just kind of how my brain works now<span className="text-white">.</span> And honestly<span className="text-white">?</span> I love that about it<span className="text-white">!</span>
                </p>
                <p className="text-pink-300 font-bold">
                  Okay! Enough talking about me (I love it though!) let's see what I actually know...
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── VALUES CARDS BLOCK ── */}
      <div className="pt-0 pb-0 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-pink-300/10 rounded-lg flex items-center justify-center mb-4"
                  >
                    <value.icon className="w-6 h-6 text-pink-300" />
                  </motion.div>
                  <h4 className="mb-2 text-pink-300">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default About;
