export const RESPONSE_OPTIONS = [
  "Acceptable",
  "Needs Attention",
  "Critical",
  "Not Inspected",
  "Not Applicable"
] as const;

export const INSPECTION_TYPES = ["Live", "Dead"] as const;

export const INSPECTION_STATUSES = ["Draft", "In Progress", "Submitted"] as const;

export const RISK_LEVELS = ["Low", "Moderate", "High", "Critical"] as const;

export const RISK_CATEGORIES = ["Safety", "Reliability", "Compliance", "Maintenance"] as const;

export const ACTION_CATEGORIES = [
  "Immediate Safety Action",
  "Short-Term Remedial Work",
  "Medium-Term Retrofit",
  "Long-Term Replacement / Upgrade",
  "Monitor Only"
] as const;

export const DEFECT_STATUSES = ["Open", "In Progress", "Closed"] as const;
