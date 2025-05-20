
import React, { createContext, useContext, useState } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About me",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.contact": "Contact",
    
    // Hero section
    "hero.greeting": "Hi, my name is",
    "hero.role": "Software Engineer",
    "hero.description": "Innovative and versatile Software Engineer with extensive background in full-stack development, IT support, and administrative systems optimization. Proven track record in designing and implementing robust software solutions that improve operational efficiency and user experience.",
    "hero.projects": "View projects",
    "hero.contact": "Contact me",

    // About section
    "about.title": "About",
    "about.me": "me",
    "about.experience": "years",
    "about.paragraph1": "Software Engineer | Software Developer, Passionate about technology and software development, with experience in languages and tools such as Java, SQL, Spring Boot, JavaScript, React, HTML, CSS, and Python.",
    "about.paragraph2": "I have participated in academic projects where I developed web applications aimed at improving end-user efficiency, applying good development and design practices. I stand out for my focus on effective communication, teamwork, and the ability to understand client needs to create innovative solutions that exceed their expectations.",
    "about.paragraph3": "My goal is to grow professionally and contribute to meaningful projects that generate a positive impact on society. I am always willing to face new challenges that drive my development as a professional and as a person.",
    "about.download": "Download CV",
    
    // Education section
    "education.title": "Education",
    "education.subtitle": "& Training",
    
    "education.software.degree": "Software Engineering",
    "education.software.institution": "Universidad de Cartagena",
    "education.software.period": "2019 - 2024",
    "education.software.description": "Training in software development and information systems",
    
    "education.technician.degree": "Systems Technician",
    "education.technician.institution": "El Servicio Nacional de Aprendizaje SENA",
    "education.technician.period": "2017 - 2019",
    "education.technician.description": "Technical training in computer systems and IT support",
    
    "education.bootcamp.degree": "Backend Programming Bootcamp",
    "education.bootcamp.institution": "Universidad Tecnológica de Bolívar",
    "education.bootcamp.period": "2023",
    "education.bootcamp.description": "Intensive training in backend development and software architecture",
    
    "education.excel.degree": "Excel - Advanced Level",
    "education.excel.institution": "El Servicio Nacional de Aprendizaje SENA",
    "education.excel.period": "2024",
    "education.excel.description": "Specialized course in advanced Excel functions",
    
    "education.english.degree": "English Course - Advanced Level (in progress)",
    "education.english.institution": "Open English",
    "education.english.period": "2024 - Present",
    "education.english.description": "English language training with a conversational and professional focus",

    // Skills section
    "skills.title": "My Skills",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.tools": "Tools",
    "skills.soft": "Soft Skills",
    "skills.teamwork": "Teamwork",
    "skills.communication": "Effective communication",
    "skills.problemSolving": "Problem solving",
    "skills.analytical": "Analytical thinking",
    "skills.fastLearning": "Fast learning",
    "skills.adaptability": "Adaptability",
    "skills.timeManagement": "Time management",

    // Project section
    "projects.title": "My Projects",
    "projects.subtitle": "A selection of my recent work, both personal and professional.",
    "projects.categories.all": "All",
    "projects.categories.frontend": "Frontend",
    "projects.categories.backend": "Backend",
    "projects.categories.fullstack": "Full Stack",
    "projects.code": "Code",
    "projects.demo": "Demo",

    // Contact section
    "contact.title": "Contact Me",
    "contact.subtitle": "Do you have a project in mind or want to talk about job opportunities? Send me a message!",
    "contact.form.name": "Your name",
    "contact.form.email": "Your email",
    "contact.form.message": "Your message",
    "contact.form.submit": "Send message",
    "contact.form.sending": "Sending...",
    "contact.form.success": "Message sent! I'll get back to you as soon as possible.",
    "contact.form.error": "There was a problem sending your message. Please try again.",
    "contact.info.title": "Contact information",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.social.title": "Social networks",

    // Footer
    "footer.rights": "All rights reserved",
    "footer.designed": "Designed and developed with ❤️"
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.education": "Educación",
    "nav.contact": "Contacto",
    
    // Hero section
    "hero.greeting": "Hola, me llamo",
    "hero.role": "Ingeniero de Software",
    "hero.description": "Ingeniero de Software innovador y versátil con un amplio background en desarrollo full-stack, soporte IT y optimización de sistemas administrativos. Trayectoria comprobada en el diseño e implementación de soluciones de software robustas que mejoran la eficiencia operativa y la experiencia del usuario.",
    "hero.projects": "Ver proyectos",
    "hero.contact": "Contáctame",

    // About section
    "about.title": "Sobre",
    "about.me": "mí",
    "about.experience": "años",
    "about.paragraph1": "Ingeniero de Software | developer software, Apasionado por la tecnología y el desarrollo de software, con experiencia en lenguajes y herramientas como Java, SQL, Spring Boot, JavaScript, React, HTML, CSS, y Python.",
    "about.paragraph2": "He participado en proyectos académicos donde desarrollé aplicaciones web orientadas a mejorar la eficiencia del usuario final, aplicando buenas prácticas de desarrollo y diseño. Me destaco por mi enfoque en la comunicación efectiva, el trabajo en equipo y la capacidad de comprender las necesidades del cliente para crear soluciones innovadoras que superen sus expectativas.",
    "about.paragraph3": "Mi objetivo es crecer profesionalmente y contribuir a proyectos significativos que generen un impacto positivo en la sociedad. Estoy siempre dispuesto a enfrentar nuevos desafíos que impulsen mi desarrollo como profesional y como persona.",
    "about.download": "Descargar CV",
    
    // Education section
    "education.title": "Educación",
    "education.subtitle": "y Formación",
    
    "education.software.degree": "Ingeniería de Software",
    "education.software.institution": "Universidad de Cartagena",
    "education.software.period": "2019 - 2024",
    "education.software.description": "Formación en desarrollo de software y sistemas de información",
    
    "education.technician.degree": "Técnico en Sistemas",
    "education.technician.institution": "El Servicio Nacional de Aprendizaje SENA",
    "education.technician.period": "2017 - 2019",
    "education.technician.description": "Formación técnica en sistemas informáticos y soporte IT",
    
    "education.bootcamp.degree": "Bootcamp de Programación Backend",
    "education.bootcamp.institution": "Universidad Tecnológica de Bolívar",
    "education.bootcamp.period": "2023",
    "education.bootcamp.description": "Formación intensiva en desarrollo de backend y arquitectura de software",
    
    "education.excel.degree": "Excel - Nivel Avanzado",
    "education.excel.institution": "El Servicio Nacional de Aprendizaje SENA",
    "education.excel.period": "2024",
    "education.excel.description": "Curso especializado en funciones avanzadas de Excel",
    
    "education.english.degree": "Curso de Inglés - Nivel Avanzado (en progreso)",
    "education.english.institution": "Open English",
    "education.english.period": "2024 - Actualidad",
    "education.english.description": "Formación en idioma inglés con enfoque conversacional y profesional",

    // Skills section
    "skills.title": "Mis Habilidades",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.tools": "Herramientas",
    "skills.soft": "Soft Skills",
    "skills.teamwork": "Trabajo en equipo",
    "skills.communication": "Comunicación efectiva",
    "skills.problemSolving": "Resolución de problemas",
    "skills.analytical": "Pensamiento analítico",
    "skills.fastLearning": "Aprendizaje rápido",
    "skills.adaptability": "Adaptabilidad",
    "skills.timeManagement": "Gestión del tiempo",

    // Project section
    "projects.title": "Mis Proyectos",
    "projects.subtitle": "Una selección de mis trabajos recientes, personales y profesionales.",
    "projects.categories.all": "Todos",
    "projects.categories.frontend": "Frontend",
    "projects.categories.backend": "Backend",
    "projects.categories.fullstack": "Full Stack",
    "projects.code": "Código",
    "projects.demo": "Demo",

    // Contact section
    "contact.title": "Contáctame",
    "contact.subtitle": "¿Tienes un proyecto en mente o quieres hablar sobre oportunidades laborales? ¡Envíame un mensaje!",
    "contact.form.name": "Tu nombre",
    "contact.form.email": "Tu correo electrónico",
    "contact.form.message": "Tu mensaje",
    "contact.form.submit": "Enviar mensaje",
    "contact.form.sending": "Enviando...",
    "contact.form.success": "¡Mensaje enviado! Te responderé lo antes posible.",
    "contact.form.error": "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
    "contact.info.title": "Información de contacto",
    "contact.info.email": "Email",
    "contact.info.phone": "Teléfono",
    "contact.social.title": "Redes sociales",

    // Footer
    "footer.rights": "Todos los derechos reservados",
    "footer.designed": "Diseñado y desarrollado by Ingeniero de Software"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
