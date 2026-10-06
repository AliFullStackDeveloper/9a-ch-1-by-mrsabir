import { LessonSlide } from '@/components/lesson/LessonSlide'
import type { LessonData } from '@/components/lesson/LessonSlide'

const data: LessonData = {
  "topic": "1.1 · Binary numbers",
  "title": "Two digits. Endless possibilities.",
  "subtitle": "A binary digit is a bit. Its value is either 0 or 1.",
  "pages": "1–5",
  "kind": "binary",
  "cards": [
    {
      "title": "Decimal · base 10",
      "text": "Uses digits 0–9. Place values are powers of 10: 1, 10, 100, …"
    },
    {
      "title": "Binary · base 2",
      "text": "Uses digits 0 and 1. Place values are powers of 2: 1, 2, 4, 8, …"
    },
    {
      "title": "Read the place values",
      "text": "110011₂ = 32 + 16 + 0 + 0 + 2 + 1 = 51₁₀."
    }
  ],
  "codeLabel": "PLACE VALUE",
  "code": "Bit:       1   1   0   0   1   1\nPower:     5   4   3   2   1   0\nWeight:   32  16   8   4   2   1",
  "practices": [
    {
      "question": "What is 101010₂ in decimal?",
      "answer": "42₁₀",
      "explanation": "Add the weights of the 1 bits: 32 + 8 + 2 = 42."
    },
    {
      "question": "What is 10111101₂ in decimal?",
      "answer": "189₁₀",
      "explanation": "128 + 32 + 16 + 8 + 4 + 1 = 189."
    }
  ],
  "note": "A base label tells us how to interpret the digits. 10₂ means two; 10₁₀ means ten."
}

export function Slide03() { return <LessonSlide data={data} /> }
