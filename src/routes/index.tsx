import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  GraduationCap, Users, BookOpen, Calendar, Bus, Building2, Bell, BarChart3,
  ShieldCheck, Sparkles, ArrowRight, Check, Star, Zap, LayoutDashboard
} from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Campusly — Premium College Management System" },
      { name: "description", content: "Run your entire college on one beautiful platform — students, faculty, attendance, exams, fees, library, hostel and more." },
      { property: "og:title", content: "Campusly — Premium College Management System" },
      { property: "og:description", content: "Run your entire college on one beautiful platform." },
    ],
  }),
  component: Landing,
});

const features = [
  { icon: Users, title: "Student 360°", desc: "A unified profile with academics, attendance, fees and engagement." },
  { icon: BarChart3, title: "Live Analytics", desc: "Real-time dashboards across every department and cohort." },
  { icon: Calendar, title: "Smart Scheduling", desc: "Auto-generate timetables, exam halls and faculty allocations." },
  { icon: ShieldCheck, title: "Role-based Access", desc: "Granular permissions for admin, faculty, students & parents." },
  { icon: Bell, title: "Notifications", desc: "Multi-channel announcements with read receipts." },
  { icon: Zap, title: "Lightning Fast", desc: "Built on a modern edge stack. Instant search across records." },
];

