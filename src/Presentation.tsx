import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { BackgroundEffects } from '@/components/BackgroundEffects'
import { SlideNavigation } from '@/components/SlideNavigation'
import { SLIDES } from '@/slides'
// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD NEW CHAPTER SLIDES:
//
// 1. Create a new file: src/slides/Slide02YourChapter.tsx
//    (copy Slide01Title.tsx as a starter template)
//
// 2. Import it below:
//    import { Slide02YourChapter } from '@/slides/Slide02YourChapter'
//
// 3. Add it to the SLIDES array:
//    { id: 'your-chapter', component: Slide02YourChapter, label: 'Your Chapter' }
//
// The navigation, progress bar, day/night toggle, and animations
// will all work automatically for any slide you add.
// ─────────────────────────────────────────────────────────────────────────────
import { useTheme } from '@/lib/ThemeContext'

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '60%' : '-60%',
    opacity: 0,
    scale: 0.94,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? '-60%' : '60%',
    opacity: 0,
    scale: 0.94,
  }),
}

export function Presentation() {
  const reducedMotion = useReducedMotion()
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const { isDark, toggleTheme } = useTheme()

  const goTo = useCallback((idx: number) => {
    if (idx < 0 || idx >= SLIDES.length) return
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }, [current])

  const goNext = useCallback(() => goTo(current + 1), [current, goTo])
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName
      const isEditable = ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON', 'A'].includes(tag) || !!(e.target as HTMLElement).closest('button, a') || (e.target as HTMLElement).isContentEditable
      if (isEditable) return
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goNext() }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev() }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev])

  const CurrentSlide = SLIDES[current].component

  return (
    <div className="relative w-full h-full flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Background */}
      <BackgroundEffects />

      {/* Top bar: slide label + day/night toggle */}
      <div className="relative z-10 flex items-center justify-between px-6 pt-4 pb-0 flex-shrink-0 presentation-topbar">
        <motion.div className="chapter-menu" key={current} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <span
            className="text-xs font-mono font-medium px-3 py-1 rounded-full"
            style={{
              background: 'var(--label-bg)',
              border: '1px solid var(--label-border)',
              color: 'var(--label-text)',
            }}
          >
            {SLIDES[current].topic}
          </span>
          <select aria-label="Jump to slide" value={current} onChange={e => goTo(Number(e.target.value))}>
            {SLIDES.map((slide, i) => <option key={slide.id} value={i}>{String(i + 1).padStart(2, '0')} · {slide.label}</option>)}
          </select>
        </motion.div>

        {/* Day / Night toggle */}
        <motion.button
          id="theme-toggle-btn"
          className="theme-toggle"
          onClick={toggleTheme}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title={isDark ? 'Switch to Day mode' : 'Switch to Night mode'}
          aria-label={isDark ? 'Switch to Day mode' : 'Switch to Night mode'}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isDark ? 'moon' : 'sun'}
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.25 }}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              {isDark
                ? <Sun size={14} style={{ color: '#f59e0b' }} />
                : <Moon size={14} style={{ color: '#6366f1' }} />
              }
            </motion.div>
          </AnimatePresence>
          <span>{isDark ? 'Day' : 'Night'}</span>
        </motion.button>
      </div>

      {/* Main slide area */}
      <div className="relative flex-1 overflow-hidden z-10 min-h-0 presentation-body">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial={reducedMotion ? false : 'enter'}
            animate="center"
            exit="exit"
            transition={{ duration: reducedMotion ? 0 : 0.45, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <CurrentSlide />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="relative z-20 flex-shrink-0" hidden={SLIDES.length < 2}>
        <SlideNavigation
          current={current}
          total={SLIDES.length}
          onPrev={goPrev}
          onNext={goNext}
        />
      </div>
    </div>
  )
}


