import type { TextareaHTMLAttributes } from "react";

type TextareaInputProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  name: string;
};

export function TextareaInput({ label, name, className = "", ...props }: TextareaInputProps) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <textarea
        name={name}
        className={`mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 ${className}`}
        {...props}
      />
    </label>
  );
}
