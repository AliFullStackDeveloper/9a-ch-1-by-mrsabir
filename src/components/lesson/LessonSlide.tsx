import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Binary, Variable, Calculator, TextCursor, GitBranch, Eye, EyeOff, ChevronLeft, ChevronRight, Code2 } from 'lucide-react'
import type { ReactNode } from 'react'
import { LessonDemo } from './LessonDemo'

export interface Practice { question: string; code?: string; answer: string; explanation: string }
export interface LessonData {
  topic: string; title: string; subtitle: string; pages: string; kind: 'binary' | 'variables' | 'math' | 'strings' | 'boolean' | 'review';
  cards?: { title: string; text: string }[]; code?: string; codeLabel?: string; output?: string; note?: string;
  demo?: 'binary' | 'pixels' | 'trace' | 'order' | 'index' | 'logic'; practices?: Practice[];
}
const icons = { binary: Binary, variables: Variable, math: Calculator, strings: TextCursor, boolean: GitBranch, review: Code2 }
export function LessonSlide({ data }: { data: LessonData }) {
  const reduce = useReducedMotion(); const Icon = icons[data.kind]
  const reveal = { initial: { opacity: 0, y: reduce ? 0 : 16 }, animate: { opacity: 1, y: 0 } }
  return <section className="lesson-slide">
    <header className="lesson-header"><div className="lesson-kicker"><Icon size={18}/>{data.topic}<span>CHAPTER 01</span></div><motion.h1 {...reveal} className="font-space">{data.title}</motion.h1><p>{data.subtitle}</p></header>
    <div className={`lesson-layout ${data.practices ? 'has-practice' : ''}`}>
      <div className="lesson-content">
        {data.cards && <div className="concept-grid">{data.cards.map((card,i) => <motion.article key={card.title} {...reveal} transition={{ delay: reduce ? 0 : i * .09 }} className="concept-card"><span className="concept-number">0{i+1}</span><h2>{card.title}</h2><p>{card.text}</p></motion.article>)}</div>}
        {data.code && <CodePanel label={data.codeLabel || 'JAVASCRIPT'}>{data.code}</CodePanel>}
        {data.output && <div className="output-panel"><span>OUTPUT</span><pre>{data.output}</pre></div>}
        {data.note && <aside className="lesson-note">{data.note}</aside>}
      </div>
      {data.demo && <div className="demo-panel"><LessonDemo type={data.demo}/></div>}
      {data.practices && <PracticePanel items={data.practices}/>} 
    </div>
    <footer className="lesson-source">Based on ch_1_A.pdf · PDF pages {data.pages} · Examples adapted for teaching</footer>
  </section>
}
export function CodePanel({ children, label }: { children: ReactNode; label: string }) { return <div className="code-panel"><div className="code-toolbar"><div><i/><i/><i/></div><span>{label}</span></div><pre><code>{children}</code></pre></div> }
function PracticePanel({ items }: { items: Practice[] }) {
  const answerRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const [index,setIndex]=useState(0); const [revealed,setRevealed]=useState<Record<number,boolean>>({}); const q=items[index]
  useEffect(() => {
    if (!revealed[index]) return
    const timer = window.setTimeout(() => {
      const answer = answerRef.current
      const slide = answer?.closest('.lesson-slide') as HTMLElement | null
      if (!answer || !slide) return
      const overflow = answer.getBoundingClientRect().bottom - slide.getBoundingClientRect().bottom + 24
      if (overflow > 0) slide.scrollTo({ top: slide.scrollTop + overflow, behavior: reducedMotion ? 'instant' : 'smooth' })
    }, 350)
    return () => window.clearTimeout(timer)
  }, [index, revealed, reducedMotion])
  return <article className="practice-panel"><div className="practice-heading"><span>YOUR TURN</span><span>{index+1} / {items.length}</span></div><h2>{q.question}</h2>{q.code && <CodePanel label="PREDICT / SOLVE">{q.code}</CodePanel>}
    <button className="reveal-button" aria-expanded={!!revealed[index]} onClick={()=>setRevealed({...revealed,[index]:!revealed[index]})}>{revealed[index]?<EyeOff size={18}/>:<Eye size={18}/>} {revealed[index]?'Hide answer':'Reveal answer'}</button>
    <AnimatePresence>{revealed[index] && <motion.div ref={answerRef} initial={{ opacity:0,height:0 }} animate={{ opacity:1,height:'auto' }} exit={{ opacity:0,height:0 }} transition={{ duration: reducedMotion ? 0 : 0.25 }} onAnimationComplete={() => answerRef.current?.scrollIntoView({ block: 'nearest', behavior: reducedMotion ? 'instant' : 'smooth' })} className="answer-panel" aria-live="polite"><pre>{q.answer}</pre><p>{q.explanation}</p></motion.div>}</AnimatePresence>
    {items.length>1 && <div className="practice-nav"><button disabled={index===0} aria-label="Previous practice" onClick={()=>setIndex(index-1)}><ChevronLeft size={16}/></button><span>Try each example before revealing</span><button disabled={index===items.length-1} aria-label="Next practice" onClick={()=>setIndex(index+1)}><ChevronRight size={16}/></button></div>}
  </article>
}
