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
          <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 animate-slide-up group">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-bold">
                <Code className="h-6 w-6 text-primary mr-3 group-hover:animate-pulse" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 animate-slide-up group" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-bold">
                <Users className="h-6 w-6 text-primary mr-3 group-hover:animate-pulse" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-300"
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