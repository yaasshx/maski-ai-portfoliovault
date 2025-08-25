import { Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Certifications = () => {
  const certifications = [
    {
      title: "Encryptcon Hackathon",
      issuer: "Hackathon Event",
      type: "Participation",
      year: "2024",
      description: "Participated in cybersecurity and encryption-focused hackathon, gaining experience in secure coding practices and collaborative problem-solving."
    }
  ];

  return (
    <section className="py-20 px-6 bg-card/20" id="certifications">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Award className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-4xl font-bold text-gradient">Certifications</h2>
          </div>
          <p className="text-muted-foreground text-lg mt-4">
            Professional certifications and learning achievements
          </p>
        </div>

        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">
                      {cert.title}
                    </CardTitle>
                    <p className="text-muted-foreground font-medium mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {cert.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{cert.year}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </CardContent>
            </Card>
          ))}
          
          {/* Future certifications placeholder */}
          <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 animate-slide-up opacity-60">
            <CardContent className="p-8 text-center">
              <div className="max-w-xl mx-auto">
                <Award className="h-12 w-12 text-primary mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-bold text-primary mb-2">
                  Continuous Learning
                </h3>
                <p className="text-muted-foreground">
                  Actively pursuing additional certifications in AI/ML, cloud computing, 
                  and software development to enhance my professional skills.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};