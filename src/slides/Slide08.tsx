import { LessonSlide } from '@/components/lesson/LessonSlide'
import type { LessonData } from '@/components/lesson/LessonSlide'

const data: LessonData = {
  "topic": "1.2 · Variables & assignments",
  "title": "Trace the changing values",
  "subtitle": "Statements execute in sequence. A later assignment replaces the earlier value.",
  "pages": "7–9",
  "kind": "variables",
  "codeLabel": "PSEUDOCODE",
  "code": "x ← 5\ny ← 10\nz ← x\ny ← z\nDISPLAY(y)\nDISPLAY(x)\nDISPLAY(z)",
  "demo": "trace",
  "note": "The chapter’s output is 5, 5, 5. The arrow ← means assignment in pseudocode; JavaScript uses =."
}

export function Slide08() { return <LessonSlide data={data} /> }
