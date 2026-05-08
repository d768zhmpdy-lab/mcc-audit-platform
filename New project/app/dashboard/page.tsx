import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";

const quickLinks = [
  { href: "/audits/new", title: "New Audit", description: "Create an MCC or panel inspection draft." },
  { href: "/defects", title: "Defect Tracker", description: "Review and update outstanding actions." },
  { href: "/audits/demo/report", title: "Report Preview", description: "Open the current report layout placeholder." }
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Workspace"
        title="Audit Dashboard"
        description="Start audits, continue field capture, and track corrective actions."
      />
      <div className="grid gap-3 sm:grid-cols-3">
        {quickLinks.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-lg bg-white p-4 shadow-soft">
            <span className="text-base font-semibold">{link.title}</span>
            <p className="mt-2 text-sm leading-6 text-slate-600">{link.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
