import Link from "next/link";
import { T } from "./TranslatedText";

export function Footer() {
  return (
    <footer className="site-footer section-shell">
      <div className="flex flex-col gap-6 border-t border-ink/10 pt-8 text-sm text-muted-foreground dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Sekou Dayifourou Keita. <T>Built with care.</T></p>
        <div className="flex items-center gap-5 font-bold text-foreground">
          <Link href="https://github.com/Dayifour" target="_blank" rel="noopener noreferrer">GitHub</Link>
          <Link href="https://linkedin.com/in/dayifour" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
          <Link href="#top"><T>Back to top</T> ↑</Link>
        </div>
      </div>
    </footer>
  );
}
