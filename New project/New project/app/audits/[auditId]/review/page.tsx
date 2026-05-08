import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { TextareaInput } from "@/components/forms/textarea-input";
import { UploadField } from "@/components/uploads/upload-field";

type ReviewPageProps = {
  params: Promise<{
    auditId: string;
  }>;
};

export default async function ReviewPage({ params }: ReviewPageProps) {
  const { auditId } = await params;

  return (
    <div className="space-y-6">
      <PageHeader title="Review and Sign-Off" description={`Final checks for audit ${auditId}.`} />
      <form className="space-y-4 rounded-lg bg-white p-4 shadow-soft">
        <TextareaInput label="Overall condition" name="overallCondition" required rows={4} />
        <TextareaInput label="General comments" name="generalComments" rows={4} />
        <UploadField label="Technician signature" name="technicianSignature" required />
        <UploadField label="Client signature" name="clientSignature" />
        <button className="touch-target w-full rounded-md bg-brand px-4 py-3 font-semibold text-white">
          Submit audit
        </button>
      </form>
      <Link href={`/audits/${auditId}/report`} className="block text-center font-semibold text-brand">
        Open report preview
      </Link>
    </div>
  );
}
