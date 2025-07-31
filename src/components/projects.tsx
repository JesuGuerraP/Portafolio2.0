import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  tags: string[];
  github?: string;
  demo?: string;
  category: string[];
}

const projects: Project[] = [
  {
  id: "1",
  title: "Sistema de Gestión del Instituto Técnico Atucsara",
  description: "Plataforma web para la gestión académica y administrativa del Instituto Técnico Atucsara. Permite la administración de estudiantes, docentes, cursos, matrículas y reportes personalizados.",
  images: [
    "https://res.cloudinary.com/dhtreelqk/image/upload/v1753725168/instituto_1_tknw4e.png",
    "https://res.cloudinary.com/dhtreelqk/image/upload/v1753725168/instituto_15_jaso1r.png",  
    "https://res.cloudinary.com/dhtreelqk/image/upload/v1753725174/instituto_14_hm7rcu.png",
    "https://res.cloudinary.com/dhtreelqk/image/upload/v1753725172/instituto_13_d8mw7d.png",
    "https://res.cloudinary.com/dhtreelqk/image/upload/v1753725172/instituto_12_szzwep.png",
    "https://res.cloudinary.com/dhtreelqk/image/upload/v1753725172/instituto_11_bioirw.png",
    "https://res.cloudinary.com/dhtreelqk/image/upload/v1753725172/instituto_10_sgecb6.png",
    "https://res.cloudinary.com/dhtreelqk/image/upload/v1753725170/instituto_9_uspxht.png",
    "https://res.cloudinary.com/dhtreelqk/image/upload/v1753725171/instituto_8_uodznw.png",
    "https://res.cloudinary.com/dhtreelqk/image/upload/v1753725170/instituto_7_padjgp.png",
    "https://res.cloudinary.com/dhtreelqk/image/upload/v1753725170/instituto_6_tqomdq.png",
    "https://res.cloudinary.com/dhtreelqk/image/upload/v1753725168/instituto_3_yeooqj.png",
    "https://res.cloudinary.com/dhtreelqk/image/upload/v1753725169/instituto_2_v2kf3n.png",
    "https://res.cloudinary.com/dhtreelqk/image/upload/v1753725171/instituto_5_bux4kh.png",
    "https://res.cloudinary.com/dhtreelqk/image/upload/v1753725168/instituto_4_esgeao.png"

  ],
  tags: ["React", "Firebase", "JavaScript", "Tailwind CSS"],
  github: "https://github.com/JesuGuerraP/Instituto-T-cnico-Atucsara.git",
  category: ["fullstack", "frontend"]
},
  {
    id: "2",
    title: "Expense Tracker Application",
    description: "Aplicación web desarrollada con Spring Boot que permite iniciar sesión, registrar nuevos usuarios, gestionar los gastos personales de forma intuitiva y eficiente. .",
    images: ["/imagenes/Expense/expense (5).png", "/imagenes/Expense/expense (1).png", "/imagenes/Expense/expense (3).png", "/imagenes/Expense/expense (4).png"],
    tags: ["Java", "Mysql ", "SpringBoot", "Thymeleaf", "Bootstrap"],
    github: "https://github.com/JesuGuerraP/expenserTracker",
    category: ["fullstack"],
  },
  
  {
    id: "3",
    title: "Sistema de Gestión de Kiosko ATUCSARA",
    description: "Aplicativo web para la gestión de inventarios, ventas y control de productos del Kiosko ATUCSARA. Incluye funcionalidades CRUD, autenticación de usuarios, registro de ventas y reportes",
    images: [
      "https://res.cloudinary.com/dhtreelqk/image/upload/v1753726219/kiosco_ieqhhy.png",
      "https://res.cloudinary.com/dhtreelqk/image/upload/v1753726224/Kiosco_1_hh8y0c.png",
      "https://res.cloudinary.com/dhtreelqk/image/upload/v1753726216/Kiosco_8_l6wjew.png",
      "https://res.cloudinary.com/dhtreelqk/image/upload/v1753726214/Kiosco_7_lf4ywr.png",
      "https://res.cloudinary.com/dhtreelqk/image/upload/v1753726213/Kiosco_6_t6rkxd.png ",
      "https://res.cloudinary.com/dhtreelqk/image/upload/v1753726227/Kiosco_5_awt61f.png",
      "https://res.cloudinary.com/dhtreelqk/image/upload/v1753726225/Kiosco_4_brabu1.png",
      "https://res.cloudinary.com/dhtreelqk/image/upload/v1753726222/Kiosco_2_mhthfi.png"

      
    ],
    tags: ["React", "Express", "JavaScrip", "Firebase", "Tailwind CSS","bootstrap"],
    github: "https://github.com/JesuGuerraP/Sistema-de-Gesti-n-de-KioskoAtucsara.git",
    demo: "https://sistema-de-gestion-kiosko-atucsara.vercel.app/login",
    category: ["backend", "fullstack"],
  },
  {
    id: "4",
    title: "Sitio Web Institucional ATUCSARA",
    description: "Diseño y desarrollo del sitio oficial de la Asociación ATUCSARA, una organización enfocada en la prevención y desarrollo comunitario. El sitio presenta información institucional, programas sociales, galerías y formularios de contacto.",
    images: ["/imagenes/image.png"],
    tags: ["WordPress", "Elementor", "Diseño UI/UX", "Responsive"],
    demo: "https://atucsara.org/",
    category: ["frontend", ],
  },
  {
    id: "5",
    title: "API Currency Converter",
    description: "API RESTful permite convertir divisas entre distintas monedas utilizando tasas de cambio actualizadas diariamente a través de una API externa.",
    images: ["/imagenes/APi/conversorMoneda (1).png", "/imagenes/APi/conversorMoneda (2).png"],
    tags: ["Java", "Bootstrap", "Thymeleaf", "ExchangeratesAPI", "Spring Boot"],
    demo: "https://jesusaviladev.github.io/api-currency-converter/",
    github: "https://github.com/JesuGuerraP/currency-converter",
    category: ["backend"],
  },
  {
    id: "6",
    title: "Sistema de Gestión Académica y Administrativa",
    description: "Este sistema fue diseñado para optimizar la gestión de instituciones educativas, permitiendo administrar de manera eficiente los procesos académicos y administrativos.",
    images: ["https://res.cloudinary.com/dhtreelqk/image/upload/v1753739160/sistemagestion1_xokh1d.png",
      "https://res.cloudinary.com/dhtreelqk/image/upload/v1753739160/sistemagestion7_tgsvlr.png",
      "https://res.cloudinary.com/dhtreelqk/image/upload/v1753739159/sistemagestion6_ico7ol.png",
      "https://res.cloudinary.com/dhtreelqk/image/upload/v1753739159/sistemagestion5_ypbkgx.png",
      "https://res.cloudinary.com/dhtreelqk/image/upload/v1753739159/sistemagestion3_axkpma.png",
      "https://res.cloudinary.com/dhtreelqk/image/upload/v1753739160/sistemagestion2_ctmjfr.png"
     
    ],
    tags: ["Java", "SpringBoot ", "Spring MVC", "Mysql", "Bootstrap","Thymeleaf"],
    github: "https://github.com/jesusaviladev/saas-dashboard",
    category: ["fullstack", "backend"],
  },
  {
    id: "7",
    title: "Portafolio Personal",
    description: "Sitio web de portafolio con secciones de proyectos, habilidades y formulario de contacto. Implementa modo oscuro y es completamente responsivo.",
    images: ["/imagenes/portafolioWeb.png"],
    tags: ["HTML", "CSS", "JavaScript","bootstrap", "Vercel"],
    github: "https://github.com/JesuGuerraP/Portafolio.git",
    demo: "https://jesus-guerra-portafolio-flame-xi-71.vercel.app/",
    category: ["frontend"],
  },
  
{
  id: "8",
  title: "Invitación de Graduación Interactiva",
  description: "Aplicación web personalizada para gestionar invitaciones a un evento de graduación. Permite a los invitados confirmar asistencia, dejar mensajes, y ver detalles del evento en una interfaz moderna y responsiva.",
  images: [
    "https://res.cloudinary.com/dhtreelqk/image/upload/v1753740144/Captura_de_pantalla_2025-07-28_170116_mmlgty.png",
    "https://res.cloudinary.com/dhtreelqk/image/upload/v1753740144/Captura_de_pantalla_2025-07-28_170137_hwe5p4.png",
    "https://res.cloudinary.com/dhtreelqk/image/upload/v1753740143/Captura_de_pantalla_2025-07-28_170145_wjadlw.png"
  ],
  tags: ["JavaScript", "HTML", "CSS", "EmailJS"],
  github: "https://github.com/JesuGuerraP/Invitaci-n-Grado.git",
  demo: "https://invitacionesdegrado.vercel.app/",
  category: ["frontend", "personal"]
},
{
  "id": "9",
  "title": "Sistema de Recomendación de Carreras",
  "description": "Aplicación de escritorio interactiva desarrollada en Python que recomienda carreras universitarias basadas en los intereses y habilidades del usuario. Utiliza una interfaz gráfica moderna con Tkinter y un sistema de recomendación basado en similitud de vectores y una base de datos SQLite para mostrar salidas profesionales personalizadas.",
  "images": [
    "https://res.cloudinary.com/dhtreelqk/image/upload/v1753975957/Captura_de_pantalla_2025-07-31_102608_bbno17.png",
    "https://res.cloudinary.com/dhtreelqk/image/upload/v1753975957/Captura_de_pantalla_2025-07-31_102635_hr4bip.png",
    "https://res.cloudinary.com/dhtreelqk/image/upload/v1753975957/Captura_de_pantalla_2025-07-31_102734_nh4rkt.png"
  ],
  "tags": ["Python", "Tkinter", "SQLite", "Machine Learning", "Numpy", "Scipy"],
  "github": "https://github.com/JesuGuerraP/Sistema-de-recomendaci-n-de-carreras.git",
  "category": ["backend"]
}
];


