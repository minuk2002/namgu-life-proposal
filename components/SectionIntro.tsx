interface Props {
  eyebrow?: string;
  title: string;
  description: string;
}

export function SectionIntro({ eyebrow, title, description }: Props) {
  return (
    <div className="mb-6 space-y-2">
      {eyebrow ? <p className="text-sm font-semibold text-primary-700">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      <p className="max-w-3xl text-slate-600">{description}</p>
    </div>
  );
}
