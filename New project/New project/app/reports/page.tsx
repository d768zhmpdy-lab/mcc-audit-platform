import { PageHeader } from "@/components/ui/page-header";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Reports"
        title="Report Centre"
        description="Preview and export client-ready MCC audit reports."
      />
      <div className="rounded-lg bg-white p-4 shadow-soft">
        <p className="text-sm leading-6 text-slate-600">
          Report search and export history will be added after audit data is connected.
        </p>
      </div>
    </div>
  );
}
