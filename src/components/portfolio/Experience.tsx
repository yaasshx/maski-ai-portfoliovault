import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Experience = () => {
  return (
    <section className="py-20 px-6" id="experience">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Briefcase className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-4xl font-bold text-gradient">Experience</h2>
          </div>
        </div>

        <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 animate-slide-up">
          <CardContent className="p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Building My Foundation
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Currently focusing on academic projects and skill development while pursuing my degree in 
                Artificial Intelligence & Machine Learning. Through hands-on projects and collaborative 
                academic work, I am building a strong foundation in AI/ML technologies and gaining 
                practical experience in problem-solving and teamwork.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                I am actively seeking internship opportunities and collaborative projects to apply 
                my knowledge in real-world scenarios and contribute to meaningful technological solutions.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};