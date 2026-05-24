import { Link, createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  GraduationCap, Users, BookOpen, Calendar, Bus, Building2, Bell, BarChart3,
  ShieldCheck, Sparkles, ArrowRight, Check, Star, Zap, LayoutDashboard,
  Cpu, Microscope, Cog, Wrench, Radio, Brain, Trophy, Briefcase,
  FlaskConical, Dumbbell, Library as LibraryIcon, MessageSquare,
  TrendingUp, LineChart, Bot, Mail, Phone, MapPin, Facebook, Twitter,
  Instagram, Linkedin, Youtube,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Campusly — Premium College Management System" },
      { name: "description", content: "A unified digital campus platform for academics, examinations, placements, administration and student success." },
      { property: "og:title", content: "Campusly — Premium College Management System" },
      { property: "og:description", content: "Run your entire college on one beautiful platform." },
    ],
  }),
  component: Landing,
});

const features = [
  { icon: Users, title: "Student Management", desc: "Unified 360° profile with academics, attendance, fees & engagement." },
  { icon: BookOpen, title: "Academic Management", desc: "Curriculum, timetables, syllabus tracking and faculty allocation." },
  { icon: Calendar, title: "Attendance System", desc: "Biometric & QR-based attendance with auto-notifications to parents." },
  { icon: GraduationCap, title: "Examination Portal", desc: "Online exams, results, hall tickets and re-evaluation workflows." },
  { icon: BarChart3, title: "AI Analytics", desc: "Predictive insights for performance, retention and placement readiness." },
  { icon: Briefcase, title: "Placement Management", desc: "Drives, eligibility, resumes, recruiter portal and offer tracking." },
  { icon: Building2, title: "Hostel & Transport", desc: "Room allocation, leave passes, live bus tracking and route maps." },
  { icon: LibraryIcon, title: "Library System", desc: "Digital catalog, issue/return, fines and e-resources." },
];

const departments = [
  { icon: Cpu, name: "Computer Science", code: "CSE", count: "1,240 students" },
  { icon: Radio, name: "Electronics & Comm.", code: "ECE", count: "820 students" },
  { icon: Zap, name: "Electrical Engg.", code: "EEE", count: "560 students" },
  { icon: Wrench, name: "Civil Engineering", code: "CE", count: "430 students" },
  { icon: Cog, name: "Mechanical", code: "ME", count: "610 students" },
  { icon: Brain, name: "AI & Data Science", code: "AI&DS", count: "390 students" },
];

const facilities = [
  { icon: LibraryIcon, name: "Central Library", desc: "1.2L+ books, e-journals & quiet zones." },
  { icon: Building2, name: "Smart Hostels", desc: "AC dorms with biometric entry & laundry." },
  { icon: Microscope, name: "Smart Classrooms", desc: "Interactive displays & lecture capture." },
  { icon: FlaskConical, name: "Modern Labs", desc: "AI, IoT, robotics and electronics labs." },
  { icon: Dumbbell, name: "Sports Complex", desc: "Olympic pool, indoor courts & gym." },
  { icon: Bus, name: "Transport Fleet", desc: "120+ buses across 40 routes with GPS." },
];

const aiFeatures = [
  { icon: Bot, name: "AI Chatbot", desc: "24/7 assistant for students, parents and staff." },
  { icon: LineChart, name: "Smart Reports", desc: "Auto-generated insights every Monday morning." },
  { icon: TrendingUp, name: "Performance Prediction", desc: "Identify at-risk students before exams." },
  { icon: Calendar, name: "Attendance Prediction", desc: "Forecast shortages and trigger interventions." },
  { icon: Sparkles, name: "Automated Insights", desc: "Department-level recommendations on autopilot." },
];

