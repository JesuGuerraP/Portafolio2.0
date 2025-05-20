
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useTheme } from "@/components/theme-provider";
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/components/language-provider";
import { BarChart, Code, Database, Briefcase } from "lucide-react";

export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "soft";
}

const skills: Skill[] = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "React", level: 92, category: "frontend" },
  { name: "Next.js", level: 88, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Bootstrap", level: 88, category: "frontend" },
  { name: "Java", level: 90, category: "backend" },
  { name: "Spring Boot", level: 88, category: "backend" },
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express", level: 82, category: "backend" },
  { name: "MySQL", level: 87, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 75, category: "backend" },
  { name: "Firebase", level: 83, category: "tools" },
  { name: "Git/GitHub", level: 88, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "AWS", level: 70, category: "tools" },
  { name: "Figma", level: 65, category: "tools" },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const [progress, setProgress] = useState(0);
  const { elementRef, isVisible } = useScrollAnimation();
  const { theme } = useTheme();

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isVisible) {
      timeout = setTimeout(() => {
        setProgress(level);
      }, 100);
    } else {
      setProgress(0);
    }
    return () => clearTimeout(timeout);
  }, [isVisible, level]);

  return (
    <div ref={elementRef} className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground font-medium">{level}%</span>
      </div>
      <Progress 
        value={progress} 
        className="h-3 rounded-full overflow-hidden" 
        indicatorClassName={`bg-gradient-to-r ${
          theme === "dark" 
            ? "from-purple-600 to-violet-400" 
            : "from-violet-500 to-purple-700"
        } transition-all duration-1000 ease-in-out`}
      />
    </div>
  );
};

const getCategoryIcon = (categoryId: string) => {
  switch (categoryId) {
    case "frontend":
      return <Code className="w-6 h-6 text-accent" />;
    case "backend":
      return <Database className="w-6 h-6 text-accent" />;
    case "tools":
      return <Briefcase className="w-6 h-6 text-accent" />;
    case "soft":
      return <BarChart className="w-6 h-6 text-accent" />;
    default:
      return null;
  }
};

export function Skills() {
  const { t } = useLanguage();
  const { elementRef, isVisible } = useScrollAnimation();
  
  const categories = [
    { id: "frontend", name: t("skills.frontend") },
    { id: "backend", name: t("skills.backend") },
    { id: "tools", name: t("skills.tools") },
    { id: "soft", name: t("skills.soft") }
  ];

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none"></div>
      <div className="container-tight relative z-10">
        <div ref={elementRef} className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold mb-4 inline-block relative">
            {t("skills.title")}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-full transform scale-x-0 transition-transform duration-700 origin-left" 
                  style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.slice(0, 3).map((category) => (
            <div
              key={category.id}
              className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mt-16 -mr-16 transition-transform duration-300 group-hover:scale-125"></div>
              <div className="flex items-center mb-6 gap-3">
                <div className="p-3 rounded-lg bg-accent/10">
                  {getCategoryIcon(category.id)}
                </div>
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>
              <div className="space-y-5">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
              </div>
            </div>
          ))}

          <div 
            className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mt-16 -mr-16 transition-transform duration-300 group-hover:scale-125"></div>
            <div className="flex items-center mb-6 gap-3">
              <div className="p-3 rounded-lg bg-accent/10">
                {getCategoryIcon("soft")}
              </div>
              <h3 className="text-xl font-bold">{t("skills.soft")}</h3>
            </div>
            <ul className="space-y-3">
              {[
                t("skills.teamwork"),
                t("skills.communication"),
                t("skills.problemSolving"),
                t("skills.analytical"),
                t("skills.fastLearning"),
                t("skills.adaptability"),
                t("skills.timeManagement")
              ].map((skill, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-accent"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
