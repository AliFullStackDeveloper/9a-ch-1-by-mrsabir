import { LessonSlide } from '@/components/lesson/LessonSlide'
import type { LessonData } from '@/components/lesson/LessonSlide'

const data: LessonData = {
  "topic": "1.5 · Boolean expressions",
  "title": "Ask questions that have two answers",
  "subtitle": "A Boolean expression evaluates to true or false.",
  "pages": "28–29, 33",
  "kind": "boolean",
  "cards": [
    {
      "title": "Relational operators",
      "text": "> greater, < less, >= at least, <= at most. JavaScript === tests equality and !== tests inequality."
    },
    {
      "title": "Assignment vs comparison",
      "text": "age = 18 assigns a value. age === 18 checks equality. Prefer strict equality in JavaScript."
    },
    {
      "title": "Threshold example",
      "text": "In the chapter’s hypothetical voting rule, eligible = age >= 18."
    }
  ],
  "code": "let age = 23;\nlet eligible = age >= 18;\nconsole.log(eligible); // true\n\nlet num = 44;\nlet even = num % 2 === 0;\nlet positive = num > 0;",
  "practices": [
    {
      "question": "Using the chapter’s age rule, what happens at ages 17, 18 and 23?",
      "answer": "false, true, true",
      "explanation": "The boundary is included because the test is >= 18."
    },
    {
      "question": "Is 0 positive? Is it even?",
      "answer": "Positive: false\nEven: true",
      "explanation": "Positive means greater than 0. 0 % 2 is 0, so 0 is even."
    }
  ],
  "note": "Pseudocode often uses = for equality and ← for assignment. JavaScript uses = for assignment and === for strict equality."
}

export function Slide19() { return <LessonSlide data={data} /> }
