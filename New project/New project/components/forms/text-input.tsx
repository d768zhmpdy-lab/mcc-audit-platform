import type { InputHTMLAttributes } from "react";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

export function TextInput({ label, name, className = "", ...props }: TextInputProps) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <input
        name={name}
        className={`touch-target mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 ${className}`}
        {...props}
      />
    </label>
  );
}
