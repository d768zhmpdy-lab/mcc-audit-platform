import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Admin"
        title="Administration"
        description="Manage audit oversight and defect follow-up."
      />
      <div className="rounded-lg bg-white p-4 shadow-soft">
        <Link href="/defects" className="font-semibold text-brand">
          Open defect tracker
        </Link>
      </div>
    </div>
  );
}
