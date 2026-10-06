import { LessonSlide } from '@/components/lesson/LessonSlide'
import type { LessonData } from '@/components/lesson/LessonSlide'

const data: LessonData = {
  "topic": "Chapter roadmap",
  "title": "From bits to decisions",
  "subtitle": "Five topics. One goal: turn a problem into clear, working instructions.",
  "pages": "1–36",
  "kind": "review",
  "cards": [
    {
      "title": "01 · Binary numbers",
      "text": "Represent numbers and pictures using just 0 and 1."
    },
    {
      "title": "02 · Variables & assignments",
      "text": "Store, update and display data. Choose a suitable data type."
    },
    {
      "title": "03 · Mathematical expressions",
      "text": "Write algorithms and calculate with the correct order of operations."
    },
    {
      "title": "04 · Strings",
      "text": "Join text and retrieve parts using indexes and substrings."
    },
    {
      "title": "05 · Boolean expressions",
      "text": "Compare values and combine conditions to make decisions."
    }
  ],
  "note": "Each topic has four slides: understand the idea, explore it, apply it, and practise. Use the topic menu to jump to a section."
}

export function Slide02() { return <LessonSlide data={data} /> }
