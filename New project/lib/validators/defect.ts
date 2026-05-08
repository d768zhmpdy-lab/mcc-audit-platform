import { z } from "zod";
import { ACTION_CATEGORIES, RISK_CATEGORIES, RISK_LEVELS } from "@/lib/constants/options";

export const defectSchema = z.object({
  checklistTemplateId: z.string().uuid(),
  title: z.string().min(1),
  description: z.string().min(1),
  riskLevel: z.enum(RISK_LEVELS),
  riskCategory: z.enum(RISK_CATEGORIES),
  actionCategory: z.enum(ACTION_CATEGORIES),
  recommendedAction: z.string().min(1),
  technicianComment: z.string().optional(),
  immediateActionRequired: z.boolean().default(false),
  quoteRequired: z.boolean().default(false)
});
