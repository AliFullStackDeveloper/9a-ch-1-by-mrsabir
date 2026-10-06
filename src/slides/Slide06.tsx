import { LessonSlide } from '@/components/lesson/LessonSlide'
import type { LessonData } from '@/components/lesson/LessonSlide'

const data: LessonData = {
  "topic": "1.1 · Binary numbers",
  "title": "Binary challenge lab",
  "subtitle": "Try the chapter’s conversions, then reveal the answer and reasoning.",
  "pages": "1–5",
  "kind": "binary",
  "cards": [
    {
      "title": "Decimal → binary",
      "text": "Repeated division by 2; read the remainders upwards."
    },
    {
      "title": "Binary → decimal",
      "text": "Multiply each bit by its place value, then add the products."
    },
    {
      "title": "Image → bits",
      "text": "Keep the colour convention and the row order consistent."
    }
  ],
  "practices": [
    {
      "question": "Convert 8136₁₀ to binary.",
      "answer": "1111111001000₂",
      "explanation": "8136 = 4096 + 2048 + 1024 + 512 + 256 + 128 + 64 + 8."
    },
    {
      "question": "Convert 53721₁₀ to binary.",
      "answer": "1101000111011001₂",
      "explanation": "53721 = 32768 + 16384 + 4096 + 256 + 128 + 64 + 16 + 8 + 1."
    },
    {
      "question": "Convert 110011₂ to decimal.",
      "answer": "51₁₀",
      "explanation": "32 + 16 + 2 + 1 = 51."
    },
    {
      "question": "Encode the first picture row: white, white, white, black, black, white, white, white.",
      "answer": "11100111",
      "explanation": "Apply the chapter convention: white = 1 and black = 0."
    }
  ]
}

export function Slide06() { return <LessonSlide data={data} /> }
