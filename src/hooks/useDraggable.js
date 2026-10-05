import { useCallback, useRef, useState } from 'react'

const KEY_STEP = 12

/**
 * Pointer + keyboard dragging for stickers.
 * Returns an offset {x, y} and the handlers to spread on the element.
 * The element stays in normal layout; we only translate it.
 */
export function useDraggable({ bounds, onDragStart, onDragEnd } = {}) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const start = useRef(null)

  const clamp = useCallback(
    (next) => {
      const box = bounds?.current
      if (!box || !start.current?.rect) return next
      const b = box.getBoundingClientRect()
      const r = start.current.rect
      const minX = b.left - r.left + start.current.ox
      const maxX = b.right - r.right + start.current.ox
      const minY = b.top - r.top + start.current.oy
      const maxY = b.bottom - r.bottom + start.current.oy
      return {
        x: Math.min(maxX, Math.max(minX, next.x)),
        y: Math.min(maxY, Math.max(minY, next.y)),
      }
    },
    [bounds],
  )

  const onPointerDown = (e) => {
    if (e.button !== 0) return
    e.currentTarget.setPointerCapture(e.pointerId)
    start.current = {
      px: e.clientX,
      py: e.clientY,
      ox: offset.x,
      oy: offset.y,
      rect: e.currentTarget.getBoundingClientRect(),
    }
    setDragging(true)
    onDragStart?.()
  }

  const onPointerMove = (e) => {
    if (!start.current) return
    const s = start.current
    setOffset(clamp({ x: s.ox + e.clientX - s.px, y: s.oy + e.clientY - s.py }))
  }

  const end = () => {
    if (!start.current) return
    start.current = null
    setDragging(false)
    onDragEnd?.()
  }

  const onKeyDown = (e) => {
    const d = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key]
    if (!d) return
    e.preventDefault()
    const step = e.shiftKey ? KEY_STEP * 4 : KEY_STEP
    start.current = {
      ox: offset.x,
      oy: offset.y,
      rect: e.currentTarget.getBoundingClientRect(),
    }
    setOffset(clamp({ x: offset.x + d[0] * step, y: offset.y + d[1] * step }))
    start.current = null
  }

  return {
    offset,
    setOffset,
    dragging,
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp: end,
      onPointerCancel: end,
      onKeyDown,
    },
  }
}
