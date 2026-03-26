import { motion } from 'motion/react';
import { ExternalLink, Github, Smartphone, Globe, BarChart3, Code } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "VisionUX AI",
      description: "An AI-driven UX auditor that predicts human visual attention on interfaces via Computer Vision and Saliency Mapping. Built a FastAPI + PyTorch backend for high-speed model inference (under 2s), used OpenCV to generate heatmaps and quantitative Attention Scores, and implemented a React.js interface with a Figma dashboard for real-time AI feedback.",
      image: "https://images.unsplash.com/photo-1637904743105-3118bbe3ed8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBsYXB0b3AlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU3NDgwNTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Python", "FastAPI", "PyTorch", "OpenCV", "React.js", "Figma"],
      type: "AI Web Application",
      icon: Globe,
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Highway Reinforcement Learning Agent",
      description: "An autonomous driving agent trained with Deep Reinforcement Learning to safely navigate complex multi-lane highway scenarios. Optimized decision-making via reward shaping to improve collision avoidance and speed regulation, with iterative architecture analysis for smoother lane-changing behavior.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1NzQzOTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Python", "Stable Baselines3", "OpenAI Gym", "highway-env"],
      type: "AI / Simulation",
      icon: Code,
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Movie Rating Prediction System",
      description: "A collaborative filtering system that predicts user movie ratings with high accuracy. Implemented Cosine Similarity and optimized data structures to process large-scale datasets efficiently. Evaluated prediction reliability using RMSE metrics.",
      image: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzU3NDUxNjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["C++", "Data Structures", "Algorithms", "RMSE", "Cosine Similarity"],
      type: "Data / Algorithms",
      icon: BarChart3,
      liveUrl: "#",
      githubUrl: "#",
      featured: true
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
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web and mobile development. 
            Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`${project.featured ? 'lg:col-span-full' : ''}`}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className={`grid ${project.featured ? 'lg:grid-cols-2' : ''} gap-0`}>
                  <div className="relative overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="aspect-video relative"
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                          <project.icon className="w-3 h-3 mr-1" />
                          {project.type}
                        </Badge>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <project.icon className="w-5 h-5 text-primary" />
                        <h3 className="text-xl">{project.title}</h3>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: techIndex * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button
                        variant="default"
                        size="sm"
                        className="flex items-center gap-2 group/btn"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
                          Live Demo
                        </a>
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 group/btn"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button
            variant="outline"
            size="lg"
            className="group"
            asChild
          >
            <a href="https://github.com/lianabaratian?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;