export function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const { t } = useLanguage();
  const { elementRef, isVisible } = useScrollAnimation();
  const [visibleProjects, setVisibleProjects] = useState<string[]>([]);
  const projectRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  // Estado para el índice de imagen actual de cada proyecto
  const [imageIndexes, setImageIndexes] = useState<{ [key: string]: number }>({});
  // Estado para saber si el mouse está sobre la imagen de cada card
  const [hovered, setHovered] = useState<{ [key: string]: boolean }>({});

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

  // Funciones para cambiar la imagen del carrusel
  const handlePrev = (id: string, imagesLength: number) => {
    setImageIndexes(prev => ({
      ...prev,
      [id]: prev[id] === undefined ? imagesLength - 1 : (prev[id] - 1 + imagesLength) % imagesLength
    }));
  };
  const handleNext = (id: string, imagesLength: number) => {
    setImageIndexes(prev => ({
      ...prev,
      [id]: prev[id] === undefined ? 1 : (prev[id] + 1) % imagesLength
    }));
  };

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
          {filteredProjects.map((project, index) => {
            const images = project.images;
            const currentIndex = imageIndexes[project.id] ?? 0;
            return (
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
                <div 
                  className="h-56 md:h-60 bg-white dark:bg-neutral-900 flex items-center justify-center relative group/image"
                  onMouseEnter={() => setHovered(prev => ({ ...prev, [project.id]: true }))}
                  onMouseLeave={() => setHovered(prev => ({ ...prev, [project.id]: false }))}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                  <img
                    src={images[currentIndex]}
                    alt={project.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-700"
                    style={{ objectPosition: 'center', background: 'transparent' }}
                  />
                  {images.length > 1 && hovered[project.id] && (
                    <>
                      <button
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-1 z-20 hover:bg-black/80 transition-opacity"
                        onClick={e => { e.stopPropagation(); handlePrev(project.id, images.length); }}
                        style={{ opacity: 1 }}
                        aria-label="Anterior"
                        tabIndex={0}
                      >
                        &#8592;
                      </button>
                      <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-1 z-20 hover:bg-black/80 transition-opacity"
                        onClick={e => { e.stopPropagation(); handleNext(project.id, images.length); }}
                        style={{ opacity: 1 }}
                        aria-label="Siguiente"
                        tabIndex={0}
                      >
                        &#8594;
                      </button>
                    </>
                  )}
                  {images.length > 1 && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
                      {images.map((_, i) => (
                        <span
                          key={i}
                          className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-white' : 'bg-white/50'} border border-black/20`}
                        ></span>
                      ))}
                    </div>
                  )}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
