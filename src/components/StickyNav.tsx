import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { generateResumePDF } from "@/utils/generatePDF";

const StickyNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadPDF = () => {
    generateResumePDF();
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-sm shadow-sm border-b border-border/50" : "bg-card/90"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-lg font-semibold tracking-tight text-foreground">
            RAHUL KUSHWAH
          </span>
          <span className="hidden sm:block text-xs text-muted-foreground">
            Marketing • Growth • Product
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Button
            onClick={handleDownloadPDF}
            variant="ghost"
            size="sm"
            className="text-xs hover:bg-secondary"
          >
            Download Resume
          </Button>

          <a href="mailto:rahulkushwahqueries@gmail.com">
            <Button
              size="sm"
              className="bg-foreground text-background hover:bg-foreground/90 text-xs px-4"
            >
              Connect
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default StickyNav;
