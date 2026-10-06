import { LessonSlide } from '@/components/lesson/LessonSlide'
import type { LessonData } from '@/components/lesson/LessonSlide'

const data: LessonData = {
  "topic": "1.4 · Strings",
  "title": "Text is data too",
  "subtitle": "A string is a sequence of characters enclosed in quotation marks.",
  "pages": "19–21",
  "kind": "strings",
  "cards": [
    {
      "title": "Characters",
      "text": "Letters, digits, spaces and punctuation can all be part of a string."
    },
    {
      "title": "Concatenation",
      "text": "Use + to join strings. Add spaces or separators explicitly."
    },
    {
      "title": "Numbers inside quotes",
      "text": "\"235\" + 2658 becomes \"2352658\". It joins text rather than adding numerically."
    }
  ],
  "code": "let greeting = \"Good \" + \"morning\";\nlet address = \"273-A\" + \" \" + \"William Street\"\n  + \" \" + \"Chicago\" + \" \" + \"United States of America\";\nconsole.log(greeting);\nconsole.log(address);",
  "practices": [
    {
      "question": "Predict \"235\" + \"256\".",
      "answer": "\"235256\"",
      "explanation": "Both operands are strings, so + concatenates them."
    },
    {
      "question": "Predict \"Switch number-\" + 265.",
      "answer": "\"Switch number-265\"",
      "explanation": "The number is converted to text when joined to a string."
    },
    {
      "question": "Why does \"Good\" + \"morning\" look wrong?",
      "answer": "It produces \"Goodmorning\". Add a space: \"Good \" + \"morning\".",
      "explanation": "Concatenation does not insert spaces automatically."
    }
  ]
}

export function Slide15() { return <LessonSlide data={data} /> }
