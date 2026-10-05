import { Link, useLocation } from 'react-router-dom'
import FrameLabel from '../components/FrameLabel'
import ScribbleUnderline from '../components/ScribbleUnderline'
import AwardSeal from '../components/AwardSeal'
import styles from './Awards.module.css'

const AWARDS = [
  {
    meta: 'Winner · 2026',
    name: 'Swift Student Challenge',
    text: 'Still me, an app that shows how essential tremor works, told from my own story.',
    slug: 'still-me',
    tone: 'purple',
  },
  {
    meta: 'Winner / Diversity · 2026',
    name: 'Campus Mobile',
    text: 'Lumina, an iOS app about the safety of autistic children. I designed it with Isadora Guerra and Rodrigo Sandler on iOS.',
    slug: 'lumina',
    tone: 'blue',
  },
]

export default function Awards() {
  const location = useLocation()
  return (
    <section className={styles.awards} aria-labelledby="awards-title">
      <div className={styles.board}>
        <div className={styles.titleBlock}>
          <FrameLabel name="03 / awards" />
          <h2 id="awards-title" className={styles.title}>
            Some shiny things
          </h2>
          <ScribbleUnderline width={220} height={20} />
          <p className={styles.note}>a few moments I’m really proud of ✨</p>
        </div>

        <ul className={styles.cards}>
          {AWARDS.map((a) => (
            <li key={a.name} className={styles.card} data-tone={a.tone} data-seal-host>
              <p className={styles.meta}>{a.meta}</p>
              <h3 className={styles.name}>{a.name}</h3>
              <p className={styles.text}>{a.text}</p>
              <Link to={`/work/${a.slug}`} state={{ background: location }} className={styles.link}>
                See project ↗<span className="visually-hidden">: {a.name}</span>
              </Link>
              {a.tone === 'blue' && <AwardSeal glyph="✦" rotate={-6} className={styles.sealRight} />}
            </li>
          ))}
        </ul>
        <AwardSeal glyph="★" rotate={8} className={styles.sealLeft} />
      </div>
    </section>
  )
}
