import { useState } from 'react'
import styles from './SkillsTicker.module.css'

// exact order of the Figma ticker (one full cycle)
const SKILLS = [
  'UX Research',
  'UI Design',
  'Prototyping',
  'Design Systems',
  'Usability Testing',
  'Illustration',
  'Storytelling',
  'UX Research',
  'UI Design',
  'Prototyping',
  'Design Systems',
  'Usability Testing',
  'Illustration',
  'Branding',
]

function Row({ hidden }) {
  return (
    <ul className={styles.row} aria-hidden={hidden || undefined}>
      {SKILLS.map((s, i) => (
        <li key={i} className={styles.item}>
          <span>{s}</span>
          <span className={styles.spark} aria-hidden="true">
            ✦
          </span>
        </li>
      ))}
    </ul>
  )
}

/** Skills ticker — infinite auto-scroll. Pauses on hover/focus,
 *  with the pause button, and stops under reduced motion. */
export default function SkillsTicker() {
  const [paused, setPaused] = useState(false)
  return (
    <section className={styles.ticker} aria-label="Skills" data-paused={paused || undefined}>
      <div className={styles.track}>
        <Row />
        <Row hidden />
      </div>
      <button
        type="button"
        className={styles.pause}
        aria-pressed={paused}
        aria-label={paused ? 'Play skills ticker' : 'Pause skills ticker'}
        onClick={() => setPaused((p) => !p)}
      >
        {paused ? '▶' : '❚❚'}
      </button>
    </section>
  )
}
