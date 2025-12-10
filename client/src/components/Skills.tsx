import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { skills } from "@/data/portfolioData";
import { 
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, 
  SiNodedotjs, SiPython, SiMongodb, SiPostgresql, SiDocker, SiGit, 
  SiFigma, SiVite, SiSpringboot, SiHibernate, SiMysql, SiApachemaven, 
  SiOracle 
} from "react-icons/si";
import { FaJava } from "react-icons/fa"; // Importing Java icon from Font Awesome set

// Map string names from data file to actual Icon components
const iconMap: Record<string, any> = {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiFigma,
  SiVite,
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiApachemaven,
  SiOracle,
  SiJava: FaJava // Mapping custom string "SiJava" to the FaJava icon
};

type Category = "All" | "Frontend" | "Backend" | "Tools" | "Languages" | "AI/ML" | "Data Science";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  // Dynamically generate categories from the skills data
  const categories = ["All", ...Array.from(new Set(skills.map(s => s.category)))] as Category[];

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16" />
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="transition-all capitalize"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || SiVite; // Fallback to Vite icon if missing
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ y: -8 }}
              >
                <Card 
                  className="p-6 h-full flex flex-col items-center justify-center gap-3 hover-elevate transition-all group"
                >
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Icon className="w-full h-full text-primary transition-transform group-hover:scale-110" />
                  </div>
                  <p className="text-sm font-medium text-center">{skill.name}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}