import { Mail, Phone, ExternalLink, Briefcase, GraduationCap, Award, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import StickyNav from "@/components/StickyNav";
import AudioSummary from "@/components/AudioSummary";
import profilePhoto from "@/assets/rahul-photo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <StickyNav />
      <AudioSummary />
      
      {/* Hero Section with Photo */}
      <header className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Profile Photo */}
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl group-hover:bg-primary/30 transition-all duration-300"></div>
              <img 
                src={profilePhoto} 
                alt="Rahul Kushwah" 
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl ring-2 ring-border/50 group-hover:ring-primary/50 transition-all duration-300"
              />
            </div>
            
            {/* Hero Text */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="mb-6 tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                RAHUL KUSHWAH
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8 leading-relaxed">
                Strategic Marketing Professional & Campaign Architect
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                <a href="tel:+918191899099" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
                  +91-8191899099
                </a>
                <Separator orientation="vertical" className="hidden sm:block h-4" />
                <a href="mailto:rahulkushwahqueries@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                  rahulkushwahqueries@gmail.com
                </a>
                <Separator orientation="vertical" className="hidden sm:block h-4" />
                <a href="http://rahulkushwah.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <ExternalLink className="h-4 w-4" />
                  rahulkushwah.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <Card className="border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-3xl">Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-muted-foreground font-light">
                Strategic and performance-driven marketing professional with 7+ years of experience in digital marketing, brand building, and campaign management across the education and technology sectors. Proven expertise in integrated marketing strategy, lead generation, and cross-functional project management, with a track record of scaling education campaigns, optimizing ROI, and building brands from concept to execution. Adept at leading tech-enabled marketing projects, aligning creative, analytical, and operational goals to drive measurable business impact.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-8 w-8 text-primary" />
            <h2>Experience</h2>
          </div>

          <div className="space-y-6">
            {/* Job 1 */}
            <Card className="border-border/50 shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/30">
              <CardHeader>
                <CardTitle className="text-2xl">Branding & Marketing Consultant</CardTitle>
                <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2 text-base">
                  <span className="font-medium text-foreground">Amar Ujala</span>
                  <Separator orientation="vertical" className="hidden sm:block h-4" />
                  <span>September 2023 – Present (Contract)</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground font-light leading-relaxed">
                  <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Part of the core strategic team behind the Amar Ujala National Olympiad, a flagship school-level competition executed across 8 Northern states in online as well as offline mode.</li>
                  <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Automated the MIS process for registrations and reporting, improving data accuracy and reducing manual dependency by 60%.</li>
                  <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Conceptualized and implemented the digital advertising strategy, achieving an impressive ROAS of 3.4 in the first campaign year.</li>
                  <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Contributed to a project that generated ₹1 Cr+ in revenue with over 20% net profit, establishing Olympiad as a sustainable annual initiative.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Job 2 */}
            <Card className="border-border/50 shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/30">
              <CardHeader>
                <CardTitle className="text-2xl">AGM – Marketing & Planning</CardTitle>
                <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2 text-base">
                  <span className="font-medium text-foreground">NetAmbit</span>
                  <Separator orientation="vertical" className="hidden sm:block h-4" />
                  <span>February 2023 – August 2023</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground font-light leading-relaxed">
                  <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Designed and executed multi-channel lead generation strategies for EdTech clients across 50+ cities.</li>
                  <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Established optimized lead pipelines that improved conversion efficiency by 28% and reduced CPL by 35%.</li>
                  <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Supervised campaign execution teams, ensuring brand consistency and goal-oriented delivery.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Job 3 */}
            <Card className="border-border/50 shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/30">
              <CardHeader>
                <CardTitle className="text-2xl">Marketing Manager</CardTitle>
                <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2 text-base">
                  <span className="font-medium text-foreground">BYJU'S</span>
                  <Separator orientation="vertical" className="hidden sm:block h-4" />
                  <span>February 2022 – January 2023</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground font-light leading-relaxed">
                  <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Led school-based brand campaigns across North India (Delhi NCR, Punjab, Himachal Pradesh, Haryana, and J&K).</li>
                  <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Managed a 50+ member team for regional marketing and activation programs.</li>
                  <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Increased school participation rate by 42% YoY through targeted outreach and optimized on-ground execution.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Job 4 */}
            <Card className="border-border/50 shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/30">
              <CardHeader>
                <CardTitle className="text-2xl">Assistant Manager – Marketing</CardTitle>
                <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2 text-base">
                  <span className="font-medium text-foreground">BYJU'S</span>
                  <Separator orientation="vertical" className="hidden sm:block h-4" />
                  <span>July 2018 – January 2022</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground font-light leading-relaxed">
                  <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Executed the Discovery School Super League, a nationwide educational competition in collaboration with Discovery Media.</li>
                  <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Managed media partnerships with Dainik Jagran, TOI, and Dainik Bhaskar for mass campaign visibility.</li>
                  <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-primary">Improved campaign efficiency by 25% through better resource planning and communication workflows.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Independent Consulting */}
            <Card className="border-border/50 shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/30">
              <CardHeader>
                <CardTitle className="text-2xl">Independent Marketing & Project Consultant</CardTitle>
                <CardDescription>
                  Delivered strategic marketing, brand development, and project management services across diverse industries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="text-xl mb-6 font-display text-foreground">Select Clients</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/30 hover:border-primary/30 transition-colors">
                    <h5 className="font-semibold mb-2 text-foreground">People for Animals Uttarakhand</h5>
                    <p className="text-sm text-muted-foreground font-light">Website Development — Designed and developed the official NGO website to strengthen outreach and digital presence.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/30 hover:border-primary/30 transition-colors">
                    <h5 className="font-semibold mb-2 text-foreground">Chain and Spare</h5>
                    <p className="text-sm text-muted-foreground font-light">Project Management (Lead Generation Website) — Led end-to-end project delivery, coordinating with tech and design teams.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/30 hover:border-primary/30 transition-colors">
                    <h5 className="font-semibold mb-2 text-foreground">Adornn Herbal</h5>
                    <p className="text-sm text-muted-foreground font-light">Social Media Manager & Brand Consultant — Developed digital marketing and advertising strategy; built brand tone and visual identity.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/30 hover:border-primary/30 transition-colors">
                    <h5 className="font-semibold mb-2 text-foreground">The Honest Home Company</h5>
                    <p className="text-sm text-muted-foreground font-light">Social Media Consultant & Content Manager — Created and executed social media strategy to position the brand as eco-conscious.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/30 hover:border-primary/30 transition-colors">
                    <h5 className="font-semibold mb-2 text-foreground">Temple of Learning</h5>
                    <p className="text-sm text-muted-foreground font-light">Creative Direction & Campaign Design — Oversaw design and creative campaigns for exam materials and marketing collaterals.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/30 hover:border-primary/30 transition-colors">
                    <h5 className="font-semibold mb-2 text-foreground">Gourmet Organic Kitchen</h5>
                    <p className="text-sm text-muted-foreground font-light">Website Development & Google Ads — Built the website and managed paid campaigns to increase e-commerce traffic.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/30 hover:border-primary/30 transition-colors">
                    <h5 className="font-semibold mb-2 text-foreground">Bugswriter (YouTube Channel)</h5>
                    <p className="text-sm text-muted-foreground font-light">Channel Marketing & Content Strategy — Optimized YouTube growth through targeted content strategy and audience engagement.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Education */}
            <Card className="border-border/50 shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">Education</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2 text-foreground">Bachelor of Technology (B.Tech.)</h3>
                <p className="text-muted-foreground mb-2">Mechanical Engineering</p>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">Glocal University, Saharanpur</span>
                  <br />
                  <span>Sep 2014 – Jun 2018</span>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="border-border/50 shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Award className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">Certifications</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground font-light">Advanced Digital Marketing Certification – MICA (UpGrad)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground font-light">Google Ads Certification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-12 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Wrench className="h-8 w-8 text-primary" />
            <h2>Key Skills & Tools</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border/50 shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/30">
              <CardHeader>
                <CardTitle className="text-lg">Digital Marketing & Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Brand Building, Campaign Strategy, Lead Generation, Content Marketing, SEO & SEM, Social Media Marketing, Email Marketing, Marketing Automation
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/30">
              <CardHeader>
                <CardTitle className="text-lg">Advertising Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Google Ads, Meta Ads (Facebook & Instagram), YouTube Ads, LinkedIn Ads, Keyword Planner, Google Analytics
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/30">
              <CardHeader>
                <CardTitle className="text-lg">Project & Team Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Client Acquisition & Communication, Resource Allocation, Cross-Functional Collaboration, Workflow Supervision, Deadline & Quality Management, MIS Reporting
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/30">
              <CardHeader>
                <CardTitle className="text-lg">Technical & Web Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  HTML, CSS, Wix, WordPress, LeadSquared, MS Excel, Google Workspace, CRM Tools, GitHub
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/30">
              <CardHeader>
                <CardTitle className="text-lg">Design & Creative Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Canva, Adobe Premiere Pro, Visual Storytelling, Creative Direction, Brand Theme & Identity Development
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/30">
              <CardHeader>
                <CardTitle className="text-lg">Data & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Campaign Tracking, Dashboard Reporting, ROI Optimization, A/B Testing, Market Research
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/30 md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle className="text-lg">Programming & Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Python (Beginner), Prompt Engineering, ChatGPT, AI-assisted Content Creation, Automation Tools (Zapier, Notion AI)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <p className="text-sm text-muted-foreground text-center font-light">
            © {new Date().getFullYear()} Rahul Kushwah. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
