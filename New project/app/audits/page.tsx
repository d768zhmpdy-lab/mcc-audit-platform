import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";

export default function AuditsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Audits"
        title="Audit Records"
        description="Create new audits and return to drafts or submitted reports."
      />
      <div className="rounded-lg bg-white p-4 shadow-soft">
        <p className="text-sm leading-6 text-slate-600">
          Audit list data will be connected once the Supabase schema is in place.
        </p>
        <Link
          href="/audits/new"
          className="mt-4 inline-flex touch-target items-center rounded-md bg-brand px-4 py-3 font-semibold text-white"
        >
          New audit
        </Link>
      </div>
    </div>
  );
}
