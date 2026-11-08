import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="footer-wordmark" href="/">Your Name<span>.</span></Link>
      <p>Designed and built with curiosity.</p>
      <div className="footer-navigation">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <span className="footer-credit">© Your Name</span>
    </footer>
  );
}
