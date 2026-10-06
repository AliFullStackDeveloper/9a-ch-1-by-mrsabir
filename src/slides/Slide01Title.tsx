import { motion, useReducedMotion } from 'framer-motion'
import { Code2, Terminal, Braces, GitBranch, Variable, Play } from 'lucide-react'

const symbols = [
  { Icon: Terminal, left: '12%', top: '25%', delay: 0 },
  { Icon: Braces, left: '78%', top: '18%', delay: 0.5 },
  { Icon: GitBranch, left: '8%', top: '70%', delay: 1 },
  { Icon: Variable, left: '83%', top: '65%', delay: 1.5 },
]

export function Slide01Title() {
  const reducedMotion = useReducedMotion()
  return (
    <main className="programming-title">
      <div className="programming-hero">
        <div className="programming-art" aria-hidden="true">
          <motion.div className="programming-orbit" animate={reducedMotion ? {} : { rotate: 360 }} transition={{ duration: 45, repeat: Infinity, ease: 'linear' }} />
          {symbols.map(({ Icon, left, top, delay }) => (
            <motion.div key={left} className="programming-symbol" style={{ left, top }}
              initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: reducedMotion ? 0 : delay * 0.3, duration: 0.6 }}>
              <motion.div animate={reducedMotion ? {} : { y: [0, -9, 0] }} transition={{ duration: 4, repeat: Infinity, delay }}>
                <Icon size={25} strokeWidth={1.6} />
              </motion.div>
            </motion.div>
          ))}
          <motion.div className="programming-core" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reducedMotion ? 0 : 0.8 }}>
            <Code2 size={72} strokeWidth={1.5} />
            <motion.span className="programming-play" animate={reducedMotion ? {} : { scale: [1, 1.12, 1] }} transition={{ duration: 3, repeat: Infinity }}><Play size={17} fill="currentColor" /></motion.span>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: reducedMotion ? 0 : 0.25 }} className="text-center">
          <span className="programming-eyebrow">O Level · ICT</span>
          <h1 className="programming-heading font-space gradient-text-hero">Programming Basics</h1>
          <p className="programming-subtitle">Think logically · Write code · Create solutions</p>
          <div className="programming-author">by Sabir Ali</div>
        </motion.div>
      </div>
    </main>
  )
}
