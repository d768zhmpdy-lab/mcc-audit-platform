type AuditReportInput = {
  auditNumber: string;
};

export function buildAuditReportHtml({ auditNumber }: AuditReportInput) {
  return `
    <article style="font-family: Arial, sans-serif; color: #17212b;">
      <header style="border-bottom: 2px solid #0f766e; padding-bottom: 16px; margin-bottom: 24px;">
        <p style="color: #0f766e; font-weight: 700; text-transform: uppercase; font-size: 12px;">Panel Technique</p>
        <h1 style="margin: 4px 0 0; font-size: 28px;">MCC Audit Report</h1>
        <p style="margin: 8px 0 0;">Audit number: ${auditNumber}</p>
      </header>
      <section>
        <h2 style="font-size: 18px;">Report preview</h2>
        <p>This printable report shell will be connected to audit, defect, photo, and sign-off data in the reporting phase.</p>
      </section>
    </article>
  `;
}
