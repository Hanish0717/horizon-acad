import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHeader, Badge } from "@/components/dashboard/ui";
import { hostels } from "@/lib/mock-data";
import { Building2, Bed } from "lucide-react";

export const Route = createFileRoute("/dashboard/hostel")({ component: HostelPage });

function HostelPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Hostel" desc="Room allocation, occupancy and hostel fees." />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {["Aurora","Borealis","Cosmos"].map((b,i)=>(
          <Card key={b} className="gradient-border">
            <div className="flex items-center gap-3">
              <div className={`size-12 rounded-2xl ${["bg-gradient-primary","bg-gradient-violet","bg-gradient-cyan"][i]} text-white grid place-items-center`}>
                <Building2 className="size-5" />
              </div>
              <div>
                <div className="font-semibold">Block {b}</div>
                <div className="text-xs text-muted-foreground">{120 + i*20} rooms · {380 + i*40} students</div>
              </div>
            </div>
            <div className="mt-4 h-2 rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-gradient-primary" style={{ width: `${70 + i*8}%` }} />
            </div>
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              <span>{70 + i*8}% occupied</span>
              <span>${(1200 + i*200).toLocaleString()}/sem</span>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="p-5 border-b font-semibold">Room Allocation</div>
        <table className="w-full text-sm">
          <thead className="bg-muted/40 text-xs uppercase text-muted-foreground">
            <tr>{["Room","Block","Occupants","Capacity","Status"].map(h=><th key={h} className="px-5 py-3 text-left font-medium">{h}</th>)}</tr>
          </thead>
          <tbody>
            {hostels.map(r=>(
              <tr key={r.room} className="border-t">
                <td className="px-5 py-3 font-mono text-xs">{r.room}</td>
                <td className="px-5 py-3">{r.block}</td>
                <td className="px-5 py-3 flex items-center gap-1"><Bed className="size-3.5 text-muted-foreground" /> {r.occupants}</td>
                <td className="px-5 py-3">{r.capacity}</td>
                <td className="px-5 py-3"><Badge tone={r.status==="Available"?"success":"warn"}>{r.status}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
