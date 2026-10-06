import { LessonSlide } from '@/components/lesson/LessonSlide'
import type { LessonData } from '@/components/lesson/LessonSlide'

const data: LessonData = {
  "topic": "Chapter review",
  "title": "You can now turn ideas into code",
  "subtitle": "Connect the five topics in a final practice check.",
  "pages": "1–36",
  "kind": "review",
  "cards": [
    {
      "title": "Represent",
      "text": "Numbers and monochrome pixels can be encoded as bits."
    },
    {
      "title": "Store & calculate",
      "text": "Variables hold values; algorithms order the steps; expressions calculate results."
    },
    {
      "title": "Communicate & decide",
      "text": "Strings build useful output. Boolean expressions check conditions."
    }
  ],
  "practices": [
    {
      "question": "A player scores 42. Show the score in binary, build a message and test whether it is even.",
      "answer": "Binary: 101010₂\nMessage: Jon scored 42 points\nEven: true",
      "explanation": "42 = 32 + 8 + 2. Join the name and score with spaces. 42 % 2 === 0."
    },
    {
      "question": "A book costs $38. Two copies have 5% tax. Form a receipt message.",
      "answer": "Subtotal: $76.00\nTax: $3.80\nMessage: Total: $79.80",
      "explanation": "38 × 2 = 76; 76 × 0.05 = 3.8; total = 79.8. Format with toFixed(2)."
    },
    {
      "question": "Explain the difference between =, === and + in JavaScript.",
      "answer": "= assigns; === compares; + adds numbers or joins strings.",
      "explanation": "The operand types determine whether + performs numeric addition or string concatenation."
    }
  ],
  "note": "End of Chapter 1 · Explain your method, trace your values, and test boundary cases."
}

export function Slide23() { return <LessonSlide data={data} /> }
