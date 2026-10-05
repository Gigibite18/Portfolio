import dearDiary from './dear-diary'
import stillMe from './still-me'
import orbia from './orbia'
import { CASE_ORDER } from '../projects'

// one data file per case; overlay renders whatever is registered here
export const CASES = {
  'dear-diary': dearDiary,
  'still-me': stillMe,
  orbia,
}

export function getCase(slug) {
  return CASES[slug] ?? null
}

/** Next registered case in the home order (wraps around). */
export function getNextSlug(slug) {
  const order = CASE_ORDER.filter((s) => CASES[s])
  const i = order.indexOf(slug)
  return order[(i + 1) % order.length]
}
