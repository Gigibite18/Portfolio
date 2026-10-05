import Section from './Section'
import SectionHeader from '../SectionHeader'
import styles from './Features.module.css'

// px on the left 620×440 part of the Figma band → %
const px = (x, y) => ({ left: `${(x / 620) * 100}%`, top: `${(y / 440) * 100}%` })

/** Features: exploded UI (device + floating tags) and built-in tiles. */
export default function Features({ data }) {
  const h = data.hero
  return (
    <Section id={data.id} className={styles.features} labelledBy={`${data.id}-title`}>
      <SectionHeader eyebrow={data.eyebrow} n={data.n} />
      <div className={styles.band}>
        <div className={styles.visual}>
          <div className={styles.device}>
            <img src={h.screen.src} alt={h.screen.alt} loading="lazy" />
          </div>
          <ul className={styles.tags} aria-label="Topics">
            {h.tags.map((t, i) => (
              <li key={t.label} className={styles.tag} data-tone={t.tone} style={{ ...px(t.x, t.y), '--r': `${t.r}deg`, '--i': i }}>
                {t.label}
                <span className={styles.x} aria-hidden="true">
                  ×
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.copy}>
          <p className={styles.label}>{h.label}</p>
          <h2 id={`${data.id}-title`} className={styles.title}>
            {h.title}
          </h2>
          <p className={styles.body}>{h.body}</p>
        </div>
      </div>

      {data.builtIn?.length > 0 && (
        <>
          <h3 className={styles.builtInLabel}>{data.builtInLabel}</h3>
          <ul className={styles.tiles}>
            {data.builtIn.map((b) => (
              <li key={b.title.join(' ')} className={styles.tile} data-tone={b.tone}>
                <p className={styles.tileTitle}>
                  {b.title.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </p>
                <p className={styles.tileBody}>{b.body}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </Section>
  )
}
