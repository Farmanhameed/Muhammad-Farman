import { 
  BarChart3, 
  Globe, 
  Search, 
  Mail, 
  Linkedin, 
  FileText, 
  Award, 
  BookOpen,
  PieChart,
  Target,
  Database,
  TrendingUp
} from 'lucide-react';

export const EXPERIENCES = [
  {
    company: "SWAFOO",
    role: "Senior Digital Marketing Manager",
    location: "New York, USA (Remote)",
    period: "Sep 2022 – Present",
    metrics: [
      { label: "Conversion Rate", value: "+30%", color: "text-electric" },
      { label: "Organic Traffic", value: "+35%", color: "text-white" }
    ],
    description: "Directed global digital strategies, boosting conversion rates by 30% through the fusion of AI-driven creatives and linguistic precision. Increased organic traffic by 35% by aligning technical SEO with intent-based content strategies."
  },
  {
    company: "HYNER Technologies",
    role: "IT & Digital Marketing Manager",
    location: "Islamabad/China",
    period: "Jun 2021 – Aug 2022",
    metrics: [
      { label: "Revenue Growth", value: "$500K", color: "text-electric" },
      { label: "ROI Elevation", value: "+25%", color: "text-white" }
    ],
    description: "Engineered a full website redesign that reinforced organic search traffic by 40%. Generated $500K in additional revenue through targeted PPC and automated email funnels."
  },
  {
    company: "Concise Medico Ltd.",
    role: "Senior Project Manager",
    location: "Islamabad/UK",
    period: "Jan 2018 – May 2021",
    metrics: [
      { label: "Portfolio Value", value: "$1M+", color: "text-electric" },
      { label: "Client Satisfaction", value: "95%", color: "text-white" }
    ],
    description: "Managed a portfolio of projects worth $1M+, maintaining a 95% client satisfaction rate. Utilized Agile methodologies to reduce project completion timelines by 25%."
  },
  {
    company: "Cloudwalker Life Science",
    role: "Marketing & Communication Specialist",
    location: "China/Pakistan",
    period: "Feb 2014 – Dec 2017",
    metrics: [
      { label: "Partnerships", value: "B2B Focus", color: "text-electric" }
    ],
    description: "Developed strategic communication frameworks for international pharmaceutical trade between China and Pakistan. Optimized digital presence through targeted messaging."
  },
  {
    company: "Hamariweb.com",
    role: "SEO & Search Strategy Specialist",
    location: "Pakistan",
    period: "Jan 2011 – Jan 2014",
    metrics: [
      { label: "Visibility", value: "+35%", color: "text-electric" }
    ],
    description: "Expanded organic visibility by 35% through rigorous technical SEO audits. Heightened monthly traffic by 25% by integrating search strategies with trending content."
  }
];

export const TECH_STACK = [
  { name: "Google Ads (P-Max)", icon: Target },
  { name: "GA4", icon: BarChart3 },
  { name: "GEO", icon: Globe },
  { name: "HubSpot", icon: Database },
  { name: "SEMrush", icon: Search },
  { name: "Looker Studio", icon: PieChart }
];

export const CERTIFICATIONS = [
  { name: "Google Analytics Professional (GA4) & Google Ads Certification", provider: "Google" },
  { name: "Google AI Essentials & Digital Marketing Foundations", provider: "Coursera" },
  { name: "Foundations of Project Management", provider: "Coursera" },
  { name: "Cybersecurity Fundamentals & SQL for Data Analysis", provider: "Google" }
];
