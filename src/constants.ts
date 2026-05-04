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
    challenge: "Global scale conversion optimization across diverse international markets.",
    action: "Fusing AI-driven creative generation with structural linguistic precision to resonate contextually.",
    result: "30% Conversion Rate Lift",
    metrics: [
      { label: "Conv. Lift", value: "30%", color: "text-electric" },
      { label: "Organic", value: "+35%", color: "text-white" }
    ],
    description: "Directed global digital strategies, boosting conversion rates through the fusion of AI-driven creatives and linguistic precision."
  },
  {
    company: "HYNER Technologies",
    role: "IT & Digital Marketing Manager",
    location: "Islamabad/China",
    period: "Jun 2021 – Aug 2022",
    challenge: "Stagnant B2B lead generation and outdated digital presence.",
    action: "Engineered full website redesign & implemented end-to-end PPC automation with automated email funnels.",
    result: "$500K Revenue Growth",
    metrics: [
      { label: "Revenue", value: "$500K", color: "text-electric" },
      { label: "ROI", value: "+25%", color: "text-white" }
    ],
    description: "Engineered a full website redesign that reinforced organic search traffic by 40%."
  },
  {
    company: "Spine & Injury Associates",
    role: "Digital Marketing Specialist",
    location: "USA (Remote)",
    period: "May 2021 – Present",
    challenge: "Low patient engagement and weak social trust signals.",
    action: "Developed analytics-driven content calendars focused on educational authority and community trust.",
    result: "40% Follower Growth",
    metrics: [
      { label: "Followers", value: "+40%", color: "text-electric" },
      { label: "Engagement", value: "+20%", color: "text-white" }
    ],
    description: "Managed social media strategy and content creation, significantly improving brand visibility."
  }
];

export const TESTIMONIALS = [
  {
    quote: "Farman has a unique ability to translate complex data into actionable creative strategies that actually convert.",
    author: "CEO, SWAFOO",
    role: "Global Operations"
  },
  {
    quote: "The website redesign and PPC automation he led at HYNER was a game-changer for our B2B pipeline.",
    author: "Marketing Director",
    role: "HYNER Technologies"
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
