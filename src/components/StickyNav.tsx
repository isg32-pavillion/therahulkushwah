import { useState, useEffect } from "react";
import { Download, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadPDF = () => {
    // Link to PDF in public folder
    const link = document.createElement("a");
    link.href = "/Rahul_Kushwah_Resume.pdf";
    link.download = "Rahul_Kushwah_Resume.pdf";
    link.click();
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`font-display transition-all duration-300 ${
            isScrolled ? "text-xl" : "text-2xl"
          } hover:text-muted-foreground`}
        >
          RK
        </button>

        <div className="flex items-center gap-6">
          <button
            onClick={() => scrollToSection("experience")}
            className="text-sm hover:text-muted-foreground transition-colors hidden md:block"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-sm hover:text-muted-foreground transition-colors hidden md:block"
          >
            Skills
          </button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownloadPDF}
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
