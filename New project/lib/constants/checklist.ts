export type ChecklistItem = {
  itemNumber: number;
  category: string;
  question: string;
};

export const CHECKLIST_TEMPLATE: ChecklistItem[] = [
  { itemNumber: 1, category: "Panel Condition", question: "Doors are present and in good condition" },
  { itemNumber: 2, category: "Panel Condition", question: "Hinges are functional and secure" },
  { itemNumber: 3, category: "Panel Condition", question: "Catches / locks are operating correctly" },
  { itemNumber: 4, category: "Panel Condition", question: "Gaskets / sealing are intact and effective" },
  {
    itemNumber: 5,
    category: "Panel Condition",
    question: "No significant corrosion, damage, or physical deterioration is visible"
  },
  { itemNumber: 6, category: "Safety", question: "No exposed live parts are visible during inspection" },
  { itemNumber: 7, category: "Safety", question: "Shrouds / barriers / covers are in place where required" },
  {
    itemNumber: 8,
    category: "Safety",
    question: "No visible signs of overheating, arcing, or flash damage are present"
  },
  { itemNumber: 9, category: "Safety", question: "Safety labels and warning notices are present and legible" },
  { itemNumber: 10, category: "Safety", question: "Safe access exists for normal operation and inspection" },
  {
    itemNumber: 11,
    category: "Electrical Condition",
    question: "Switchgear appears to be in acceptable condition"
  },
  {
    itemNumber: 12,
    category: "Electrical Condition",
    question: "Wiring appears neat, secure, and adequately supported"
  },
  {
    itemNumber: 13,
    category: "Electrical Condition",
    question: "Terminations show no visible signs of distress or overheating"
  },
  { itemNumber: 14, category: "Electrical Condition", question: "No visible carbon tracking is present" },
  {
    itemNumber: 15,
    category: "Electrical Condition",
    question: "Cable entries and gland plate condition are acceptable"
  },
  {
    itemNumber: 16,
    category: "Mechanical and Structural Condition",
    question: "Steelwork and structure are in acceptable condition"
  },
  {
    itemNumber: 17,
    category: "Mechanical and Structural Condition",
    question: "Components and equipment are securely mounted"
  },
  {
    itemNumber: 18,
    category: "Mechanical and Structural Condition",
    question: "Doors and internal hardware align and close correctly"
  },
  {
    itemNumber: 19,
    category: "Mechanical and Structural Condition",
    question: "General housekeeping around the panel is acceptable"
  },
  {
    itemNumber: 20,
    category: "Mechanical and Structural Condition",
    question: "No obvious dust, water, or contamination ingress risk is visible"
  }
];
