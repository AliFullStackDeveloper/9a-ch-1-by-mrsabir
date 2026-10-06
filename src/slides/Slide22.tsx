import { LessonSlide } from '@/components/lesson/LessonSlide'
import type { LessonData } from '@/components/lesson/LessonSlide'

const data: LessonData = {
  "topic": "1.5 · Boolean expressions",
  "title": "Predict, reverse and decide",
  "subtitle": "Work through the chapter’s Boolean table and final challenges.",
  "pages": "32–36",
  "kind": "boolean",
  "cards": [
    {
      "title": "Evaluate inside out",
      "text": "Substitute the values, evaluate comparisons, then apply NOT, AND and OR."
    },
    {
      "title": "Palindrome",
      "text": "A number is a palindrome if its reversed digits equal the original number."
    },
    {
      "title": "Integer division",
      "text": "When extracting digits, discard the fractional part with Math.floor. The chapter’s plain division needs this clarification."
    }
  ],
  "practices": [
    {
      "question": "For a = 10, b = 12, c = 8, evaluate the first four expressions.",
      "answer": "1: false\n2: true\n3: true\n4: true",
      "explanation": "1 is false AND true. 2 is true OR true. 3 is NOT false AND true. 4 is false OR true.",
      "code": "1. (a > b) AND (a > c)\n2. (b > a) OR (b > c)\n3. NOT(a = b) AND (b > c)\n4. (a ≤ c) OR (b ≥ c)"
    },
    {
      "question": "For a = 10, b = 12, c = 8, evaluate the last four expressions.",
      "answer": "5: true\n6: true\n7: true\n8: true",
      "explanation": "5 negates a false conjunction. 6 has remainders 2 and 2. 7 negates false OR false. 8 combines 22 > 8 and 2 < 8.",
      "code": "5. NOT((a > b) AND (a < c))\n6. ((a MOD c) = 2) AND ((b MOD a) = 2)\n7. NOT((a = b) OR (b = c))\n8. (a + b > c) AND (b - a < c)"
    },
    {
      "question": "Reverse 454 and check whether it is a palindrome.",
      "answer": "Reverse = 454\nPalindrome = true",
      "explanation": "ones = 4, tens = 5, hundreds = 4. Use integer division when extracting digits.",
      "code": "let num = 454;\nlet ones = num % 10;\nlet tens = Math.floor(num / 10) % 10;\nlet hundreds = Math.floor(num / 100);\nlet reverse = ones * 100 + tens * 10 + hundreds;\nconsole.log(reverse, num === reverse);"
    },
    {
      "question": "Does the same palindrome test pass for 123?",
      "answer": "Reverse = 321\nPalindrome = false",
      "explanation": "The reverse differs from the original. This numeric method assumes a positive three-digit whole number."
    }
  ]
}

export function Slide22() { return <LessonSlide data={data} /> }
