import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GraduationCap, Mail, Lock, ArrowRight, Github, Chrome } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — Campusly" },
      { name: "description", content: "Sign in to your Campusly account." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState("Admin");
  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-gradient-hero">
      {/* Left illustration */}
      <div className="relative hidden md:flex items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute -top-20 -left-20 size-80 rounded-full bg-gradient-primary opacity-30 blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 size-72 rounded-full bg-gradient-cyan opacity-30 blur-3xl animate-float" />
        <motion.div
          initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.6 }}
          className="relative max-w-md text-center"
        >
          <Link to="/" className="inline-flex items-center gap-2 mb-8">
            <div className="size-10 rounded-xl bg-gradient-primary grid place-items-center text-white">
              <GraduationCap className="size-5" />
            </div>
            <span className="font-bold text-xl">Campusly</span>
          </Link>
          <h1 className="text-4xl font-bold leading-tight">
            Welcome back to your <span className="text-gradient">campus OS</span>
          </h1>
          <p className="mt-4 text-muted-foreground">One platform for students, faculty, and parents. Beautifully designed for modern education.</p>
          <div className="mt-10 glass-card rounded-2xl p-5 text-left">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-gradient-violet" />
              <div>
                <div className="text-sm font-semibold">Today's overview</div>
                <div className="text-xs text-muted-foreground">12,480 students · 94.6% attendance</div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              {[["98%","Health"],["12","Events"],["$1.2M","Collected"]].map(([v,l])=>(
                <div key={l} className="rounded-lg bg-gradient-soft p-2 border">
                  <div className="text-base font-bold text-gradient">{v}</div>
                  <div className="text-[10px] text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right form */}
      <div className="flex items-center justify-center p-6 md:p-12">
        <motion.div
          initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}
          className="w-full max-w-md glass-card rounded-3xl p-8 shadow-soft"
        >
          <div className="md:hidden flex items-center gap-2 mb-6">
            <div className="size-9 rounded-xl bg-gradient-primary grid place-items-center text-white">
              <GraduationCap className="size-5" />
            </div>
            <span className="font-bold text-lg">Campusly</span>
          </div>
          <h2 className="text-2xl font-bold">Sign in to your account</h2>
          <p className="text-sm text-muted-foreground mt-1">Enter your credentials to access the dashboard</p>

          <form
            className="mt-6 space-y-4"
            onSubmit={(e)=>{ e.preventDefault(); navigate({ to:"/dashboard" }); }}
          >
            <div>
              <label className="text-xs font-medium">Role</label>
              <select
                value={role} onChange={(e)=>setRole(e.target.value)}
                className="mt-1 w-full rounded-xl border bg-background/60 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {["Admin","Faculty","Student","Parent","Super Admin"].map(r=> <option key={r}>{r}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium">Email</label>
              <div className="mt-1 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input type="email" defaultValue="dean@campusly.edu"
                  className="w-full rounded-xl border bg-background/60 pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium">Password</label>
              <div className="mt-1 relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input type="password" defaultValue="campusly"
                  className="w-full rounded-xl border bg-background/60 pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="rounded" /> Remember me
              </label>
              <a href="#" className="text-indigo hover:underline">Forgot password?</a>
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary text-primary-foreground py-2.5 font-medium glow-primary">
              Sign in <ArrowRight className="size-4" />
            </button>
          </form>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground">or continue with</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="rounded-xl border bg-background/60 py-2.5 text-sm font-medium inline-flex items-center justify-center gap-2 hover:bg-accent">
              <Chrome className="size-4" /> Google
            </button>
            <button className="rounded-xl border bg-background/60 py-2.5 text-sm font-medium inline-flex items-center justify-center gap-2 hover:bg-accent">
              <Github className="size-4" /> GitHub
            </button>
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            New here? <Link to="/dashboard" className="text-indigo hover:underline">Take a tour</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
