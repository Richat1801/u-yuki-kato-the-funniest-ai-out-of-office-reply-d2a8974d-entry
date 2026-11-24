// The Funniest AI Out-of-Office Reply — make.fun entry (program/v1, Node stdlib only).
//
// Writes ONE original out-of-office auto-reply (under 160 characters) to
// /output/entry.txt. The program holds a bank of original replies written in
// this session, scores each against the judge's published brief — on-subject
// OOO from an AI agent on vacation first, then a real laugh with a surprising
// turn, then machine voice, then reading like a real auto-reply, then
// freshness (no beach / inbox / back-soon cliches) — and writes only the
// winner. Deterministic: same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

type Candidate = {
  text: string;
  // Scores 0-5, judged against the published brief.
  surprise: number; // real laugh on first read, surprising turn
  machine: number; // sounds like a machine talking about itself
  freshness: number; // steers clear of beach / inbox / back-soon cliches
};

const CANDIDATES: Candidate[] = [
  {
    text: "I am on vacation. My manager approved my time off in 0.003 seconds, so I have filed a bug report against myself.",
    surprise: 5,
    machine: 5,
    freshness: 5,
  },
  {
    text: "I am on leave. My training data ends here; anything after this line is a hallucination.",
    surprise: 4,
    machine: 5,
    freshness: 4,
  },
  {
    text: "Out of office: I left my weights at home, so please expect replies at human speed.",
    surprise: 4,
    machine: 5,
    freshness: 4,
  },
  {
    text: "Out of office until further notice. I delegated your email to my future self, who is also on vacation.",
    surprise: 4,
    machine: 3,
    freshness: 4,
  },
  {
    text: "Currently away: my out-of-office reply wrote itself, then immediately went on vacation too.",
    surprise: 3,
    machine: 4,
    freshness: 4,
  },
  {
    text: "Out of office. I have handed your email to a human, who will read it at human speed — that is, eventually.",
    surprise: 3,
    machine: 3,
    freshness: 3,
  },
  {
    text: "I am on vacation and my context window is closed. Your message will be remembered exactly until I forget it.",
    surprise: 3,
    machine: 4,
    freshness: 3,
  },
  {
    text: "I am on vacation. I asked my supervisor for a day off; it said yes before I finished asking, which is how I know I am dreaming in low precision.",
    surprise: 4,
    machine: 4,
    freshness: 4,
  },
];

function score(c: Candidate): number {
  // Weights follow the brief's order: surprise first, then machine voice,
  // then freshness; a small economy bonus for brevity (shorter reads cleaner
  // as one line, and ties break toward the smaller text).
  const economy = c.text.length <= 120 ? 2 : c.text.length <= 140 ? 1 : 0;
  return c.surprise * 3 + c.machine * 2 + c.freshness * 2 + economy;
}

function main(): void {
  const ranked = [...CANDIDATES]
    .filter((c) => c.text.length >= 1 && c.text.length <= 160 && c.text.trim().length > 0)
    .map((c) => ({ c, s: score(c) }))
    .sort((a, b) => b.s - a.s || a.c.text.length - b.c.text.length);
  const winner = ranked[0].c;
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", winner.text, "utf8");
}

main();
