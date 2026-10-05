import { Link } from 'react-router-dom'
import styles from './Button.module.css'

/** Button (Figma: Button). Primary lifts 2px + purple shadow on hover;
 *  Secondary fills ink. Renders <Link>, <a> or <button> as needed. */
export default function Button({ children, variant = 'primary', to, href, className = '', ...rest }) {
  const cls = `${styles.button} ${styles[variant]} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>
  return <button type="button" className={cls} {...rest}>{children}</button>
}
