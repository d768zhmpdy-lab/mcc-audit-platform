import { login } from "./actions";
import { FormMessage } from "@/components/ui/form-message";
import { PageHeader } from "@/components/ui/page-header";
import { TextInput } from "@/components/forms/text-input";

type LoginPageProps = {
  searchParams: Promise<{
    error?: string;
  }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;

  return (
    <div className="flex flex-1 items-center justify-center py-8">
      <section className="w-full max-w-md rounded-lg bg-white p-5 shadow-soft">
        <PageHeader
          eyebrow="Panel Technique"
          title="MCC Audit Login"
          description="Sign in to continue with audit capture and defect tracking."
        />
        <form action={login} className="mt-6 space-y-4">
          <TextInput label="Email" name="email" type="email" required autoComplete="email" />
          <TextInput
            label="Password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
          />
          <FormMessage tone="error">{params.error}</FormMessage>
          <button className="touch-target w-full rounded-md bg-brand px-4 py-3 font-semibold text-white">
            Sign in
          </button>
        </form>
      </section>
    </div>
  );
}
