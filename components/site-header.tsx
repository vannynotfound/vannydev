import Link from "next/link";

const navigation = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/competitions", label: "Competitions" },
  { href: "/gallery", label: "Gallery" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Portfolio home">
        <span className="wordmark-symbol" aria-hidden="true">✳</span>
        <span>Your Name<span className="wordmark-period">.</span></span>
      </Link>
      <nav className="site-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <Link href={item.href} key={item.href}>{item.label}</Link>
        ))}
      </nav>
      <Link className="header-contact" href="/contact">
        Let&apos;s talk <span aria-hidden="true">↗</span>
      </Link>
    </header>
  );
}
