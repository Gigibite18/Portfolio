import styles from './Polaroid.module.css'

/** Polaroid — photo with a dashed coloured frame + hand-written caption. */
export default function Polaroid({ src, alt, caption, frame = 'pink', rotate = 0, size = 'm', crop, className = '', style }) {
  return (
    <figure className={`${styles.polaroid} ${styles[size]} ${className}`} style={{ '--r': `${rotate}deg`, ...style }}>
      <div className={styles.photo} data-frame={frame}>
        <img src={src} alt={alt} loading="lazy" style={crop} />
      </div>
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  )
}
