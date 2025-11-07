import { useState, useRef } from "react";
import { Volume2, VolumeX, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const AudioSummary = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <div className="bg-background border border-border rounded-full shadow-lg p-3 flex items-center gap-2">
        <span className="text-xs font-light px-2 text-muted-foreground">
          Audio unavailable - Add your ElevenLabs API key to enable
        </span>
      </div>
    </div>
  );
};

export default AudioSummary;
