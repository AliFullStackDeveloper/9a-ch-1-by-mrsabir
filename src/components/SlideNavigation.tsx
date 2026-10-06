import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
interface Props { current:number; total:number; onPrev:()=>void; onNext:()=>void }
export function SlideNavigation({current,total,onPrev,onNext}:Props) {
 return <nav className="deck-navigation" aria-label="Slide navigation"><div className="deck-progress"><motion.div animate={{width:`${((current+1)/total)*100}%`}} transition={{duration:.35}}/></div><div className="deck-controls"><button onClick={onPrev} disabled={current===0}><ChevronLeft size={17}/><span>Previous</span></button><div><span className="deck-key-hint">← → to navigate</span><strong>{String(current+1).padStart(2,'0')} <span>/ {total}</span></strong></div><button onClick={onNext} disabled={current===total-1}><span>Next</span><ChevronRight size={17}/></button></div></nav>
}
