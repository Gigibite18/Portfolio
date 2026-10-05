import Section from './Section'
import SectionHeader from '../SectionHeader'
import styles from './Process.module.css'

/** Process: numbered steps along a dotted wave. */
export default function Process({ data }) {
  return (
    <Section id={data.id} className={styles.process} labelledBy={`${data.id}-title`}>
      <SectionHeader eyebrow={data.eyebrow} n={data.n} title={data.title} titleId={`${data.id}-title`} />
      <div className={styles.track}>
        <svg className={styles.wave} viewBox="0 0 930 202" preserveAspectRatio="none" aria-hidden="true">
          <path d="M1 1C117 1 117 201 233 201C349 201 349 1 465 1C581 1 581 201 697 201C813 201 813 1 929 1" />
        </svg>
        <ol className={styles.steps}>
          {data.steps.map((s, i) => (
            <li key={s.title} className={styles.step} data-down={i % 2 === 1 || undefined}>
              <span className={styles.num} aria-hidden="true">
                {i + 1}
              </span>
              <h3 className={styles.stepTitle}>
                <span className="visually-hidden">Step {i + 1}: </span>
                {s.title}
              </h3>
              <ul className={styles.pills}>
                {s.pills.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
