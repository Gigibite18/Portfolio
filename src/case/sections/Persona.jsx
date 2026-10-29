import Section from './Section'
import SectionHeader from '../SectionHeader'
import MediaSlot from '../../components/MediaSlot'
import styles from './Persona.module.css'

const CX = 220
const CY = 200
const R = 150
// label anchors on the 440×420 Figma radar
const LABEL_POS = [
  [200.5, 7.5],
  [366.5, 134],
  [301.5, 338.5],
  [85, 338.5],
  [16, 134],
]

const vertex = (i, k, r = R) => {
  const a = (-90 + i * (360 / k)) * (Math.PI / 180)
  return [CX + Math.cos(a) * r, CY + Math.sin(a) * r]
}
const ring = (k, f) => Array.from({ length: k }, (_, i) => vertex(i, k, R * f).join(',')).join(' ')

function Radar({ values, label }) {
  const k = values.length
  const shape = values.map(([, v], i) => vertex(i, k, R * v).join(',')).join(' ')
  return (
    <figure className={styles.radar}>
      <figcaption className={styles.radarLabel}>{label}</figcaption>
      <div className={styles.radarBox}>
        <svg
          viewBox="0 0 440 420"
          role="img"
          aria-label={values.map(([n, v]) => `${n} ${Math.round(v * 100)}%`).join(', ')}
        >
          {[1, 0.75, 0.5, 0.25].map((f) => (
            <polygon key={f} className={styles.ring} points={ring(k, f)} />
          ))}
          {values.map((_, i) => {
            const [x, y] = vertex(i, k)
            return <line key={i} className={styles.axis} x1={CX} y1={CY} x2={x} y2={y} />
          })}
          <polygon className={styles.shape} points={shape} />
        </svg>
        {values.map(([name], i) => (
          <span
            key={name}
            className={styles.axisLabel}
            style={{ left: `${(LABEL_POS[i]?.[0] / 440) * 100}%`, top: `${(LABEL_POS[i]?.[1] / 420) * 100}%` }}
            aria-hidden="true"
          >
            {name}
          </span>
        ))}
      </div>
    </figure>
  )
}

/** Persona: character sheet with callouts + personality radar. */
export default function Persona({ data }) {
  const [c1, c2, c3, c4] = data.callouts
  const sp = data.stickerPos ?? { x: 431.7, y: 295.9 }
  return (
    <Section id={data.id} className={styles.persona} labelledBy={`${data.id}-title`}>
      <SectionHeader eyebrow={data.eyebrow} n={data.n} title={data.title} titleId={`${data.id}-title`} />
      <div className={styles.grid}>
        <figure className={styles.sheet} data-tone={data.sheetTone}>
          <svg className={styles.callouts} viewBox="0 0 600 540" aria-hidden="true">
            <path d="M192.75 68.75H232.75L262.75 128.75" />
            <path d="M422.75 78.75H398.75L372.75 126.75" />
            <path d="M166.75 438.75H200.75L236.75 350.75" />
            <path d="M394.75 448.75H372.75L356.75 358.75" />
            {[
              [262, 128],
              [372, 126],
              [236, 350],
              [356, 358],
            ].map(([x, y]) => (
              <circle key={`${x}${y}`} cx={x} cy={y} r="4" />
            ))}
          </svg>
          <span className={styles.halo} aria-hidden="true" />
          {data.art.src ? (
            <span className={styles.art} role="img" aria-label={data.art.alt} style={data.art.box}>
              <img src={data.art.src} alt="" style={data.art.crop} loading="lazy" />
            </span>
          ) : (
            <MediaSlot label={data.art.placeholder} round className={styles.artSlot} />
          )}
          <span
            className={styles.sticker}
            style={{ left: `${(sp.x / 600) * 100}%`, top: `${(sp.y / 540) * 100}%` }}
            aria-hidden="true"
          >
            {data.sticker}
          </span>
          <figcaption className="visually-hidden">{data.callouts.join(', ')}</figcaption>
          <span className={styles.callout} style={{ left: '6.7%', top: '11.1%' }} aria-hidden="true">
            {c1}
          </span>
          <span className={styles.callout} style={{ left: '71.7%', top: '13%' }} aria-hidden="true">
            {c2}
          </span>
          <span className={styles.callout} style={{ left: '6.7%', top: '79.6%' }} aria-hidden="true">
            {c3}
          </span>
          <span className={styles.callout} style={{ left: '66.7%', top: '81.5%' }} aria-hidden="true">
            {c4}
          </span>
        </figure>

        <div className={styles.side}>
          <Radar values={data.radar} label={data.radarLabel} />
          <div className={styles.why}>
            <p className={styles.whyLabel}>{data.why.label}</p>
            <p className={styles.whyText}>{data.why.text}</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
