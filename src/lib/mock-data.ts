export const stats = [
  { label: "Total Students", value: "12,480", change: "+8.2%", trend: "up", color: "from-blue-500 to-indigo-500" },
  { label: "Faculty Members", value: "684", change: "+2.1%", trend: "up", color: "from-violet-500 to-purple-500" },
  { label: "Attendance Today", value: "94.6%", change: "+1.4%", trend: "up", color: "from-cyan-500 to-sky-500" },
  { label: "Fee Collected", value: "$1.24M", change: "+12.5%", trend: "up", color: "from-indigo-500 to-violet-500" },
];

export const attendanceData = [
  { day: "Mon", present: 92, absent: 8 },
  { day: "Tue", present: 95, absent: 5 },
  { day: "Wed", present: 88, absent: 12 },
  { day: "Thu", present: 96, absent: 4 },
  { day: "Fri", present: 91, absent: 9 },
  { day: "Sat", present: 85, absent: 15 },
];

export const performanceData = [
  { month: "Jan", score: 72 },
  { month: "Feb", score: 78 },
  { month: "Mar", score: 75 },
  { month: "Apr", score: 82 },
  { month: "May", score: 88 },
  { month: "Jun", score: 91 },
];

export const departmentData = [
  { name: "Engineering", value: 4200, color: "#4F46E5" },
  { name: "Business", value: 2800, color: "#9333EA" },
  { name: "Arts", value: 1900, color: "#06B6D4" },
  { name: "Science", value: 3580, color: "#2563EB" },
];

export const students = [
  { id: "STU001", name: "Aarav Sharma", dept: "Computer Science", year: 3, attendance: 96, cgpa: 9.2, status: "Active" },
  { id: "STU002", name: "Priya Patel", dept: "Electronics", year: 2, attendance: 92, cgpa: 8.7, status: "Active" },
  { id: "STU003", name: "Ethan Walker", dept: "Mechanical", year: 4, attendance: 88, cgpa: 8.1, status: "Active" },
  { id: "STU004", name: "Sofia Rodriguez", dept: "Business", year: 1, attendance: 98, cgpa: 9.5, status: "Active" },
  { id: "STU005", name: "Liam Chen", dept: "Computer Science", year: 3, attendance: 84, cgpa: 7.9, status: "Probation" },
  { id: "STU006", name: "Maya Singh", dept: "Design", year: 2, attendance: 95, cgpa: 9.0, status: "Active" },
  { id: "STU007", name: "Noah Kim", dept: "Physics", year: 4, attendance: 91, cgpa: 8.6, status: "Active" },
  { id: "STU008", name: "Zara Ahmed", dept: "Biotech", year: 1, attendance: 97, cgpa: 9.3, status: "Active" },
];

export const faculty = [
  { id: "FAC001", name: "Dr. Anjali Mehra", dept: "Computer Science", subject: "AI & ML", exp: 12, rating: 4.9 },
  { id: "FAC002", name: "Prof. Rajesh Kumar", dept: "Mathematics", subject: "Linear Algebra", exp: 18, rating: 4.7 },
  { id: "FAC003", name: "Dr. Sarah Lin", dept: "Physics", subject: "Quantum Mechanics", exp: 9, rating: 4.8 },
  { id: "FAC004", name: "Prof. Daniel Brooks", dept: "Business", subject: "Strategy", exp: 15, rating: 4.6 },
  { id: "FAC005", name: "Dr. Aisha Khan", dept: "Biotech", subject: "Genetics", exp: 7, rating: 4.9 },
  { id: "FAC006", name: "Prof. Marco Rossi", dept: "Design", subject: "UX Research", exp: 10, rating: 4.8 },
];

export const exams = [
  { code: "CS301", subject: "Data Structures", date: "2026-06-12", time: "10:00 AM", hall: "A-203", duration: "3h" },
  { code: "EC202", subject: "Digital Signal Processing", date: "2026-06-14", time: "02:00 PM", hall: "B-104", duration: "3h" },
  { code: "ME401", subject: "Thermodynamics", date: "2026-06-16", time: "10:00 AM", hall: "C-301", duration: "3h" },
  { code: "BA102", subject: "Marketing Principles", date: "2026-06-18", time: "10:00 AM", hall: "D-110", duration: "2h" },
];

