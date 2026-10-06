import { LessonSlide } from '@/components/lesson/LessonSlide'
import type { LessonData } from '@/components/lesson/LessonSlide'

const data: LessonData = {
  "topic": "1.3 · Mathematical expressions",
  "title": "Turn a formula into an algorithm",
  "subtitle": "An algorithm is an ordered set of steps for solving a problem.",
  "pages": "13–14",
  "kind": "math",
  "cards": [
    {
      "title": "Input",
      "text": "Get the parallelogram’s base and perpendicular height."
    },
    {
      "title": "Process",
      "text": "Multiply: area = base × height."
    },
    {
      "title": "Output",
      "text": "Display the area with square units, then end."
    }
  ],
  "codeLabel": "PSEUDOCODE",
  "code": "START\nbase ← INPUT()\nheight ← INPUT()\narea ← base * height\nDISPLAY(area)\nEND",
  "practices": [
    {
      "question": "A parallelogram has base 12 cm and height 5 cm. Find its area.",
      "answer": "60 cm²",
      "explanation": "12 × 5 = 60. Use perpendicular height, not the sloping side."
    },
    {
      "question": "Which arithmetic operators will you use?",
      "answer": "+ add   - subtract   * multiply\n/ divide   % remainder   ** exponent",
      "explanation": "In pseudocode the remainder operator is often written MOD. JavaScript uses %."
    }
  ]
}

export function Slide11() { return <LessonSlide data={data} /> }
