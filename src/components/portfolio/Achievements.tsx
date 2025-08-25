import { Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Achievements = () => {
  return (
    <section className="py-20 px-6" id="achievements">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-4xl font-bold text-gradient">Achievements</h2>
          </div>
        </div>

        <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 animate-slide-up">
          <CardContent className="p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Academic Excellence & Project Accomplishments
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Highlights of my academic excellence, relevant project accomplishments, and ongoing 
                contributions to the field of Artificial Intelligence and Machine Learning.
              </p>
              
              <div className="grid gap-6 mt-8">
                <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    Academic Performance
                  </h4>
                  <p className="text-muted-foreground">
                    Maintaining consistent academic progress in AI & ML program with strong foundation 
                    in core subjects and practical implementations.
                  </p>
                </div>
                
                <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    Project Development
                  </h4>
                  <p className="text-muted-foreground">
                    Successfully developed and implemented multiple technical projects ranging from 
                    3D simulations to data analysis applications.
                  </p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mt-6 italic">
                Details to be updated as I continue progressing in my academic and professional journey.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};