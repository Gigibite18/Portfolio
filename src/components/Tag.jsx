import styles from './Tag.module.css'

/**
 * Tag (Figma: Tag). Variants:
 *  - outline: white pill, hand-written label (default)
 *  - status:  green tint + dot ("Open to work")
 *  - draw:    pink tint (drawing tools in the Toolbox)
 *  - eyebrow: borderless, small hand label (featured card)
 */
export default function Tag({ children, variant = 'outline', tone, className = '' }) {
  return (
    <span className={`${styles.tag} ${styles[variant]} ${className}`} data-tone={tone}>
      {variant === 'status' && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </span>
  )
}
