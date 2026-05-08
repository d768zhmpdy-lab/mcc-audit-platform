import { NextResponse } from "next/server";
import { buildAuditReportHtml } from "@/lib/reports/audit-report";

type ReportRouteContext = {
  params: Promise<{
    auditId: string;
  }>;
};

export async function GET(_request: Request, context: ReportRouteContext) {
  const { auditId } = await context.params;
  return new NextResponse(buildAuditReportHtml({ auditNumber: auditId }), {
    headers: {
      "content-type": "text/html; charset=utf-8"
    }
  });
}
