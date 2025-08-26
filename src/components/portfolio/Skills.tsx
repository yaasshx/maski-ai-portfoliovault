import { Code, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const technicalSkills = [
    "C", "C++", "Python", "HTML & CSS (Beginner)", "JavaScript (Beginner)",
    "Data Structures and Algorithms", "Object-Oriented Programming"
  ];

  const softSkills = [
    "Communication", "Teamwork", "Problem Solving", "Critical Thinking",
    "Adaptability", "Time Management"
  ];

  return (
    <section className="py-20 px-6 bg-card/20" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Code className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-4xl font-bold text-gradient">Skills</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <Card className="glass-effect border-primary/30 hover:border-primary/50 transition-all duration-300 animate-slide-up group hover:shadow-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-2xl font-bold text-foreground">
                <Code className="h-7 w-7 text-primary mr-3 group-hover:animate-pulse" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-3 text-sm font-semibold bg-primary/15 text-primary border-2 border-primary/30 hover:bg-primary/25 hover:scale-105 transition-all duration-300 shadow-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="glass-effect border-primary/30 hover:border-primary/50 transition-all duration-300 animate-slide-up group hover:shadow-2xl" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-2xl font-bold text-foreground">
                <Users className="h-7 w-7 text-primary mr-3 group-hover:animate-pulse" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-3 text-sm font-semibold bg-primary/15 text-primary border-2 border-primary/30 hover:bg-primary/25 hover:scale-105 transition-all duration-300 shadow-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};