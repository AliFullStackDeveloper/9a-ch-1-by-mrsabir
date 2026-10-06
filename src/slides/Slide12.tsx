import { LessonSlide } from '@/components/lesson/LessonSlide'
import type { LessonData } from '@/components/lesson/LessonSlide'

const data: LessonData = {
  "topic": "1.3 · Mathematical expressions",
  "title": "Make the order work for you",
  "subtitle": "Use parentheses to make an expression’s meaning clear.",
  "pages": "13–16",
  "kind": "math",
  "cards": [
    {
      "title": "PEMDAS",
      "text": "Parentheses → exponents → multiplication/division → addition/subtraction."
    },
    {
      "title": "Equal priority",
      "text": "Evaluate multiplication/division left to right. Do the same for addition/subtraction."
    },
    {
      "title": "JavaScript exponent",
      "text": "Write 4 ** 2 or Math.pow(4, 2). Do not use ^ for powers; it means bitwise XOR."
    }
  ],
  "demo": "order",
  "note": "Example: 20 / 5 * 2 = 8, not 2. Parentheses can change the result: 20 / (5 * 2) = 2."
}

export function Slide12() { return <LessonSlide data={data} /> }
