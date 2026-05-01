import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  description,
  children,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <section className={`py-20 lg:py-28 ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
          {eyebrow && (
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-3">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance leading-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{description}</p>
          )}
        </div>
        {children && <div className="mt-14">{children}</div>}
      </div>
    </section>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-soft border-b border-border">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        {eyebrow && (
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-3">
            {eyebrow}
          </div>
        )}
        <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-[1.05]">{title}</h1>
        {description && (
          <p className="mt-5 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
