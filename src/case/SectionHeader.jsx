import TwoTone from './TwoTone'
import styles from './SectionHeader.module.css'

export function Spark({ className = '' }) {
  return (
    <svg className={`${styles.spark} ${className}`} width="13" height="13" viewBox="0 0 13 13" aria-hidden="true">
      <path d="M6.5 0L7.62 3.8L11.1 1.9L9.2 5.38L13 6.5L9.2 7.62L11.1 11.1L7.62 9.2L6.5 13L5.38 9.2L1.9 11.1L3.8 7.62L0 6.5L3.8 5.38L1.9 1.9L5.38 3.8L6.5 0Z" />
    </svg>
  )
}

/** Case section header: mono eyebrow with spark + "NN —— 10" counter,
 *  then an optional two-tone title. `onDark` flips the colours. */
export default function SectionHeader({
  eyebrow,
  n,
  total = 10,
  title,
  titleId,
  onDark = false,
  as: H = 'h2',
  className = '',
}) {
  return (
    <div className={`${styles.header} ${className}`} data-on-dark={onDark || undefined}>
      <div className={styles.eyebrowRow}>
        <p className={styles.eyebrow}>
          <Spark />
          {eyebrow}
        </p>
        {n != null && (
          <p className={styles.counter} aria-label={`Section ${n} of ${total}`}>
            {String(n).padStart(2, '0')}&nbsp;&nbsp;——&nbsp;&nbsp;{total}
          </p>
        )}
      </div>
      {title && (
        <H id={titleId} className={styles.title}>
          {Array.isArray(title[0]) && Array.isArray(title[0][0]) ? (
            title.map((line, i) => (
              <span key={i} className={styles.line}>
                <TwoTone parts={line} />
              </span>
            ))
          ) : (
            <TwoTone parts={title} />
          )}
        </H>
      )}
    </div>
  )
}
