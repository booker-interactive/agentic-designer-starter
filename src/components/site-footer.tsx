import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div className="space-y-1">
          <p className="font-medium text-foreground">Made by [your name]</p>
          <p>Field Notes is a make-believe product used for learning.</p>
        </div>
        <nav aria-label="Practice exercises">
          <p className="font-medium text-foreground">Practice exercises</p>
          <ul className="mt-1 flex gap-4 sm:flex-col sm:gap-0">
            <li>
              <Link
                href="/practice/review"
                className="inline-block rounded-sm py-1 underline-offset-4 hover:text-foreground hover:underline"
              >
                Design review
              </Link>
            </li>
            <li>
              <Link
                href="/practice/data"
                className="inline-block rounded-sm py-1 underline-offset-4 hover:text-foreground hover:underline"
              >
                Data table
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