const modules = [
  { icon: Users, name: "Students" }, { icon: GraduationCap, name: "Faculty" },
  { icon: Calendar, name: "Attendance" }, { icon: BookOpen, name: "Examination" },
  { icon: BarChart3, name: "Fees" }, { icon: BookOpen, name: "Library" },
  { icon: Bus, name: "Transport" }, { icon: Building2, name: "Hostel" },
  { icon: Sparkles, name: "Events" }, { icon: Bell, name: "Notifications" },
];

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Nav */}
      <header className="sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="glass rounded-2xl flex items-center justify-between px-5 py-3 shadow-soft">
            <Link to="/" className="flex items-center gap-2">
              <div className="size-9 rounded-xl bg-gradient-primary grid place-items-center text-white">
                <GraduationCap className="size-5" />
              </div>
              <span className="font-bold text-lg tracking-tight">Campusly</span>
            </Link>
            <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
              <a href="#features" className="hover:text-foreground transition">Features</a>
              <a href="#modules" className="hover:text-foreground transition">Modules</a>
              <a href="#preview" className="hover:text-foreground transition">Dashboard</a>
              <a href="#stats" className="hover:text-foreground transition">Stats</a>
            </nav>
            <div className="flex items-center gap-2">
              <Link to="/login" className="text-sm px-3 py-1.5 rounded-lg hover:bg-accent transition">Sign in</Link>
              <Link to="/dashboard" className="text-sm px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground glow-primary font-medium">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-28 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-medium mb-6">
              <Sparkles className="size-3.5 text-indigo" />
              <span>Now with AI insights — 2026 release</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">
              The operating system <br /> for <span className="text-gradient">modern colleges</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Beautiful dashboards. Real-time analytics. One platform for students, faculty, fees,
              hostel, transport, library and everything in between.
            </p>
            <div className="mt-9 flex items-center justify-center gap-3">
              <Link to="/dashboard" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium glow-primary animate-pulse-glow">
                Explore Dashboard <ArrowRight className="size-4" />
              </Link>
              <Link to="/login" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card font-medium">
                <LayoutDashboard className="size-4" /> Sign in
              </Link>
            </div>
            <div className="mt-10 flex items-center justify-center gap-6 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1"><Check className="size-4 text-indigo" /> No credit card</span>
              <span className="inline-flex items-center gap-1"><Check className="size-4 text-indigo" /> SOC2 ready</span>
              <span className="inline-flex items-center gap-1"><Check className="size-4 text-indigo" /> 99.99% uptime</span>
            </div>
          </motion.div>

          {/* Floating preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 relative max-w-5xl mx-auto"
          >
            <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-2xl opacity-20" />
            <div className="relative glass-card rounded-2xl p-3 shadow-soft">
              <div className="rounded-xl overflow-hidden bg-background border">
                <div className="h-9 border-b flex items-center gap-1.5 px-3">
                  <div className="size-2.5 rounded-full bg-red-400" />
                  <div className="size-2.5 rounded-full bg-yellow-400" />
                  <div className="size-2.5 rounded-full bg-green-400" />
                </div>
                <div className="grid grid-cols-12 gap-3 p-4">
                  <div className="col-span-2 space-y-2">
                    {["Dashboard","Students","Faculty","Exams","Fees","Library"].map((i, idx) => (
                      <div key={i} className={`text-xs px-2.5 py-2 rounded-lg ${idx===0? "bg-gradient-primary text-white" : "bg-muted/60"}`}>{i}</div>
                    ))}
                  </div>
                  <div className="col-span-10 grid grid-cols-4 gap-3">
                    {[1,2,3,4].map(i=>(
                      <div key={i} className="rounded-xl p-3 bg-gradient-soft border">
                        <div className="text-[10px] text-muted-foreground">Metric {i}</div>
                        <div className="text-lg font-bold mt-1">{(i*2480).toLocaleString()}</div>
                        <div className="h-12 mt-2 bg-gradient-primary opacity-70 rounded-md" />
                      </div>
                    ))}
                    <div className="col-span-3 rounded-xl border p-4 h-40 bg-card">
                      <div className="text-xs font-medium mb-2">Weekly Attendance</div>
                      <div className="flex items-end gap-2 h-24">
                        {[60,75,55,82,72,90,68].map((h,i)=>(
                          <div key={i} className="flex-1 rounded-md bg-gradient-primary" style={{height:`${h}%`}} />
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl border p-4 h-40 bg-gradient-violet text-white">
                      <div className="text-xs opacity-80">Events</div>
                      <div className="text-2xl font-bold mt-2">12</div>
                      <div className="text-xs opacity-80 mt-1">Upcoming this month</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-20 border-y bg-background/50 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { v: "500+", l: "Institutions" },
            { v: "1.2M", l: "Students managed" },
            { v: "98%", l: "Customer satisfaction" },
            { v: "24/7", l: "Support" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient">{s.v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-widest text-indigo font-semibold">Features</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Built for every stakeholder</h2>
            <p className="mt-4 text-muted-foreground">A toolkit so polished, your faculty will actually use it.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.05 }}
                className="glass-card rounded-2xl p-6 group hover:-translate-y-1 transition-all"
              >
                <div className="size-11 rounded-xl bg-gradient-primary grid place-items-center text-white shadow-soft">
                  <f.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="py-24 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-widest text-indigo font-semibold">Modules</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Everything, one platform</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {modules.map((m) => (
              <div key={m.name} className="glass-card rounded-2xl p-5 text-center hover:-translate-y-1 transition-all">
                <div className="mx-auto size-12 rounded-xl bg-gradient-cyan grid place-items-center text-white">
                  <m.icon className="size-6" />
                </div>
                <div className="mt-3 font-medium text-sm">{m.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard preview */}
      <section id="preview" className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-widest text-indigo font-semibold">Dashboard</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">A control center your team will love</h2>
            <p className="mt-4 text-muted-foreground">Tabular data, charts, calendars, and live activity — all in one beautifully crafted workspace.</p>
            <ul className="mt-6 space-y-3">
              {["Role-based dashboards","Real-time charts with Recharts","Animated sidebar & widgets","Dark mode ready"].map(x=>(
                <li key={x} className="flex items-center gap-2 text-sm"><Check className="size-4 text-indigo" /> {x}</li>
              ))}
            </ul>
            <Link to="/dashboard" className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-primary text-primary-foreground font-medium glow-primary">
              Open Dashboard <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-cyan rounded-3xl blur-2xl opacity-20" />
            <div className="relative glass-card rounded-2xl p-5 space-y-3">
              <div className="grid grid-cols-3 gap-3">
                {[1,2,3].map(i=>(
                  <div key={i} className="rounded-xl bg-gradient-soft p-3 border">
                    <div className="text-xs text-muted-foreground">KPI {i}</div>
                    <div className="font-bold text-lg">{(i*1234).toLocaleString()}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl p-4 bg-card border">
                <div className="text-xs font-medium mb-3">Performance</div>
                <svg viewBox="0 0 300 80" className="w-full h-20">
                  <defs>
                    <linearGradient id="g" x1="0" x2="1">
                      <stop offset="0%" stopColor="#4F46E5" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                  <path d="M0 60 C 40 20, 80 70, 120 40 S 200 10, 240 30 S 300 20, 300 25" stroke="url(#g)" strokeWidth="3" fill="none" />
                </svg>
              </div>
              <div className="rounded-xl p-4 bg-gradient-primary text-white">
                <div className="text-xs opacity-90">Top Department</div>
                <div className="text-2xl font-bold mt-1">Computer Science</div>
                <div className="text-xs opacity-80 mt-1">CGPA avg 8.9 · 4,200 students</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-widest text-indigo font-semibold">Loved by educators</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">What teams say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Dr. Anjali Mehra", role: "Dean, Tech University", quote: "Campusly replaced 6 different tools. Our faculty are genuinely happier." },
              { name: "Rohan Verma", role: "Registrar, NIT Delhi", quote: "The dashboards are stunning. Reporting that used to take days now takes seconds." },
              { name: "Prof. Sarah Lin", role: "HOD, Physics", quote: "Attendance and grades in one click. Best academic software I've ever used." },
            ].map(t=>(
              <div key={t.name} className="glass-card rounded-2xl p-6">
                <div className="flex gap-1 text-indigo">{[...Array(5)].map((_,i)=><Star key={i} className="size-4 fill-current" />)}</div>
                <p className="mt-3 text-sm">"{t.quote}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="size-10 rounded-full bg-gradient-primary" />
                  <div>
                    <div className="font-medium text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-12 text-center text-white shadow-soft">
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold">Ready to upgrade your campus?</h2>
              <p className="mt-3 opacity-90 max-w-xl mx-auto">Join hundreds of institutions delivering a 10× better student experience.</p>
              <div className="mt-8 flex justify-center gap-3">
                <Link to="/dashboard" className="px-6 py-3 rounded-xl bg-white text-foreground font-medium hover:scale-105 transition">Get Started</Link>
                <Link to="/login" className="px-6 py-3 rounded-xl glass text-white font-medium">Sign in</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-gradient-primary grid place-items-center text-white"><GraduationCap className="size-4" /></div>
            <span className="font-semibold">Campusly</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Campusly. The premium college OS.</p>
        </div>
      </footer>
    </div>
  );
}
