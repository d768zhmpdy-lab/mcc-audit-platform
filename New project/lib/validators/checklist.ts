import { z } from "zod";
import { RESPONSE_OPTIONS } from "@/lib/constants/options";

export const checklistResponseSchema = z.object({
  checklistTemplateId: z.string().uuid(),
  response: z.enum(RESPONSE_OPTIONS),
  notes: z.string().optional()
});
