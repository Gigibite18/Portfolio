import styles from './FrameLabel.module.css'

/** Figma-style frame name above a section/case. Turns blue ("selected")
 *  when its host ([data-frame-host]) is hovered or focused. */
export default function FrameLabel({ name, selected = false, as: Tag = 'p', className = '' }) {
  return (
    <Tag className={`${styles.label} ${className}`} data-frame-label data-selected={selected || undefined}>
      <span aria-hidden="true">•</span>
      <span>{name}</span>
    </Tag>
  )
}
