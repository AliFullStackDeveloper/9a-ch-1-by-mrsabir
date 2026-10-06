import { LessonSlide } from '@/components/lesson/LessonSlide'
import type { LessonData } from '@/components/lesson/LessonSlide'

const data: LessonData = {
  "topic": "1.3 · Mathematical expressions",
  "title": "Code that calculates",
  "subtitle": "Apply formulas to circles and temperature conversion.",
  "pages": "14–16",
  "kind": "math",
  "code": "let radius = 50;\nlet circumference = 2 * 3.14 * radius;\nlet area = 3.14 * radius * radius;\nconsole.log(circumference, area);\n\nlet fahrenheit = 97;\nlet celsius = (fahrenheit - 32) * 5 / 9;\nconsole.log(celsius.toFixed(2));",
  "output": "Circumference: 314\nArea: 7850\nCelsius: 36.11",
  "cards": [
    {
      "title": "Circle",
      "text": "C = 2πr and A = πr². The chapter approximates π as 3.14."
    },
    {
      "title": "Temperature",
      "text": "C = (F − 32) × 5 / 9. Subtract 32 before multiplying and dividing."
    }
  ],
  "practices": [
    {
      "question": "Convert 68°F to Celsius.",
      "answer": "20°C",
      "explanation": "(68 − 32) × 5 / 9 = 36 × 5 / 9 = 20."
    },
    {
      "question": "For radius 10, find circumference and area using π = 3.14.",
      "answer": "Circumference = 62.8\nArea = 314",
      "explanation": "2 × 3.14 × 10 and 3.14 × 10 × 10."
    }
  ]
}

export function Slide13() { return <LessonSlide data={data} /> }
