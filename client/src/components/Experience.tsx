import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Briefcase, Check } from "lucide-react";
import { experiences } from "@/data/portfolioData";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16" />
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot (Desktop) - Centered */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-primary items-center justify-center z-10 border-4 border-background">
                  <Briefcase className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Timeline Dot (Mobile) - Moved OUTSIDE the card to fix overlap */}
                <div className="md:hidden absolute left-8 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10 border-4 border-background">
                  <Briefcase className="w-5 h-5 text-primary-foreground" />
                </div>

                {/* Experience Card Wrapper */}
                {/* Fixed width to prevent stretching */}
                <div className="w-full md:w-5/12">
                  <Card 
                    // Maintained mobile margin (ml-16) to clear the timeline line
                    className={`p-6 hover-elevate transition-all ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    } ml-16 md:ml-0`}
                    data-testid={`card-experience-${exp.id}`}
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                    </div>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}