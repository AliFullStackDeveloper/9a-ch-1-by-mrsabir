import { LessonSlide } from '@/components/lesson/LessonSlide'
import type { LessonData } from '@/components/lesson/LessonSlide'

const data: LessonData = {
  "topic": "1.2 · Variables & assignments",
  "title": "Input → store → display",
  "subtitle": "Collect the six contestants’ names and scores, then print their results.",
  "pages": "9–12",
  "kind": "variables",
  "cards": [
    {
      "title": "Pseudocode",
      "text": "DISPLAY a prompt → INPUT a value → assign it to a variable → DISPLAY the result."
    },
    {
      "title": "JavaScript input",
      "text": "prompt() returns text, or null if cancelled. Number() converts numeric text; validate it in a complete app."
    },
    {
      "title": "Six contestants",
      "text": "Repeat the same input/output pattern for players 1–6: Jon 50, Han 65, Tina 70, Rick 42, Nora 55, Alia 62."
    }
  ],
  "code": "// Pattern for player 1; repeat for players 2–6.\nlet playerName1 = prompt(\"Enter player 1 name:\");\nlet playerScore1 = Number(prompt(\"Enter score:\"));\nconsole.log(playerName1 + \" scored \"\n  + playerScore1 + \" points\");",
  "output": "Jon scored 50 points",
  "practices": [
    {
      "question": "How should a Yes/No availability input become a Boolean?",
      "answer": "let answer = prompt(\"Available? Yes/No\");\nlet bookIsAvailable = answer?.toLowerCase() === \"yes\";",
      "explanation": "The input \"Yes\" is text. An explicit comparison produces true or false."
    },
    {
      "question": "Write pseudocode to collect a book’s name, author, pages and price.",
      "answer": "bookName ← INPUT()\nbookAuthor ← INPUT()\nbookPages ← INPUT()\nbookPrice ← INPUT()",
      "explanation": "Display a clear prompt before each INPUT. Name and author are strings; pages and price are numbers."
    }
  ]
}

export function Slide09() { return <LessonSlide data={data} /> }
