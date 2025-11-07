import { useState, useEffect } from "react";
import { Download, Briefcase, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateResumePDF } from "@/utils/generatePDF";

const StickyNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = 400; // Approximate hero section height
      const scrolled = window.scrollY > heroHeight;
      setIsVisible(scrolled);
      setIsScrolled(window.scrollY > heroHeight + 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border py-3"
          : "bg-background/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`font-display transition-all duration-300 ${
            isScrolled ? "text-lg" : "text-xl"
          } hover:text-muted-foreground`}
        >
          Rahul Kushwah
        </button>

        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={() => scrollToSection("experience")}
            className="text-sm hover:text-muted-foreground transition-colors flex items-center gap-2"
            title="Experience"
          >
            <Briefcase className="h-4 w-4 md:hidden" />
            <span className="hidden md:inline">Experience</span>
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-sm hover:text-muted-foreground transition-colors flex items-center gap-2"
            title="Skills"
          >
            <Wrench className="h-4 w-4 md:hidden" />
            <span className="hidden md:inline">Skills</span>
          </button>
          <Button
            variant="outline"
            size="sm"
            onClick={generateResumePDF}
            className="gap-2"
          >
            <Download className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Resume</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default StickyNav;
