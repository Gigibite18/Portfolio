import styles from './AwardSeal.module.css'

/** Sticker/Award Seal — ribbons + seal art with a glyph on top.
 *  Hover: spins 12° + subtle shine sweep. */
export default function AwardSeal({ glyph = '★', rotate = 0, className = '', style }) {
  return (
    <span className={`${styles.seal} ${className}`} style={{ '--r': `${rotate}deg`, ...style }} aria-hidden="true">
      <img className={styles.ribbons} src="/art/award-ribbons.svg" alt="" width="96" height="108" />
      <img className={styles.disc} src="/art/award-seal.svg" alt="" width="96" height="96" />
      <span className={styles.glyph}>{glyph}</span>
      <span className={styles.shine} />
    </span>
  )
}
