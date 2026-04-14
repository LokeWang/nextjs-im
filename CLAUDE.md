# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Next.js-based instant messaging (chat) application (聊天系统) using the App Router, React 19, Ant Design 6, and Tailwind CSS 4.

## Commands

```bash
pnpm dev        # Start dev server at http://localhost:3000
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

No test suite is configured.

## Architecture

- **Framework**: Next.js 16 with App Router (`src/app/`), React Compiler enabled (`reactCompiler: true` in `next.config.ts`)
- **Styling**: Tailwind CSS v4 (imported via `@import "tailwindcss"` in `globals.css`) + SCSS modules per page/component + CSS custom properties for dark/light theme (`data-theme` attribute)
- **State management**: Zustand 5 — stores live in `src/store/`, exported from `src/store/index.ts`; use only in client components
- **UI components**: Ant Design 6 — wrapped with `<AntdRegistry>` from `@ant-design/nextjs-registry` in the root layout to support SSR
- **Path alias**: `@/*` maps to `src/*`
- **Fonts**: Geist Sans, Geist Mono (Google), and YouSheBiao (local, `public/fonts/YouSheBiao.ttf`) — all exposed as CSS variables
- **Base font size**: `html { font-size: 62.5% }` so `1rem = 10px`

### Key conventions

- Client components that use Ant Design interactively must have `"use client"` at the top
- Antd's `reset.css` is imported globally in `layout.tsx` (`import "antd/dist/reset.css"`)
- Shared components go in `src/components/`, shared utilities in `src/lib/` — both currently have stub `index.ts` files ready to be filled out
