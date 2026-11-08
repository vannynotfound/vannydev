import type { ReactNode } from "react";

type PageHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
};

export function PageHeading({ eyebrow, title, description }: PageHeadingProps) {
  return (
    <header className="page-heading">
      <p className="eyebrow"><span /> {eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-heading-description">{description}</p>
    </header>
  );
}
