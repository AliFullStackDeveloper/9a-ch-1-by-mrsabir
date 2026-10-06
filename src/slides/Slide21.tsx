import { LessonSlide } from '@/components/lesson/LessonSlide'
import type { LessonData } from '@/components/lesson/LessonSlide'

const data: LessonData = {
  "topic": "1.5 · Boolean expressions",
  "title": "Conditions that solve problems",
  "subtitle": "Check divisibility, ranges and logical equivalence.",
  "pages": "30–36",
  "kind": "boolean",
  "code": "let num = 25;\nlet valid = num % 5 === 0 && num <= 30;\n\nlet number = 15;\nlet p = number % 3 !== 0;\nlet q = number % 5 !== 0;\nconsole.log(!(p || q) === (!p && !q));\n\nlet year = 2000;\nlet leap = (year % 4 === 0 && year % 100 !== 0)\n  || year % 400 === 0;",
  "cards": [
    {
      "title": "Remainder test",
      "text": "A multiple of 5 has remainder 0 when divided by 5. The printed MOD 5 = 10 is an error."
    },
    {
      "title": "Leap years",
      "text": "Divisible by 4, except century years must also be divisible by 400."
    },
    {
      "title": "Temperature bands",
      "text": "For whole-degree inputs: cold 0–20 inclusive; mild 21–30 inclusive; hot above 30."
    }
  ],
  "practices": [
    {
      "question": "Check years 2001, 1900, 2000 and 2024.",
      "answer": "2001: false\n1900: false\n2000: true\n2024: true",
      "explanation": "1900 fails the century exception; 2000 passes the divisibility-by-400 test."
    },
    {
      "question": "At temperature 25, what are cold, mild and hot?",
      "answer": "cold: false\nmild: true\nhot: false",
      "explanation": "25 is between 21 and 30, inclusive. Use Number(input) before comparing."
    },
    {
      "question": "Is 25 a multiple of 5 that does not exceed 30?",
      "answer": "true",
      "explanation": "25 % 5 === 0 and 25 <= 30 are both true."
    }
  ],
  "note": "The temperature exercise uses whole degrees. For continuous readings, define the 20–21°C gap explicitly before implementing a complete classifier."
}

export function Slide21() { return <LessonSlide data={data} /> }
