import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Award, Calendar } from 'lucide-react';

const Timeline = () => {
  const timelineItems = [
    {
      id: 1,
      type: 'education',
      icon: GraduationCap,
      title: 'Bachelor of Science in Computer Engineering',
      organization: 'Bahcesehir University',
      period: '2022 - July 2026 (Expected)',
      description: 'Pursuing a Computer Engineering degree with a focus on AI, deep learning, and software development. Relevant coursework includes Artificial Intelligence, Deep Learning, Web & Mobile App Development, AI-Powered Marketing Communication, Multimedia Systems, Analysis of Algorithms, and more.',
      achievements: ['Coursework: Artificial Intelligence & Deep Learning', 'Coursework: Web & Mobile App Development', 'Coursework: Formal Language & Automata, Statistics']
    },
    {
      id: 2,
      type: 'work',
      icon: Briefcase,
      title: 'Frontend Developer Intern',
      organization: 'NetworkX.AI',
      period: 'February 2025 – Present',
      description: 'Working as a Frontend Developer intern, building and improving user interfaces using modern web technologies. Contributing to real-world AI-driven products in a fast-paced startup environment.',
      achievements: ['Built responsive UI components with React.js and Next.js', 'Styled interfaces using Tailwind CSS and plain CSS/HTML', 'Collaborated on frontend features using JavaScript']
    },
    {
      id: 4,
      type: 'work',
      icon: Briefcase,
      title: 'Erasmus Office Assistant',
      organization: 'Bahcesehir University',
      period: 'September – December 2024',
      description: 'Assisted international students with Erasmus processes and administrative tasks. Strengthened cross-cultural communication skills by working with students from diverse backgrounds.',
      achievements: ['Supported international student onboarding', 'Worked with diverse cultural backgrounds', 'Gained experience in international academic exchange programs']
    },
    {
      id: 5,
      type: 'achievement',
      icon: Award,
      title: 'Supervised Machine Learning Certification',
      organization: 'Stanford Online & DeepLearning.AI',
      period: '2024',
      description: 'Completed advanced foundational training in predictive modeling and algorithmic classification under Andrew Ng. Covered regression, classification, and core ML principles.',
      achievements: ['Instructed by Andrew Ng', 'Topics: regression, classification, supervised learning', 'Issued by Stanford Online & DeepLearning.AI']
    },
    {
      id: 6,
      type: 'achievement',
      icon: Award,
      title: 'C++ Basics: Selection and Iteration',
      organization: 'Codio via Coursera',
      period: '2024',
      description: 'Completed with a grade of 86%, covering core C++ programming concepts including variables, operators, selection statements, and loop structures.',
      achievements: ['Grade: 86%', 'Topics: variables, operators, selection & iteration', 'Issued by Codio via Coursera']
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'bg-blue-500';
      case 'work':
        return 'bg-green-500';
      case 'achievement':
        return 'bg-purple-500';
      default:
        return 'bg-primary';
    }
  };

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="timeline" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Experience & Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey through education and professional experiences that have shaped 
            my skills and passion for technology.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Node */}
                  <div className="hidden md:flex absolute left-6 w-4 h-4 bg-background border-2 border-primary rounded-full z-10 mt-6" />
                  
                  <div className="md:ml-16 bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-12 h-12 rounded-lg flex items-center justify-center text-white ${getTypeColor(item.type)}`}
                      >
                        <item.icon className="w-6 h-6" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-lg">{item.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {item.period}
                          </div>
                        </div>
                        
                        <p className="text-primary mb-3">{item.organization}</p>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        
                        <div className="space-y-2">
                          <h4 className="text-sm">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {item.achievements.map((achievement, achievementIndex) => (
                              <motion.li
                                key={achievementIndex}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + achievementIndex * 0.05 }}
                                className="text-sm text-muted-foreground flex items-start gap-2"
                              >
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Years of Study', value: '4' },
            { label: 'Projects Completed', value: '3+' },
            { label: 'Technologies Learned', value: '15+' },
            { label: 'Languages Spoken', value: '3' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-4 bg-card border border-border rounded-lg"
            >
              <div className="text-2xl md:text-3xl text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;