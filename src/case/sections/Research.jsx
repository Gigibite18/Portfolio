import Section from './Section'
import SectionHeader from '../SectionHeader'
import MediaSlot from '../../components/MediaSlot'
import styles from './Research.module.css'

/** Research: empathy map around the character + pinned notes. */
export default function Research({ data }) {
  return (
    <Section id={data.id} className={styles.research} labelledBy={`${data.id}-title`}>
      <SectionHeader eyebrow={data.eyebrow} n={data.n} title={data.title} titleId={`${data.id}-title`} />
      <div className={styles.grid}>
        <div className={styles.map}>
          <span className={styles.axisX} aria-hidden="true" />
          <span className={styles.axisY} aria-hidden="true" />
          <ul className={styles.quadrants}>
            {data.quadrants.map((q) => (
              <li key={q.label} className={styles.quadrant}>
                <span className={styles.pill} data-tone={q.tone}>
                  {q.label}
                </span>
                <p className={styles.hand} data-soft={data.handSoft || undefined}>
                  {q.text.map((l, i) => (
                    <span key={i}>{l}</span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
          {data.center && (
            <span className={styles.center}>
              {data.center.src ? (
                <img src={data.center.src} alt={data.center.alt} width="152" height="152" loading="lazy" />
              ) : (
                <MediaSlot label={data.center.placeholder} round className={styles.centerSlot} />
              )}
            </span>
          )}
        </div>

        <div className={styles.board}>
          <svg className={styles.links} viewBox="0 0 470 560" aria-hidden="true">
            <path d="M304 80C394 90 444 120 454 200" />
            <path d="M324 321C316 382 276 405 204 421" />
          </svg>
          {data.notes.map((n, i) => (
            <figure
              key={n.tag}
              className={styles.note}
              data-tone={n.tone}
              style={{ '--r': `${n.rotate}deg` }}
              data-i={i}
            >
              <span className={styles.pin} aria-hidden="true" />
              <figcaption className={styles.noteTag}>{n.tag}</figcaption>
              <p className={styles.noteText}>
                {n.text.map((l, i) => (
                  <span key={i}>{l}</span>
                ))}
              </p>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  )
}
