import { Mail, Phone, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <h1 className="mb-8 tracking-tight">RAHUL KUSHWAH</h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-muted-foreground font-light">
            <span>708A, Suresh Sharma Nagar, Bareilly – 243005</span>
            <Separator orientation="vertical" className="hidden md:block h-4" />
            <a href="tel:+918191899099" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone className="h-3.5 w-3.5" />
              +91-8191899099
            </a>
            <Separator orientation="vertical" className="hidden md:block h-4" />
            <a href="mailto:rahulkushwahqueries@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail className="h-3.5 w-3.5" />
              rahulkushwahqueries@gmail.com
            </a>
            <Separator orientation="vertical" className="hidden md:block h-4" />
            <a href="http://rahulkushwah.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <ExternalLink className="h-3.5 w-3.5" />
              rahulkushwah.com
            </a>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <h2 className="mb-8">Professional Summary</h2>
          <p className="text-lg leading-relaxed text-muted-foreground font-light max-w-4xl">
            Strategic and performance-driven marketing professional with 7+ years of experience in digital marketing, brand building, and campaign management across the education and technology sectors. Proven expertise in integrated marketing strategy, lead generation, and cross-functional project management, with a track record of scaling education campaigns, optimizing ROI, and building brands from concept to execution. Adept at leading tech-enabled marketing projects, aligning creative, analytical, and operational goals to drive measurable business impact.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <h2 className="mb-12">Experience</h2>

          {/* Job 1 */}
          <div className="mb-16">
            <div className="mb-6">
              <h3 className="mb-2">Branding & Marketing Consultant</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2 text-muted-foreground">
                <span className="font-medium">Amar Ujala</span>
                <Separator orientation="vertical" className="hidden md:block h-4" />
                <span className="text-sm">September 2023 – Present (Contract)</span>
              </div>
            </div>
            <ul className="space-y-3 text-muted-foreground font-light leading-relaxed">
              <li className="pl-6 relative before:content-['•'] before:absolute before:left-0">Part of the core strategic team behind the Amar Ujala National Olympiad, a flagship school-level competition executed across 8 Northern states in online as well as offline mode.</li>
              <li className="pl-6 relative before:content-['•'] before:absolute before:left-0">Automated the MIS process for registrations and reporting, improving data accuracy and reducing manual dependency by 60%.</li>
              <li className="pl-6 relative before:content-['•'] before:absolute before:left-0">Conceptualized and implemented the digital advertising strategy, achieving an impressive ROAS of 3.4 in the first campaign year.</li>
              <li className="pl-6 relative before:content-['•'] before:absolute before:left-0">Collaborated with the technical and creative teams to build School, Student, and Team Dashboards, streamlining real-time tracking and analytics.</li>
              <li className="pl-6 relative before:content-['•'] before:absolute before:left-0">Developed the brand identity, rules, and competition framework, ensuring scalability and consistent communication.</li>
              <li className="pl-6 relative before:content-['•'] before:absolute before:left-0">Contributed to a project that generated ₹1 Cr+ in revenue with over 20% net profit, establishing Olympiad as a sustainable annual initiative.</li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="mb-16">
            <div className="mb-6">
              <h3 className="mb-2">AGM – Marketing & Planning</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2 text-muted-foreground">
                <span className="font-medium">NetAmbit</span>
                <Separator orientation="vertical" className="hidden md:block h-4" />
                <span className="text-sm">February 2023 – August 2023</span>
              </div>
            </div>
            <ul className="space-y-3 text-muted-foreground font-light leading-relaxed">
              <li className="pl-6 relative before:content-['•'] before:absolute before:left-0">Designed and executed multi-channel lead generation strategies for EdTech clients across 50+ cities.</li>
              <li className="pl-6 relative before:content-['•'] before:absolute before:left-0">Established optimized lead pipelines that improved conversion efficiency by 28% and reduced CPL by 35%.</li>
              <li className="pl-6 relative before:content-['•'] before:absolute before:left-0">Supervised campaign execution teams, ensuring brand consistency and goal-oriented delivery.</li>
            </ul>
          </div>

          {/* Job 3 */}
          <div className="mb-16">
            <div className="mb-6">
              <h3 className="mb-2">Marketing Manager</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2 text-muted-foreground">
                <span className="font-medium">BYJU'S</span>
                <Separator orientation="vertical" className="hidden md:block h-4" />
                <span className="text-sm">February 2022 – January 2023</span>
              </div>
            </div>
            <ul className="space-y-3 text-muted-foreground font-light leading-relaxed">
              <li className="pl-6 relative before:content-['•'] before:absolute before:left-0">Led school-based brand campaigns across North India (Delhi NCR, Punjab, Himachal Pradesh, Haryana, and J&K).</li>
              <li className="pl-6 relative before:content-['•'] before:absolute before:left-0">Managed a 50+ member team for regional marketing and activation programs.</li>
              <li className="pl-6 relative before:content-['•'] before:absolute before:left-0">Increased school participation rate by 42% YoY through targeted outreach and optimized on-ground execution.</li>
            </ul>
          </div>

          {/* Job 4 */}
          <div className="mb-16">
            <div className="mb-6">
              <h3 className="mb-2">Assistant Manager – Marketing</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2 text-muted-foreground">
                <span className="font-medium">BYJU'S</span>
                <Separator orientation="vertical" className="hidden md:block h-4" />
                <span className="text-sm">July 2018 – January 2022</span>
              </div>
            </div>
            <ul className="space-y-3 text-muted-foreground font-light leading-relaxed">
              <li className="pl-6 relative before:content-['•'] before:absolute before:left-0">Executed the Discovery School Super League, a nationwide educational competition in collaboration with Discovery Media.</li>
              <li className="pl-6 relative before:content-['•'] before:absolute before:left-0">Managed media partnerships with Dainik Jagran, TOI, and Dainik Bhaskar for mass campaign visibility.</li>
              <li className="pl-6 relative before:content-['•'] before:absolute before:left-0">Improved campaign efficiency by 25% through better resource planning and communication workflows.</li>
            </ul>
          </div>

          {/* Independent Consulting */}
          <div>
            <div className="mb-6">
              <h3 className="mb-4">Independent Marketing & Project Consultant</h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                Manage and deliver multi-domain client projects in web development, graphic design, and marketing with measurable outcomes. Oversee end-to-end project lifecycle — from client acquisition to delivery — ensuring high-quality standards and timely completion. Built and led a core team of developers, designers, and marketers, ensuring coordination, accountability, and process efficiency. Delivered 20+ successful projects across sectors like education, FMCG, and lifestyle, contributing to measurable brand and revenue growth.
              </p>
            </div>
            
            <h4 className="text-xl mb-6 font-display">Select Clients</h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-medium mb-2">People for Animals Uttarakhand</h5>
                <p className="text-sm text-muted-foreground font-light">Website Development — Designed and developed the official NGO website to strengthen outreach and digital presence.</p>
              </div>
              <div>
                <h5 className="font-medium mb-2">Chain and Spare</h5>
                <p className="text-sm text-muted-foreground font-light">Project Management (Lead Generation Website) — Led end-to-end project delivery, coordinating with tech and design teams.</p>
              </div>
              <div>
                <h5 className="font-medium mb-2">Adornn Herbal</h5>
                <p className="text-sm text-muted-foreground font-light">Social Media Manager & Brand Consultant — Developed digital marketing and advertising strategy; built brand tone and visual identity.</p>
              </div>
              <div>
                <h5 className="font-medium mb-2">The Honest Home Company</h5>
                <p className="text-sm text-muted-foreground font-light">Social Media Consultant & Content Manager — Created and executed social media strategy to position the brand as eco-conscious.</p>
              </div>
              <div>
                <h5 className="font-medium mb-2">Temple of Learning</h5>
                <p className="text-sm text-muted-foreground font-light">Creative Direction & Campaign Design — Oversaw design and creative campaigns for exam materials and marketing collaterals.</p>
              </div>
              <div>
                <h5 className="font-medium mb-2">Gourmet Organic Kitchen</h5>
                <p className="text-sm text-muted-foreground font-light">Website Development & Google Ads — Built the website and managed paid campaigns to increase e-commerce traffic.</p>
              </div>
              <div>
                <h5 className="font-medium mb-2">Bugswriter (YouTube Channel)</h5>
                <p className="text-sm text-muted-foreground font-light">Channel Marketing & Content Strategy — Optimized YouTube growth through targeted content strategy and audience engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <h2 className="mb-8">Education</h2>
          <div>
            <h3 className="mb-2">Bachelor of Technology (B.Tech.) in Mechanical Engineering</h3>
            <div className="text-muted-foreground">
              <span className="font-medium">Glocal University, Saharanpur</span>
              <Separator orientation="vertical" className="inline-block mx-3 h-4 align-middle" />
              <span className="text-sm">Sep 2014 – Jun 2018</span>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <h2 className="mb-8">Certifications</h2>
          <ul className="space-y-3">
            <li className="text-muted-foreground font-light">Advanced Digital Marketing Certification – MICA (UpGrad)</li>
            <li className="text-muted-foreground font-light">Google Ads Certification</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <h2 className="mb-12">Key Skills & Tools</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-lg mb-4 font-display">Digital Marketing & Strategy</h4>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Campaign Planning & Execution, SEO, SEM, Content Strategy, Lead Generation, Brand Positioning, Performance Marketing, Funnel Optimization
              </p>
            </div>

            <div>
              <h4 className="text-lg mb-4 font-display">Advertising Platforms</h4>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Google Ads, Meta Ads (Facebook & Instagram), YouTube Ads, LinkedIn Ads, Keyword Planner, Google Analytics
              </p>
            </div>

            <div>
              <h4 className="text-lg mb-4 font-display">Project & Team Management</h4>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Client Acquisition & Communication, Resource Allocation, Cross-Functional Collaboration, Workflow Supervision, Deadline & Quality Management, MIS Reporting
              </p>
            </div>

            <div>
              <h4 className="text-lg mb-4 font-display">Technical & Web Tools</h4>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                HTML, CSS, Wix, WordPress, LeadSquared, MS Excel, Google Workspace, CRM Tools, GitHub
              </p>
            </div>

            <div>
              <h4 className="text-lg mb-4 font-display">Design & Creative Tools</h4>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Canva, Adobe Premiere Pro, Visual Storytelling, Creative Direction, Brand Theme & Identity Development
              </p>
            </div>

            <div>
              <h4 className="text-lg mb-4 font-display">Data & Analytics</h4>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Campaign Tracking, Dashboard Reporting, ROI Optimization, A/B Testing, Market Research
              </p>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-lg mb-4 font-display">Programming & Automation</h4>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Python (Beginner), Prompt Engineering, ChatGPT, AI-assisted Content Creation, Automation Tools (Zapier, Notion AI)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <p className="text-sm text-muted-foreground text-center font-light">
            © {new Date().getFullYear()} Rahul Kushwah. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
