import styles from './CaseHero.module.css'

// px on the 1168px Figma band → container units
const u = (px) => `${(px / 11.68).toFixed(3)}cqw`

/** Cover: giant word + scribbles + meta row over a gradient glow. */
export default function CaseHero({ data }) {
  return (
    <section className={styles.hero} aria-label="Cover">
      <div className={styles.band}>
        <span className={styles.glow} data-tone="c1" style={{ left: u(-140), top: u(-160), width: u(560) }} />
        <span className={styles.glow} data-tone="c5" style={{ left: u(760), top: u(-140), width: u(440) }} />
        <span className={styles.glow} data-tone="c4" style={{ left: u(260), top: u(420), width: u(520) }} />
        <span className={styles.glow} data-tone="c2" style={{ left: u(820), top: u(380), width: u(460) }} />

        <dl className={styles.meta}>
          {data.meta.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>

        <h1 className={styles.word} style={{ left: u(34.5), top: u(110) }}>
          {data.word}
        </h1>

        <svg className={styles.curl} style={{ left: u(41), top: u(352), width: u(94) }} viewBox="0 0 94 34" aria-hidden="true">
          <path d="M2 27C22-3 42-3 42 17C42 37 22 37 32 17C42-3 72-3 92 17" />
        </svg>
        <svg className={styles.rays} style={{ left: u(1098), top: u(112), width: u(56) }} viewBox="0 0 56 48" aria-hidden="true">
          <path d="M2 22L16 2M24 28L42 14M32 46L54 42" />
        </svg>

        <div className={styles.device} style={{ left: u(312.5), top: u(322), width: u(520), height: u(380) }}>
          <img src={data.screen.src} alt={data.screen.alt} style={{ inset: u(16) }} />
        </div>

        <span className={styles.sticker} style={{ left: u(910), top: u(320) }}>
          {data.sticker}
        </span>
        <p className={styles.note} style={{ left: u(204), top: u(475) }}>
          {data.note.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </p>

        <ul className={styles.pills}>
          {data.pills.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p className={styles.scroll} aria-hidden="true">
          SCROLL ↓
        </p>
      </div>
    </section>
  )
}
