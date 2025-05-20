
import { GraduationCap, Book, Calendar, School, Code } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Education() {
  const { t, language } = useLanguage();
  const { elementRef, isVisible } = useScrollAnimation();
  
  const educationItems = [
    {
      degree: "education.software.degree",
      institution: "education.software.institution",
      period: "education.software.period",
      description: "education.software.description",
      icon: GraduationCap
    },
    {
      degree: "education.technician.degree",
      institution: "education.technician.institution", 
      period: "education.technician.period",
      description: "education.technician.description",
      icon: School
    },
    {
      degree: "education.bootcamp.degree",
      institution: "education.bootcamp.institution",
      period: "education.bootcamp.period",
      description: "education.bootcamp.description", 
      icon: Code
    },
    {
      degree: "education.excel.degree",
      institution: "education.excel.institution",
      period: "education.excel.period",
      description: "education.excel.description",
      icon: School
    },
    {
      degree: "education.english.degree",
      institution: "education.english.institution",
      period: "education.english.period",
      description: "education.english.description",
      icon: Book
    }
  ];

  return (
    <section id="education" className="section-padding bg-gradient-to-br from-background to-secondary/30 relative overflow-hidden">
      <div className="container-tight relative z-10">
        <h2 className="text-3xl font-bold mb-10 text-center">
          <span className="text-accent glow-text mr-2">{t("education.title")}</span> {t("education.subtitle")}
        </h2>
        
        <div 
          ref={elementRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {educationItems.map((item, index) => (
            <Card 
              key={index} 
              className={`border border-accent/10 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 overflow-hidden ${
                isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-accent/5 rounded-full"></div>
              
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">{t(item.degree)}</CardTitle>
                  <CardDescription className="flex items-center mt-1">
                    <Calendar className="h-4 w-4 mr-1 inline" /> {t(item.period)}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="font-medium text-muted-foreground mb-2">{t(item.institution)}</p>
                <p className="text-sm">{t(item.description)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
