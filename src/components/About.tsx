import { motion } from 'motion/react';
import { Code, Users, Lightbulb, Target } from 'lucide-react';
import { Card } from './ui/card';

const About = () => {
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
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A computer engineering student passionate about AI, computer vision, and building
            digital experiences that are both intelligent and beautifully designed.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a final-year Computer Engineering student at Bahcesehir University in Istanbul, graduating
                in July 2026. My interest in technology grew into a deep focus on AI and machine learning,
                leading me to build projects involving computer vision, deep reinforcement learning, and
                intelligent web interfaces.
              </p>
              <p>
                I enjoy sitting at the intersection of AI and design — using tools like Figma, React.js, and
                FastAPI to turn complex models into accessible, user-friendly products. My project VisionUX AI
                is a good example: an AI-driven UX auditor that predicts human visual attention on interfaces.
              </p>
              <p>
                I'm trilingual (English, Turkish, Persian) and have worked internationally through the Erasmus
                program at my university. I'm always looking for opportunities to apply my skills in
                challenging, real-world environments.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-lg border border-[#3d0a0a]" style={{ background: 'linear-gradient(135deg, #1a0000, #2d0a0a)' }}>
              <h4 className="mb-4 text-white">Quick Facts</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-red-200/70">Location:</span>
                  <span className="text-white">Istanbul, Turkey</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-200/70">University:</span>
                  <span className="text-white">Bahcesehir University</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-200/70">Major:</span>
                  <span className="text-white">Computer Engineering</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-200/70">Expected Graduation:</span>
                  <span className="text-white">July 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-200/70">Languages:</span>
                  <span className="text-white">English, Turkish, Persian</span>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="mb-4">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {['AI & Machine Learning', 'Computer Vision', 'UI/UX Design', 'Web Development', 'Deep Learning', 'Reinforcement Learning'].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

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
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
                >
                  <value.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h4 className="mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;