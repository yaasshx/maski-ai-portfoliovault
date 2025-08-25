import { FolderOpen, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Solar System Simulation",
      description: "An interactive 3D solar system simulation showcasing planetary orbits, realistic physics, and celestial mechanics. Features include zoom controls, orbit visualization, and educational information panels.",
      technologies: ["JavaScript", "Three.js", "WebGL", "HTML", "CSS"],
      status: "Completed"
    },
    {
      title: "Feedback Sentiment Analyzer",
      description: "A natural language processing application that analyzes customer feedback sentiment in real-time. Processes text data to classify emotions and provides actionable insights for business improvements.",
      technologies: ["Python", "NLP", "TextBlob", "Pandas"],
      status: "Completed"
    },
    {
      title: "Sales Prediction Analysis",
      description: "A comprehensive data analysis tool built with Streamlit that predicts sales trends using historical data. Features interactive visualizations and machine learning models for accurate forecasting.",
      technologies: ["Python", "Streamlit", "Pandas", "Matplotlib"],
      status: "Completed"
    },
    {
      title: "IPL Score Tracker",
      description: "A cricket score tracking system that monitors IPL matches in real-time. Implements efficient data structures for quick score updates and provides comprehensive match statistics and analytics.",
      technologies: ["C", "Python", "Data Structures"],
      status: "Completed"
    }
  ];

  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <FolderOpen className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-4xl font-bold text-gradient">Projects</h2>
          </div>
          <p className="text-muted-foreground text-lg mt-4">
            A showcase of my technical projects and implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 animate-slide-up group hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary/80 hover:bg-primary/10 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group/btn"
                  disabled
                >
                  <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:animate-pulse" />
                  View Project
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};