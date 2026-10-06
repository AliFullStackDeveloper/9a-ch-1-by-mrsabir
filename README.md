# Programming Basics · Chapter 1

Interactive React/TypeScript presentation based on the supplied 36-page ch_1_A.pdf.

## Run

```sh
npm install
npm run dev
npm run build
```

23 slides: cover, roadmap, four slides for each of five main topics, and chapter review. Topics: binary numbers; variables and assignments; mathematical expressions; strings; Boolean expressions.

## Controls

- Previous/Next buttons or left/right arrow keys navigate slides.
- The top menu jumps directly to a slide.
- Reveal answer/Hide answer controls practice solutions. Practice arrows switch questions within a slide.
- Interactive demonstrations include binary division, pixel encoding, variable memory, arithmetic precedence, string indexing and Boolean logic.
- Day/Night toggles the theme. System reduced-motion preferences are supported.
- Smaller screens scroll within the slide; the navigation remains fixed.

## Edit

Cover: `src/slides/Slide01Title.tsx`. Lesson files: `src/slides/Slide02.tsx` through `Slide23.tsx`. Slide order: `src/slides/index.ts`.

Shared layouts and interactive controls: `src/components/lesson/`. Theme and responsive styles: `src/index.css`.

`CHAPTER_COVERAGE.md` maps slides to PDF pages and records corrections to printed solution errors. Teacher setup lists and QR download instructions are not part of the student slides.

## Validation

Production build, browser checks for every slide and all 42 practice reveal/hide interactions, demo results, keyboard activation, themes, and mobile width. QA scripts and screenshots are under `tmp/qa/`.
