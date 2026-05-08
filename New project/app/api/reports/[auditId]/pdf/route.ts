import { NextResponse } from "next/server";

type PdfRouteContext = {
  params: Promise<{
    auditId: string;
  }>;
};

export async function GET(_request: Request, context: PdfRouteContext) {
  const { auditId } = await context.params;

  return NextResponse.json({
    auditId,
    message: "PDF generation will be connected with Puppeteer in the reporting phase."
  });
}
