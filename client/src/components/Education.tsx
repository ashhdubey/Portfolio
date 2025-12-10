import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, School } from "lucide-react";
import { education } from "@/data/portfolioData";
import { Badge } from "@/components/ui/badge";

export function Education() {
  return (
    <section id="education" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            My Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16" />
        </motion.div>

        <div className="flex flex-col gap-6 max-w-7xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden hover-elevate transition-all group shadow-sm border bg-card">
                
                {/* FLEX CONTAINER (Height controlled here: h-36 = 144px) */}
                <div className="flex flex-col md:flex-row md:h-36">
                  
                  {/* IMAGE SECTION */}
                  <div className="relative w-full md:w-80 h-32 md:h-full shrink-0 overflow-hidden bg-secondary/20 border-b md:border-b-0 md:border-r flex items-center justify-center">
                    {edu.image ? (
                      <img 
                        src={edu.image} 
                        alt={edu.institution}
                        // z-10 ensures image is on top if it loads
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 relative z-10"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : null}
                    
                    {/* FALLBACK ICON: Only visible if image is missing or fails to load */}
                    <div className="absolute inset-0 flex items-center justify-center text-primary/20">
                      <School className="w-10 h-10" />
                    </div>
                  </div>

                  {/* CONTENT SECTION */}
                  <div className="flex-1 p-4 flex flex-col justify-center min-w-0">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors truncate">
                        {edu.degree}
                      </h3>
                      <Badge variant="secondary" className="w-fit shrink-0 bg-primary/10 text-primary border-primary/20 text-xs">
                        {edu.status}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground truncate">
                        <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                        <span>{edu.institution}</span>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
                        <Calendar className="w-3.5 h-3.5 shrink-0" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}