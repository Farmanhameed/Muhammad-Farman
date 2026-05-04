import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
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
  Twitter
} from 'lucide-react';
import { cn } from './lib/utils';
import { EXPERIENCES, TECH_STACK, CERTIFICATIONS } from './constants';
import Background3D from './components/ThreeBackground';
import Globe3D from './components/Globe3D';
import { Canvas } from '@react-three/fiber';

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
          <p className="text-[10px] font-mono opacity-40">MUHAMMAD FARMAN</p>
        </div>
      </motion.div>
      <div className="flex gap-8">
        {['About', 'Experience', 'Contact'].map((item) => (
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
    const text = `*New Inquiry from Portfolio*\n\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`;
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
        <section id="hero" className="min-h-[90vh] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-[10rem] font-display font-bold leading-[0.85] tracking-tighter mb-10">
              Muhammad <br/>
              <span className="text-electric electric-glow">Farman.</span>
            </h1>
            <p className="max-w-2xl text-2xl md:text-3xl font-light text-zinc-400 mb-12 leading-tight">
              Bridging <span className="text-white italic">Data Analytics</span> with <span className="text-white italic font-serif">Human-Centric Storytelling</span>.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-electric text-black font-bold uppercase text-xs tracking-widest transition-all hover:brightness-110"
              >
                View My Projects
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 border border-zinc-800 text-white font-bold uppercase text-xs tracking-widest transition-all hover:border-electric"
              >
                Download Resume
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-40 grid lg:grid-cols-[1fr_400px] gap-20 items-start">
          <div>
            <SectionHeading subtitle="The Narrative">Linguistics meets Data</SectionHeading>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-zinc-400 text-2xl font-light leading-relaxed"
            >
              <p>
                Synthesizing <span className="text-white italic">structural linguistics</span> with quantitative performance. I convert complex datasets into high-converting consumer journeys.
              </p>
              <p className="text-sm leading-relaxed max-w-xl">
                My background allows me to decode consumer psychology and craft narratives that resonate on a human level, while GA4 and Looker Studio provide the quantitative validation for every campaign.
              </p>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square glass-morphism rounded-sm overflow-hidden group flex items-center justify-center"
          >
            <div className="absolute inset-0 z-0">
               <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <Globe3D />
               </Canvas>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-electric/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
            <div className="relative z-20 text-center pointer-events-none">
               <div className="text-7xl font-bold font-display italic text-electric electric-glow">12+</div>
               <div className="text-xs uppercase tracking-widest opacity-60 font-bold">Years of Experience</div>
            </div>

            {/* Floating Stat Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 -right-4 p-4 glass-morphism rounded-2xl z-30 shadow-2xl"
            >
              <div className="text-electric font-bold">+30%</div>
              <div className="text-[10px] uppercase tracking-tighter opacity-70">Conv. Lift</div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-12 -left-8 p-4 glass-morphism rounded-2xl z-30 shadow-2xl"
            >
              <div className="text-white font-bold">$500K</div>
              <div className="text-[10px] uppercase tracking-tighter opacity-70">Revenue Growth</div>
            </motion.div>

            <motion.div 
              animate={{ x: [0, 5, 0] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -right-8 p-4 glass-morphism rounded-2xl z-30 shadow-2xl"
            >
              <div className="text-white font-bold">35%</div>
              <div className="text-[10px] uppercase tracking-tighter opacity-70">Organic Traffic</div>
            </motion.div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-40">
          <SectionHeading subtitle="Professional Journey">Experience Timeline</SectionHeading>
          <div className="space-y-4">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative grid md:grid-cols-[1fr_2.5fr] gap-8 p-10 glass-morphism rounded-sm hover:border-electric transition-all"
              >
                <div className="space-y-4">
                  <div className="label-caps text-electric flex items-center gap-2">
                    {exp.period}
                  </div>
                  <div className="text-xl font-bold uppercase tracking-tight">{exp.company}</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                    {exp.location}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {exp.metrics.map((m, mi) => (
                      <div key={mi} className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-sm">
                        <p className={cn("text-xl font-bold", m.color)}>{m.value}</p>
                        <p className="text-[8px] uppercase tracking-wider text-zinc-500 font-bold">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-white transition-colors">{exp.role}</h3>
                  <p className="text-zinc-400 leading-relaxed font-light">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-32">
          <SectionHeading subtitle="Stack">Core Technologies</SectionHeading>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {TECH_STACK.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5, borderColor: 'rgba(0,128,255,0.4)' }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center justify-center p-8 glass-morphism rounded-2xl gap-4 group transition-all"
              >
                <tech.icon className="w-8 h-8 text-gray-500 group-hover:text-electric transition-colors" />
                <span className="text-xs font-medium text-center uppercase tracking-wider opacity-60">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education & Certs */}
        <section className="py-32 grid md:grid-cols-2 gap-16">
          <div>
             <SectionHeading subtitle="Academic">Education</SectionHeading>
             <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="p-6 border-l-2 border-electric bg-white/5 rounded-r-xl"
                >
                  <div className="flex items-center gap-2 text-electric mb-2">
                    <GraduationCap className="w-5 h-5" />
                    <span className="text-sm font-mono tracking-wider">2017 – 2019</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">Master’s Degree in English Language and Literature</h3>
                  <p className="text-sm text-gray-400">University of Malakand</p>
                  <p className="text-xs mt-3 opacity-60">Focused on Advanced Communication, Narrative Analysis, and Behavioral Studies.</p>
                </motion.div>
                <motion.div 
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   className="p-6 border-l-2 border-white/20 bg-white/5 rounded-r-xl opacity-80"
                >
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <GraduationCap className="w-5 h-5" />
                    <span className="text-sm font-mono tracking-wider">2015 – 2017</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">Bachelor’s Degree (Communication Focus)</h3>
                  <p className="text-sm text-gray-400">University of Malakand</p>
                </motion.div>
             </div>
          </div>
          <div>
             <SectionHeading subtitle="Validation">Certifications</SectionHeading>
             <div className="grid gap-4">
                {CERTIFICATIONS.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 glass-morphism rounded-xl flex items-start gap-4 hover:bg-white/10 transition-all border-l-2 border-transparent hover:border-l-electric"
                  >
                    <Award className="w-5 h-5 text-electric shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-sm leading-tight">{cert.name}</h4>
                      <p className="text-[10px] uppercase mt-1 opacity-50 tracking-wider font-medium">{cert.provider}</p>
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-40">
          <div className="glass-morphism rounded-sm p-12 md:p-24 relative overflow-hidden border-zinc-800">
             <div className="max-w-3xl">
                <SectionHeading subtitle="Collaboration">Let's build your story.</SectionHeading>
                <p className="text-2xl font-light text-zinc-400 mb-16">
                  Ready to elevate your performance marketing? Reach out for collaboration or selective projects.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-12 mb-20">
                    <motion.a 
                      href="mailto:farmanhameed10@gmail.com"
                      whileHover={{ y: -2 }}
                      className="flex items-center gap-6 group"
                    >
                      <div className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-electric transition-colors">
                        <Mail className="w-6 h-6 text-electric" />
                      </div>
                      <div>
                        <div className="label-caps text-zinc-500 mb-1">Email</div>
                        <div className="text-lg font-medium">farmanhameed10@gmail.com</div>
                      </div>
                    </motion.a>
                    <motion.a 
                      href="https://www.linkedin.com/in/farman-hameed/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      className="flex items-center gap-6 group"
                    >
                      <div className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-[#0077b5] transition-colors">
                        <Linkedin className="w-6 h-6 text-[#0077b5]" />
                      </div>
                      <div>
                        <div className="label-caps text-zinc-500 mb-1">LinkedIn</div>
                        <div className="text-lg font-medium">farman-hameed</div>
                      </div>
                    </motion.a>
                </div>

                <form className="space-y-8" onSubmit={handleWhatsAppRedirect}>
                  <div className="grid sm:grid-cols-2 gap-10">
                    <div className="space-y-2">
                       <label className="label-caps text-zinc-500">Name</label>
                       <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full h-14 bg-transparent border-b border-zinc-800 focus:border-electric focus:outline-none transition-all pb-2 text-xl" 
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="label-caps text-zinc-500">Email</label>
                       <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full h-14 bg-transparent border-b border-zinc-800 focus:border-electric focus:outline-none transition-all pb-2 text-xl" 
                       />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="label-caps text-zinc-500">Message</label>
                    <textarea 
                      name="message"
                      rows={4} 
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-zinc-800 focus:border-electric focus:outline-none transition-all pb-2 text-xl resize-none" 
                    />
                  </div>
                  <motion.button 
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="px-12 py-5 bg-electric text-black font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all mt-6"
                  >
                    Send to WhatsApp
                  </motion.button>
                </form>
             </div>
          </div>
        </section>

        <footer className="py-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-sm opacity-40">
            © 2026 Muhammad Farman. Portfolio & Narrative Strategist.
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

