import styles from './MediaSlot.module.css'

/** Media Placeholder (Figma 127:82) — dashed box for a real screen,
 *  video or photo that doesn't exist yet. The label says what goes here. */
export default function MediaSlot({ label, round = false, className = '', style }) {
  return (
    <span
      className={`${styles.slot} ${className}`}
      data-round={round || undefined}
      style={style}
      role="img"
      aria-label={`Placeholder — ${label}`}
    >
      <span className={styles.glyph} aria-hidden="true">
        ▢
      </span>
      <span className={styles.label}>{label}</span>
    </span>
  )
}
