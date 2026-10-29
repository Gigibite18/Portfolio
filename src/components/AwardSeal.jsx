import styles from './AwardSeal.module.css'

/** Sticker/Award Seal — gigi's crayon seal (ribbons + star drawn in).
 *  Hover: spins 12° + subtle shine sweep. */
export default function AwardSeal({ rotate = 0, className = '', style }) {
  return (
    <span className={`${styles.seal} ${className}`} style={{ '--r': `${rotate}deg`, ...style }} aria-hidden="true">
      <img className={styles.art} src="/art/crayon/award-seal.webp" alt="" width="82" height="100" />
      <span className={styles.shine} />
    </span>
  )
}
