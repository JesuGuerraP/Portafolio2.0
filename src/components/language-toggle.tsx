
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      className="focus:outline-none font-medium flex items-center gap-1.5 hover:text-accent transition-colors"
      aria-label="Toggle language"
    >
      <Languages className="h-4 w-4" />
      <span>{language === "es" ? "EN" : "ES"}</span>
    </Button>
  );
}
