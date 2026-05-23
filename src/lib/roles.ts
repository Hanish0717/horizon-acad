import {
  LayoutDashboard, Users, GraduationCap, CalendarCheck, BookOpen, Wallet,
  Library, Building2, Bus, Sparkles, Bell, Settings, Shield, Briefcase,
  Heart, ClipboardList, FileText, Activity,
} from "lucide-react";

export type RoleId =
  | "super_admin" | "admin" | "faculty" | "student"
  | "parent" | "librarian" | "placement" | "warden" | "transport";

export type NavItem = {
  to: string;
  label: string;
  icon: any;
  exact?: boolean;
};

export type Role = {
  id: RoleId;
  name: string;
  short: string;
  description: string;
  icon: any;
  gradient: string;     // tailwind gradient classes
  accent: string;       // dot color
  nav: NavItem[];
};

const base: NavItem = { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard, exact: true };
const settings: NavItem = { to: "/dashboard/settings", label: "Settings", icon: Settings };
const notif: NavItem = { to: "/dashboard/notifications", label: "Notifications", icon: Bell };

export const ROLES: Record<RoleId, Role> = {
  super_admin: {
    id: "super_admin", name: "Super Admin", short: "Full system control",
    description: "Manage admins, automations, global analytics & security.",
    icon: Shield, gradient: "from-slate-900 to-blue-600", accent: "bg-blue-500",
    nav: [
      base,
      { to: "/dashboard/students", label: "Students", icon: Users },
      { to: "/dashboard/faculty", label: "Faculty", icon: GraduationCap },
      { to: "/dashboard/attendance", label: "Attendance", icon: CalendarCheck },
      { to: "/dashboard/exams", label: "Exams", icon: BookOpen },
      { to: "/dashboard/fees", label: "Fees", icon: Wallet },
      { to: "/dashboard/library", label: "Library", icon: Library },
      { to: "/dashboard/hostel", label: "Hostel", icon: Building2 },
      { to: "/dashboard/transport", label: "Transport", icon: Bus },
      { to: "/dashboard/events", label: "Events", icon: Sparkles },
      notif, settings,
    ],
  },
  admin: {
    id: "admin", name: "Admin", short: "Operations & approvals",
    description: "Run students, faculty, timetables, fees and reports.",
    icon: Briefcase, gradient: "from-blue-600 to-cyan-500", accent: "bg-cyan-500",
    nav: [
      base,
      { to: "/dashboard/students", label: "Students", icon: Users },
      { to: "/dashboard/faculty", label: "Faculty", icon: GraduationCap },
      { to: "/dashboard/attendance", label: "Attendance", icon: CalendarCheck },
      { to: "/dashboard/exams", label: "Exams", icon: BookOpen },
      { to: "/dashboard/fees", label: "Fees", icon: Wallet },
      { to: "/dashboard/events", label: "Events", icon: Sparkles },
      notif, settings,
    ],
  },
  faculty: {
    id: "faculty", name: "Faculty", short: "Teaching workspace",
    description: "Mark attendance, post materials, track students.",
    icon: GraduationCap, gradient: "from-violet-600 to-blue-600", accent: "bg-violet-500",
    nav: [
      base,
      { to: "/dashboard/attendance", label: "Attendance", icon: CalendarCheck },
      { to: "/dashboard/exams", label: "Assignments", icon: ClipboardList },
      { to: "/dashboard/library", label: "Materials", icon: BookOpen },
      { to: "/dashboard/students", label: "Students", icon: Users },
      notif, settings,
    ],
  },
  student: {
    id: "student", name: "Student", short: "Your academic hub",
    description: "GPA, attendance, fees, assignments and placements.",
    icon: Users, gradient: "from-cyan-500 to-indigo-600", accent: "bg-indigo-500",
    nav: [
      base,
      { to: "/dashboard/attendance", label: "Attendance", icon: CalendarCheck },
      { to: "/dashboard/exams", label: "Results", icon: BookOpen },
      { to: "/dashboard/fees", label: "Fees", icon: Wallet },
      { to: "/dashboard/library", label: "Library", icon: Library },
      { to: "/dashboard/events", label: "Events", icon: Sparkles },
      notif, settings,
    ],
  },
  parent: {
    id: "parent", name: "Parent", short: "Track your child",
    description: "Performance, attendance and fee status at a glance.",
    icon: Heart, gradient: "from-emerald-500 to-cyan-500", accent: "bg-emerald-500",
    nav: [
      base,
      { to: "/dashboard/attendance", label: "Attendance", icon: CalendarCheck },
      { to: "/dashboard/exams", label: "Performance", icon: Activity },
      { to: "/dashboard/fees", label: "Fees", icon: Wallet },
      notif, settings,
    ],
  },
  librarian: {
    id: "librarian", name: "Librarian", short: "Library operations",
    description: "Books, fines, digital catalog and reports.",
    icon: Library, gradient: "from-amber-500 to-blue-600", accent: "bg-amber-500",
    nav: [
      base,
      { to: "/dashboard/library", label: "Library", icon: Library },
      { to: "/dashboard/students", label: "Members", icon: Users },
      notif, settings,
    ],
  },
  placement: {
    id: "placement", name: "Placement Officer", short: "Hiring & companies",
    description: "Companies, interviews, eligibility and resumes.",
    icon: FileText, gradient: "from-purple-600 to-cyan-500", accent: "bg-purple-500",
    nav: [
      base,
      { to: "/dashboard/students", label: "Candidates", icon: Users },
      { to: "/dashboard/events", label: "Drives", icon: Sparkles },
      notif, settings,
    ],
  },
  warden: {
    id: "warden", name: "Hostel Warden", short: "Hostel management",
    description: "Rooms, visitors, complaints and hostel fees.",
    icon: Building2, gradient: "from-teal-500 to-blue-600", accent: "bg-teal-500",
    nav: [
      base,
      { to: "/dashboard/hostel", label: "Hostel", icon: Building2 },
      { to: "/dashboard/students", label: "Residents", icon: Users },
      { to: "/dashboard/fees", label: "Fees", icon: Wallet },
      notif, settings,
    ],
  },
  transport: {
    id: "transport", name: "Transport Manager", short: "Routes & vehicles",
    description: "Buses, routes, drivers and live tracking.",
    icon: Bus, gradient: "from-orange-500 to-blue-600", accent: "bg-orange-500",
    nav: [
      base,
      { to: "/dashboard/transport", label: "Transport", icon: Bus },
      { to: "/dashboard/students", label: "Passengers", icon: Users },
      notif, settings,
    ],
  },
};

export const ROLE_LIST = Object.values(ROLES);

const KEY = "campusly.role";

export function setActiveRole(id: RoleId) {
  if (typeof window !== "undefined") localStorage.setItem(KEY, id);
}
export function getActiveRole(): Role {
  if (typeof window === "undefined") return ROLES.super_admin;
  const id = (localStorage.getItem(KEY) as RoleId) || "super_admin";
  return ROLES[id] ?? ROLES.super_admin;
}
