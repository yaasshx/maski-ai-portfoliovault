import { User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <User className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-4xl font-bold text-gradient">About Me</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-12">
          <Card className="glass-effect border-primary/30 hover:border-primary/50 transition-all duration-300 animate-slide-up hover:shadow-2xl">
            <CardContent className="p-10">
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-xl leading-relaxed mb-6 font-medium">
                  I am a passionate <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded-md">Artificial Intelligence and Machine Learning</span> student 
                  with a deep fascination for technology's potential to solve real-world challenges. My journey in AI/ML is driven by 
                  curiosity and a commitment to understanding how intelligent systems can make meaningful impacts across various domains.
                </p>
                
                <p className="text-xl leading-relaxed mb-6 font-medium">
                  Through my academic pursuits and hands-on projects, I have developed strong <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded-md">problem-solving abilities</span> 
                  and a collaborative mindset. I believe in the power of teamwork and enjoy contributing to projects that push the boundaries 
                  of what's possible with technology.
                </p>
                
                <p className="text-xl leading-relaxed font-medium">
                  I am eager to apply my knowledge and skills in professional environments where I can continue learning, growing, 
                  and contributing to innovative solutions that benefit society. My goal is to bridge the gap between cutting-edge 
                  AI research and practical applications that solve real problems.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};