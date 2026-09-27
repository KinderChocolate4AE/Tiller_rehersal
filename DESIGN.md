# Tiller — UI/UX prototype

## Direction
White canvas, forest green ink, one luminous botanical image, restrained lime accents. Typographic hierarchy and breathing room carry the interface. The plant is a metaphor for an unfinished story, not a score or streak.

## Navigation
Five persistent tabs: 오늘 / 채팅 / 나 / 발견 / 연결. Desktop sidebar becomes a mobile bottom bar with the same navigation state. One primary action per surface.

## Prototype scope
- Seed form, per-seed conversations, example replies, editable journal draft and in-session records.
- Category and discovery filters, evidence details, past/present comparison and explicit confirmation.
- All provided content is fictitious. AI, Calendar, authentication and durable server storage are not connected.
- Prototype state lasts only until refresh. This is stated in the UI.
- Provider plan is Gemini free tier with synthetic data; server integration follows later.

## Components and accessibility
Existing shadcn Tabs, Sidebar, Dialog, Input, Textarea, RadioGroup and Sonner primitives. Visible focus states, Korean labels, IME-aware messaging, reduced motion and safe-area spacing. Single light theme.

## Implementation
React + TypeScript on the Sites Vinext/Next-compatible starter. Existing planned product architecture remains Next.js + Supabase + Gemini. This frontend can be carried into it; no provider credentials belong in the browser.
