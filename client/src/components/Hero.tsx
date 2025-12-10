import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo, socialLinks } from "@/data/portfolioData";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

const iconMap: Record<string, any> = {
  SiGithub,
  SiLinkedin,
  SiX,
};

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center opacity-40 perspective-1000">
        <motion.div
          className="relative w-64 h-64 md:w-96 md:h-96"
          animate={{
            rotateY: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 border-2 border-primary/50 rounded-3xl" style={{ transform: "translateZ(80px) rotateX(15deg)" }} />
          <div className="absolute inset-4 border-2 border-primary/40 rounded-2xl" style={{ transform: "translateZ(40px) rotateX(15deg)" }} />
          <div className="absolute inset-8 border-2 border-primary/30 rounded-xl" style={{ transform: "translateZ(0px) rotateX(15deg)" }} />
          <div className="absolute inset-12 border-2 border-primary/20 rounded-lg" style={{ transform: "translateZ(-40px) rotateX(15deg)" }} />
          <div className="absolute inset-16 border-2 border-primary/10 rounded-md" style={{ transform: "translateZ(-80px) rotateX(15deg)" }} />
          
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: "translateZ(100px)" }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-primary/60 to-primary/20 rounded-full blur-xl" />
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi there, I'm
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.div
            className="flex items-center justify-center gap-2 text-2xl md:text-4xl text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span>{personalInfo.title}</span>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            {/* UPDATED BUTTON: Uses asChild to wrap an anchor tag */}
            <Button
              size="lg"
              className="gap-2 min-w-[200px]"
              asChild
              data-testid="button-download-resume"
            >
              <a href="/resume.pdf" download="Ashish_Kumar_Dubey_Resume.pdf">
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="gap-2 min-w-[200px]"
              onClick={scrollToContact}
              data-testid="button-lets-connect"
            >
              <Mail className="w-5 h-5" />
              Let's Connect
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            {socialLinks.map((link, index) => {
              const Icon = iconMap[link.icon];
              return (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card hover-elevate active-elevate-2 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  data-testid={`link-${link.platform.toLowerCase()}`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-muted-foreground rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}