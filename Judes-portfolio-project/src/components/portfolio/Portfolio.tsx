import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import {
  ArrowUp,
  Braces,
  Briefcase,
  Cpu,
  ExternalLink,
  Github,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  EDUCATION,
  EXPERIENCE,
  LANGUAGES,
  NAV_LINKS,
  PROJECTS,
  SKILLS,
} from "./data";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};
const slideLeft = {
  hidden: { opacity: 0, x: -48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};
const slideRight = {
  hidden: { opacity: 0, x: 48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

function Loading({ done }: { done: boolean }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
              className="h-14 w-14 rounded-full border-2 border-white/10 border-t-primary"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="gradient-text text-sm tracking-[0.4em] uppercase"
            >
              Judes Rogan
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="aurora-blob absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full opacity-50 blur-[120px]"
        style={{ background: "radial-gradient(circle, #6c5cff 0%, transparent 60%)" }} />
      <div className="aurora-blob absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full opacity-40 blur-[140px]"
        style={{ background: "radial-gradient(circle, #090088 0%, transparent 60%)", animationDelay: "-6s" }} />
      <div className="aurora-blob absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full opacity-30 blur-[140px]"
        style={{ background: "radial-gradient(circle, #a78bfa 0%, transparent 60%)", animationDelay: "-12s" }} />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%", background: "var(--gradient-accent)" }}
      className="fixed left-0 right-0 top-0 z-[60] h-[3px]"
    />
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-2xl transition-all ${
          scrolled ? "glass glow-ring" : "border border-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3">
          <a href="#home" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl" style={{ background: "var(--gradient-accent)" }}>
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="font-display text-sm font-semibold tracking-wide">Judes<span className="gradient-text">.</span></span>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:block">
            <Button size="sm" className="rounded-xl border-0 text-white shadow-lg" style={{ background: "var(--gradient-accent)" }}>
              Get in touch
            </Button>
          </a>
          <button
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-background/80 backdrop-blur-xl md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="ml-auto flex h-full w-80 max-w-[85%] flex-col gap-2 border-l border-white/10 bg-card/60 p-6 backdrop-blur-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-lg font-semibold">Menu</span>
                <button onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-xl border border-white/10">
                  <X className="h-5 w-5" />
                </button>
              </div>
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="rounded-xl px-4 py-3 text-base text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {l.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeUp}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {sub && <p className="mt-4 text-sm text-muted-foreground sm:text-base">{sub}</p>}
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center px-6 pt-32">
      <div className="mx-auto max-w-5xl text-center">
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
            Available for internships & collaborations
          </span>
        </motion.div>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.1 }}
          className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          Hi, I'm <span className="gradient-text">Judes Rogan</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="mt-5 text-lg font-medium text-muted-foreground sm:text-xl"
        >
          Software Engineering · AI & ML Enthusiast
        </motion.p>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          I'm a passionate Software Engineering student who enjoys building intelligent
          applications, modern websites and solving real-world problems using Artificial
          Intelligence, Machine Learning and Full Stack Development.
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#projects">
            <Button size="lg" className="group relative overflow-hidden rounded-xl border-0 px-6 text-white shadow-lg" style={{ background: "var(--gradient-accent)" }}>
              <span className="relative z-10">View my work</span>
              <span className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0" />
            </Button>
          </a>
          <a href="#contact">
            <Button size="lg" variant="outline" className="rounded-xl border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10">
              Contact me
            </Button>
          </a>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.5 }}
          className="mt-14 flex items-center justify-center gap-5 text-muted-foreground"
        >
          <a href="https://www.linkedin.com/in/judes-rogan" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
          <a href="mailto:roganjudes050@gmail.com" className="transition-colors hover:text-foreground"><Mail className="h-5 w-5" /></a>
          <a href="#" className="transition-colors hover:text-foreground"><Github className="h-5 w-5" /></a>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const points = [
    { icon: GraduationCap, text: "Software Engineering student building a strong foundation in CS." },
    { icon: Cpu, text: "Passionate about Artificial Intelligence & Machine Learning." },
    { icon: Braces, text: "Interested in modern web development and clean UI/UX." },
    { icon: Sparkles, text: "Loves solving real-world problems with code." },
    { icon: Briefcase, text: "Continuous learner and dependable team player." },
  ];
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About" title="A little about me" />
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <motion.div variants={slideLeft} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            <Card className="glass rounded-3xl border-0 p-8 md:p-10">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                I'm a curious and driven Software Engineering student who thrives at the
                intersection of <span className="text-foreground">AI, Machine Learning and Full-Stack Web
                Development</span>. I love turning ideas into polished, useful products — from
                intelligent applications to modern, responsive websites.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                I care deeply about craft, clean code and continuous learning, and I enjoy
                collaborating with teams to ship things that solve real-world problems.
              </p>
            </Card>
          </motion.div>
          <motion.ul
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-3"
          >
            {points.map((p, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 6 }}
                className="glass flex items-start gap-4 rounded-2xl p-4"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl" style={{ background: "var(--gradient-accent)" }}>
                  <p.icon className="h-5 w-5 text-white" />
                </div>
                <p className="pt-2 text-sm text-muted-foreground sm:text-base">{p.text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Skills" title="Tools I build with" sub="A snapshot of the technologies I use to design, build and ship." />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.04 } } }}
          className="flex flex-wrap justify-center gap-3"
        >
          {SKILLS.map((s) => (
            <motion.div key={s} variants={scaleIn} whileHover={{ y: -4, scale: 1.05 }}>
              <div className="glass rounded-2xl px-5 py-3 text-sm font-medium">
                <span className="gradient-text">{s}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mt-14 flex flex-wrap items-center justify-center gap-3"
        >
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <Languages className="h-4 w-4" /> Languages
          </div>
          {LANGUAGES.map((l) => (
            <Badge key={l} variant="outline" className="rounded-full border-white/15 bg-white/5 px-4 py-1 text-sm text-foreground">
              {l}
            </Badge>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Timeline({
  id,
  eyebrow,
  title,
  items,
  icon: Icon,
}: {
  id: string;
  eyebrow: string;
  title: string;
  icon: typeof Briefcase;
  items: Array<{ title: string; company?: string; institution?: string; field?: string; period: string; description?: string; detail?: string }>;
}) {
  return (
    <section id={id} className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="relative pl-8 sm:pl-12">
          <div className="absolute bottom-0 left-3 top-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent sm:left-5" />
          {items.map((it, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative mb-8 last:mb-0"
            >
              <div
                className="absolute -left-[22px] top-4 grid h-10 w-10 place-items-center rounded-xl sm:-left-[30px]"
                style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-glow)" }}
              >
                <Icon className="h-4 w-4 text-white" />
              </div>
              <Card className="glass rounded-2xl border-0 p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold sm:text-xl">{it.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {it.company || it.institution}
                      {it.field ? ` · ${it.field}` : ""}
                    </p>
                  </div>
                  <Badge variant="outline" className="shrink-0 rounded-full border-white/15 bg-white/5 text-xs">
                    {it.period}
                  </Badge>
                </div>
                {it.description && (
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{it.description}</p>
                )}
                {it.detail && (
                  <p className="mt-3 text-sm font-medium gradient-text">{it.detail}</p>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Projects" title="Featured work" sub="A few things I've been building recently." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <Card className="glass group flex h-full flex-col overflow-hidden rounded-3xl border-0 p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <Badge key={t} variant="outline" className="rounded-full border-white/15 bg-white/5 text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-2">
                    <a href={p.github} target="_blank" rel="noreferrer" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full rounded-xl border-white/15 bg-white/5 hover:bg-white/10">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Button>
                    </a>
                    <a href={p.demo} target="_blank" rel="noreferrer" className="flex-1">
                      <Button size="sm" className="w-full rounded-xl border-0 text-white" style={{ background: "var(--gradient-accent)" }}>
                        <ExternalLink className="mr-2 h-4 w-4" /> Demo
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const items = [
    { icon: Mail, label: "Email", value: "roganjudes050@gmail.com", href: "mailto:roganjudes050@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 93632 55671", href: "tel:+919363255671" },
    { icon: Linkedin, label: "LinkedIn", value: "judes-rogan", href: "https://www.linkedin.com/in/judes-rogan" },
    { icon: MapPin, label: "Location", value: "Kanniyakumari, Tamil Nadu, India", href: "#" },
  ];
  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Contact" title="Let's build something" sub="Have an idea, an opportunity or just want to say hi? My inbox is open." />
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="glass rounded-3xl border-0 p-8 sm:p-12">
            <div className="grid gap-4 sm:grid-cols-2">
              {items.map((it) => (
                <motion.a
                  key={it.label}
                  href={it.href}
                  target={it.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  whileHover={{ y: -4 }}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl" style={{ background: "var(--gradient-accent)" }}>
                    <it.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{it.label}</div>
                    <div className="truncate text-sm font-medium sm:text-base">{it.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
            <div className="mt-8 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center">
              <p className="text-sm text-muted-foreground">Prefer email? Reach out directly.</p>
              <a href="mailto:roganjudes050@gmail.com">
                <Button size="lg" className="rounded-xl border-0 px-6 text-white shadow-lg" style={{ background: "var(--gradient-accent)" }}>
                  <Mail className="mr-2 h-4 w-4" /> Say hello
                </Button>
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Judes Rogan. Crafted with care.</p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="https://www.linkedin.com/in/judes-rogan" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
          <a href="mailto:roganjudes050@gmail.com" className="transition-colors hover:text-foreground"><Mail className="h-4 w-4" /></a>
          <a href="#" className="transition-colors hover:text-foreground"><Github className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ y: -4 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-2xl text-white shadow-2xl"
          style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-glow)" }}
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 900);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="dark min-h-screen overflow-x-hidden text-foreground">
      <Loading done={loaded} />
      <AuroraBackground />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Timeline id="experience" eyebrow="Experience" title="Where I've grown" items={EXPERIENCE} icon={Briefcase} />
        <Timeline id="education" eyebrow="Education" title="Academic journey" items={EDUCATION} icon={GraduationCap} />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}