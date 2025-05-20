import { useLanguage } from "@/components/language-provider";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  const socialLinks = [
    { 
      href: "https://github.com/JesuGuerraP", 
      icon: <Github size={20} />, 
      label: "GitHub" 
    },
    { 
      href: "https://www.linkedin.com/in/jesus-david-guerra-pineda-24a963273/", 
      icon: <Linkedin size={20} />, 
      label: "LinkedIn" 
    },
    { 
      href: "mailto:jesusguerrapineda000@gmail.com", 
      icon: <Mail size={20} />, 
      label: "Email" 
    }
  ];

  const navLinks = [
    { href: "#about", label: t("nav.about") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#contact", label: t("nav.contact") }
  ];

  return (
    <footer className="bg-secondary/80 dark:bg-secondary/20 py-12 border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              <span className="text-accent">Jesús</span> Guerra
            </h2>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t("hero.role")}
            </p>
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 transform hover:-translate-y-1"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("footer.quickLinks")}</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-accent transition-colors group flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("footer.contact")}</h3>
            <address className="not-italic">
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Mail size={16} />
                  <a href="mailto:jesusguerrapineda000@gmail.com">
                    jesusguerrapineda000@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3 hover:text-accent transition-colors">
                  {/* Nota: Parece que falta importar Phone */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href="tel:+573024094733">
                    +57 302-409-4733
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  {/* Nota: Parece que falta importar MapPin */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Magangue,Colombia</span>
                </li>
              </ul>
            </address>
          </div>
          
          {/* CTA & Copyright */}
          <div className="space-y-4">
            <Button 
              variant="outline" 
              className="w-full flex items-center gap-2 border-accent/20 hover:border-accent/50 transition-colors duration-300"
              onClick={() => window.open('/imagenes/CV_JESÚS_GUERRA.pdf', '_blank')}
              aria-label={t("footer.downloadCV")}
            >
              <Download size={16} />
              {t("DownloadCV")}
            </Button>
            
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                &copy; {currentYear} {t("footer.rights")}
              </p>
              <p className="text-xs text-muted-foreground">
                {t("footer.designed")} <span className="text-accent">Jesús Guerra</span>
              </p>
              <p className="text-xs text-muted-foreground">
                {t("footer.madeWith")} <span className="text-accent">Next.js</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-border/20 mt-8 pt-8 text-center text-xs text-muted-foreground">
          <p>{t("footer.thanks")}</p>
        </div>
      </div>
    </footer>
  );
}