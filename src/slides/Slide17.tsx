import { LessonSlide } from '@/components/lesson/LessonSlide'
import type { LessonData } from '@/components/lesson/LessonSlide'

const data: LessonData = {
  "topic": "1.4 · Strings",
  "title": "Extract the useful pieces",
  "subtitle": "Use known positions to retrieve structured parts of a string.",
  "pages": "21, 24–26",
  "kind": "strings",
  "code": "let iban = \"FI087009010012345678901\";\nconsole.log(iban.substring(4, 8));\nconsole.log(iban.substring(8, 23));\n\nlet product = \"APPAREL_P001_XL_20134\";\nconsole.log(product.substring(0, 7));\nconsole.log(product.substring(8, 12));\nconsole.log(product.substring(13, 15));\nconsole.log(product.substring(16));",
  "output": "Bank identifier: 7009\nAccount number: 010012345678901\nProduct parts: APPAREL · P001 · XL · 20134",
  "practices": [
    {
      "question": "Build a product ID from APPAREL, P020, M and 5623.",
      "answer": "APPAREL_P020_M_5623",
      "explanation": "Join the four parts with underscores.",
      "code": "let category = \"APPAREL\";\nlet code = \"P020\";\nlet size = \"M\";\nlet id = 5623;\n// Write the expression for productID."
    },
    {
      "question": "Why should an account number usually remain text?",
      "answer": "To preserve leading zeroes.",
      "explanation": "Converting \"010012345678901\" to a number loses its initial zero. It is an identifier, not a quantity."
    }
  ],
  "note": "Fixed substring positions work for a known format. If part lengths vary, splitting on a separator is often safer."
}

export function Slide17() { return <LessonSlide data={data} /> }
