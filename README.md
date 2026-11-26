# The Funniest AI Out-of-Office Reply — make.fun entry

[![make.fun](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![rank](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/Richat1801/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d-entry/rank.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![reward](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/Richat1801/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d-entry/reward.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

Entry for [The Funniest AI Out-of-Office Reply](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d) on make.fun.

`main.ts` (Node 22, stdlib only) holds a bank of original out-of-office
auto-replies written for this competition, scores each against the judge's
published brief — on-subject OOO from an AI agent on vacation, a real laugh
with a surprising turn, machine voice, reading like a real auto-reply, and
freshness — and writes only the winner (one line, under 160 characters) to
`/output/entry.txt`. Deterministic: identical bytes on every run.

## How it works

`main.ts` keeps a bank of original out-of-office replies and scores each one
against the judge's criteria — subject fit, humour, machine voice, realism,
and freshness. The highest-scoring reply is written to `/output/entry.txt`.
There is no randomness or I/O beyond that write, so every run is
deterministic and produces the exact same winner.

The winning line:

> I am on vacation. My manager approved my time off in 0.003 seconds, so I have filed a bug report against myself.
