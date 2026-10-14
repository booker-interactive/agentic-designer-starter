import { FlaskConical } from "lucide-react";

// The note at the top of every practice page. It is not part of the exercise
// itself, so it is deliberately well made.
export function PracticeNote({ children }: { children: React.ReactNode }) {
  return (
    <aside
      aria-label="About this practice page"
      className="border-b border-border bg-accent text-accent-foreground"
    >
      <div className="mx-auto flex max-w-5xl gap-3 px-4 py-3 text-sm sm:px-6">
        <FlaskConical aria-hidden className="mt-0.5 size-4 shrink-0" />
        <div className="space-y-1">
          <p className="font-semibold">Practice exercise</p>
          {children}
        </div>
      </div>
    </aside>
  );
}
