import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SkillBadge } from "@/components/SkillBadge";
import StickyNav from "@/components/StickyNav";
import AudioSummary from "@/components/AudioSummary";
import profilePhoto from "@/assets/rahul-photo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyNav />
      <AudioSummary />
      
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Card className="mb-6 shadow-sm border-border/50">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <img src={profilePhoto} alt="Rahul Kushwah" className="w-32 h-32 object-cover rounded-lg shadow-md" />
              </div>
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-2 tracking-tight">RAHUL KUSHWAH</h1>
                <p className="text-sm text-muted-foreground mb-4">Marketing • Growth • Product</p>
                <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /><span>Noida</span></div>
                  <span className="hidden sm:block">•</span>
                  <a href="tel:+918191899099" className="flex items-center gap-2 hover:text-foreground transition-colors">
                    <Phone className="h-4 w-4" />+91-8191899099
                  </a>
                  <span className="hidden sm:block">•</span>
                  <a href="mailto:rahulkushwahqueries@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                    <Mail className="h-4 w-4" />rahulkushwahqueries@gmail.com
                  </a>
                </div>
                <div className="mb-4">
                  <h3 className="text-sm font-semibold mb-2">Professional Summary</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Strategic and performance-driven marketing professional with 7+ years of experience driving brand growth and measurable ROI across education and technology. Skilled in integrated marketing, lead generation, campaign automation, and team leadership.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-[1fr_320px] gap-6">
          <div className="space-y-6">
            <Card className="shadow-sm border-border/50">
              <CardHeader><CardTitle className="text-xl">Experience</CardTitle></CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                    <h3 className="font-semibold text-foreground">Branding & Marketing Consultant</h3>
                    <span className="text-xs text-muted-foreground">Apr 2024 – Present</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Amar Ujala</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0">Led Amar Ujala National Olympiad strategy — 2.5L+ registrations and ₹1Cr+ revenue.</li>
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0">Built automation for registrations and reporting.</li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                    <h3 className="font-semibold text-foreground">AGM – Marketing & Planning</h3>
                    <span className="text-xs text-muted-foreground">Feb 2023 – Aug 2023</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">NetAmbit</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0">Designed multi-channel lead gen strategies across 50+ cities.</li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                    <h3 className="font-semibold text-foreground">Marketing Manager</h3>
                    <span className="text-xs text-muted-foreground">Feb 2022 – Jan 2023</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">BYJU'S</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li className="pl-4 relative before:content-['•'] before:absolute before:left-0">Led school-based brand campaigns across North India.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="shadow-sm border-border/50">
              <CardHeader><CardTitle className="text-lg">Skills</CardTitle></CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge>Campaign Strategy</SkillBadge>
                  <SkillBadge>Lead Gen</SkillBadge>
                  <SkillBadge>Performance Marketing</SkillBadge>
                  <SkillBadge>SEO / SEM</SkillBadge>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-sm border-border/50">
              <CardHeader><CardTitle className="text-lg">Education</CardTitle></CardHeader>
              <CardContent>
                <h4 className="text-sm font-semibold mb-1">B.Tech. Mechanical Engineering</h4>
                <p className="text-xs text-muted-foreground">Glocal University • 2014-2018</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
