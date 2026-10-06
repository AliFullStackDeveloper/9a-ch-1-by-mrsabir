import { LessonSlide } from '@/components/lesson/LessonSlide'
import type { LessonData } from '@/components/lesson/LessonSlide'

const data: LessonData = {
  "topic": "1.1 · Binary numbers",
  "title": "A picture can be a pattern of bits",
  "subtitle": "One bit per pixel is enough when an image has exactly two colours.",
  "pages": "4–5",
  "kind": "binary",
  "cards": [
    {
      "title": "Choose a convention",
      "text": "The chapter uses 0 for a black square and 1 for a white square."
    },
    {
      "title": "Store row by row",
      "text": "The first row is 11100111. Each row contains eight bits."
    },
    {
      "title": "Reconstruct the image",
      "text": "Read each bit and colour the corresponding pixel. The same convention must be used to encode and decode."
    }
  ],
  "demo": "pixels",
  "note": "The displayed 8 × 8 pattern reproduces the chapter activity. The 64-bit count describes the pixels only; a file may also store metadata."
}

export function Slide05() { return <LessonSlide data={data} /> }
