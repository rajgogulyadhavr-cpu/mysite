import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download, Linkedin, Github, Mail, ExternalLink, Figma,
  Sparkles, Code2, Brain, Palette, Trophy, ArrowUpRight, X,
} from "lucide-react";
import { LINKS, SKILLS, TIMELINE, PROJECTS, UIUX, ACHIEVEMENTS, PROFILE_IMG } from "@/lib/portfolio-data";

const ROLES = ["AI & Data Science Engineer", "UI/UX Designer", "Creative Problem Solver"];

function TypingHero() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = ROLES[idx];
    const t = setTimeout(() => {
      if (!del) {
        setText(full.slice(0, text.length + 1));
        if (text.length + 1 === full.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(full.slice(0, text.length - 1));
        if (text.length - 1 === 0) { setDel(false); setIdx((idx + 1) % ROLES.length); }
      }
    }, del ? 40 : 70);
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return (
    <span className="neon-text">
      {text}<span className="animate-cursor text-[#00f2ff]">|</span>
    </span>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#00b8d4] glass px-3 py-1 rounded-full mb-4">
          <Sparkles size={12} /> {eyebrow}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
      </motion.div>
      {children}
    </section>
  );
}

export function Portfolio() {
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-40 glass rounded-full px-6 py-3 flex items-center gap-6 text-sm"
      >
        <span className="font-bold neon-text">RY.</span>
        <div className="hidden md:flex gap-5 text-muted-foreground">
          {[["About","about"],["Skills","skills"],["Projects","projects"],["UI/UX","uiux"],["Achievements","achievements"],["Contact","contact"]].map(([l,h]) => (
            <a key={h} href={`#${h}`} className="hover:text-foreground transition-colors">{l}</a>
          ))}
        </div>
        <a href={LINKS.resume} target="_blank" rel="noreferrer" className="bg-foreground text-background px-3 py-1.5 rounded-full text-xs font-medium hover:opacity-90">Resume</a>
      </motion.nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 grid-bg" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 radial-fade pointer-events-none" />
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-[#00f2ff]/15 blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-[#5d8bff]/15 blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />

        <div className="relative max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for Internship & Full-time
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-4 leading-[1.05]">
            Hello, I'm <br />
            <span className="neon-text">Rajalingam Yadav</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-3 h-8">
            <TypingHero />
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="text-base text-muted-foreground max-w-xl mx-auto mb-10">
            Building intelligent and user-friendly digital experiences that solve real-world problems.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
            className="flex flex-wrap justify-center gap-3">
            <a href="#projects" className="bg-foreground text-background px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform inline-flex items-center gap-2">
              View Projects <ArrowUpRight size={16} />
            </a>
            <a href={LINKS.resume} target="_blank" rel="noreferrer" className="glass neon-glow-soft px-6 py-3 rounded-full font-medium hover:neon-glow transition-all inline-flex items-center gap-2">
              <Download size={16} /> Resume
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="glass px-4 py-3 rounded-full hover:neon-glow-soft transition-all"><Linkedin size={18} /></a>
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="glass px-4 py-3 rounded-full hover:neon-glow-soft transition-all"><Github size={18} /></a>
            <a href={LINKS.figma} target="_blank" rel="noreferrer" className="glass px-4 py-3 rounded-full hover:neon-glow-soft transition-all"><Figma size={18} /></a>
            <a href={LINKS.email} className="glass px-4 py-3 rounded-full hover:neon-glow-soft transition-all"><Mail size={18} /></a>
          </motion.div>
        </div>
      </section>

      {/* About / Timeline */}
      <Section id="about" eyebrow="About Me" title="Journey & Background">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass rounded-3xl p-8 neon-glow-soft">
            <div className="flex items-center gap-5 mb-5">
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-2xl blur-xl bg-[#00f2ff]/40" />
                <img src={PROFILE_IMG} alt="Rajalingam N portrait" className="relative w-24 h-24 rounded-2xl object-cover ring-2 ring-[#00f2ff]/60 neon-glow-soft" />
              </div>
              <div>
                <h3 className="text-2xl font-bold leading-tight">Rajalingam N</h3>
                <p className="text-sm text-[#00b8d4]">Pre-Final Year · B.Tech AI & Data Science</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Motivated pre-final-year <b className="text-foreground">B.Tech AI &amp; Data Science</b> student at
              Chettinad College of Engineering &amp; Technology, Karur. Passionate about Artificial Intelligence,
              Machine Learning and UI/UX Design — building intelligent, user-friendly solutions for real-world problems.
            </p>
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div className="bg-secondary/60 rounded-xl p-3">
                <p className="text-xs text-muted-foreground">Education</p>
                <p className="font-semibold">B.Tech AI &amp; DS</p>
                <p className="text-xs">CGPA 8.45</p>
              </div>
              <div className="bg-secondary/60 rounded-xl p-3">
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="font-semibold">Karur</p>
                <p className="text-xs">Tamil Nadu, India</p>
              </div>
              <div className="bg-secondary/60 rounded-xl p-3">
                <p className="text-xs text-muted-foreground">Status</p>
                <p className="font-semibold">Available</p>
                <p className="text-xs">Intern / FT</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              <a href={LINKS.resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full text-xs font-medium hover:scale-105 transition-transform">
                <Download size={14} /> View Resume
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-medium hover:neon-glow-soft transition-all">
                <Linkedin size={14} /> LinkedIn
              </a>
              <a href={LINKS.selfIntro} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-medium hover:neon-glow-soft transition-all">
                <ExternalLink size={14} /> Self Intro
              </a>
            </div>
          </motion.div>

          <div className="relative pl-8">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-[#00f2ff] via-[#5d8bff]/40 to-transparent" />
            {TIMELINE.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative mb-8">
                <span className="absolute -left-[22px] top-1.5 w-4 h-4 rounded-full bg-[#00f2ff] neon-glow-soft" />
                <p className="text-xs text-[#00b8d4] font-mono mb-1">{t.year}</p>
                <h4 className="font-semibold">{t.title}</h4>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" eyebrow="Tech Stack" title="Skills & Tools">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {SKILLS.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 text-center hover:neon-glow transition-all cursor-default">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[#00f2ff]/20 to-[#5d8bff]/20 flex items-center justify-center">
                {i % 4 === 0 && <Code2 className="text-[#00b8d4]" size={22} />}
                {i % 4 === 1 && <Brain className="text-[#00b8d4]" size={22} />}
                {i % 4 === 2 && <Palette className="text-[#00b8d4]" size={22} />}
                {i % 4 === 3 && <Sparkles className="text-[#00b8d4]" size={22} />}
              </div>
              <p className="font-semibold">{s.name}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" eyebrow="Featured Work" title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass rounded-3xl overflow-hidden group hover:neon-glow transition-all">
              <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-secondary to-white flex items-center justify-center">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-[#00f2ff]/10 text-[#00b8d4] border border-[#00f2ff]/20">{t}</span>
                  ))}
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-medium text-[#00b8d4] hover:gap-3 transition-all">
                    {p.linkLabel ?? "View Project"} <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* UI/UX Gallery */}
      <Section id="uiux" eyebrow="Design Work" title="UI/UX Gallery">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {UIUX.map((u, i) => (
            <motion.button key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              onClick={() => setModalImg(u.image)}
              className="glass rounded-2xl overflow-hidden group hover:neon-glow transition-all text-left">
              <div className="aspect-[4/3] overflow-hidden bg-white flex items-center justify-center">
                <img src={u.image} alt={u.title} loading="lazy" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="p-3 text-xs font-medium">{u.title}</p>
            </motion.button>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href={LINKS.figma} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full hover:neon-glow-soft text-sm">
            <Figma size={16} /> View Live Figma Prototype <ExternalLink size={14} />
          </a>
        </div>
      </Section>

      {/* Achievements */}
      <Section id="achievements" eyebrow="Recognition" title="Achievements">
        <div className="grid md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl overflow-hidden hover:neon-glow transition-all">
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img src={a.image} alt={a.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <Trophy className="text-[#00b8d4] mb-2" size={20} />
                <h4 className="font-semibold mb-1">{a.title}</h4>
                <p className="text-xs text-muted-foreground">{a.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="Get in Touch" title="Let's Build Something">
        <div className="glass rounded-3xl p-10 text-center max-w-3xl mx-auto neon-glow-soft">
          <p className="text-muted-foreground mb-8">
            Open to internships, freelance UI/UX projects and AI collaborations.
            Drop a message — I respond fast.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-8 text-left text-sm">
            <a href={LINKS.email} className="bg-secondary/60 hover:bg-secondary rounded-xl p-4 flex items-center gap-3"><Mail size={18} className="text-[#00b8d4]" /><span>rajalingamyadav@gmail.com</span></a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="bg-secondary/60 hover:bg-secondary rounded-xl p-4 flex items-center gap-3"><Linkedin size={18} className="text-[#00b8d4]" /><span>LinkedIn Profile</span></a>
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="bg-secondary/60 hover:bg-secondary rounded-xl p-4 flex items-center gap-3"><Github size={18} className="text-[#00b8d4]" /><span>GitHub</span></a>
            <a href={LINKS.figma} target="_blank" rel="noreferrer" className="bg-secondary/60 hover:bg-secondary rounded-xl p-4 flex items-center gap-3"><Figma size={18} className="text-[#00b8d4]" /><span>Figma Portfolio</span></a>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={LINKS.resume} target="_blank" rel="noreferrer" className="bg-foreground text-background px-6 py-3 rounded-full font-medium inline-flex items-center gap-2"><Download size={16} /> Download Resume</a>
            <a href={LINKS.selfIntro} target="_blank" rel="noreferrer" className="glass px-6 py-3 rounded-full font-medium inline-flex items-center gap-2">Self Intro <ExternalLink size={14} /></a>
          </div>
        </div>
      </Section>

      <footer className="text-center py-8 text-xs text-muted-foreground border-t border-border">
        © 2026 Rajalingam Yadav · Crafted with AI & care
      </footer>

      {/* Lightbox */}
      <AnimatePresence>
        {modalImg && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setModalImg(null)}>
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              src={modalImg} className="max-w-full max-h-full rounded-2xl shadow-2xl" />
            <button onClick={() => setModalImg(null)} className="absolute top-6 right-6 glass rounded-full p-3 text-white"><X size={20} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
