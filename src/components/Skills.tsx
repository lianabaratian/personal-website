import { motion } from 'motion/react';
import { Progress } from './ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Web",
      skills: [
        { name: "Python", level: 30 },
        { name: "HTML/CSS", level: 75 },
        { name: "JavaScript", level: 65 },
        { name: "C++", level: 40 },
        { name: "Java", level: 20 }
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Computer Vision", level: 55 },
        { name: "Reinforcement Learning", level: 50 },
        { name: "LLM Prompt Engineering", level: 45 },
        { name: "Collaborative Filtering", level: 40 }
      ]
    },
    {
      title: "Design & Frameworks",
      skills: [
        { name: "Figma", level: 80 },
        { name: "UI/UX Design", level: 75 },
        { name: "React.js", level: 65 },
        { name: "Tailwind CSS", level: 70 },
        { name: "Next.js", level: 60 },
        { name: "Vite", level: 65 },
        { name: "Git", level: 75 }
      ]
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
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I've been working with. I'm always learning 
            and adding new skills to my toolkit.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="p-6 rounded-lg border border-border" style={{ background: 'linear-gradient(135deg, #f472b6 0%, #9ca3af 45%, #000000 100%)' }}
            >
              <h3 className="text-xl mb-6 text-center text-black">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl mb-8">Other Technologies I've Worked With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'OpenAI Gym', 'OpenCV', 'Swift', 'OOP', 'Deep Learning',
              'Postman', 'VS Code', 'Vercel', 'Statistics',
              'Tailwind CSS', 'Next.js', 'React Hook Form', 'npm / yarn', 'Figma Dev Mode', 'REST APIs', 'git'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;