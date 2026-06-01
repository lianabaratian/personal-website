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
      video: "/agancy.mov",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "Figma"],
      type: "Frontend / UI",
      icon: Globe,
      liveUrl: "#",
      githubUrl: null,
      featured: true
    },
    {
      id: 6,
      title: "Sentia-Vision",
      description: "A multimodal UX research tool that analyzes recorded user sessions to detect emotional incongruity — moments where facial expressions contradict spoken words. Generates an emotional timeline dashboard with facial emotion classification, voice sentiment analysis, Truth Score ratings (0–100), and flagged incongruity events. Runs fully local with no cloud APIs or GPU required.",
      video: "/sentia.MOV",
      technologies: ["Python", "FastAPI", "MediaPipe", "OpenAI Whisper", "VADER", "React", "Vite", "Tailwind CSS", "Recharts"],
      type: "AI / Computer Vision",
      icon: Code,
      liveUrl: "#",
      githubUrl: "https://github.com/lianabaratian/Sentia_vision",
      featured: true
    },
    {
      id: 5,
      title: "Company Website",
      description: "Designed and developed a fully responsive multi-page website for a Los Angeles-based residential and commercial construction company. Features a sticky hero with parallax scroll, an interactive project gallery with lightbox, dynamic project detail pages, a testimonials carousel, and a contact section.",
      video: "/networkx-demo.mov",
      technologies: ["Next.js 15", "TypeScript", "Tailwind CSS v4", "Lucide React"],
      type: "Frontend / UI",
      icon: Globe,
      liveUrl: "#",
      githubUrl: null,
      featured: true
    },
    {
      id: 2,
      title: "Highway Reinforcement Learning Agent",
      description: "An autonomous driving agent trained with Deep Reinforcement Learning to safely navigate complex multi-lane highway scenarios. Optimized decision-making via reward shaping to improve collision avoidance and speed regulation, with iterative architecture analysis for smoother lane-changing behavior.",
      video: "/highway.mp4.mov",
      technologies: ["Python", "Stable Baselines3", "OpenAI Gym", "highway-env"],
      type: "AI / Simulation",
      icon: Code,
      liveUrl: "#",
      githubUrl: "https://github.com/lianabaratian/highway-rl",
      featured: true
    },
    {
      id: 7,
      title: "Landing Page",
      description: "A clean, responsive landing page built with form validation using Zod and React Hook Form. Focused on delivering a polished UI with smooth user experience and real-time input validation.",
      video: "/landing-page.mov",
      technologies: ["React.js", "Tailwind CSS", "Zod", "React Hook Form", "JavaScript"],
      type: "Frontend / UI",
      icon: Globe,
      liveUrl: "#",
      githubUrl: null,
      featured: true
    },
    {
      id: 4,
      title: "Movie Recommendation System",
      description: "A full-stack movie recommendation web app with user authentication, movie browsing, search, personalized recommendations, and a review system. Built with React and Tailwind CSS on the frontend, connected to a REST API with JWT-based auth and Axios interceptors.",
      video: "/movie-recommendation.mov",
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
                      {project.video ? (
                        <video
                          src={project.video}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      )}
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
                      {project.githubUrl && (
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
                      )}
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