import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink } from "lucide-react";
import { achievements } from "@/data/portfolioData";

export function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Achievements & Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full flex flex-col hover-elevate transition-all group" data-testid={`card-achievement-${achievement.id}`}>
                <CardHeader>
                  {/* LOGO LOGIC: Show Image if available, otherwise show Icon */}
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform overflow-hidden">
                    {achievement.badgeImage ? (
                      <img 
                        src={achievement.badgeImage} 
                        alt={achievement.organization} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Award className="w-8 h-8 text-primary" />
                    )}
                  </div>
                  
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  <CardDescription>
                    {achievement.organization} • {achievement.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
                
                {/* View Credential Button */}
                {achievement.certificateUrl && (
                  <CardFooter>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      asChild
                      data-testid={`button-view-certificate-${achievement.id}`}
                    >
                      <a href={achievement.certificateUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        View Credential
                      </a>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}