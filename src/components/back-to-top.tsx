
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-8 right-8 z-50 rounded-full shadow-lg border-accent/30 bg-background/80 backdrop-blur-sm hover:bg-accent/10 transition-all duration-300 animate-fade-in"
          onClick={scrollToTop}
          aria-label="Volver arriba"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </>
  );
}
