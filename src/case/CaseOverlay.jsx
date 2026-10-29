import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getCase, getNextSlug } from '../data/cases'
import CaseHero from './sections/CaseHero'
import SectionNav from './SectionNav'
import About from './sections/About'
import Scope from './sections/Scope'
import Problem from './sections/Problem'
import Research from './sections/Research'
import Persona from './sections/Persona'
import Process from './sections/Process'
import KeyScreen from './sections/KeyScreen'
import Features from './sections/Features'
import Identity from './sections/Identity'
import Results from './sections/Results'
import Thanks from './sections/Thanks'
import styles from './CaseOverlay.module.css'

const SECTIONS = {
  about: About,
  scope: Scope,
  problem: Problem,
  research: Research,
  persona: Persona,
  process: Process,
  keyscreen: KeyScreen,
  features: Features,
  identity: Identity,
  results: Results,
  thanks: Thanks,
}

const FOCUSABLE = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

/**
 * Behance-style case overlay. Opens on top of the home at /work/:slug,
 * closes with ✕, backdrop click, "← Back to work" and Esc.
 */
export default function CaseOverlay({ slug }) {
  const data = getCase(slug)
  const navigate = useNavigate()
  const location = useLocation()
  const rootRef = useRef(null)
  const scrollerRef = useRef(null)
  const closeRef = useRef(null)
  const openerRef = useRef(null)
  const [closing, setClosing] = useState(false)

  const background = location.state?.background

  const close = useCallback(() => {
    setClosing(true)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.setTimeout(
      () => {
        if (background) navigate(-1)
        else navigate('/', { replace: true })
      },
      reduce ? 0 : 180,
    )
  }, [background, navigate])

  const next = getNextSlug(slug)
  const goNext = () => navigate(`/work/${next}`, { replace: true, state: { background } })
  const toTop = () => scrollerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })

  // remember who opened us, lock page scroll, focus the close button
  useLayoutEffect(() => {
    openerRef.current = document.activeElement
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
      const opener = openerRef.current
      // wait for the home to leave `inert` before giving focus back
      window.setTimeout(() => {
        if (opener instanceof HTMLElement && opener.isConnected) opener.focus({ preventScroll: true })
      }, 0)
    }
  }, [])

  // new case → back to the top, focus close
  useEffect(() => {
    scrollerRef.current?.scrollTo({ top: 0 })
    closeRef.current?.focus({ preventScroll: true })
    setClosing(false)
  }, [slug])

  // Esc + focus trap
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        close()
      } else if (e.key === 'Tab') {
        const nodes = [...rootRef.current.querySelectorAll(FOCUSABLE)].filter((n) => n.offsetParent !== null)
        if (!nodes.length) return
        const first = nodes[0]
        const last = nodes[nodes.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [close])

  if (!data) {
    return (
      <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Case not available yet" ref={rootRef}>
        <div className={styles.missing}>
          <p>This case study isn’t available yet.</p>
          <p className={styles.missingNote}>I’m still putting it together, come back soon ✦</p>
          <button type="button" onClick={close} ref={closeRef} className={styles.pillBtn}>
            ← Back to work
          </button>
        </div>
      </div>
    )
  }

  const navItems = data.sections.filter((s) => s.nav)

  return (
    <div
      ref={rootRef}
      className={styles.overlay}
      data-case={slug}
      data-closing={closing || undefined}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-title"
    >
      <div
        className={styles.scroller}
        ref={scrollerRef}
        onClick={(e) => {
          if (e.target === e.currentTarget) close()
        }}
      >
        <header className={styles.header}>
          <img className={styles.avatar} src="/art/gigi-tag.jpg" alt="" width="40" height="40" />
          <div className={styles.titles}>
            <p id="case-title" className={styles.caseTitle}>
              {data.header.title}
            </p>
            <p className={styles.byline}>{data.header.subtitle}</p>
          </div>
        </header>

        <article className={styles.sheet} key={slug}>
          <CaseHero data={data.hero} />
          {navItems.length > 0 && <SectionNav items={navItems} scrollerRef={scrollerRef} />}
          {data.sections.map((s) => {
            const Section = SECTIONS[s.type]
            if (!Section) return null
            return <Section key={s.id} data={s} onBack={close} onNext={goNext} />
          })}
        </article>
      </div>

      <button type="button" className={styles.close} onClick={close} ref={closeRef} aria-label="Close case study">
        <span aria-hidden="true">✕</span>
      </button>

      <nav className={styles.rail} aria-label="Case actions">
        <RailAction
          icon="↗"
          label="Prototype"
          href={data.prototype}
          title={data.prototype ? undefined : 'Prototype link coming soon'}
        />
        <RailAction icon="→" label="Next case" onClick={goNext} />
        <RailAction icon="↑" label="Top" onClick={toTop} small />
      </nav>
    </div>
  )
}

function RailAction({ icon, label, onClick, href, title, small }) {
  const inner = (
    <>
      <span className={styles.railCircle} aria-hidden="true">
        {icon}
      </span>
      <span className={styles.railLabel}>{label}</span>
    </>
  )
  if (href) {
    return (
      <a className={styles.railAction} href={href} target="_blank" rel="noreferrer" data-small={small || undefined}>
        {inner}
      </a>
    )
  }
  const disabled = !onClick
  return (
    <button
      type="button"
      className={styles.railAction}
      onClick={onClick}
      aria-disabled={disabled || undefined}
      title={title}
      data-small={small || undefined}
    >
      {inner}
    </button>
  )
}
