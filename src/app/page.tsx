import Link from "next/link";
import { ArrowRight, NotebookPen, Share2, Tags } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: NotebookPen,
    title: "Capture in the moment",
    description:
      "Jot down quotes, observations and questions while a session is happening. Nothing gets lost between the call and the write-up.",
  },
  {
    icon: Tags,
    title: "Tag themes as you go",
    description:
      "Group what you hear into themes with a single tap, so patterns start showing up before synthesis even begins.",
  },
  {
    icon: Share2,
    title: "Share what you learned",
    description:
      "Turn raw notes into a clear summary your team will actually read, with the evidence a click away.",
  },
];

export default function Home() {
  return (
    <main id="main" className="flex-1">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        {/* Faint dot grid, like the pages of a field notebook */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        />
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <p className="inline-block rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
            Built for UX researchers
          </p>
          <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            Notes that keep up with your research
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-pretty text-muted-foreground">
            Capture what people say and do as it happens, spot the patterns
            later, and share what you learned.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#features"
              className={buttonVariants({
                size: "lg",
                className: "h-11 px-6 text-base",
              })}
            >
              See how it works
              <ArrowRight aria-hidden />
            </Link>
            <Link
              href="/practice/data"
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className: "h-11 px-6 text-base",
              })}
            >
              Browse sample projects
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        aria-labelledby="features-heading"
        className="mx-auto max-w-5xl scroll-mt-4 px-4 pb-16 sm:px-6 sm:pb-24"
      >
        <h2
          id="features-heading"
          className="text-center font-heading text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Everything a research session needs
        </h2>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <li key={title} className="flex">
              <Card className="w-full [--card-spacing:--spacing(6)]">
                <CardHeader>
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <Icon aria-hidden className="size-5" />
                  </div>
                  <CardTitle className="font-heading text-xl font-semibold">
                    <h3>{title}</h3>
                  </CardTitle>
                  <CardDescription className="text-base">
                    {description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
