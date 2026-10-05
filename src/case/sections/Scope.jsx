import Section from './Section'
import SectionHeader from '../SectionHeader'
import styles from './Scope.module.css'

const W = 1088 // Figma gantt width

/** Scope: a Gantt of the project phases. */
export default function Scope({ data }) {
  return (
    <Section id={data.id} className={styles.scope} labelledBy={`${data.id}-title`}>
      <SectionHeader eyebrow={data.eyebrow} n={data.n} title={data.title} titleId={`${data.id}-title`} />
      <div className={styles.gantt}>
        <div className={styles.columns} aria-hidden="true">
          {data.columns.map((c) => (
            <span key={c.label} style={{ left: `${(c.x / W) * 100}%` }}>
              {c.label}
            </span>
          ))}
          {data.dividers.map((x) => (
            <i key={x} className={styles.divider} style={{ left: `${(x / W) * 100}%` }} />
          ))}
        </div>
        <ol className={styles.bars}>
          {data.bars.map((b, i) => (
            <li
              key={b.label}
              className={styles.bar}
              style={{
                '--x': `${(b.x / W) * 100}%`,
                '--w': `${(b.w / W) * 100}%`,
                '--i': i,
              }}
            >
              <span className={styles.barLabel}>{b.label}</span>
              <span className={styles.barTag} data-tone={b.tone}>
                {b.tag}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
