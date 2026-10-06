import { LessonSlide } from '@/components/lesson/LessonSlide'
import type { LessonData } from '@/components/lesson/LessonSlide'

const data: LessonData = {
  "topic": "1.4 · Strings",
  "title": "Build names, addresses and email IDs",
  "subtitle": "Practise joining text and selecting substrings from the chapter.",
  "pages": "20–27",
  "kind": "strings",
  "cards": [
    {
      "title": "Registration form",
      "text": "Collect firstName, lastName, grade, subjects and address. Join names with a space and display all details."
    },
    {
      "title": "Email pattern",
      "text": "userName + \"@\" + domainName constructs the chapter’s email example."
    },
    {
      "title": "Test separators",
      "text": "Check that spaces, @ and underscores appear in the right places."
    }
  ],
  "practices": [
    {
      "question": "Create an email for Eva using the domain xyz.com.",
      "answer": "let emailID = userName + \"@\" + domainName;\n// Output: Eva@xyz.com",
      "explanation": "The @ symbol must be inserted between the username and domain.",
      "code": "let userName = \"Eva\";\nlet domainName = \"xyz.com\";"
    },
    {
      "question": "Build the registration output for Nora Smith, grade 12.",
      "answer": "Name: Nora Smith\nGrade: 12\nSubjects: English, Science, Computer science\nAddress: 273-A William Street Chicago United States of America",
      "explanation": "fullName = firstName + \" \" + lastName. Keep the other fields in named variables."
    },
    {
      "question": "Build the address from the chapter’s four input fields.",
      "answer": "273-A William Street Chicago United States of America",
      "explanation": "houseNo + \" \" + street + \" \" + city + \" \" + country. The spaces are part of the expression."
    },
    {
      "question": "What does \"PROGRAM\".substring(2, 5) return?",
      "answer": "\"OGR\"",
      "explanation": "Select indexes 2, 3 and 4. Index 5 is excluded."
    }
  ]
}

export function Slide18() { return <LessonSlide data={data} /> }
