import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Education = () => {
  const education = [
    {
      degree: "B.Tech in Artificial Intelligence & Machine Learning",
      institution: "Ballari Institute of Technology and Management",
      grade: "CGPA: 7.29",
      period: "2022 – Present",
      status: "Pursuing"
    },
    {
      degree: "Pre-University Course (PUC)",
      institution: "Jnanaamrutha Pre-University College",
      grade: "83%",
      period: "2020 – 2022",
      status: "Completed"
    },
    {
      degree: "High School",
      institution: "Sri Vishveshwariah School",
      grade: "73%",
      period: "2017 – 2020",
      status: "Completed"
    }
  ];

  return (
    <section className="py-20 px-6 bg-card/20" id="education">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-4xl font-bold text-gradient">Education</h2>
          </div>
          <p className="text-muted-foreground text-lg mt-4">
            My academic journey and achievements
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">
                      {edu.degree}
                    </CardTitle>
                    <p className="text-muted-foreground font-medium mt-1">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <Badge 
                      variant={edu.status === "Pursuing" ? "default" : "secondary"}
                      className={edu.status === "Pursuing" ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}
                    >
                      {edu.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-foreground">
                    CGPA: <span className="text-primary">{edu.grade}</span>
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};