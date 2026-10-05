import styles from './HandSlot.module.css'

/** Hand-made Slot — dashed placeholder for an illustration/photo that
 *  doesn't exist yet. The label says what goes here. */
export default function HandSlot({ label, shape = 'square', color = 'purple', pencil = true, rotate = 0, className = '', style }) {
  return (
    <figure
      className={`${styles.slot} ${styles[shape]} ${className}`}
      data-color={color}
      style={{ '--r': `${rotate}deg`, ...style }}
      aria-label={`Placeholder: ${label}`}
    >
      {pencil && shape !== 'pill' && (
        <span className={styles.pencil} aria-hidden="true">
          ✏️
        </span>
      )}
      <figcaption className={styles.label}>{label}</figcaption>
    </figure>
  )
}
