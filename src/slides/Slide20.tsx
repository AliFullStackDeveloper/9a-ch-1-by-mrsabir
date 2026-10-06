import { LessonSlide } from '@/components/lesson/LessonSlide'
import type { LessonData } from '@/components/lesson/LessonSlide'

const data: LessonData = {
  "topic": "1.5 · Boolean expressions",
  "title": "Combine conditions with logic",
  "subtitle": "AND requires both; OR requires at least one; NOT reverses a Boolean value.",
  "pages": "29–32",
  "kind": "boolean",
  "cards": [
    {
      "title": "AND · &&",
      "text": "even && positive is true only when both conditions are true."
    },
    {
      "title": "OR · ||",
      "text": "even || positive is true when either condition, or both, are true."
    },
    {
      "title": "NOT · !",
      "text": "!true is false. De Morgan: !(P || Q) equals !P && !Q; !(P && Q) equals !P || !Q."
    }
  ],
  "demo": "logic",
  "note": "For 44: AND true, OR true. For 77: AND false, OR true. For −22: AND false, OR true. For −15: both false."
}

export function Slide20() { return <LessonSlide data={data} /> }
