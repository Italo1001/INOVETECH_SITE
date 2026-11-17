type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p data-reveal className={`eyebrow ${dark ? "text-brand-orange" : "text-brand-orange-dark"}`}>
        {eyebrow}
      </p>
      <h2
        id={id}
        data-reveal
        style={{ "--delay": "80ms" } as React.CSSProperties}
        className={`text-h2 mt-5 ${dark ? "text-white" : "text-brand-deep"}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          data-reveal
          style={{ "--delay": "160ms" } as React.CSSProperties}
          className={`text-lead mt-5 ${dark ? "text-mist" : "text-muted"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
