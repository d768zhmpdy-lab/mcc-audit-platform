import type { InputHTMLAttributes } from "react";

type UploadFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

export function UploadField({ label, name, className = "", ...props }: UploadFieldProps) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <input
        name={name}
        type="file"
        accept="image/*"
        className={`touch-target mt-2 w-full rounded-md border border-dashed border-slate-300 bg-white px-3 py-3 text-sm ${className}`}
        {...props}
      />
    </label>
  );
}
