import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { PracticeNote } from "@/components/practice-note";
import { projects, type ProjectStatus } from "@/data/projects";

export const metadata: Metadata = { title: "Projects (practice)" };

const statusStyle: Record<ProjectStatus, "default" | "secondary" | "outline"> =
  {
    Planning: "outline",
    "In research": "default",
    Synthesis: "secondary",
    Shared: "secondary",
  };

const dateFormat = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeZone: "UTC",
});

export default function DataPracticePage() {
  return (
    <main id="main" className="flex-1">
      <PracticeNote>
        <p>
          This page is a practice exercise. The table reads its rows from{" "}
          <code className="rounded bg-background/60 px-1 font-mono text-[0.85em]">
            src/data/projects.ts
          </code>
          . In a later lesson you will ask your agent to add realistic mock data,
          very long text, and empty and error states.
        </p>
      </PracticeNote>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        <h1
          id="projects-heading"
          className="font-heading text-3xl font-semibold tracking-tight"
        >
          Projects
        </h1>
        <p className="mt-2 text-muted-foreground">
          Every research project your team has on the go.
        </p>

        {/* tabIndex lets keyboard users scroll the table sideways on small screens */}
        <div
          role="region"
          aria-labelledby="projects-heading"
          tabIndex={0}
          className="mt-6 overflow-x-auto rounded-xl border border-border bg-card"
        >
          <table className="w-full min-w-xl text-left text-sm">
            <caption className="sr-only">
              Research projects with owner, status, number of participants and
              last updated date
            </caption>
            <thead className="border-b border-border bg-muted text-muted-foreground">
              <tr>
                <th scope="col" className="px-4 py-3 font-medium">
                  Project
                </th>
                <th scope="col" className="px-4 py-3 font-medium">
                  Owner
                </th>
                <th scope="col" className="px-4 py-3 font-medium">
                  Status
                </th>
                <th scope="col" className="px-4 py-3 text-right font-medium">
                  Participants
                </th>
                <th scope="col" className="px-4 py-3 font-medium">
                  Last updated
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {projects.map((project) => (
                <tr key={project.id}>
                  <th scope="row" className="px-4 py-3 font-medium">
                    {project.name}
                  </th>
                  <td className="px-4 py-3">{project.owner}</td>
                  <td className="px-4 py-3">
                    <Badge variant={statusStyle[project.status]}>
                      {project.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums">
                    {project.participants}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    <time dateTime={project.updated}>
                      {dateFormat.format(new Date(project.updated))}
                    </time>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
