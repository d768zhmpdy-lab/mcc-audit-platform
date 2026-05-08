import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { CHECKLIST_TEMPLATE } from "@/lib/constants/checklist";
import { RESPONSE_OPTIONS } from "@/lib/constants/options";

type ChecklistPageProps = {
  params: Promise<{
    auditId: string;
  }>;
};

export default async function ChecklistPage({ params }: ChecklistPageProps) {
  const { auditId } = await params;

  return (
    <div className="space-y-6">
      <PageHeader title="Checklist" description={`Audit ${auditId}`} />
      <form className="space-y-4">
        {CHECKLIST_TEMPLATE.map((item) => (
          <fieldset key={item.itemNumber} className="rounded-lg bg-white p-4 shadow-soft">
            <legend className="text-sm font-semibold text-slate-500">{item.category}</legend>
            <p className="mt-1 text-base font-semibold">{item.itemNumber}. {item.question}</p>
            <div className="mt-4 grid gap-2">
              {RESPONSE_OPTIONS.map((option) => (
                <label key={option} className="flex touch-target items-center gap-3 rounded-md border border-slate-200 px-3">
                  <input type="radio" name={`response-${item.itemNumber}`} value={option} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}
        <Link
          href={`/audits/${auditId}/defects`}
          className="block touch-target rounded-md bg-brand px-4 py-3 text-center font-semibold text-white"
        >
          Continue to defects
        </Link>
      </form>
    </div>
  );
}
