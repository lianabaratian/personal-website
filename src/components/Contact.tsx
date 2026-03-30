import { motion } from 'motion/react';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Lianabaratian7@gmail.com',
      href: 'mailto:Lianabaratian7@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Istanbul, Turkey',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lianabaratian/',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/lianabaratian',
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 text-pink-300 font-bold">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations.
            Feel free to reach out if you'd like to discuss a project or just say hello!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <div>
            <h3 className="text-2xl mb-6">Get in Touch</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to chat
              about technology, I'd love to hear from you. I'm graduating in July 2026 and
              actively looking for full-time opportunities in AI, software development, or UI/UX.
            </p>
          </div>

          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  <span className="hover:text-primary transition-colors">
                    {info.value}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="pt-8 border-t border-border">
            <h4 className="mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-md`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16 p-8 bg-primary/5 rounded-lg"
        >
          <h3 className="text-xl mb-4">Ready to Start Something Amazing?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, whether it's a full-time position,
            internship, freelance project, or just an interesting conversation about technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="mailto:Lianabaratian7@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/Liana_Baratian_Resume.pdf" download="Liana_Baratian_Resume.pdf">
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
