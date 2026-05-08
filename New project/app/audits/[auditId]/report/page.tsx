import { buildAuditReportHtml } from "@/lib/reports/audit-report";

type ReportPageProps = {
  params: Promise<{
    auditId: string;
  }>;
};

export default async function ReportPage({ params }: ReportPageProps) {
  const { auditId } = await params;
  const html = buildAuditReportHtml({ auditNumber: auditId });

  return (
    <div className="rounded-lg bg-white p-4 shadow-soft">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
