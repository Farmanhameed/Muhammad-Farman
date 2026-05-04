import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useInView, useAnimation } from 'motion/react';
import { 
  Linkedin, 
  Mail, 
  FileText, 
  ChevronRight, 
  ExternalLink,
  MapPin,
  Calendar,
  GraduationCap,
  Award,
  Github,
  Facebook as FacebookIcon,
  Twitter,
  Target,
  FlaskConical,
  Zap,
  Quote
} from 'lucide-react';
import { cn } from './lib/utils';
import { EXPERIENCES, TECH_STACK, CERTIFICATIONS, TESTIMONIALS } from './constants';
import Background3D from './components/ThreeBackground';
import Globe3D from './components/Globe3D';
import { Canvas } from '@react-three/fiber';

const Counter = ({ value, duration = 2 }: { value: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Extract number from string like "30%" or "$500K"
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const totalFrames = duration * 60;
      let frame = 0;
      
      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.round(end * progress);
        setCount(currentCount);
        
        if (frame >= totalFrames) {
          clearInterval(timer);
          setCount(end);
        }
      }, 1000 / 60);
      
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue, duration]);

  return (
    <span ref={ref}>
      {value.startsWith('$') ? '$' : ''}
      {count}
      {suffix}
    </span>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-8 backdrop-blur-md border-b border-white/5">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4"
      >
        <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-electric font-bold text-lg italic font-serif">
          MF
        </div>
        <div className="hidden sm:block">
          <p className="label-caps text-zinc-500 mb-0.5">Linguistics & Data</p>
          <p className="text-[10px] font-mono opacity-40 uppercase">Performance Strategist</p>
        </div>
      </motion.div>
      <div className="flex gap-8">
        {['About', 'Strategy', 'Experience', 'Contact'].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{ y: -1 }}
            className="label-caps text-zinc-500 hover:text-electric transition-colors"
          >
            {item}
          </motion.a>
        ))}
      </div>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-20">
    {subtitle && (
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="label-caps text-electric block mb-4"
      >
        {subtitle}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-5xl md:text-7xl font-display font-bold leading-[0.9]"
    >
      {children}
    </motion.h2>
  </div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const phone = "+923456240550";
    const text = `*New Strategy Inquiry*\n\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="relative">
      <Background3D />
      <Navbar />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-electric origin-left z-[60]"
        style={{ scaleX }}
      />

      <main className="max-w-7xl mx-auto px-6 pt-32">
        
        {/* Hero Section */}
        <section id="hero" className="min-h-[95vh] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-display font-bold leading-[0.85] tracking-tighter mb-10">
              Muhammad <br/>
              <span className="text-electric electric-glow">Farman.</span>
            </h1>
            <p className="max-w-3xl text-2xl md:text-4xl font-light text-zinc-400 mb-12 leading-tight">
              Bridging <span className="text-white italic">Data Analytics</span> with <span className="text-white italic font-serif">Human-Centric Storytelling</span>.
            </p>
            <div className="flex flex-wrap gap-6">
              <motion.button 
                onClick={() => document.getElementById('strategy')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-6 bg-electric text-black font-bold uppercase text-xs tracking-widest transition-all hover:brightness-110 shadow-[0_0_30px_rgba(0,212,255,0.2)]"
              >
                View Strategic Impact
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-6 border border-zinc-800 text-white font-bold uppercase text-xs tracking-widest transition-all hover:border-electric"
              >
                Download Optimized Resume
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* About Section - Dual Core */}
        <section id="about" className="py-40">
          <SectionHeading subtitle="Profile">The Dual-Core Identity</SectionHeading>
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 glass-morphism rounded-sm border-l-4 border-l-white/20"
            >
              <FlaskConical className="w-10 h-10 text-zinc-500 mb-6" />
              <h3 className="text-3xl font-display font-bold mb-6">The Arts</h3>
              <p className="text-zinc-400 text-xl font-light leading-relaxed mb-6">
                Master’s in <span className="text-white font-medium italic font-serif">English Literature & Narrative Analysis</span>.
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed">
                I use structural linguistics to decode user intent. Every ad copy is a narrative bridge between a product and a human desire. Linguistics fuels my expertise in consumer psychology and high-converting storytelling.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 glass-morphism rounded-sm border-l-4 border-l-electric"
            >
              <Target className="w-10 h-10 text-electric mb-6" />
              <h3 className="text-3xl font-display font-bold mb-6">The Science</h3>
              <p className="text-zinc-400 text-xl font-light leading-relaxed mb-6">
                12+ Years <span className="text-white font-medium italic">Digital Marketing & Multimillion-Dollar Budget Management</span>.
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Data is the validator. I leverage GA4, Looker Studio, and GEO to scale ROI. My approach is evidence-based, focusing on performance-driven growth through precise demand generation and funnel optimization.
              </p>
            </motion.div>
          </div>
          <p className="mt-16 text-center text-2xl font-light text-zinc-400 border-t border-zinc-800 pt-16">
            "I use <span className="text-white font-medium">linguistic precision</span> to decode user intent and <span className="text-electric font-medium">data analytics</span> to scale ROI."
          </p>
        </section>

        {/* Case Studies - Strategic Impact */}
        <section id="strategy" className="py-40">
          <SectionHeading subtitle="Strategic Impact">Case Studies (STAR Method)</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 glass-morphism rounded-sm hover:border-electric transition-all"
              >
                <div className="label-caps text-electric mb-6">{exp.company}</div>
                <h4 className="text-xl font-bold mb-8">{exp.role}</h4>
                
                <div className="space-y-6 text-sm mb-8">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-zinc-500 block mb-1">Challenge</span>
                    <p className="text-zinc-400">{exp.challenge}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-zinc-500 block mb-1">Action</span>
                    <p className="text-zinc-400">{exp.action}</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5">
                  <span className="text-[10px] uppercase font-bold text-electric block mb-2">Strategic Result</span>
                  <div className="text-3xl font-display font-bold text-white tracking-tighter">
                    {exp.result.includes('+') || exp.result.includes('$') || exp.result.includes('%') ? (
                      <Counter value={exp.result} />
                    ) : exp.result}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Global Reach / Globe Visual */}
        <section className="py-40 grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-square glass-morphism rounded-sm overflow-hidden group flex items-center justify-center bg-zinc-950">
                <div className="absolute inset-0 z-0 opacity-40">
                <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <Globe3D />
                </Canvas>
                </div>
                <div className="relative z-20 text-center">
                <div className="text-8xl font-bold font-display italic text-electric electric-glow">
                  <Counter value="12+" />
                </div>
                <div className="text-xs uppercase tracking-widest opacity-60 font-bold">Years Shaping Global Narratives</div>
                </div>
            </div>
            <div className="space-y-12">
                <SectionHeading subtitle="Scale">Multimillion-Dollar Impact</SectionHeading>
                <div className="grid grid-cols-2 gap-8">
                    <div className="p-8 glass-morphism rounded-sm">
                        <div className="text-4xl font-bold text-electric mb-2 tracking-tighter">
                          <Counter value="$1M+" />
                        </div>
                        <div className="label-caps text-zinc-500">Portfolio Managed</div>
                    </div>
                    <div className="p-8 glass-morphism rounded-sm">
                        <div className="text-4xl font-bold text-white mb-2 tracking-tighter">
                          <Counter value="95%" />
                        </div>
                        <div className="label-caps text-zinc-500">Client Satisfaction</div>
                    </div>
                    <div className="p-8 glass-morphism rounded-sm">
                        <div className="text-4xl font-bold text-white mb-2 tracking-tighter">
                          <Counter value="35%" />
                        </div>
                        <div className="label-caps text-zinc-500">Organic Growth</div>
                    </div>
                    <div className="p-8 glass-morphism rounded-sm">
                        <div className="text-4xl font-bold text-white mb-2 tracking-tighter">
                          <Counter value="40%" />
                        </div>
                        <div className="label-caps text-zinc-500">Audit Efficiency</div>
                    </div>
                </div>
            </div>
        </section>

        {/* Trust Slider - Testimonials */}
        <section className="py-40 overflow-hidden">
          <SectionHeading subtitle="Endorsements">Executive Trust</SectionHeading>
          <div className="flex flex-wrap gap-8">
            {TESTIMONIALS.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="max-w-md p-10 glass-morphism rounded-sm relative"
              >
                <Quote className="absolute top-6 left-6 w-10 h-10 text-white/5" />
                <p className="text-xl font-light italic text-zinc-300 mb-8 leading-relaxed relative z-10">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800" />
                  <div>
                    <h5 className="font-bold text-white">{t.author}</h5>
                    <p className="text-xs uppercase text-zinc-500 font-bold">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section - Summary */}
        <section id="experience" className="py-40">
          <SectionHeading subtitle="Timeline">Legacy of Growth</SectionHeading>
          <div className="grid gap-1 border-t border-zinc-800">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="grid md:grid-cols-[200px_1fr_200px] gap-8 py-10 border-b border-zinc-800 hover:bg-white/5 transition-all px-6 group"
              >
                <div className="label-caps text-zinc-500">{exp.period}</div>
                <div>
                   <h4 className="text-2xl font-bold group-hover:text-electric transition-colors">{exp.company}</h4>
                   <p className="text-zinc-500 text-sm mt-1">{exp.role}</p>
                </div>
                <div className="text-right text-xs font-mono opacity-40">{exp.location}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tech Stack Grid */}
        <section className="py-20 border-y border-zinc-800 overflow-hidden">
          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
            {TECH_STACK.map((tech) => (
              <div key={tech.name} className="flex items-center gap-3">
                <tech.icon className="w-6 h-6" />
                <span className="label-caps hidden sm:inline">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action - Growth Engine */}
        <section id="contact" className="py-40">
          <div className="glass-morphism rounded-sm p-12 md:p-24 relative overflow-hidden border-zinc-800 bg-[#0c0c0c]">
             <div className="max-w-3xl">
                <SectionHeading subtitle="The Catalyst">Let's Discuss Your Growth Engine.</SectionHeading>
                <p className="text-2xl font-light text-zinc-400 mb-16">
                  Available for strategic consultations and high-impact leadership roles. 
                  Reach out to build the next iteration of your marketing narrative.
                </p>
                
                <form className="space-y-12" onSubmit={handleWhatsAppRedirect}>
                  <div className="grid sm:grid-cols-2 gap-10">
                    <div className="space-y-3">
                       <label className="label-caps text-zinc-500">Full Name</label>
                       <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-transparent border-b border-zinc-800 focus:border-electric focus:outline-none transition-all pb-4 text-2xl placeholder:opacity-10" 
                       />
                    </div>
                    <div className="space-y-3">
                       <label className="label-caps text-zinc-500">Work Email</label>
                       <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full bg-transparent border-b border-zinc-800 focus:border-electric focus:outline-none transition-all pb-4 text-2xl placeholder:opacity-10" 
                       />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="label-caps text-zinc-500">Your Challenge</label>
                    <textarea 
                      name="message"
                      rows={2} 
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Scaling ROI, linguistic analysis, global performance..."
                      className="w-full bg-transparent border-b border-zinc-800 focus:border-electric focus:outline-none transition-all pb-4 text-2xl resize-none placeholder:opacity-10" 
                    />
                  </div>
                  <motion.button 
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="px-16 py-8 bg-electric text-black font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all mt-6 shadow-[0_0_40px_rgba(0,212,255,0.3)] flex items-center gap-3"
                  >
                    Initiate Growth Discussion <Zap className="w-4 h-4 fill-black" />
                  </motion.button>
                </form>
             </div>
          </div>
        </section>

        <footer className="py-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-sm opacity-40 font-mono">
            DESIGN SYSTEM v2.1.0 // MUHAMMAD FARMAN // 2026
          </div>
          <div className="flex flex-wrap justify-center gap-10">
             <a href="https://x.com/farman_hameed1" target="_blank" rel="noopener noreferrer" className="label-caps text-zinc-500 hover:text-electric transition-colors flex items-center gap-2">
               <Twitter className="w-3 h-3" /> X
             </a>
             <a href="https://www.facebook.com/farman.sherkhana" target="_blank" rel="noopener noreferrer" className="label-caps text-zinc-500 hover:text-electric transition-colors flex items-center gap-2">
               <FacebookIcon className="w-3 h-3" /> Facebook
             </a>
             <a href="https://github.com/Farmanhameed" target="_blank" rel="noopener noreferrer" className="label-caps text-zinc-500 hover:text-electric transition-colors flex items-center gap-2">
               <Github className="w-3 h-3" /> GitHub
             </a>
             <a href="https://www.linkedin.com/in/farman-hameed/" target="_blank" rel="noopener noreferrer" className="label-caps text-zinc-500 hover:text-electric transition-colors flex items-center gap-2">
               <Linkedin className="w-3 h-3" /> LinkedIn
             </a>
          </div>
        </footer>

      </main>
    </div>
  );
}