const recruiters = ["Google", "Microsoft", "Amazon", "Infosys", "TCS", "Deloitte", "Wipro", "Accenture", "IBM", "Oracle"];

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
            <nav className="hidden lg:flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#home" className="hover:text-foreground transition">Home</a>
              <a href="#about" className="hover:text-foreground transition">About</a>
              <a href="#departments" className="hover:text-foreground transition">Departments</a>
              <a href="#admissions" className="hover:text-foreground transition">Admissions</a>
              <a href="#placements" className="hover:text-foreground transition">Placements</a>
              <a href="#facilities" className="hover:text-foreground transition">Facilities</a>
              <a href="#contact" className="hover:text-foreground transition">Contact</a>
            </nav>
            <div className="flex items-center gap-2">
              <Link to="/login" className="hidden sm:inline text-sm px-3 py-1.5 rounded-lg hover:bg-accent transition">ERP Login</Link>
              <Link to="/dashboard" className="text-sm px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground glow-primary font-medium">
                Student Portal
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute -top-40 -right-32 size-[28rem] rounded-full bg-gradient-primary opacity-20 blur-3xl animate-float" />
        <div className="absolute -bottom-32 -left-24 size-96 rounded-full bg-gradient-violet opacity-20 blur-3xl animate-float" />
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 relative grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-medium mb-6">
              <Sparkles className="size-3.5 text-indigo" />
              <span>NAAC A++ • NBA Accredited • Ranked #12 in India</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05]">
              Empowering Education Through <span className="text-gradient">Digital Innovation</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              A unified digital campus platform for academics, examinations, placements,
              administration, and student success.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#departments" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium glow-primary">
                Explore Campus <ArrowRight className="size-4" />
              </a>
              <Link to="/login" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card font-medium">
                <LayoutDashboard className="size-4" /> ERP Login
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { v: "25K+", l: "Students" },
                { v: "1,200+", l: "Faculty" },
                { v: "98%", l: "Placement" },
              ].map(s => (
                <div key={s.l} className="glass-card rounded-xl p-3 text-center">
                  <div className="text-xl font-bold text-gradient">{s.v}</div>
                  <div className="text-[11px] text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Floating dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-primary rounded-3xl blur-2xl opacity-20" />
            <div className="relative glass-card rounded-2xl p-3 shadow-soft">
              <div className="rounded-xl overflow-hidden bg-background border">
                <div className="h-9 border-b flex items-center gap-1.5 px-3">
                  <div className="size-2.5 rounded-full bg-red-400" />
                  <div className="size-2.5 rounded-full bg-yellow-400" />
                  <div className="size-2.5 rounded-full bg-green-400" />
                  <div className="ml-auto text-[10px] text-muted-foreground">campusly.app/dashboard</div>
                </div>
                <div className="p-4 space-y-3">
                  <div className="grid grid-cols-3 gap-2">
                    {[{l:"Attendance",v:"92%"},{l:"GPA",v:"8.7"},{l:"Fees",v:"Paid"}].map(k=>(
                      <div key={k.l} className="rounded-lg p-2.5 bg-gradient-soft border">
                        <div className="text-[10px] text-muted-foreground">{k.l}</div>
                        <div className="font-bold text-sm mt-0.5">{k.v}</div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl border p-3">
                    <div className="text-[11px] font-medium mb-2">Weekly Attendance</div>
                    <div className="flex items-end gap-1.5 h-20">
                      {[60,75,55,82,72,90,68].map((h,i)=>(
                        <div key={i} className="flex-1 rounded-md bg-gradient-primary" style={{height:`${h}%`}} />
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl p-3 bg-gradient-violet text-white">
                      <div className="text-[10px] opacity-80">Top Dept</div>
                      <div className="font-bold text-sm mt-0.5">CSE • 8.9</div>
                    </div>
                    <div className="rounded-xl p-3 bg-gradient-cyan text-white">
                      <div className="text-[10px] opacity-80">Placements</div>
                      <div className="font-bold text-sm mt-0.5">412 offers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              initial={{opacity:0, x:20}} animate={{opacity:1,x:0}} transition={{delay:0.6}}
              className="absolute -left-6 top-16 glass-card rounded-xl p-3 hidden md:block animate-float"
            >
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-gradient-primary grid place-items-center text-white"><TrendingUp className="size-4" /></div>
                <div>
                  <div className="text-[10px] text-muted-foreground">Performance</div>
                  <div className="text-xs font-semibold">+18% this term</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{delay:0.8}}
              className="absolute -right-4 bottom-10 glass-card rounded-xl p-3 hidden md:block animate-float"
            >
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-gradient-cyan grid place-items-center text-white"><Bot className="size-4" /></div>
                <div>
                  <div className="text-[10px] text-muted-foreground">AI Assistant</div>
                  <div className="text-xs font-semibold">3 new insights</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-widest text-indigo font-semibold">Platform Features</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Built for every stakeholder</h2>
            <p className="mt-4 text-muted-foreground">A toolkit so polished, your faculty will actually use it.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.05 }}
                className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-all"
              >
                <div className="size-11 rounded-xl bg-gradient-primary grid place-items-center text-white shadow-soft">
                  <f.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-widest text-indigo font-semibold">About the College</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">A future-ready digital campus</h2>
            <p className="mt-4 text-muted-foreground">
              Established in 1985, Campusly Institute of Technology is one of India's most
              progressive institutions — combining academic excellence with a fully digital
              campus experience powered by AI.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { t: "Our Vision", d: "To shape compassionate innovators who lead with technology." },
                { t: "Our Mission", d: "Deliver world-class education through digital-first learning." },
                { t: "Accreditation", d: "NAAC A++, NBA, AICTE approved & UGC autonomous." },
                { t: "Digital Campus", d: "Smart classrooms, IoT hostels and 100% paperless ops." },
              ].map(x=>(
                <div key={x.t} className="glass-card rounded-2xl p-5">
                  <div className="font-semibold">{x.t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{x.d}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-violet rounded-3xl blur-3xl opacity-20" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="glass-card rounded-2xl p-6">
                  <Trophy className="size-7 text-indigo" />
                  <div className="font-bold text-2xl mt-3">A++</div>
                  <div className="text-xs text-muted-foreground">NAAC Grade</div>
                </div>
                <div className="rounded-2xl bg-gradient-primary text-white p-6">
                  <div className="text-3xl font-bold">40+</div>
                  <div className="text-xs opacity-90 mt-1">Years of legacy</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl bg-gradient-cyan text-white p-6">
                  <div className="text-3xl font-bold">120+</div>
                  <div className="text-xs opacity-90 mt-1">Industry partners</div>
                </div>
                <div className="glass-card rounded-2xl p-6">
                  <ShieldCheck className="size-7 text-indigo" />
                  <div className="font-bold text-2xl mt-3">100%</div>
                  <div className="text-xs text-muted-foreground">Digital ops</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section id="departments" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-widest text-indigo font-semibold">Departments</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Programs that shape the future</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {departments.map((d,i)=>(
              <motion.div
                key={d.code}
                initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}}
                className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition group"
              >
                <div className="flex items-start justify-between">
                  <div className="size-12 rounded-xl bg-gradient-primary grid place-items-center text-white">
                    <d.icon className="size-6" />
                  </div>
                  <span className="text-[10px] px-2 py-1 rounded-full bg-accent font-medium">{d.code}</span>
                </div>
                <h3 className="mt-4 font-semibold text-lg">{d.name}</h3>
                <div className="text-xs text-muted-foreground mt-1">{d.count}</div>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-indigo group-hover:gap-2 transition-all">
                  Explore <ArrowRight className="size-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placements */}
      <section id="placements" className="py-24 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-widest text-indigo font-semibold">Placements</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Where our students go</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-5 mb-10">
            {[
              { v: "₹64L", l: "Highest Package" },
              { v: "₹9.2L", l: "Average Package" },
              { v: "412", l: "Offers in 2025" },
              { v: "98%", l: "Placement Rate" },
            ].map(s=>(
              <div key={s.l} className="glass-card rounded-2xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient">{s.v}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="glass-card rounded-2xl p-6">
            <div className="text-sm font-medium mb-4">Top recruiters on campus</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {recruiters.map(r=>(
                <div key={r} className="rounded-xl border bg-background/60 p-4 text-center text-sm font-semibold hover:bg-gradient-soft transition">
                  {r}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-widest text-indigo font-semibold">Campus Facilities</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Everything students need</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {facilities.map((f,i)=>(
              <motion.div
                key={f.name}
                initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}}
                className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition"
              >
                <div className="size-12 rounded-xl bg-gradient-cyan grid place-items-center text-white">
                  <f.icon className="size-6" />
                </div>
                <h3 className="mt-4 font-semibold">{f.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-24 bg-gradient-soft relative overflow-hidden">
        <div className="absolute -top-20 right-0 size-96 rounded-full bg-gradient-primary opacity-10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-medium mb-4">
              <Sparkles className="size-3.5 text-indigo" /> Powered by AI
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Intelligence built into every workflow</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {aiFeatures.map((f,i)=>(
              <motion.div
                key={f.name}
                initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}}
                className="glass-card rounded-2xl p-5"
              >
                <div className="size-10 rounded-xl bg-gradient-violet grid place-items-center text-white">
                  <f.icon className="size-5" />
                </div>
                <div className="mt-3 font-semibold text-sm">{f.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{f.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-widest text-indigo font-semibold">Testimonials</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Loved by the whole campus</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: "Aarav S.", role: "Student, CSE", quote: "I check fees, attendance and exam results in one place. Game-changer." },
              { name: "Dr. Anjali Mehra", role: "Dean", quote: "Campusly replaced 6 different tools. Faculty are genuinely happier." },
              { name: "Mrs. Sharma", role: "Parent", quote: "Real-time WhatsApp updates keep me in the loop without calling daily." },
              { name: "Google Recruiter", role: "Recruiter", quote: "Their placement portal is the cleanest we've seen across 200+ colleges." },
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
      <section id="admissions" className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-12 text-center text-white shadow-soft">
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-medium backdrop-blur">
                Admissions Open 2026
              </div>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold">Begin your journey with Campusly</h2>
              <p className="mt-3 opacity-90 max-w-xl mx-auto">Apply online in minutes. Track your application end-to-end on our student portal.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/login" className="px-6 py-3 rounded-xl bg-white text-foreground font-medium hover:scale-105 transition">Apply Now</Link>
                <Link to="/dashboard" className="px-6 py-3 rounded-xl glass text-white font-medium">Explore Portal</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <div className="size-9 rounded-xl bg-gradient-primary grid place-items-center text-white">
                <GraduationCap className="size-5" />
              </div>
              <span className="font-bold text-lg">Campusly</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              The operating system for modern colleges. Built for India's most ambitious institutions.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((I,i)=>(
                <a key={i} href="#" className="size-9 rounded-lg glass-card grid place-items-center hover:bg-gradient-primary hover:text-white transition">
                  <I className="size-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="font-semibold mb-4 text-sm">Quick Links</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground">About</a></li>
              <li><a href="#departments" className="hover:text-foreground">Departments</a></li>
              <li><a href="#admissions" className="hover:text-foreground">Admissions</a></li>
              <li><a href="#placements" className="hover:text-foreground">Placements</a></li>
              <li><a href="#facilities" className="hover:text-foreground">Facilities</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-4 text-sm">Portal</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/login" className="hover:text-foreground">ERP Login</Link></li>
              <li><Link to="/dashboard" className="hover:text-foreground">Student Dashboard</Link></li>
              <li><Link to="/dashboard/exams" className="hover:text-foreground">Exam Portal</Link></li>
              <li><Link to="/dashboard/fees" className="hover:text-foreground">Fee Payment</Link></li>
              <li><Link to="/dashboard/library" className="hover:text-foreground">Library</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-4 text-sm">Contact</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin className="size-4 mt-0.5 text-indigo" /> Campusly Institute, Tech Park Road, Bengaluru 560100</li>
              <li className="flex items-center gap-2"><Phone className="size-4 text-indigo" /> +91 80 4000 1234</li>
              <li className="flex items-center gap-2"><Mail className="size-4 text-indigo" /> hello@campusly.edu</li>
              <li className="flex items-center gap-2"><MessageSquare className="size-4 text-emerald-500" /> WhatsApp: +91 99000 12345</li>
            </ul>
          </div>
        </div>
        <div className="border-t">
          <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
            <p>© 2026 Campusly Institute of Technology. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-foreground">Privacy</a>
              <a href="#" className="hover:text-foreground">Terms</a>
              <a href="#" className="hover:text-foreground">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
