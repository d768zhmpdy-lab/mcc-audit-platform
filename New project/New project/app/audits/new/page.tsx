import { PageHeader } from "@/components/ui/page-header";
import { TextInput } from "@/components/forms/text-input";
import { SelectInput } from "@/components/forms/select-input";
import { TextareaInput } from "@/components/forms/textarea-input";
import { INSPECTION_STATUSES, INSPECTION_TYPES } from "@/lib/constants/options";

export default function NewAuditPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Draft Audit"
        title="New MCC Audit"
        description="Capture the header details before starting the checklist."
      />
      <form className="space-y-4 rounded-lg bg-white p-4 shadow-soft">
        <TextInput label="Client name" name="clientName" required />
        <TextInput label="Site name" name="siteName" required />
        <TextInput label="Plant area" name="plantArea" required />
        <TextInput label="MCC / panel name" name="panelName" required />
        <TextInput label="Section reference" name="sectionReference" />
        <TextInput label="Audit date" name="auditDate" type="date" required />
        <TextInput label="Technician name" name="technicianName" required />
        <TextInput label="Client representative" name="clientRepresentative" />
        <SelectInput label="Inspection type" name="inspectionType" options={INSPECTION_TYPES} required />
        <SelectInput
          label="Inspection status"
          name="inspectionStatus"
          options={INSPECTION_STATUSES}
          required
        />
        <TextareaInput label="Environmental notes" name="environmentalNotes" rows={4} />
        <button className="touch-target w-full rounded-md bg-brand px-4 py-3 font-semibold text-white">
          Save draft
        </button>
      </form>
    </div>
  );
}
