import { useEffect, useRef, useState } from 'react'
import Toggle from '../components/Toggle'
import styles from './ProfileCard.module.css'

const DROPDOWNS = {
  Seniority: 'Mid-level',
  'Main focus': 'Problem solving',
  'Designing…': 'Open to work',
}

// order follows the Figma properties panel
const ROWS = [
  { type: 'select', label: 'Seniority' },
  { type: 'select', label: 'Main focus' },
  { type: 'toggle', label: 'User-centric' },
  { type: 'select', label: 'Designing…' },
  { type: 'toggle', label: 'Empathy' },
  { type: 'toggle', label: '↳ Pixel perfect *' },
  { type: 'toggle', label: 'Prototyping' },
  { type: 'toggle', label: 'Design system' },
]

/** Profile Card — a component's properties panel. Toggles really flip;
 *  the "core" ones spring back on. Illustration toggles the sticker mode. */
export default function ProfileCard({ illustration, onIllustration }) {
  const [on, setOn] = useState(() =>
    Object.fromEntries(ROWS.filter((r) => r.type === 'toggle').map((r) => [r.label, true])),
  )
  const [note, setNote] = useState(null)
  const timers = useRef([])

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  const flip = (label, next) => {
    setOn((s) => ({ ...s, [label]: next }))
    if (next) return
    setNote(label)
    timers.current.push(
      setTimeout(() => setOn((s) => ({ ...s, [label]: true })), 900),
      setTimeout(() => setNote((n) => (n === label ? null : n)), 1600),
    )
  }

  return (
    <section className={styles.card} aria-labelledby="profile-card-title">
      <div className={styles.header}>
        <h2 id="profile-card-title" className={styles.title}>
          Profile Card <span aria-hidden="true">▾</span>
        </h2>
        <span className={styles.icons} aria-hidden="true">
          ⤢ &nbsp; ◎ &nbsp; •••
        </span>
      </div>
      <p className={styles.component}>
        Product_Designer <span aria-hidden="true">&nbsp;◇</span>
      </p>
      <hr className={styles.divider} />

      <ul className={styles.props}>
        {ROWS.map((row, i) => {
          const id = `prop-${i}`
          return (
            <li key={row.label} className={styles.row}>
              <span id={id} className={styles.label}>
                {row.label}
              </span>
              {row.type === 'select' ? (
                <span className={styles.dropdown} aria-labelledby={id}>
                  <span>{DROPDOWNS[row.label]}</span>
                  <span className={styles.caret} aria-hidden="true">
                    ▾
                  </span>
                </span>
              ) : (
                <span className={styles.toggleWrap}>
                  {note === row.label && (
                    <span className={styles.note} role="status">
                      nope, always on
                    </span>
                  )}
                  <Toggle checked={on[row.label]} onChange={(v) => flip(row.label, v)} labelledBy={id} />
                </span>
              )}
            </li>
          )
        })}
        <li className={styles.row}>
          <span className={styles.label}>
            <span id="prop-illustration">Illustration</span>
            <span className={styles.tryMe} aria-hidden="true">
              ← try me!
            </span>
          </span>
          <Toggle checked={illustration} onChange={onIllustration} labelledBy="prop-illustration" />
        </li>
      </ul>
    </section>
  )
}
