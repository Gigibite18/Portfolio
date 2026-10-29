import Section from './Section'
import SectionHeader from '../SectionHeader'
import HandSlot from '../../components/HandSlot'
import TwoTone from '../TwoTone'
import styles from './Results.module.css'

const BARS = 68

/** Results: big statements with barcode rules, a quote and a flower stat.
 *  Only facts that exist — never invented numbers. */
export default function Results({ data }) {
  if (data.winner) return <WinnerResults data={data} />
  return (
    <Section id={data.id} className={styles.results} labelledBy={`${data.id}-title`}>
      <SectionHeader eyebrow={data.eyebrow} n={data.n} title={data.title} titleId={`${data.id}-title`} />
      <div className={styles.grid}>
        <div className={styles.rows}>
          {data.rows.map((r) => (
            <div key={r.label} className={styles.row}>
              <p className={styles.rowLabel}>{r.label}</p>
              <p className={styles.rowLine}>
                <span className={styles.big}>{r.big}</span>
                <span className={styles.small}>{r.small}</span>
              </p>
              <span className={styles.barcode} data-tone={r.tone} aria-hidden="true">
                {Array.from({ length: BARS }, (_, i) => (
                  <i key={i} style={{ '--i': i }} />
                ))}
              </span>
            </div>
          ))}
        </div>
        <div className={styles.side}>
          {data.quote && (
            <figure className={styles.quote}>
              <blockquote>
                <TwoTone parts={Array.isArray(data.quote.text) ? data.quote.text : [data.quote.text]} />
              </blockquote>
              <figcaption>
                {data.quote.avatar ? (
                  <img src={data.quote.avatar} alt="" width="40" height="40" />
                ) : (
                  <HandSlot label={data.quote.avatarSlot ?? 'photo'} shape="pill" className={styles.avatarSlot} />
                )}
                <span>
                  <span className={styles.who}>{data.quote.who}</span>
                  <span className={styles.where}>{data.quote.where}</span>
                </span>
              </figcaption>
            </figure>
          )}
          {data.flower && (
            <div className={styles.flower} data-tone={data.flower.tone ?? 'c4'}>
              <svg viewBox="0 0 220 220" aria-hidden="true">
                {Array.from({ length: 8 }, (_, i) => {
                  const a = (i / 8) * Math.PI * 2
                  return <circle key={i} cx={110 + Math.cos(a) * 58} cy={110 + Math.sin(a) * 58} r="52" />
                })}
                <circle cx="110" cy="110" r="70" />
              </svg>
              <p className={styles.flowerN}>{data.flower.n}</p>
              <p className={styles.flowerLabel}>{data.flower.label}</p>
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}

/** Results as a win (Still me, Figma 289:1240): big "Winner", the photo in a
 *  tilted iPad, and the quote in the game's own type. */
function WinnerResults({ data }) {
  const { winner, photo, quote } = data
  return (
    <Section id={data.id} className={styles.results} labelledBy={`${data.id}-title`}>
      <SectionHeader eyebrow={data.eyebrow} n={data.n} />
      <h2 id={`${data.id}-title`} className={styles.winner}>
        <span className={styles.winnerBig}>{winner.big}</span>
        <span className={styles.winnerSmall}>{winner.small}</span>
      </h2>
      <div className={styles.winnerGrid}>
        <div className={styles.winnerDevice}>
          <span className={styles.winnerScreen}>
            <img src={photo.src} alt={photo.alt} style={photo.crop} loading="lazy" />
          </span>
        </div>
        <blockquote className={styles.winnerQuote}>{quote.text}</blockquote>
      </div>
    </Section>
  )
}
