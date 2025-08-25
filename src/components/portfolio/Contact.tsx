import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Mail className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-4xl font-bold text-gradient">Let's Connect</h2>
          </div>
          <p className="text-muted-foreground text-lg mt-4">
            Ready to collaborate or discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">maski.yashasv@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+91 XXX XXX XXXX</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6">
                  <p className="font-medium mb-4">Connect with me:</p>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-110"
                      asChild
                    >
                      <a href="https://linkedin.com/in/maski-yashasv" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-110"
                      asChild
                    >
                      <a href="https://github.com/maski-yashasv" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary/50 transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary/50 transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background/50 border-primary/20 focus:border-primary/50 transition-colors duration-300 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 group"
                >
                  <Send className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};