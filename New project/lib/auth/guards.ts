import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/supabase/server-auth";

export async function requireUser() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return user;
}

export async function requireRole(_role: "technician" | "admin") {
  const user = await requireUser();
  return user;
}
