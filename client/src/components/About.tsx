import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Heart, Coffee } from "lucide-react";
import { Card } from "@/components/ui/card";
import { personalInfo, personalValues } from "@/data/portfolioData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const iconMap: Record<string, any> = {
  Code2,
  Palette,
  Rocket,
  Heart,
  Coffee,
};

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Spinning glow effect behind the image */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
              
              <Avatar className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-primary/50 overflow-hidden">
                <AvatarImage 
                  src="/profile.png" 
                  alt={personalInfo.name}
                  // UPDATED CLASS: object-top focuses on face, scale-110 zooms in slightly
                  className="object-cover object-top w-full h-full scale-110 transition-transform hover:scale-100 duration-500" 
                />
                <AvatarFallback className="text-6xl font-bold bg-gradient-to-br from-primary/20 to-primary/40">
                  AKD
                </AvatarFallback>
              </Avatar>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              {personalInfo.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
              or sharing knowledge with the developer community. I believe in continuous learning and the 
              power of collaboration to build amazing things.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            What Drives Me
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalValues.map((value, index) => {
              const Icon = iconMap[value.icon];
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="p-6 h-full hover-elevate transition-all" data-testid={`card-value-${index}`}>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}