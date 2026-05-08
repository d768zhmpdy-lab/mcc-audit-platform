export function buildAuditNumber(date = new Date(), sequence = 1) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const paddedSequence = String(sequence).padStart(4, "0");

  return `MCC-${year}${month}-${paddedSequence}`;
}
