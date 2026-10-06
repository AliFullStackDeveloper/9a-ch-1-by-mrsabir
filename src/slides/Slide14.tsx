import { LessonSlide } from '@/components/lesson/LessonSlide'
import type { LessonData } from '@/components/lesson/LessonSlide'

const data: LessonData = {
  "topic": "1.3 · Mathematical expressions",
  "title": "Solve the real-world challenges",
  "subtitle": "Use the right formula, then check the units and rounding.",
  "pages": "15–18",
  "kind": "math",
  "cards": [
    {
      "title": "Compound growth",
      "text": "Amount = principal × (1 + rate / 100) ** years. Interest = amount − principal."
    },
    {
      "title": "Cookie pricing",
      "text": "Tax is 5% of $20 = $1. Add $6 shipping per box before multiplying by quantity."
    },
    {
      "title": "Money display",
      "text": "Use toFixed(2) when presenting currency; it returns formatted text."
    }
  ],
  "practices": [
    {
      "question": "Find the interest on $5000 at 3% per year for three years.",
      "answer": "$463.64 interest\n$5463.64 final amount",
      "explanation": "5000 × 1.03³ = 5463.635. Subtract 5000, then round for display.",
      "code": "let amount = 5000 * (1 + 3 / 100) ** 3;\nlet interest = amount - 5000;\nconsole.log(interest.toFixed(2));"
    },
    {
      "question": "Four cookie boxes cost $20 each, with 5% tax and $6 shipping per box. What is the total?",
      "answer": "$108",
      "explanation": "($20 + $1 + $6) × 4 = $108. Shipping is charged per box in the chapter.",
      "code": "basePrice ← 20\ntax ← 0.05 * basePrice\nshippingCost ← 6\nquantity ← 4\ntotalPrice ← (basePrice + tax + shippingCost) * quantity"
    },
    {
      "question": "Predict: 2 + 3 * 4 and (2 + 3) * 4.",
      "answer": "14 and 20",
      "explanation": "In the first expression multiplication happens first. Parentheses change the order in the second."
    },
    {
      "question": "Predict: 20 / 5 * 2 and 17 % 5.",
      "answer": "8 and 2",
      "explanation": "Division and multiplication are evaluated left to right. 17 divided by 5 has remainder 2."
    }
  ]
}

export function Slide14() { return <LessonSlide data={data} /> }
