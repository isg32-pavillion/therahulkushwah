import { useState, useEffect } from "react";
import { Volume2, VolumeX, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateResumePDF } from "@/utils/generatePDF";

const StickyNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = 300;
      
      setIsScrolled(scrollPosition > 50);
      setIsVisible(scrollPosition > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadPDF = () => {
    generateResumePDF();
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    const audio = document.querySelector('audio');
    if (audio) {
      audio.muted = !isMuted;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${
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
          
          <Button
            onClick={toggleMute}
            variant="ghost"
            size="sm"
            className="p-2 hover:bg-secondary"
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>

          <a href="http://rahulkushwah.com" target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="sm"
              className="text-xs hover:bg-secondary hidden sm:flex"
            >
              Visit website
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="p-2 hover:bg-secondary sm:hidden"
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          </a>

          <Button
            size="sm"
            className="bg-foreground text-background hover:bg-foreground/90 text-xs px-4"
          >
            Connect
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default StickyNav;
