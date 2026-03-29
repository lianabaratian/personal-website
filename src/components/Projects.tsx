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
      title: "Webinar Landing Page",
      description: "Built a fully responsive multi-page landing site for a client at NetworkX.ai, translating Figma designs into production-ready code. Implemented reusable React components with Next.js routing and Tailwind CSS, ensuring consistent UI across all breakpoints.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "Figma"],
      type: "Frontend / UI",
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
      githubUrl: "https://github.com/lianabaratian/highway-rl",
      featured: true
    },
    {
      id: 4,
      title: "Movie Recommendation System",
      description: "A full-stack movie recommendation web app with user authentication, movie browsing, search, personalized recommendations, and a review system. Built with React and Tailwind CSS on the frontend, connected to a REST API with JWT-based auth and Axios interceptors.",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Vite", "Axios", "JWT", "REST API"],
      type: "Full-Stack Web App",
      icon: Globe,
      liveUrl: "#",
      githubUrl: "https://github.com/lianabaratian/Movie-recommendation-system",
      featured: true
    },
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
          <h2 className="text-4xl md:text-5xl mb-4 text-pink-300 font-bold">Featured Projects</h2>
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