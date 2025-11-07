import jsPDF from 'jspdf';

export const generateResumePDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  let y = 20;

  // Helper function
  const addText = (text: string, size: number, style: 'normal' | 'bold' = 'normal', align: 'left' | 'center' = 'left') => {
    doc.setFontSize(size);
    doc.setFont('helvetica', style);
    if (align === 'center') {
      doc.text(text, pageWidth / 2, y, { align: 'center' });
    } else {
      doc.text(text, margin, y);
    }
    y += size / 2 + 2;
  };

  const addLine = () => {
    y += 3;
    doc.line(margin, y, pageWidth - margin, y);
    y += 5;
  };

  // Header
  addText('RAHUL KUSHWAH', 24, 'bold', 'center');
  doc.setFontSize(9);
  doc.text('708A, Suresh Sharma Nagar, Bareilly – 243005', pageWidth / 2, y, { align: 'center' });
  y += 5;
  doc.text('+91-8191899099 | rahulkushwahqueries@gmail.com | rahulkushwah.com', pageWidth / 2, y, { align: 'center' });
  y += 8;
  addLine();

  // Professional Summary
  addText('PROFESSIONAL SUMMARY', 14, 'bold');
  doc.setFontSize(9);
  const summary = 'Strategic and performance-driven marketing professional with 7+ years of experience in digital marketing, brand building, and campaign management across the education and technology sectors.';
  const splitSummary = doc.splitTextToSize(summary, pageWidth - 2 * margin);
  doc.text(splitSummary, margin, y);
  y += splitSummary.length * 5 + 5;
  addLine();

  // Experience
  addText('EXPERIENCE', 14, 'bold');
  
  // Job 1
  addText('Branding & Marketing Consultant | Amar Ujala', 11, 'bold');
  addText('September 2023 – Present', 9, 'normal');
  y += 2;

  // Job 2
  addText('AGM – Marketing & Planning | NetAmbit', 11, 'bold');
  addText('February 2023 – August 2023', 9, 'normal');
  y += 2;

  // Job 3
  addText('Marketing Manager | BYJU\'S', 11, 'bold');
  addText('February 2022 – January 2023', 9, 'normal');
  y += 5;

  addLine();

  // Education
  addText('EDUCATION', 14, 'bold');
  addText('Bachelor of Technology (B.Tech.) in Mechanical Engineering', 10, 'normal');
  addText('Glocal University, Saharanpur | 2014 – 2018', 9, 'normal');
  y += 5;
  addLine();

  // Skills
  addText('KEY SKILLS', 14, 'bold');
  doc.setFontSize(9);
  const skills = 'Digital Marketing, SEO, SEM, Google Ads, Meta Ads, Campaign Management, Lead Generation, Brand Strategy, Content Marketing, Project Management, Team Leadership, Data Analytics';
  const splitSkills = doc.splitTextToSize(skills, pageWidth - 2 * margin);
  doc.text(splitSkills, margin, y);

  // Save
  doc.save('Rahul_Kushwah_Resume.pdf');
};
