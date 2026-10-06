import { LessonSlide } from '@/components/lesson/LessonSlide'
import type { LessonData } from '@/components/lesson/LessonSlide'

const data: LessonData = {
  "topic": "1.2 · Variables & assignments",
  "title": "Predict before you run",
  "subtitle": "Follow each assignment carefully. A copied value does not change automatically.",
  "pages": "7–12",
  "kind": "variables",
  "cards": [
    {
      "title": "Keep a trace table",
      "text": "Write each variable’s new value after every assignment."
    },
    {
      "title": "Display in order",
      "text": "Output depends on both the final values and the order of DISPLAY statements."
    },
    {
      "title": "Text and numbers",
      "text": "Joining text with + is concatenation in these examples."
    }
  ],
  "practices": [
    {
      "question": "What are the four displayed names?",
      "answer": "Han\nAmir\nAmir\nAmir",
      "explanation": "The first two DISPLAY statements run before student1 is assigned student2’s value.",
      "code": "student1 ← \"Han\"\nstudent2 ← \"Amir\"\nDISPLAY(student1)\nDISPLAY(student2)\nstudent1 ← student2\nDISPLAY(student1)\nDISPLAY(student2)"
    },
    {
      "question": "Trace the chapter’s number-and-text example.",
      "answer": "500HELLOPSEUDOCODE\nPSEUDOCODE\nPSEUDOCODE\nHELLO",
      "explanation": "After a ← c, a holds PSEUDOCODE. c ← b copies HELLO. b ← a copies PSEUDOCODE.",
      "code": "a ← 500\nb ← \"HELLO\"\nc ← \"PSEUDOCODE\"\nDISPLAY(a + b + c)\na ← c\nc ← b\nb ← a\nDISPLAY(a)\nDISPLAY(b)\nDISPLAY(c)"
    },
    {
      "question": "Predict the master challenge output.",
      "answer": "75\nGood\n100\n75",
      "explanation": "c becomes 75, d becomes 100, a becomes 75, c becomes 100, and d becomes 75.",
      "code": "a ← 25\nb ← \"Good\"\nc ← a * 3\nd ← a + c\na ← c\nc ← d\nd ← a\nDISPLAY(a)\nDISPLAY(b)\nDISPLAY(c)\nDISPLAY(d)"
    }
  ]
}

export function Slide10() { return <LessonSlide data={data} /> }
