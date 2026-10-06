import { LessonSlide } from '@/components/lesson/LessonSlide'
import type { LessonData } from '@/components/lesson/LessonSlide'

const data: LessonData = {
  "topic": "1.4 · Strings",
  "title": "Every character has a position",
  "subtitle": "JavaScript indexes start at 0. A substring selects part of the text.",
  "pages": "21, 25–26",
  "kind": "strings",
  "cards": [
    {
      "title": "Index",
      "text": "word[0] is the first character. word[6] is the seventh character."
    },
    {
      "title": "Length",
      "text": "\"PROGRAM\".length is 7. Its last index is 6."
    },
    {
      "title": "Substring",
      "text": "substring(start, end) includes start and excludes end. substring(0, 4) retrieves four characters."
    }
  ],
  "demo": "index",
  "note": "The chapter’s pseudocode SUBSTRING examples use 1-based positions with an inclusive end. JavaScript substring uses 0-based indexes with an excluded end. Keep the conventions separate."
}

export function Slide16() { return <LessonSlide data={data} /> }
