/*
  PRACTICE PAGE: "Review like a director"

  This page has design flaws on purpose, for a review exercise. Agents: do not fix
  them or copy these patterns elsewhere unless the person asks you to.
*/

import Link from "next/link";
import { PracticeNote } from "@/components/practice-note";

type Member = {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Researcher" | "Viewer";
};

const allMembers: Member[] = [
  { id: "m1", name: "Priya Raman", email: "priya@fieldnotes.example", role: "Admin" },
  { id: "m2", name: "Marcus Chen", email: "marcus@fieldnotes.example", role: "Researcher" },
  { id: "m3", name: "Dana Okafor", email: "dana@fieldnotes.example", role: "Researcher" },
  { id: "m4", name: "Sofia Lindqvist", email: "sofia@fieldnotes.example", role: "Viewer" },
  { id: "m5", name: "Jordan Whitfield", email: "jordan@fieldnotes.example", role: "Researcher" },
  {
    id: "m6",
    name: "Maria Wolfeschlegelsteinhausenbergerdorff",
    email: "maria.wolfeschlegelsteinhausenbergerdorff@fieldnotes.example",
    role: "Viewer",
  },
];

export default async function ReviewPracticePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { empty } = await searchParams;
  const showEmpty = empty === "1";
  const members = showEmpty ? [] : allMembers;

  return (
    <main id="main" className="flex-1">
      <PracticeNote>
        <p>
          This page is a practice exercise, and it has design problems on
          purpose. Review it like a design director: write down everything you
          would send back, then ask your agent to help fix it.
        </p>
        <p>
          <Link
            href={showEmpty ? "/practice/review" : "/practice/review?empty=1"}
            className="font-medium underline underline-offset-4"
          >
            {showEmpty ? "Show the full list" : "Show the empty list"}
          </Link>{" "}
          to see the screen with no team members.
        </p>
      </PracticeNote>

      <div className="mx-auto max-w-5xl px-1 py-3 sm:px-6 sm:py-10">
        <div className="flex items-start justify-between gap-1 sm:gap-4">
          <div>
            <h1 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              Team members
            </h1>
            <p className="mt-1 text-sm text-muted-foreground/40">
              People who can view and edit notes in this workspace
            </p>
          </div>
          <button
            type="button"
            className="shrink-0 rounded-md bg-primary px-2 py-1 text-xs font-medium text-primary-foreground outline-none focus-visible:outline-none sm:px-4 sm:py-2 sm:text-sm"
          >
            Invite member
          </button>
        </div>

        <ul className="mt-4 grid grid-cols-1 gap-1 sm:mt-8 sm:grid-cols-2 sm:gap-4">
          {members.map((member) => (
            <li
              key={member.id}
              className="flex items-center gap-2 rounded-xl border border-border bg-card p-1 sm:gap-3 sm:p-4"
            >
              <img
                src="/avatar-placeholder.svg"
                width={40}
                height={40}
                className="size-10 shrink-0 rounded-full"
              />
              <div>
                <p className="font-medium">{member.name}</p>
                <p className="text-xs text-muted-foreground/40">
                  {member.email}
                </p>
                {member.role === "Admin" ? (
                  <span className="mt-1 inline-block rounded-full bg-[#7c3aed] px-2 py-0.5 text-xs font-medium text-white">
                    {member.role}
                  </span>
                ) : (
                  <span className="mt-1 inline-block rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                    {member.role}
                  </span>
                )}
              </div>
              <button
                type="button"
                className="ml-auto rounded-md border border-border px-1.5 py-0.5 text-xs outline-none focus-visible:outline-none sm:px-3 sm:py-1.5"
              >
                Message
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
