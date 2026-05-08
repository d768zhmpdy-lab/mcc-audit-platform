import { z } from "zod";

export const reviewSchema = z.object({
  overallCondition: z.string().min(1),
  generalComments: z.string().optional(),
  technicianSignatureUrl: z.string().url(),
  clientName: z.string().optional(),
  clientSignatureUrl: z.string().url().optional()
});
