import Link from "next/link";
import { NotebookPen } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md font-heading text-lg font-semibold tracking-tight"
        >
          <NotebookPen aria-hidden className="size-5 text-primary" />
          Field Notes
        </Link>
        <nav aria-label="Main">
          <Link
            href="/#features"
            className="rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            Features
          </Link>
        </nav>
      </div>
    </header>
  );
}
