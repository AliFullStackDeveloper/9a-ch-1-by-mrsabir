import { LessonSlide } from '@/components/lesson/LessonSlide'
import type { LessonData } from '@/components/lesson/LessonSlide'

const data: LessonData = {
  "topic": "1.2 · Variables & assignments",
  "title": "Give your data a name",
  "subtitle": "A variable is a named place to store a value that can be updated.",
  "pages": "6–10",
  "kind": "variables",
  "cards": [
    {
      "title": "Number",
      "text": "For calculations: bookPages = 301 and bookPrice = 38."
    },
    {
      "title": "String",
      "text": "For text: bookName = \"Basic Physics\" and bookAuthor = \"Karl F. Kuhn\"."
    },
    {
      "title": "Boolean",
      "text": "For a true/false state: bookIsAvailable = true."
    }
  ],
  "code": "let bookName = \"Basic Physics\";\nlet bookPages = 301;\nlet bookPrice = 38;\nlet bookIsAvailable = true;\n// Comments explain code; they are not executed.\nconsole.log(bookName);",
  "practices": [
    {
      "question": "Choose types for playerName and playerScore.",
      "answer": "playerName: String\nplayerScore: Number",
      "explanation": "A name is text. A score must support numeric calculations."
    },
    {
      "question": "Is \"301\" the same type as 301?",
      "answer": "No. \"301\" is a string; 301 is a number.",
      "explanation": "Quotation marks create text. Convert numeric input before calculating."
    }
  ],
  "note": "Use meaningful names. In JavaScript, let declares a variable; = assigns a value; // starts a single-line comment."
}

export function Slide07() { return <LessonSlide data={data} /> }
