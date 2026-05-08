import { z } from "zod";
import { INSPECTION_STATUSES, INSPECTION_TYPES } from "@/lib/constants/options";

export const auditHeaderSchema = z.object({
  clientName: z.string().min(1),
  siteName: z.string().min(1),
  plantArea: z.string().min(1),
  panelName: z.string().min(1),
  sectionReference: z.string().optional(),
  auditDate: z.string().min(1),
  technicianName: z.string().min(1),
  clientRepresentative: z.string().optional(),
  inspectionType: z.enum(INSPECTION_TYPES),
  inspectionStatus: z.enum(INSPECTION_STATUSES),
  environmentalNotes: z.string().optional()
});
