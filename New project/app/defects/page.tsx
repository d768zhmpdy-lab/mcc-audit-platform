import { PageHeader } from "@/components/ui/page-header";
import { OutstandingDefectStatus } from "@/components/defects/outstanding-defect-status";

export default function DefectTrackerPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Admin"
        title="Defect Tracker"
        description="Filter outstanding defects and update action status."
      />
      <div className="rounded-lg bg-white p-4 shadow-soft">
        <OutstandingDefectStatus status="Open" />
        <p className="mt-4 text-sm leading-6 text-slate-600">
          Admin filters and status updates will be connected in the tracking phase.
        </p>
      </div>
    </div>
  );
}
