
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, Home, User, BookOpen, Code, GraduationCap, Send } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const navItems = [
  { title: "nav.home", href: "#home", icon: Home },
  { title: "nav.about", href: "#about", icon: User },
  { title: "nav.skills", href: "#skills", icon: BookOpen },
  { title: "nav.projects", href: "#projects", icon: Code },
  { title: "nav.education", href: "#education", icon: GraduationCap },
  { title: "nav.contact", href: "#contact", icon: Send },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a 
          href="#home" 
          className="text-2xl font-heading font-bold"
          onClick={(e) => handleNavClick(e, "#home")}
        >
          <span className="text-accent">Jesús</span> Guerra
        </a>
        {isMobile ? (
          <>
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label="Menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
            {isMenuOpen && (
              <div className="fixed inset-0 bg-background z-50 flex flex-col">
                <div className="flex items-center justify-between px-4 h-16">
                  <a 
                    href="#home" 
                    className="text-2xl font-heading font-bold"
                    onClick={(e) => handleNavClick(e, "#home")}
                  >
                    <span className="text-accent">Jesús</span> Guerra
                  </a>
                  <div className="flex items-center gap-2">
                    <LanguageToggle />
                    <ThemeToggle />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleMenu}
                      aria-label="Close menu"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <nav className="flex-1 flex flex-col items-center justify-center">
                  <ul className="space-y-6 text-center">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className="text-xl font-medium hover:text-accent transition-colors"
                          onClick={(e) => handleNavClick(e, item.href)}
                        >
                          {t(item.title)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-4">
            <nav>
              <ul className="flex space-x-6">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="font-medium hover:text-accent transition-colors"
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {t(item.title)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <LanguageToggle />
            <ThemeToggle />
          </div>
        )}
      </div>
    </header>
  );
}
