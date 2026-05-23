import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHeader, Badge } from "@/components/dashboard/ui";
import { faculty } from "@/lib/mock-data";
import { Plus, Star, Mail } from "lucide-react";

export const Route = createFileRoute("/dashboard/faculty")({ component: FacultyPage });

function FacultyPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Faculty" desc="Manage faculty members, subject allocation and leave requests."
        actions={<button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-primary text-white text-sm glow-primary"><Plus className="size-4" /> Invite Faculty</button>}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {faculty.map(f => (
          <Card key={f.id} className="gradient-border">
            <div className="flex items-start gap-4">
              <div className="size-14 rounded-2xl bg-gradient-violet text-white grid place-items-center font-bold">
                {f.name.split(" ").map(x=>x[0]).slice(0,2).join("")}
              </div>
              <div className="flex-1">
                <div className="font-semibold">{f.name}</div>
                <div className="text-xs text-muted-foreground">{f.dept}</div>
                <div className="text-xs mt-1"><Badge tone="info">{f.subject}</Badge></div>
              </div>
              <div className="flex items-center gap-1 text-amber-500 text-sm font-medium">
                <Star className="size-3.5 fill-current" /> {f.rating}
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="rounded-lg bg-muted/60 p-2"><div className="font-bold">{f.exp}y</div><div className="text-muted-foreground">Exp</div></div>
              <div className="rounded-lg bg-muted/60 p-2"><div className="font-bold">12</div><div className="text-muted-foreground">Classes</div></div>
              <div className="rounded-lg bg-muted/60 p-2"><div className="font-bold">3</div><div className="text-muted-foreground">Subjects</div></div>
            </div>
            <button className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl border py-2 text-xs hover:bg-accent">
              <Mail className="size-3.5" /> Contact
            </button>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <Card>
          <h3 className="font-semibold mb-4">Today's Timetable</h3>
          <div className="space-y-2">
            {["09:00 — AI & ML (Dr. Mehra)","10:30 — Quantum Physics (Dr. Lin)","12:00 — Strategy (Prof. Brooks)","14:00 — Linear Algebra (Prof. Kumar)"].map(t=>(
              <div key={t} className="flex items-center gap-3 p-3 rounded-xl bg-gradient-soft border text-sm">
                <div className="size-2 rounded-full bg-gradient-primary" /> {t}
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h3 className="font-semibold mb-4">Pending Leave Requests</h3>
          <div className="space-y-2">
            {[{n:"Dr. Anjali Mehra",d:"Jun 12 – Jun 14",s:"warn"},{n:"Prof. Brooks",d:"Jun 20",s:"warn"},{n:"Dr. Khan",d:"Jul 1 – Jul 3",s:"success"}].map(l=>(
              <div key={l.n} className="flex items-center gap-3 p-3 rounded-xl border">
                <div className="size-9 rounded-full bg-gradient-cyan" />
                <div className="flex-1">
                  <div className="text-sm font-medium">{l.n}</div>
                  <div className="text-xs text-muted-foreground">{l.d}</div>
                </div>
                <Badge tone={l.s as any}>{l.s==="success"?"Approved":"Pending"}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
