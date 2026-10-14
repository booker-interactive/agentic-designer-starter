// Sample data for the /practice/data page.
// To add a row, copy one of the objects below and change the values.

export type ProjectStatus = "Planning" | "In research" | "Synthesis" | "Shared";

export type Project = {
  id: string;
  name: string;
  owner: string;
  status: ProjectStatus;
  participants: number;
  updated: string; // YYYY-MM-DD
};

export const projects: Project[] = [
  {
    id: "p-101",
    name: "Onboarding diary study",
    owner: "Priya Raman",
    status: "In research",
    participants: 12,
    updated: "2026-10-06",
  },
  {
    id: "p-102",
    name: "Checkout usability test",
    owner: "Marcus Chen",
    status: "Synthesis",
    participants: 8,
    updated: "2026-10-02",
  },
  {
    id: "p-103",
    name: "Pricing page card sort",
    owner: "Dana Okafor",
    status: "Shared",
    participants: 24,
    updated: "2026-09-24",
  },
  {
    id: "p-104",
    name: "Mobile navigation tree test",
    owner: "Sofia Lindqvist",
    status: "Planning",
    participants: 0,
    updated: "2026-10-09",
  },
  {
    id: "p-105",
    name: "Support call analysis",
    owner: "Marcus Chen",
    status: "In research",
    participants: 15,
    updated: "2026-09-30",
  },
  {
    id: "p-106",
    name: "Accessibility interviews",
    owner: "Jordan Whitfield",
    status: "Synthesis",
    participants: 6,
    updated: "2026-10-08",
  },
];
