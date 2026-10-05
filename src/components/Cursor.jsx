import styles from './Cursor.module.css'

const ARROWS = {
  purple: '/art/cursor-arrow-purple.svg',
  blue: '/art/cursor-arrow-blue.svg',
  pink: '/art/cursor-arrow-pink.svg',
}

/** Multiplayer cursor (Figma: Cursor). Decorative — hidden from AT. */
export default function Cursor({ label, color = 'purple', className = '', style, float = false }) {
  return (
    <span
      className={`${styles.cursor} ${float ? styles.float : ''} ${className}`}
      style={style}
      data-color={color}
      aria-hidden="true"
    >
      <img className={styles.arrow} src={ARROWS[color]} alt="" width="27" height="28" />
      <span className={styles.label}>{label}</span>
    </span>
  )
}
