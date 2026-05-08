import { LogIn } from "lucide-react";
import { signInAction } from "./actions";
import { FormMessage } from "@/components/ui/form-message";
import { TextInput } from "@/components/forms/text-input";

export default function LoginPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center">
      <div className="rounded-lg border border-line bg-white p-6 shadow-soft">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-ink">Sign in</h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">Access MCC audit records, checklist capture, and defect tracking.</p>
        </div>
        <form action={signInAction} className="space-y-4">
          <TextInput label="Email" name="email" type="email" autoComplete="email" required />
          <TextInput label="Password" name="password" type="password" autoComplete="current-password" required />
          <button className="touch-target flex w-full items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-sm font-semibold text-white">
            <LogIn size={18} aria-hidden="true" />
            Sign in
          </button>
          <FormMessage>Use Supabase Auth users mirrored to the platform users table.</FormMessage>
        </form>
      </div>
    </div>
  );
}

