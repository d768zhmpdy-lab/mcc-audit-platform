import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { TextInput } from "@/components/forms/text-input";
import { SelectInput } from "@/components/forms/select-input";
import { TextareaInput } from "@/components/forms/textarea-input";
import { UploadField } from "@/components/uploads/upload-field";
import { ACTION_CATEGORIES, RISK_CATEGORIES, RISK_LEVELS } from "@/lib/constants/options";

type DefectsPageProps = {
  params: Promise<{
    auditId: string;
  }>;
};

export default async function DefectsPage({ params }: DefectsPageProps) {
  const { auditId } = await params;

  return (
    <div className="space-y-6">
      <PageHeader title="Defects" description={`Capture required findings for audit ${auditId}.`} />
      <form className="space-y-4 rounded-lg bg-white p-4 shadow-soft">
        <TextInput label="Checklist item" name="checklistItem" required />
        <TextInput label="Defect title" name="title" required />
        <TextareaInput label="Description" name="description" required rows={4} />
        <SelectInput label="Risk level" name="riskLevel" options={RISK_LEVELS} required />
        <SelectInput label="Risk category" name="riskCategory" options={RISK_CATEGORIES} required />
        <SelectInput label="Action category" name="actionCategory" options={ACTION_CATEGORIES} required />
        <TextareaInput label="Recommended action" name="recommendedAction" required rows={4} />
        <UploadField label="Photo 1" name="photo1" required />
        <UploadField label="Photo 2" name="photo2" />
        <TextareaInput label="Technician comment" name="technicianComment" rows={3} />
        <label className="flex touch-target items-center gap-3">
          <input type="checkbox" name="immediateActionRequired" />
          <span>Immediate action required</span>
        </label>
        <label className="flex touch-target items-center gap-3">
          <input type="checkbox" name="quoteRequired" />
          <span>Quote required</span>
        </label>
        <button className="touch-target w-full rounded-md bg-brand px-4 py-3 font-semibold text-white">
          Save defect
        </button>
      </form>
      <Link href={`/audits/${auditId}/review`} className="block text-center font-semibold text-brand">
        Continue to review
      </Link>
    </div>
  );
}
