import { forwardRef } from 'react'
import { useDraggable } from '../hooks/useDraggable'
import styles from './Sticker.module.css'

// intrinsic sizes of the exported SVGs (Figma: Sticker/*)
export const STICKERS = {
  star: { src: '/art/sticker-star.svg', w: 62, h: 60, alt: 'yellow star sticker' },
  heart: { src: '/art/sticker-heart.svg', w: 68, h: 62, alt: 'coral heart sticker' },
  sparkle: { src: '/art/sticker-sparkle.svg', w: 62, h: 62, alt: 'blue sparkle sticker' },
  flower: { src: '/art/sticker-flower.svg', w: 60, h: 61, alt: 'pink flower sticker' },
}

/** Static sticker art with a wiggle on hover. */
export const Sticker = forwardRef(function Sticker(
  { name, rotate = 0, scale = 1, className = '', style, decorative = true },
  ref,
) {
  const s = STICKERS[name]
  return (
    <span ref={ref} className={`${styles.sticker} ${className}`} style={{ '--r': `${rotate}deg`, ...style }}>
      <img
        src={s.src}
        alt={decorative ? '' : s.alt}
        width={Math.round(s.w * scale)}
        height={Math.round(s.h * scale)}
        draggable="false"
      />
    </span>
  )
})

/** Sticker you can grab with the mouse/finger or move with arrow keys. */
export function DraggableSticker({ name, rotate = 0, scale = 1, bounds, className = '', style, offset: forced }) {
  const { offset, dragging, handlers } = useDraggable({ bounds })
  const o = forced ?? offset
  const s = STICKERS[name]
  return (
    <button
      type="button"
      className={`${styles.sticker} ${styles.draggable} ${className}`}
      data-dragging={dragging || undefined}
      style={{ '--r': `${rotate}deg`, '--x': `${o.x}px`, '--y': `${o.y}px`, ...style }}
      aria-label={`${s.alt} — drag me, or use the arrow keys`}
      {...handlers}
    >
      <img src={s.src} alt="" width={Math.round(s.w * scale)} height={Math.round(s.h * scale)} draggable="false" />
    </button>
  )
}
