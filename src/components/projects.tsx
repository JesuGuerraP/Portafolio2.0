
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  category: string[];
}

const projects: Project[] = [
  {
    id: "1",
    title: "Expense Tracker Application",
    description: "Aplicación web desarrollada con Spring Boot que permite iniciar sesión, registrar nuevos usuarios, gestionar los gastos personales de forma intuitiva y eficiente. .",
    image: "/imagenes/expense (2).png",
    tags: ["Java", "Mysql ", "SpringBoot", "Thymeleaf", "Bootstrap"],
    github: "https://github.com/JesuGuerraP/expenserTracker",
    category: ["fullstack"],
  },
  {
    id: "2",
    title: "Sistema de Gestión Académica y Administrativa",
    description: "Este sistema fue diseñado para optimizar la gestión de instituciones educativas, permitiendo administrar de manera eficiente los procesos académicos y administrativos.",
    image: "/imagenes/Captura de pantalla 2025-03-12 110020.png",
    tags: ["Java", "SpringBoot ", "Spring MVC", "Mysql", "Bootstrap","Thymeleaf"],
    github: "https://github.com/jesusaviladev/saas-dashboard",
    category: ["fullstack"],
  },
  {
    id: "3",
    title: "Sistema de Gestión de Kiosko ATUCSARA",
    description: "Aplicativo web para la gestión de inventarios, ventas y control de productos del Kiosko ATUCSARA. Incluye funcionalidades CRUD, autenticación de usuarios, registro de ventas y reportes",
    image: "/imagenes/kiosco.png",
    tags: ["React", "Express", "JavaScrip", "Firebase", "Tailwind CSS","bootstrap"],
    github: "https://github.com/JesuGuerraP/Sistema-de-Gesti-n-de-KioskoAtucsara.git",
    demo: "https://sistema-de-gestion-kiosko-atucsara.vercel.app/login",
    category: ["backend", "fullstack"],
  },
  {
      id: "4",
  title: "Sitio Web Institucional ATUCSARA",
  description: "Diseño y desarrollo del sitio oficial de la Asociación ATUCSARA, una organización enfocada en la prevención y desarrollo comunitario. El sitio presenta información institucional, programas sociales, galerías y formularios de contacto.",
  image: "/imagenes/image.png", // Puedes cambiarla si tienes una imagen específica del sitio de ATUCSARA
  tags: ["WordPress", "Elementor", "Diseño UI/UX", "Responsive"],
  demo: "https://atucsara.org/",
  category: ["frontend", ],
  },
  {
    id: "5",
    title: "API Currency Converter",
    description: "API RESTful permite convertir divisas entre distintas monedas utilizando tasas de cambio actualizadas diariamente a través de una API externa.",
    image: "/imagenes/currency (2).png",
    tags: ["Java", "Bootstrap", "Thymeleaf", "ExchangeratesAPI", "Spring Boot"],
    demo: "https://jesusaviladev.github.io/api-currency-converter/",
    github: "https://github.com/JesuGuerraP/currency-converter",
    category: ["backend"],
  },
  {
    id: "6",
    title: "Portafolio Personal",
    description: "Sitio web de portafolio con secciones de proyectos, habilidades y formulario de contacto. Implementa modo oscuro y es completamente responsivo.",
    image: "/imagenes/portafolioWeb.png",
    tags: ["HTML", "CSS", "JavaScript","bootstrap", "Vercel"],
    github: "https://github.com/JesuGuerraP/Portafolio.git",
    demo: "https://jesus-guerra-portafolio-flame-xi-71.vercel.app/",
    category: ["frontend"],
  },
];

export function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const { t } = useLanguage();
  const { elementRef, isVisible } = useScrollAnimation();
  const [visibleProjects, setVisibleProjects] = useState<string[]>([]);
  const projectRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  
  const categories = [
    { id: "all", name: t("projects.categories.all") },
    { id: "frontend", name: t("projects.categories.frontend") },
    { id: "backend", name: t("projects.categories.backend") },
    { id: "fullstack", name: t("projects.categories.fullstack") },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute('data-id');
          if (id && entry.isIntersecting) {
            setVisibleProjects(prev => [...prev, id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Copy the current refs to a local variable
    const refs = Array.from(projectRefs.current.values());

    refs.forEach(ref => {
      observer.observe(ref);
    });

    return () => {
      refs.forEach(ref => {
        observer.unobserve(ref);
      });
    };
  }, [filter]);

  return (
    <section id="projects" className="section-padding bg-secondary/30 dark:bg-secondary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/5 to-transparent pointer-events-none"></div>
      <div className="container-tight">
        <div ref={elementRef} className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold mb-4 relative inline-block">
            {t("projects.title")}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-full transform scale-x-0 transition-transform duration-700 origin-left" 
                  style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}></span>
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category, index) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className="rounded-full transition-all hover:shadow-md"
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isVisible ? 1 : 0
                }}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              data-id={project.id}
              ref={el => el && projectRefs.current.set(project.id, el)}
              className="bg-card border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
              style={{ 
                transform: visibleProjects.includes(project.id) ? 'translateY(0)' : 'translateY(40px)',
                opacity: visibleProjects.includes(project.id) ? 1 : 0,
                transition: `all 0.7s ease-out ${index * 0.1}s`
              }}
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary text-xs px-2 py-1 rounded-full transition-all hover:-translate-y-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <Button size="sm" variant="outline" asChild className="group">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 overflow-hidden"
                      >
                        <Github className="h-4 w-4 transition-transform group-hover:rotate-12" />
                        <span>{t("projects.code")}</span>
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" asChild className="group">
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 overflow-hidden"
                      >
                        <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        <span>{t("projects.demo")}</span>
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
