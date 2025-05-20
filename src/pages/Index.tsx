
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import "../styles/skills.css";
import "../styles/hero.css";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="system">
      <LanguageProvider>
        <main className="min-h-screen">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
          <Footer />
          <BackToTop />
        </main>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
