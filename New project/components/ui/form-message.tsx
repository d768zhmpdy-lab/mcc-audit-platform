import type { ReactNode } from "react";

type FormMessageProps = {
  children?: ReactNode;
  tone?: "error" | "success" | "neutral";
};

const toneClasses = {
  error: "border-danger/20 bg-danger/5 text-danger",
  success: "border-brand/20 bg-brand/5 text-brand",
  neutral: "border-slate-200 bg-slate-50 text-slate-700"
};

export function FormMessage({ children, tone = "neutral" }: FormMessageProps) {
  if (!children) {
    return null;
  }

  return <p className={`rounded-md border px-3 py-2 text-sm ${toneClasses[tone]}`}>{children}</p>;
}
