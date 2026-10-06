import { LessonSlide } from '@/components/lesson/LessonSlide'
import type { LessonData } from '@/components/lesson/LessonSlide'

const data: LessonData = {
  "topic": "1.1 · Binary numbers",
  "title": "Decimal → binary, one step at a time",
  "subtitle": "Divide by 2, record the remainder, and repeat until the quotient is 0.",
  "pages": "1–3",
  "kind": "binary",
  "cards": [
    {
      "title": "Divide",
      "text": "345 ÷ 2 = 172 remainder 1. Continue dividing each quotient by 2."
    },
    {
      "title": "Read upwards",
      "text": "The last remainder is the first binary digit. Reading bottom to top gives 101011001₂."
    },
    {
      "title": "Check the answer",
      "text": "256 + 64 + 16 + 8 + 1 = 345."
    }
  ],
  "demo": "binary",
  "note": "Explore the chapter example 345, or enter another whole number. Click “Next division” to reveal each stage."
}

export function Slide04() { return <LessonSlide data={data} /> }