export const fees = [
  { id: "INV-2026-001", student: "Aarav Sharma", amount: 4800, status: "Paid", date: "2026-04-12" },
  { id: "INV-2026-002", student: "Priya Patel", amount: 4200, status: "Pending", date: "2026-05-01" },
  { id: "INV-2026-003", student: "Ethan Walker", amount: 5100, status: "Paid", date: "2026-03-22" },
  { id: "INV-2026-004", student: "Sofia Rodriguez", amount: 3900, status: "Overdue", date: "2026-02-15" },
  { id: "INV-2026-005", student: "Liam Chen", amount: 4800, status: "Paid", date: "2026-04-30" },
];

export const books = [
  { id: "BK001", title: "Introduction to Algorithms", author: "Cormen et al.", category: "Computer Science", available: 4 },
  { id: "BK002", title: "Sapiens", author: "Yuval Noah Harari", category: "History", available: 2 },
  { id: "BK003", title: "Clean Code", author: "Robert C. Martin", category: "Programming", available: 6 },
  { id: "BK004", title: "Atomic Habits", author: "James Clear", category: "Self-Help", available: 0 },
  { id: "BK005", title: "Deep Work", author: "Cal Newport", category: "Productivity", available: 3 },
  { id: "BK006", title: "The Pragmatic Programmer", author: "Hunt & Thomas", category: "Programming", available: 5 },
];

export const buses = [
  { route: "Route 01", driver: "Ramesh Yadav", coverage: "North Campus → City Center", students: 42, status: "On Route" },
  { route: "Route 02", driver: "Suresh Pillai", coverage: "South Campus → Suburbs", students: 38, status: "Idle" },
  { route: "Route 03", driver: "Daniel Cooper", coverage: "East Campus → Downtown", students: 51, status: "On Route" },
  { route: "Route 04", driver: "Anita Verma", coverage: "West Campus → Tech Park", students: 35, status: "Maintenance" },
];

export const hostels = [
  { room: "A-101", block: "Aurora", occupants: 2, capacity: 2, status: "Full" },
  { room: "A-102", block: "Aurora", occupants: 1, capacity: 2, status: "Available" },
  { room: "B-205", block: "Borealis", occupants: 3, capacity: 3, status: "Full" },
  { room: "B-206", block: "Borealis", occupants: 0, capacity: 2, status: "Available" },
  { room: "C-310", block: "Cosmos", occupants: 2, capacity: 3, status: "Available" },
];

export const events = [
  { title: "TechFest 2026", date: "Jun 24", category: "Technology", attendees: 1200, color: "from-indigo-500 to-cyan-500" },
  { title: "Cultural Night", date: "Jul 02", category: "Cultural", attendees: 850, color: "from-violet-500 to-pink-500" },
  { title: "Hackathon 48h", date: "Jul 12", category: "Coding", attendees: 320, color: "from-blue-500 to-indigo-500" },
  { title: "Sports Meet", date: "Jul 20", category: "Sports", attendees: 1500, color: "from-cyan-500 to-emerald-500" },
];

export const notifications = [
  { title: "Mid-term exam schedule released", time: "2h ago", type: "Exam", unread: true },
  { title: "Library books due reminder", time: "5h ago", type: "Library", unread: true },
  { title: "Fee payment received — INV-2026-005", time: "1d ago", type: "Fees", unread: false },
  { title: "New event: TechFest 2026 registration open", time: "2d ago", type: "Events", unread: false },
  { title: "Faculty meeting scheduled Friday 3 PM", time: "3d ago", type: "Faculty", unread: false },
];

export const activities = [
  { user: "Aarav Sharma", action: "submitted assignment", target: "CS-301 DSA", time: "12m ago" },
  { user: "Dr. Anjali Mehra", action: "uploaded grades for", target: "AI & ML Mid-term", time: "1h ago" },
  { user: "Priya Patel", action: "paid fee invoice", target: "INV-2026-002", time: "3h ago" },
  { user: "Library", action: "received return of", target: "Clean Code", time: "5h ago" },
];
