import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  children: React.ReactNode;
}

export const SkillBadge = ({ children }: SkillBadgeProps) => {
  return (
    <Badge 
      variant="secondary" 
      className="px-4 py-1.5 text-xs font-normal rounded-full bg-secondary/50 hover:bg-secondary/70 transition-colors border border-border/50"
    >
      {children}
    </Badge>
  );
};
