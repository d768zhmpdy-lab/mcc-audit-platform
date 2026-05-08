type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header>
      {eyebrow ? <p className="text-xs font-bold uppercase text-brand">{eyebrow}</p> : null}
      <h1 className="mt-1 text-3xl font-bold text-ink">{title}</h1>
      {description ? <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{description}</p> : null}
    </header>
  );
}
